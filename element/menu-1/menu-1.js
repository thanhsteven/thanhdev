console.log("Đã kết nối với menu.js");
(function () {
  // * Khai báo biến tổng
  const menuModal = document.querySelector(".menu-modal");
  const btnOpenMenu = document.querySelector(".header-menu");
  const navMenu = document.querySelector(".menu");
  const btnCloseMenu = document.querySelector(".menu-close");
  const subMenus = navMenu.querySelectorAll(".sub-menu");
  const menuIcons = navMenu.querySelectorAll(".menu-icon");
  const mediaSize = 991;
  // * Hàm kích hoạt
  btnOpenMenu.addEventListener("click", menuMobile);
  btnCloseMenu.addEventListener("click", menuMobile);
  menuModal.addEventListener("click", menuMobile);
  // * Hàm xử lý
  navMenu.addEventListener("click", function (event) {
    let menuHasChild = event.target.parentElement;
    if (menuHasChild.hasAttribute("data-toggle")) {
      let subMenu = menuHasChild.querySelector(".sub-menu");
      let icon = menuHasChild.querySelector(".menu-icon");
      // Kiểm tra submenu có đang mở hay không ?
      if (subMenu.hasAttribute("style")) {
        // Nếu submenu đang mở ~ icon sẽ hiện
        subMenu.removeAttribute("style"); // đóng submenu lại
        icon.classList.remove("icon-show"); // đóng luôn cái icon
      } else {
        // Nếu submenu ko mở
        collapseMenu(); // Đóng cái thằng ở ngoài đang mở lại
        toggleIcon(); // Đóng luôn cái icon nằm ở ngoài và đang mở --> đóng lại
        subMenu.style.maxHeight = subMenu.scrollHeight + "px"; // Mở cái thằng đang click vào
        icon.classList.add("icon-show");
      }
    } else {
      console.log("Không có menu con bên trong nên không mở ra gì !");
      return false;
    }
  });
  function collapseMenu() {
    [...subMenus].forEach((item) => {
      if (item.hasAttribute("style")) {
        item.removeAttribute("style");
      }
    });
  }
  function toggleIcon() {
    [...menuIcons].forEach((item) => {
      if (item.classList.contains("icon-show")) {
        item.classList.remove("icon-show");
      }
    });
  }
  function menuMobile() {
    navMenu.classList.toggle("menu-show");
    menuModal.classList.toggle("menu-modal-show");
    if (document.documentElement.style.overflow === "hidden") {
      document.documentElement.style.removeProperty("overflow");
      document.documentElement.removeAttribute("style");
    } else {
      document.documentElement.style.setProperty("overflow", "hidden");
    }
  }
  window.addEventListener("resize", function () {
    if (this.innerWidth <= mediaSize) {
      resizeMenu();
    }
  });
  function resizeMenu() {
    menuModal.classList.remove("menu-modal-show");
    navMenu.classList.remove("menu-show");
  }
})();
