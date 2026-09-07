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



