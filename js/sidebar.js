window.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const sidebarInner = document.querySelector(".sidebar__inner");
  const sidebarItems = sidebar && sidebar.querySelectorAll(".sidebar-item");
  const sidebarFooter = document.querySelector(".sidebar-footer");
  const blog = document.querySelector(".blog__content-container");

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

    if (window.scrollY + sidebarItemHeight > sidebarFooterPosition) {
      sidebarItems[sidebarItems.length - 1].classList.remove("fixed");
    }
  }

  sidebarInnerHeight < blogHeight && window.addEventListener("scroll", () => {
    if (window.scrollY > sidebarItemPosition) {
      sidebarItems[sidebarItems.length - 1].classList.add("fixed");
    } else {
      sidebarItems[sidebarItems.length - 1].classList.remove("fixed");
    }

    if (window.scrollY + sidebarItemHeight > sidebarFooterPosition) {
      sidebarItems[sidebarItems.length - 1].classList.remove("fixed");
    }
  })
})