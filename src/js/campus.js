/* ========================================
  Campus Map Imports
======================================== */

import mainMap from "./../../src/assets/maps/campus/main-map.svg";

// Sector H maps
import bldgHGrndMap from "./../../src/assets/maps/sector-h/main-bldg-ground.svg";
import bldgHUpperMap from "./../../src/assets/maps/sector-h/main-bldg-upper.svg";

// Map functions
import { initializeMapSignage } from "./map.js";

// Campus sector toast data
import mainMapToasts from "./../data/toast-sectors.json";
import { initializeSectorHMap } from "./sector-h.js";

// Templates

// Sector H template
import sectorHTpl from "./../templates/sector-h.html?raw";
// Sector C1 template
import sectorC1Tpl from "./../templates/sector-c1.html?raw";
// Not implemented template
import notImplementedTpl from "./../templates/not-implemented.html?raw";

/* ========================================
  DOM Elements
======================================== */

const mapArea = document.getElementById("map-area");
const panel = document.querySelector(".info-panel");

const sectorToast = document.querySelector(".sector-toast");
const sectorSelected = document.querySelector("#sector-toast");

const panelContainer = document.querySelector(".panel-container");

const notImplemented = document.getElementById("not-implemented");
const panelH = document.getElementById("panel-h");

/* ========================================
  Map Configuration
======================================== */

// let currentMapId = null;
const loadedMaps = {};

export const maps = {
  C: {
    id: "mainMap",
    urlMap: mainMap,
  },

  H1: {
    id: "sector-h-ground",

    mainBuilding: {
      groundFloor: {
        id: "bldgHGrnd",
        urlMap: bldgHGrndMap,
      }
    }
  },

  H2: {
    id: "sector-h-upper",

    mainBuilding: {
      upperFloor: {
        id: "bldgHUpper",
        urlMap: bldgHUpperMap,
      }
    }
  }
};

/* ========================================
  SVG Map Loading
======================================== */

/**
 * Fetches an SVG map and stores its markup by ID.
 * Updates the ID of the currently loaded map.
 */
export async function loadSVGMap(mapId, mapSVG) {
  try {
    const response = await fetch(mapSVG);

    if (!response.ok) {
      throw new Error(`Error loading map: ${mapId}`);
    }

    loadedMaps[mapId] = await response.text();
    
    //currentMapId = mapId;
  } catch (error) {
    console.error(error);
  }
}

/**
 * Returns the stored SVG markup for a map ID.
 * Returns null when the map has not been loaded.
 */
function getSVGMap(mapId) {
  return loadedMaps[mapId] ?? null;
}

/**
 * Renders the requested SVG map and initializes its signage.
 */
export function showMap(mapId) {
  mapArea.innerHTML = getSVGMap(mapId);
}

/* ========================================
  Initial Map Setup
======================================== */

// Load the main campus map before rendering it.
await Promise.all([loadSVGMap(maps.C.id, maps.C.urlMap)]);
await Promise.all([loadSVGMap(maps.H1.id, maps.H1.mainBuilding.groundFloor.urlMap)]);
await Promise.all([loadSVGMap(maps.H2.id, maps.H2.mainBuilding.upperFloor.urlMap)]);

console.log(loadedMaps);

/**
 * 
 */
showMap(maps.C.id);
initializeMapSignage();


/* ========================================
  Campus Map Elements
======================================== */

// Cache the SVG element and toast content elements.
const campusSVG = mapArea.querySelector("svg");

const title = sectorSelected.querySelector(".sector-text h3");
const description = sectorSelected.querySelector(".sector-text p");
const icon = sectorSelected.querySelector(".sector-icon i");

/* ========================================
  Sector Toasts
======================================== */

/**
 * Displays sector information when the pointer enters a sector.
 */
campusSVG.addEventListener("pointerover", (e) => {
  const sector = e.target.closest('[data-cell-id^="sector-"]');

  if (!sector) return;

  // Ignore pointer movement between children of the same sector.
  const previousSector = e.relatedTarget?.closest?.(
    '[data-cell-id^="sector-"]',
  );

  if (previousSector === sector) return;

  // Retrieve the toast data associated with the sector.
  const sectorKey = sector.dataset.cellId.replace("sector-", "");
  const sectorData = mainMapToasts[sectorKey];

  if (!sectorData) return;

  // Update the toast content and make it visible.
  title.textContent = sectorData.title;
  description.textContent = sectorData.description;
  icon.className = sectorData.icon;

  sectorToast.classList.add("active");
});

/**
 * Hides sector information when the pointer leaves a sector.
 */
campusSVG.addEventListener("pointerout", (e) => {
  const sector = e.target.closest('[data-cell-id^="sector-"]');

  if (!sector) return;

  // Ignore pointer movement between children of the same sector.
  const nextSector = e.relatedTarget?.closest?.('[data-cell-id^="sector-"]');

  if (nextSector === sector) return;

  sectorToast.classList.remove("active");
});

/* ========================================
  Sector Information Panels
======================================== */

// Define the content and appearance of each sector's information panel.
const sectorPanels = {
  "sector-h": {
    template: sectorHTpl,
    title: "Sector H",
    icon: "fa-solid fa-building-circle-check fa-2x"
  },

  "sector-d": {
    template: notImplementedTpl,
    title: "Sector D",
    icon: "fa-solid fa-landmark-dome fa-2x"
  },

  "sector-m": {
    template: notImplementedTpl,
    title: "Sector M",
    icon: "fa-solid fa-people-roof fa-2x",
  },

  "sector-c1": {
    template: sectorC1Tpl,
    title: "Sector C1",
    icon: "fa-solid fa-tower-observation fa-2x",
  },

  "sector-c2": {
    template: notImplementedTpl,
    title: "Sector C2",
    icon: "fa-solid fa-tower-observation fa-2x",
  },
};

/* ========================================
  Sector Selection
======================================== */

let selectedSector = null;

/**
 * Toggles sector selection and displays its information panel.
 * Clicking the selected sector again clears the selection.
 */
campusSVG.addEventListener("click", (e) => {
  const sector = e.target.closest('[data-cell-id^="sector-"]');

  if (!sector) return;

  // Deselect the current sector when it is clicked again.
  if (selectedSector?.dataset.cellId === sector.dataset.cellId) {
    selectedSector.classList.remove("selected");
    selectedSector = null;

    panelContainer.innerHTML = "";
  
    panel.classList.remove("open");

    return;
  }

  // Remove the previous sector selection.
  selectedSector?.classList.remove("selected");

  // Select the clicked sector.
  sector.classList.add("selected");
  
  selectedSector = sector;

  // Retrieve the selected sector's panel configuration.
  const dataSector = sectorPanels[sector.dataset.cellId];

  if (!dataSector) return;

  // const clone = dataSector.template.content.cloneNode(true);

  const template = dataSector.template;

  // Display the selected sector's information panel.
  showInfoPanel(panelContainer, template, dataSector.title, dataSector.icon);

  /* ========================================
    Sector H
  ======================================== */
  
  if (dataSector.title !== "Sector H") return;

  initializeSectorHMap();

});

/* ========================================
  Information Panel Rendering
======================================== */

/**
 * Renders the selected sector's template and updates its header.
 */
/* export function showInfoPanel(panelContainer, clone, sectorTitle, sectorIcon) {
  panelContainer.innerHTML = "";
  panelContainer.appendChild(clone);

  // Update the panel title and icon.
  const titlePanel = document.querySelector(".panel-title-text h2");
  const iconPanel = document.querySelector(".panel-title i");

  titlePanel.textContent = sectorTitle;
  iconPanel.className = sectorIcon;

  // Open the information panel.
  panel.classList.add("open");
} */

/**
 * Renders the selected sector's template and updates its header.
 */
export function showInfoPanel(panelContainer, template, sectorTitle, sectorIcon) {
  panelContainer.innerHTML = "";
  panelContainer.innerHTML = template;

  // Update the panel title and icon.
  const titlePanel = document.getElementById("information-title");
  const iconPanel = document.querySelector(".information-mark i");

  titlePanel.textContent = sectorTitle;
  iconPanel.className = sectorIcon;

  // Open the information panel.
  panel.classList.add("open");
}