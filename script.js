const nav = document.getElementsByTagName("nav")[0];
const btnNav = document.getElementsByClassName("navbar-toggler");
const btnNav2 = document.getElementsByClassName("navbar-brand");
var isStyleApplied = false;
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    nav.classList.add("bot");
  } else if (window.scrollY <= 0) {
    nav.classList.remove("bot");
  }
});

for (let i = 0; i < btnNav.length; i++) {
  btnNav[i].addEventListener("click", function () {
    if (!isStyleApplied) {
      nav.style.backgroundColor = "white";
      nav.style.borderBottom = "1px solid #272727";
    } else {
      nav.style.backgroundColor = "";
      nav.style.borderBottom = "";
    }
    isStyleApplied = !isStyleApplied;
  });
}

const faqs = document.querySelectorAll(".faq-answer");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  });
});
