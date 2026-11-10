
export function sectorHUpper() {
  const classroomH3 = document.querySelector("[data-cell-id='classroom-h3']");
  
  const panelContainer = document.querySelector(".panel-container");
  const infoPanel = document.querySelector(".info-panel");

  classroomH3.addEventListener("click", () => {
    
    const templateClassroomH3 = document.getElementById("classroom-h3");
    const cloneClassroom = templateClassroomH3.content.cloneNode(true);

    panelContainer.innerHTML = "";
    panelContainer.appendChild(cloneClassroom);

    infoPanel.classList.add("open");
  });

  /*hComputerCenter.addEventListener("click", () => {
    const templateComputer = document.getElementById("h-computer-center");
    const cloneCenter = templateComputer.content.cloneNode(true);

    panelContainer.innerHTML = "";
    panelContainer.appendChild(cloneCenter);

    infoPanel.classList.add("open");
  });*/
}