window.addEventListener("DOMContentLoaded", function () {
  const body = document.querySelector("body");
  const newsCardButtons = document.querySelectorAll(".news-card__button");
  const newsCards = document.querySelectorAll(".news-card");

  newsCardButtons.forEach(element => {
    const elementImage = element.parentNode.parentNode.querySelector(".news-card__image");
    body.insertAdjacentHTML('beforeEnd',
      `
      <div id="${element.getAttribute('href').slice(1)}" style="display: none;">
        <div class="modal__container">
          <img class="modal__image modal__image_news" src="${elementImage.src}" alt="${elementImage.alt}">
          ${element.parentNode.querySelector(".news-card__text-container").innerHTML}
        </div>
      </div>
      `);
  });

  newsCards.forEach((element) => {
    const newsCardTextContainer = element.querySelector(".news-card__text-container");
    const newsCardButton = element.querySelector(".news-card__button");

    if (newsCardTextContainer.scrollHeight > newsCardTextContainer.offsetHeight) {
      newsCardButton.classList.remove("dis-none");
    } else {
      newsCardButton.classList.add("dis-none");
    }
  })

  window.addEventListener("resize", () => {
    setTimeout(() => {
      newsCards.forEach((element) => {
        const newsCardTextContainer = element.querySelector(".news-card__text-container");
        const newsCardButton = element.querySelector(".news-card__button");

        if (newsCardTextContainer.scrollHeight > newsCardTextContainer.offsetHeight) {
          newsCardButton.classList.remove("dis-none");
        } else {
          newsCardButton.classList.add("dis-none");
        }
      })
    }, 500)
  })
})