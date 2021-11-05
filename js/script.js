const menuButton = document.getElementById("menu-button");
const headerMenu = document.getElementById("header-menu");
const navBarMobile = document.getElementById("navbar");

if (menuButton) {
  menuButton.addEventListener("click", () => {
    // toggle the mobile navigation
    if (headerMenu.classList.contains("close")) {
      headerMenu.classList.remove("close");
      headerMenu.classList.add("open");

      // add height for backdrop to cover the whole page.
      navBarMobile.style.height = "100%";
    } else {
      headerMenu.classList.remove("open");
      headerMenu.classList.add("close");
      navBarMobile.style.height = null;
    }
  });
}
