window.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".burger__icon");
  const burger = document.querySelector(".burger");
  const burgerClose = document.querySelector(".burger__close");

  burgerIcon.addEventListener("click", () => {
    burger.classList.add("burger_active");
  })

  burgerClose.addEventListener("click", () => {
    burger.classList.remove("burger_active");
  })
})