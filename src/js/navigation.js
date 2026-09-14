const menu = document.getElementById("menu");
const panel = document.querySelector(".info-panel");
const closePanelButton = document.querySelector(".panel-close-button");
const infoPanelButton = document.querySelector(".info-panel-button");

// Menu.
menu.addEventListener("click", () => {
  document.body.classList.toggle("menu-toggle");
});

// Expand the information panel and check its content.
// Load the empty state if the panel is empty.
infoPanelButton.addEventListener("click", () => {
  const panelBlank = document.querySelector(".panel-container");
  const emptyStateTmpl = document.getElementById("empty-state");

  if (panelBlank.textContent.trim() === "") {
    const clone = emptyStateTmpl.content.cloneNode(true);

    panelBlank.appendChild(clone);
  }

  panel.classList.add("open");
});

// Collapsed information panel.
closePanelButton.addEventListener("click", () => {
  panel.classList.remove("open");
});

