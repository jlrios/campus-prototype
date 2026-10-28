// Campus map /
import mainMap from "./../../src/assets/maps/campus/main-map.svg";

// Sector H maps /
import bldgHGrndMap from "./../../src/assets/maps/sector-h/main-bldg-ground.svg";
import bldgHUpperMap from "./../../src/assets/maps/sector-h/main-bldg-upper.svg";

// Map functions /
import { initializeMapSignage } from "./map.js";

// Campus sector data toasts
import mainMapToasts from "./../data/toast-sectors.json";

// Map area /
const mapArea = document.getElementById("map-area");

console.log(mapArea);

let loadedMaps = {};

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
        urlMap: bldgHGrndMap,
      },

      upperFloor: {
        id: "bldgHUpper",
        urlMap: bldgHUpperMap,
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

await Promise.all([loadSVGMap(maps.C.id, maps.C.urlMap)]);
// Finished loading maps /

function showMap(map) {
  mapArea.innerHTML = "";
  mapArea.innerHTML = getSVGMap(map);

  initializeMapSignage();
}

// Load main campus map /
showMap(maps.C.id);

/*
==============================
Sector toasts
==============================
*/

//const sectorMap = document.getElementById("sector-map");
const sectorToast = document.querySelector(".sector-toast");
const sectorSelected = document.querySelector("#sector-toast");

const campusSVG = document.querySelector("svg");
const title = sectorSelected.querySelector(".sector-text h3");
const description = sectorSelected.querySelector(".sector-text p");
const icon = sectorSelected.querySelector(".sector-icon i");

campusSVG.addEventListener("pointerover", (e) => {
  const sector = e.target.closest('[data-cell-id^="sector-"]');

  if (!sector) return;

  const previousSector = e.relatedTarget?.closest?.(
    '[data-cell-id^="sector-"]',
  );

  if (previousSector === sector) return;

  const sectorKey = sector.dataset.cellId.replace("sector-", "");
  const sectorData = mainMapToasts[sectorKey];

  if (!sectorData) return;

  title.textContent = sectorData.title;
  description.textContent = sectorData.description;
  icon.className = sectorData.icon;

  sectorToast.classList.add("active");
});

campusSVG.addEventListener("pointerout", (e) => {
  const sector = e.target.closest('[data-cell-id^="sector-"]');

  if (!sector) return;

  const nextSector = e.relatedTarget?.closest?.('[data-cell-id^="sector-"]');

  if (nextSector === sector) return;

  sectorToast.classList.remove("active");
});

/*campusSVG.addEventListener("pointerover", (e) => {
  //const sector = e.target.closest(".sector");
  const sector = e.target.closest('[data-cell-id^="sector-"]');

  if (!sector) return;

  //const sectorKey = sector.id.replace("sector-", "");
  const sectorKey = sector.getAttribute("data-cell-id").replace("sector-", "");
  const sectorData = mainMapToasts[sectorKey];

  if (!sectorData) return;

  title.textContent = sectorData.title;
  description.textContent = sectorData.description;
  icon.className = sectorData.icon;

  sectorToast.classList.add("active");
});

campusSVG.addEventListener("pointeleave", (e) => {
  const sector = e.target.closest('[data-cell-id^="sector-"]');

  if (!sector) return;

  sectorToast.classList.remove("active");
});*/

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
  console.log("Enter...");

  const sector = e.target.closest('[data-cell-id^="sector-"]').getAttribute("data-cell-id");

  if (!sector) return;

  const sectorData = sectorPanels[sector];

  console.log("SectorData");
  console.log(sector);
  console.log(sectorData);

  if (!sectorData) return;

  // -----------------------------------------
  // 1. Click on the same sector
  // -----------------------------------------
  if (selectedSector === sector) {
    // Remove selection
    selectedSector = null;

    // Remove visual class
    sector.classList.remove("sector-selected");
    sector.classList.add(sector.getAttribute("data-cell-id"));

    // Clear panel
    panel.classList.remove("open");
    panelContainer.innerHTML = "";

    return;
  }

  // -----------------------------------------
  // 2. If there was another selected sector
  // -----------------------------------------
  if (selectedSector) {
    const previousSector = campusSVG.querySelector(
      `#${CSS.escape(selectedSector)}`,
    );

    if (previousSector) {
      previousSector.classList.remove("sector-selected");
      previousSector.classList.add(previousSector.id);
    }
  }

  // -----------------------------------------
  // 3. Select new sector
  // -----------------------------------------
  //selectedSector = sector.getAttribute("data-cell-id");

  sector.classList.remove(sector);
  sector.classList.add("sector-selected");

  const clone = sectorData.template.content.cloneNode(true);

  panelContainer.innerHTML = "";

  showInfoPanel(
    panelContainer,
    clone,
    sectorData.title,
    sectorData.icon,
    sector.getAttribute("data-cell-id")
  );
});

function showInfoPanel(panelContainer, clone, sectorTitle, sectorIcon, sector) {
  panelContainer.appendChild(clone);

  const titlePanel = document.querySelector(".panel-title-text h2");
  const iconPanel = document.querySelector(".panel-title i");

  titlePanel.textContent = sectorTitle;
  iconPanel.className = sectorIcon;

  expandSectors(sector, panelContainer);

  panel.classList.add("open");
}
