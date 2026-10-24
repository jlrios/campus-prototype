// Campus map /
import mainMap from "../../src/assets/maps/campus/main-map.svg";

// Sector H maps /
import bldgHGrndMap from "../../src/assets/maps/sector-h/main-bldg-ground.svg";
import bldgHUpperMap from "../../src/assets/maps/sector-h/main-bldg-upper.svg";

// Map functions /
import { initializeMapSignage } from "./map.js"; 

// Campus sector data toasts
import mainMapToasts from "../data/toast-sectors.json";

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

await Promise.all([
  loadSVGMap(maps.C.id, maps.C.urlMap)  
]);
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
  //const sector = e.target.closest(".sector");
  const sector = e.target.closest('[data-cell-id^="sector-"]');

  if (!sector) return;

  //const sectorKey = sector.id.replace("sector-", "");
  const sectorKey = sector.getAttribute("data-cell-id").replace("sector-", "");
  const sectorData = mainMapToasts[sectorKey];

  console.log(sectorData)

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