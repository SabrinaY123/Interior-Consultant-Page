const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

const firstBar = document.querySelector(".hamburger .bar:nth-child(1)");

const secondBar = document.querySelector(".hamburger .bar:nth-child(2)");

const thirdBar = document.querySelector(".hamburger .bar:nth-child(3");

const main = document.querySelector("main");

const footer = document.querySelector("footer");

hamburger.addEventListener("click", hamburgerClick);

function hamburgerClick() {
  navMenu.classList.toggle("visible");
  main.classList.toggle("not-visible");
  footer.classList.toggle("not-visible");
  firstBar.classList.toggle("first-bar-rotate");
  secondBar.classList.toggle("second-bar-disappear");
  thirdBar.classList.toggle("third-bar-rotate");
}
