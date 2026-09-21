// Start loading maps /

// Campus map
import mainMap from "../../src/assets/maps/campus/campus-map.svg";

// Sector H
import bldgHGrndMap from "../../src/assets/maps/sector-h/main-bldg-ground.svg";
import bldgHUpperMap from "../../src/assets/maps/sector-h/main-bldg-upper.svg";

// Campus sector data toasts
import mainMapToasts from "../data/toast-sectors.json";

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
  console.log(map);

  sectorMap.innerHTML = "";
  sectorMap.innerHTML = getSVGMap(map);

  const svg = sectorMap.querySelector("svg");

  requestAnimationFrame(() => {
    svg.classList.add("is-visible");
  });

  if (map === "mainMap") {
    document.getElementById("navigation-left").style.display = "none";
    document.getElementById("navigation-right").style.display = "none";
  } else {
    document.getElementById("navigation-left").style.display = "flex";
    document.getElementById("navigation-right").style.display = "flex";
  }
}

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
  const sectorData = mainMapToasts[sectorKey];

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

  // -----------------------------------------
  // 1. Click on the same sector
  // -----------------------------------------
  if (selectedSector === sector.id) {
    // Remove selection
    selectedSector = null;

    // Remove visual class
    sector.classList.remove("sector-selected");
    sector.classList.add(sector.id);

    // Clear panel
    panel.classList.remove("open")
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
  selectedSector = sector.id;

  sector.classList.remove(sector.id);
  sector.classList.add("sector-selected");

  const clone = sectorData.template.content.cloneNode(true);

  panelContainer.innerHTML = "";

  showInfoPanel(panelContainer, clone, sectorData.title, sectorData.icon, sector.id);
});

function showInfoPanel(panelContainer, clone, sectorTitle, sectorIcon, sector) {
  panelContainer.appendChild(clone);
  
  const titlePanel = document.querySelector(".panel-title-text h2");
  const iconPanel = document.querySelector(".panel-title i");
  
  titlePanel.textContent = sectorTitle;
  iconPanel.className = sectorIcon;

  expandSectors(sector, panelContainer)

  panel.classList.add("open");
}

function expandSectors(sector) {
  const expandSector = document.getElementById(`expand-${sector}`);
  
  if (!expandSector) return;

  expandSector.addEventListener("click", () => {
    // Load sector map.

    // Temp.
    showMap(maps.H.mainBuilding.groundFloor.id);

    const navMapLeft = document.getElementById("nav-map-left");
    const navMapRight = document.getElementById("nav-map-right");

    let mapIndex = 1;

    navMapLeft.addEventListener("click", () => {
      mapIndex -= 1;
      
      if (mapIndex < 0 ) {
        mapIndex = 0;
        return;
      };

      showCurrentLayout(mapIndex);
    });

    navMapRight.addEventListener("click", () => {
      mapIndex += 1;

      if (mapIndex > 2) {
        mapIndex = 2;
        return;
      }

      showCurrentLayout(mapIndex);
    });
  });
}

function showCurrentLayout(mapIndex) {
  if (mapIndex === 0 || mapIndex === 2) {
    const currentMap = document.getElementById("empty-state-map");
    const sectorMap = document.getElementById("sector-map");
    const cloneMap = currentMap.content.cloneNode(true);

    let sectorPatio = "Campus > Sector H > Cooperativa";
    let sectorWorkshop = "Campus > Sector H > Taller de mantenimiento";

    mapIndex === 0
      ? cloneMap.querySelector("h2").textContent =
        sectorPatio
      : cloneMap.querySelector("h2").textContent =
        sectorWorkshop; 

            sectorMap.innerHTML = "";
    sectorMap.appendChild(cloneMap);
  } else {
    showMap(maps.H.mainBuilding.groundFloor.id);
  }
}