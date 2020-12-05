const menuBtn = document.querySelector("#menu");
const ul = document.querySelector("#ul");

menuBtn.addEventListener("click", function () {
  if (menuBtn.src.match("assets/shared/mobile/menu.svg")) {
    menuBtn.src = "assets/shared/mobile/close.svg";
    ul.classList.toggle("hide");
    window.setTimeout(function () {
      ul.style.transform = "scale(1)";
    }, 0);
  } else {
    menuBtn.src = "assets/shared/mobile/menu.svg";
    ul.style.transform = "scale(0)";
    window.setTimeout(function () {
      ul.classList.toggle("hide");
    }, 400);
  }
});

console.log(menuBtn);
