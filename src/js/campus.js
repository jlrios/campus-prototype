// Campus map /
import mainMap from "../../src/assets/maps/campus/main-map.svg";

// Sector H maps /
import bldgHGrndMap from "../../src/assets/maps/sector-h/main-bldg-ground.svg";
import bldgHUpperMap from "../../src/assets/maps/sector-h/main-bldg-upper.svg";

// Map functions /
import { initializeMapSignage } from "./map.js"; 


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
  console.log(map);

  mapArea.innerHTML = "";
  mapArea.innerHTML = getSVGMap(map);

  initializeMapSignage();
  
}

// Load main campus map /
showMap(maps.C.id);
