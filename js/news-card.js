window.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const newsCardButtons = document.querySelectorAll(".news-card__button");

  newsCardButtons.forEach(element => {
    body.insertAdjacentHTML('beforeEnd',
      `
      <div id="${element.getAttribute('href').slice(1)}" style="display: none;">
        <div class="modal__container">
          ${element.parentNode.querySelector(".news-card__text-container").innerHTML}
        </div>
      </div>
      `);
  });
})