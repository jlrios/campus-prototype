// Start loading maps /

// Campus map
import mainMap from "../../src/assets/maps/campus/campus-map.svg";

// Sector H
import bldgHGrndMap from "../../src/assets/maps/sector-h/main-bldg-ground.svg";
import bldgHUpperMap from "../../src/assets/maps/sector-h/main-bldg-upper.svg";

// Campus sector data toasts
const mainMapToasts = "../data/toast-sectors.json";

let loadedMaps = {};
let sectorToasts = {};

export const maps = {
  C: {
    id: "mainMap",
    urlMap: mainMap,
  },

  H: {
    id: "sector-h",

    mainBuilding: {
      groundFloor: {
        id: "bldgHGrnd",
        urlMap: bldgHGrndMap
      },

      upperFloor: {
        id: "bldgHUpper",
        urlMap: bldgHUpperMap
      },
    },
  },
};

export async function loadSVGMap(mapId, mapSVG) {
  try {
    const resMap = await fetch(mapSVG);

    if (!resMap.ok) {
      throw new Error(`Error loading map: ${mapId}`);
    }

    loadedMaps[mapId] = await resMap.text();
  } catch (error) {
    console.error(error);
  }
}

export function getSVGMap(mapId) {
  return loadedMaps[mapId] ?? null;
}

await Promise.all([
  loadSVGMap(maps.C.id, maps.C.urlMap),

  loadSVGMap(
    maps.H.mainBuilding.groundFloor.id,
    maps.H.mainBuilding.groundFloor.urlMap,
  ),

  loadSVGMap(
    maps.H.mainBuilding.upperFloor.id,
    maps.H.mainBuilding.upperFloor.urlMap,
  ),
]);

// Finished loading maps /

const sectorMap = document.getElementById("sector-map");
const sectorToast = document.querySelector(".sector-toast");
const sectorSelected = document.querySelector("#sector-toast");

function showMap(map) {
  sectorMap.innerHTML = getSVGMap(map);
}

async function loadSectorToasts() {
  const sectorRes = await fetch("../../src/data/toast-sectors.json");
  sectorToasts = await sectorRes.json();
}

loadSectorToasts();
showMap(maps.C.id);

// Events main map (campus)

const campusSVG = document.querySelector("svg");

const title = sectorSelected.querySelector(".sector-text h3");
const description = sectorSelected.querySelector(".sector-text p");
const icon = sectorSelected.querySelector(".sector-icon i");

campusSVG.addEventListener("pointerover", (e) => {
  const sector = e.target.closest(".sector");

  if (!sector) return;

  const sectorKey = sector.id.replace("sector-", "");
  const sectorData = sectorToasts[sectorKey];

  if (!sectorData) return;

  title.textContent = sectorData.title;
  description.textContent = sectorData.description;
  icon.className = sectorData.icon;

  sectorToast.classList.add("active");
});

campusSVG.addEventListener("pointerout", (e) => {
  const sector = e.target.closest(".sector");
  if (!sector) return;
  sectorToast.classList.remove("active");
});

const panelContainer = document.querySelector(".panel-container");

const notImplemented = document.getElementById("not-implemented");
const panelH = document.getElementById("panel-h");

const sectorPanels = {
  "sector-h": {
    template: panelH,
    title: "Sector H",
    icon: "fa-solid fa-building fa-2x",
  },

  "sector-d": {
    template: notImplemented,
    title: "Sector D",
    icon: "fa-solid fa-landmark-dome fa-2x",
  },

  "sector-m": {
    template: notImplemented,
    title: "Sector M",
    icon: "fa-solid fa-people-roof fa-2x",
  },

  "sector-c1": {
    template: notImplemented,
    title: "Sector C1",
    icon: "fa-solid fa-tower-observation fa-2x",
  },

  "sector-c2": {
    template: notImplemented,
    title: "Sector C2",
    icon: "fa-solid fa-tower-observation fa-2x",
  },
};

// Current sector selected

let selectedSector = null;

campusSVG.addEventListener("click", (e) => {
  const sector = e.target.closest(".sector");

  if (!sector) return;

  const sectorData = sectorPanels[sector.id];

  if (!sectorData) return;

  console.log(sector.id);

  // -----------------------------------------
  // 1. Click sobre el mismo sector
  // -----------------------------------------

  if (selectedSector === sector.id) {
    // Quitar selección
    selectedSector = null;

    // Quitar clase visual
    sector.classList.remove("sector-selected");
    sector.classList.add(sector.id)

    // Limpiar panel
    panelContainer.innerHTML = "";

    return;
  }

  // -----------------------------------------
  // 2. Si había otro sector seleccionado
  // -----------------------------------------

  if (selectedSector) {
    const previousSector = campusSVG.querySelector(
      `#${CSS.escape(selectedSector)}`,
    );

  console.log(previousSector.id);

    if (previousSector) {
      previousSector.classList.remove("sector-selected");
      previousSector.classList.add(previousSector.id)
    }
  }

  // -----------------------------------------
  // 3. Seleccionar nuevo sector
  // -----------------------------------------

  selectedSector = sector.id;

  sector.classList.remove(sector.id)
  sector.classList.add("sector-selected");

  const clone = sectorData.template.content.cloneNode(true);

  panelContainer.innerHTML = "";

  showInfoPanel(panelContainer, clone, sectorData.title, sectorData.icon);
});

function showInfoPanel(panelContainer, clone, sectorTitle, sectorIcon) {
  panelContainer.appendChild(clone);
  
  const titlePanel = document.querySelector(".panel-title-text h2");
  const iconPanel = document.querySelector(".panel-title i");
  
  titlePanel.textContent = sectorTitle;
  iconPanel.className = sectorIcon;
  
  panel.classList.add("open");
}


