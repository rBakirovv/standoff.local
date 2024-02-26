window.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.querySelector(".menu__dropdown-private-button");
  const overlay = document.querySelector(".overlay_private")

  function getDeviceType() {
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);

    if (isMobile) {
      return "mobile";
    } else {
      return "desktop";
    }
  }

  if (getDeviceType() === "desktop") {
    dropdownButton && dropdownButton.addEventListener("mousemove", () => {
      dropdownButton.style.zIndex = 100;
      overlay.classList.add("overlay_active");
    })

    dropdownButton && dropdownButton.addEventListener("mouseout", () => {
      dropdownButton.style.zIndex = 1;
      overlay.classList.remove("overlay_active");
    })
  }

  if (getDeviceType() === "mobile") {
    dropdownButton && dropdownButton.addEventListener("click", () => {
      if (overlay.classList.contains("overlay_active")) {
        dropdownButton.style.zIndex = 1;
      } else {
        dropdownButton.style.zIndex = 100;
      }

      overlay.classList.toggle("overlay_active");
      dropdownButton.classList.toggle("active");
    })

    overlay && overlay.addEventListener("click", () => {
      dropdownButton.style.zIndex = 1;
      overlay.classList.remove("overlay_active");
      dropdownButton.classList.remove("active");
    })
  }
})