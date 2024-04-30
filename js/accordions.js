window.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion-item");

  accordions.forEach((item) => {
    //const accordionHead = item.querySelector(".accordion-head");
    const accordionHeadText = item.querySelector(".accordion-head-text");
    accordionHeadText.addEventListener("click", () => {
      item.classList.toggle("accordion-item_active");
    })
  })
})