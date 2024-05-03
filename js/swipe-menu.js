const html = document.querySelector("html");
const menuButton = document.querySelector(".mobile-menu-main-button");
const menuButtonSpan = menuButton.querySelector('.burger-icon span');
const mobileMenuButtons = document.querySelectorAll(".mobile-menu-item");
const swipeMenu = document.querySelector(".swipe-menu");
const swipeMenuSections = document.querySelectorAll(".swipe-menu__section-container");
const swipeMenuContainer = document.querySelector(".swipe-menu__container");
const swipeMenuScrollItem = swipeMenu && swipeMenu.querySelector(".swipe-menu__scroll-item");

const overlaySwipeMenu = document.querySelector(".overlay_swipe-menu");

function closeMenu() {
  swipeMenu.style.transition = "all 0.3s ease";

  html.style.overflow = "visible";

  menuButtonSpan.classList.remove('active');
  swipeMenu.classList.remove("--active");

  swipeMenu.style.transform = 'translateY(150%)';

  overlaySwipeMenu.classList.remove("overlay_active");

  setTimeout(() => {
    swipeMenu.style.transition = "none";
  }, 200)
}

function openMenu() {
  swipeMenu.style.transition = "all 0.3s ease";

  html.style.overflow = "hidden";

  overlaySwipeMenu.style.pointerEvents = "all";

  swipeMenu.style.transform = 'translateY(0%)';

  menuButtonSpan.classList.add('active');
  swipeMenu.classList.add("--active");

  overlaySwipeMenu.classList.add("overlay_active");

  setTimeout(() => {
    swipeMenu.style.transition = "none";
  }, 200)
}

mobileMenuButtons.forEach((item) => {
  item.addEventListener("click", () => {
    if (!item.href) {
      let currentBtn = item;
      let menuContainerId = item.getAttribute("data-menu");
      let currentMenuContainer = document.querySelector(menuContainerId);

      if (!currentBtn.classList.contains('active')) {
        swipeMenuSections.forEach(function (item) {
          item.classList.remove('active');
        });

        currentMenuContainer.classList.add('active');
      }

      openMenu();

      if (item.classList.contains("active")) {
        closeMenu();
      }

      item.classList.toggle("active");

      mobileMenuButtons.forEach((mobileMenuItem) => {
        if (mobileMenuItem !== item) {
          mobileMenuItem.classList.remove("active");
        }
      })
    }
  })
})

let touchstartY = 0;
let movedY = 0;
let touchendY = 0;

if (swipeMenu) {
  swipeMenu.addEventListener('touchstart', function (event) {
    if (swipeMenuContainer.scrollTop <= 0) {
      swipeMenuContainer.scrollTo({
        top: 0
      });

      overlaySwipeMenu.style.pointerEvents = "none";

      touchstartY = event.changedTouches[0].screenY;
    }
  }, false)

  swipeMenu.addEventListener('touchmove', function (event) {
    if (swipeMenuContainer.scrollTop <= 0) {
      swipeMenuContainer.scrollTo({
        top: 0
      });

      movedY = event.changedTouches[0].screenY;

      if (movedY - touchstartY > 0) {
        swipeMenuContainer.style.overflow = "hidden";
        swipeMenu.style.transform = `translateY(${movedY - touchstartY}px)`;
      }
    }
  })

  swipeMenu.addEventListener('touchend', function () {
    if (swipeMenuContainer.scrollTop <= 0) {
      swipeMenuContainer.scrollTo({
        top: 0
      });

      swipeMenuContainer.style.overflow = "scroll";
      swipeMenu.style.transition = "all 0.3s ease";

      if (movedY - touchstartY > 100 && movedY !== 0) {
        closeMenu();

        mobileMenuButtons.forEach((item) => {
          item.classList.remove("active");
        })
      } else {
        swipeMenu.style.transform = `translateY(0)`;
        overlaySwipeMenu.style.pointerEvents = "all";
      }

      touchstartY = 0;
      movedY = 0;

      setTimeout(() => {
        swipeMenu.style.transition = "none";
      }, 200)
    }
  }, false)

  overlaySwipeMenu.addEventListener("click", () => {
    closeMenu();

    mobileMenuButtons.forEach((item) => {
      item.classList.remove("active");
    })
  });
}