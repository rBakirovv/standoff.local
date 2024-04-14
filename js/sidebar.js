window.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const sidebarInner = document.querySelector(".sidebar__inner");
  const sidebarItems = sidebar && sidebar.querySelectorAll(".sidebar-item");
  const sidebarFooter = document.querySelector(".sidebar-footer");
  const blog = document.querySelector(".blog__content-container");
  const blogContainer = document.querySelector(".blog__container");
  const blogContainerPadding = parseInt(window.getComputedStyle(blogContainer).padding);

  const sidebarInnerHeight = sidebarInner.offsetHeight;
  const sidebarItemPosition = sidebarItems[sidebarItems.length - 1].offsetTop;
  const sidebarItemHeight = sidebarItems[sidebarItems.length - 1].offsetHeight;
  const sidebarFooterPosition = sidebarFooter.offsetTop;
  const blogHeight = blog.offsetHeight;

  if (sidebarInnerHeight < blogHeight) {
    if (window.scrollY > sidebarItemPosition) {
      sidebarItems[sidebarItems.length - 1].classList.add("fixed");
    } else {
      sidebarItems[sidebarItems.length - 1].classList.remove("fixed");
    }

    if (window.scrollY + sidebarItemHeight + (blogContainerPadding * 2) > sidebarFooterPosition) {
      sidebarItems[sidebarItems.length - 1].classList.remove("fixed");
    } else {
      sidebarItems.forEach((item, index) => {
        if (index !== sidebarItems.length - 1) {
          item.style.display = "block";
        }
      })

      sidebarInner.classList.remove("stop");
    }
  }

  sidebarInnerHeight < blogHeight && window.addEventListener("scroll", () => {
    if (window.scrollY > sidebarItemPosition) {
      sidebarItems[sidebarItems.length - 1].classList.add("fixed");
    } else {
      sidebarItems[sidebarItems.length - 1].classList.remove("fixed");
    }

    if (window.scrollY + sidebarItemHeight + (blogContainerPadding * 2) > sidebarFooterPosition) {
      sidebarItems[sidebarItems.length - 1].classList.remove("fixed");

      sidebarItems.forEach((item, index) => {
        if (index !== sidebarItems.length - 1) {
          item.style.display = "none";
        }
      })

      sidebarInner.classList.add("stop");
    } else {
      sidebarItems.forEach((item, index) => {
        if (index !== sidebarItems.length - 1) {
          item.style.display = "block";
        }
      })

      sidebarInner.classList.remove("stop");
    }
  })
})