const floorHF1 = document.getElementById("buildingHF1");
const sectorToast = document.querySelector(".sector-toast");
const sectorSelected = document.querySelector("#sector-toast");

let sectorH;
let toastSectors = {};
let sectorIdentifiers = [
  "sector-c1",
  "sector-h",
  "sector-d",
  "sector-m",
  "sector-c2",
];

async function loadSvgInto(el, url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  el.innerHTML = await res.text();
  const svg = document.querySelector("svg");

  sectorH = document.getElementById("sector-h");

  svg.addEventListener("pointerover", (e) => {
    const sector = e.target.closest(".sector");
    if (!sector) return;

    const sectorTitle = sectorSelected.querySelector(".sector-text");
    const sectorDescription = sectorSelected.querySelector(".sector-text");
    const sectorIcon = sectorSelected.querySelector(".sector-icon");

    let title = sectorTitle.querySelector("h3");
    let description = sectorDescription.querySelector("p");
    let icon = sectorIcon.querySelector("i");

    switch (sector.id) {
      case "sector-h":
        title.textContent = toastSectors.h.title;
        description.textContent = toastSectors.h.description;
        icon.className = toastSectors.h.icon;
        sectorToast.classList.add("active");
        break;
      case "sector-c1":
        title.textContent = toastSectors.c1.title;
        description.textContent = toastSectors.c1.description;
        icon.className = toastSectors.c1.icon;
        sectorToast.classList.add("active");
        break;
      case "sector-d":
        title.textContent = toastSectors.d.title;
        description.textContent = toastSectors.d.description;
        icon.className = toastSectors.d.icon;
        sectorToast.classList.add("active");
        break;
      case "sector-m":
        title.textContent = toastSectors.m.title;
        description.textContent = toastSectors.m.description;
        icon.className = toastSectors.m.icon;
        sectorToast.classList.add("active");
        break;
      case "sector-c2":
        title.textContent = toastSectors.c2.title;
        description.textContent = toastSectors.c2.description;
        icon.className = toastSectors.c2.icon;
        sectorToast.classList.add("active");
        break;
    }
  });

  svg.addEventListener("pointerout", (e) => {
    const sector = e.target.closest(".sector");
    if (!sector) return;
    sectorToast.classList.remove("active");
  });

  svg.addEventListener("click", (e) => {
    const notImplemented = document.getElementById("not-implemented");
    const panelH = document.getElementById("panel-h")
    const panelContainer = document.querySelector(".panel-container");
    const clon = notImplemented.content.cloneNode(true);
    const clonH = panelH.content.cloneNode(true);

    const sector = e.target.closest(".sector");
    if (!sector) return;

    console.log("-> " + sector.id);

    panelContainer.innerHTML = "";

    switch (sector.id) {
      case "sector-h":
        showInformationPanel(panelContainer, clonH, "Sector H", "fa-solid fa-building fa-2x")
        break;
      case "sector-d":
        showInformationPanel(panelContainer, clon, "Sector D", "fa-solid fa-landmark-dome fa-2x")
        break;
      case "sector-m":
        showInformationPanel(panelContainer, clon, "Sector M", "fa-solid fa-people-roof fa-2x")
        break;
      case "sector-c1":
        showInformationPanel(panelContainer, clon, "Sector C1", "fa-solid fa-tower-observation fa-2x")
        break;
      case "sector-c2":
        showInformationPanel(panelContainer, clon, "Sector C2", "fa-solid fa-tower-observation fa-2x")
        break;
    }

    // Click in button to expand the sector
   // console.log("-> " + expandSector);  
    if (sector.id === "sector-h") {
      const expandSector = document.getElementById("expand-sector");
      expandSector.addEventListener("click", () => {
        panel.classList.remove("open");
        loadSectorSVG(sector.id);
      });
    }
  });
}

async function loadSectorSVG(_sectorId) {
    const url = "../../src/assets/maps/sectorH/BuildingHF1.svg"
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  floorHF1.innerHTML = await res.text();
  // const svg = document.querySelector("svg");

  console.log(floorHF1);
}

function showInformationPanel(_panelContainer, _clon, _sectorName, _icon) {
  _panelContainer.appendChild(_clon);
  const titlePanel = document.querySelector(".panel-title-text h2");
  const iconPanel = document.querySelector(".panel-title i")
  titlePanel.textContent = _sectorName;
  iconPanel.className = _icon;
  panel.classList.add("open");
}

(async function init() {
  await Promise.all([
    loadSvgInto(floorHF1, "../../src/assets/maps/campus20/campus-test.svg"),
  ]);

  const response = await fetch("../../src/data/toast-sectors.json");

  toastSectors = await response.json();

  console.log(toastSectors);
})().catch(console.error);