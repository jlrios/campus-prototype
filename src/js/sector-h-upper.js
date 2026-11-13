import classroomH3Tpl from "./../templates/classroom.html?raw";

export function sectorHUpper() {
  const classroomH3 = document.querySelector("[data-cell-id='classroom-h3']");
  
  const panelContainer = document.querySelector(".panel-container");
  const infoPanel = document.querySelector(".info-panel");

  classroomH3.addEventListener("click", () => {
    
    const templateClassroomH3 = classroomH3Tpl;
    // const cloneClassroom = templateClassroomH3.content.cloneNode(true);

    panelContainer.innerHTML = "";
    panelContainer.innerHTML = templateClassroomH3;

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