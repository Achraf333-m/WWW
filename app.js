let isDark = false;
const scaleFactor = 1/20

function moveBackground(event) {
  const shapes = document.querySelectorAll('.shape')
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;
  console.log(x, y)
  for (let i = 0; i < shapes.length; i++) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -0.5 : 0.5
    shapes[i].style.transform = `translate( ${x * boolInt}px, ${y * boolInt}px)`
  }
}

function darkMode(event) {
  event.preventDefault()
  isDark = !isDark
  if (isDark) {
    document.body.classList += " reverse";
  }
  else {
    document.body.classList.remove("reverse")
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_nbeylcx",
      "template_wfj84kv",
      event.target,
      "y_XhrmXYGGx_cmSld"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "oops! our emailing system might be down, please message us at achrafdaimallah2003@gmail.com"
      );
    });
}

function toggleModal() {
    document.body.classList.toggle("modal-visible")
    document.body.classList.toggle('no-scroll')
}
