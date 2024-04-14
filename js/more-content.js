window.addEventListener("DOMContentLoaded", function () {
  const moreContentContainers = document.querySelectorAll(".more-content-container");

  moreContentContainers.forEach((item) => {
    const contentContainer = item.querySelector(".more-content");
    const moreContentButton = item.querySelector(".more-content-button");
    const moreContentCrop = item.querySelector(".more-content-crop");
    const maxHeight = moreContentCrop && moreContentCrop.offsetTop;

    if (!moreContentCrop && moreContentButton) {
      moreContentButton.style.display = "none";
    }

    contentContainer.style.maxHeight = `${maxHeight}px`;

    moreContentButton && moreContentButton.addEventListener("click", () => {
      contentContainer.style.maxHeight = "none";
      moreContentButton.style.display = "none";
      moreContentCrop.style.display = "none";
    })
  })
})