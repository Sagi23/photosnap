const toggle = document.querySelector("#toggle-image");
const yearPrice = document.querySelectorAll(".yearly");
const monthYear = document.querySelectorAll("#month-year");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

toggle.addEventListener("click", function () {
  if (toggle.src.match("assets/pricing/desktop/toggle-month.svg")) {
    toggle.src = "assets/pricing/desktop/toggle-year.svg";
    yearPrice.forEach((e) => e.classList.toggle("change"));
    monthYear.forEach((e) => (e.textContent = "year"));
    year.classList.toggle("checked");
    month.classList.toggle("checked");
  } else if (toggle.src.match("assets/pricing/desktop/toggle-year.svg")) {
    toggle.src = "assets/pricing/desktop/toggle-month.svg";
    yearPrice.forEach((e) => e.classList.toggle("change"));
    monthYear.forEach((e) => (e.textContent = "month"));
    year.classList.toggle("checked");
    month.classList.toggle("checked");
  }
});
