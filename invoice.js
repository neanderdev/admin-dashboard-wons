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

const dropdownMoreActionButton = document.querySelectorAll(
  "main table tbody tr td .actions .more-action"
);
const dropdownMoreAction = document.querySelectorAll(
  "main table tbody tr td .actions .dropdown-more-action"
);

dropdownMoreActionButton.forEach((element, index) => {
  element.addEventListener("click", (event) => {
    event.stopPropagation();

    dropdownMoreAction[index].style.visibility = "visible";
    dropdownMoreAction[index].style.opacity = 1;
  });
});

document.documentElement.addEventListener("click", () => {
  dropdownMoreAction.forEach((element) => {
    if (element.style.visibility === "visible") {
      element.style.visibility = "hidden";
      element.style.opacity = 0;
    }
  });
});
