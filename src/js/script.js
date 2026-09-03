const menu = document.getElementById("menu");
const panel = document.querySelector(".info-panel");
const closePanelButton = document.querySelector(".panel-close-button");
const infoPanelButton = document.querySelector(".info-panel-button");

// Menu
menu.addEventListener("click", () => {
  document.body.classList.toggle("menu-toggle");
});

// Expanded information panel
infoPanelButton.addEventListener("click", () => {
  panel.classList.add("open");
});

// Collapsed information panel
closePanelButton.addEventListener("click", () => {
  panel.classList.remove("open");
});

