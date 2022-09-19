let $ = document;
const ulElem = $.querySelector(".slider");
const rightBtn = $.querySelector(".right");
const leftBtn = $.querySelector(".left");

const liWidth = getComputedStyle(ulElem.children[0]).width;
ulElem.style.width = liWidth;

function previousSlide() {
  const lastUlChild = $.querySelector(".slider > li:last-child");

  lastUlChild.style.animation = "slideAnim 0.3s";

  ulElem.prepend(lastUlChild);

  lastUlChild.nextElementSibling.style.animation = "";
}

function nextSlide() {
  const firstUlChild = $.querySelector(".slider > li:first-child");

  firstUlChild.style.animation = "";
  firstUlChild.nextElementSibling.style.animation = "slideAnim .3s";

  ulElem.append(firstUlChild);
}

leftBtn.addEventListener("click", previousSlide);
window.addEventListener("load", () => setInterval(nextSlide, 3000));
rightBtn.addEventListener("click", nextSlide);
