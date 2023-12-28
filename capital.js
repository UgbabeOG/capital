const $ = (x) => {
  const elements = document.querySelectorAll(x);
  return elements.length === 1 ? elements[0] : elements;
};

// hamburger
const hamburgerIcon = $("#burger");
sideMenu = $(".side-menu");
hamburgerFunc = () => {
  const body = $("body");
  const drpMenu = sideMenu.getAttribute("aria-expanded");

  sideMenu.setAttribute("aria-expanded", drpMenu === "false" ? true : false);
  body.style.overflow = drpMenu === "false" ? "hidden" : "visible";
};
hamburgerIcon.addEventListener("click", hamburgerFunc);

// faq container
let faqContainer = $(".faq-container");
faqContainer.forEach((faq) => {
  faq.addEventListener("click", function () {
    this.classList.toggle("open");
  });
});
