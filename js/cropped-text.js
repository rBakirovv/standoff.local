window.addEventListener("DOMContentLoaded", function () {
  const textItems = document.querySelectorAll("[data-rows]");

  textItems.forEach((item) => {
    item.style.webkitLineClamp = parseInt(item.dataset.rows);
  })
})