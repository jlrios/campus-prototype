export function sectorHGround() {
  const mapContainerH = document.getElementById("map-container");

  const hLibrary = document.querySelector("[data-cell-id='h-library']");
  const hComputerCenter = document.querySelector("[data-cell-id='h-computer-center']");

  const panelContainer = document.querySelector(".panel-container");
  const infoPanel = document.querySelector(".info-panel");

  hLibrary.addEventListener("click", () => {
    
    const templateLibrary = document.getElementById("h-library");
    const cloneLibrary = templateLibrary.content.cloneNode(true);

    panelContainer.innerHTML = "";
    panelContainer.appendChild(cloneLibrary);

    infoPanel.classList.add("open");
  });

  hComputerCenter.addEventListener("click", () => {
    const templateComputer = document.getElementById("h-computer-center");
    const cloneCenter = templateComputer.content.cloneNode(true);

    panelContainer.innerHTML = "";
    panelContainer.appendChild(cloneCenter);

    infoPanel.classList.add("open");
  });
}