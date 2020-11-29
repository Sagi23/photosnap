const menuBtn = document.querySelector("#menu");
const ul = document.querySelector("#ul");

menuBtn.addEventListener("click", function () {
  if (menuBtn.src.match("assets/shared/mobile/menu.svg")) {
    ul.style.display = "grid";
    window.setTimeout(function () {
      ul.style.transform = "scale(1)";
    }, 0);
    menuBtn.src = "assets/shared/mobile/close.svg";
  } else {
    ul.style.transform = "scale(0)";
    menuBtn.src = "assets/shared/mobile/menu.svg";
    window.setTimeout(function () {
      ul.style.display = "none";
    }, 400);
  }
});

console.log(window.innerWidth);
