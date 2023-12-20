const openSidebar = document.querySelector("main header div .open-sidebar");
const closeSidebar = document.querySelector("aside div .close-sidebar");
const sidebar = document.querySelector("aside");
const main = document.querySelector("main");

openSidebar.addEventListener("click", (event) => {
  sidebar.style.marginLeft = "0";
  sidebar.style.display = "flex";
  sidebar.style.zIndex = "1";
  sidebar.style.animationName = "showSidebar";

  main.style.overflow = "hidden";
  main.style.filter = "blur(2px)";
});

closeSidebar.addEventListener("click", (event) => {
  sidebar.style.marginLeft = "-100vw";
  sidebar.style.animationName = "";
  sidebar.style.zIndex = "0";

  main.style.overflow = "";
  main.style.filter = "";
});
