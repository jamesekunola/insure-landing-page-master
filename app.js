const mobileMenuBtn = document.querySelector(".hambuger-btn");
const closeMobileMenuBtn = document.querySelector(".close-btn");
const mobileNavEl = document.querySelector(".mobile-links");

const showMobileNav = () => {
  mobileNavEl.classList.add("visible");
};

const hideMobileNav = () => {
  mobileNavEl.classList.remove("visible");
};

mobileMenuBtn.addEventListener("click", showMobileNav);
closeMobileMenuBtn.addEventListener("click", hideMobileNav);
