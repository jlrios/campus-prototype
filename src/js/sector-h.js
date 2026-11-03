// Sector H maps

import { showMap, maps } from "./campus";

let mainBldgCurrentMap = null;

export function initializeSectorHMap() {
  const sectorHMapBtn = document.getElementById("sector-h-map");
  const infoPanel = document.querySelector(".info-panel");
  const signagePanel = document.querySelector(".simbology-bar");
  const bottomNav = document.querySelector(".bottom-nav-container");

  const mainBldgDown = document.getElementById("main-bldg-down");
  const mainBldgUp = document.getElementById("main-bldg-up");
  
  sectorHMapBtn.addEventListener("click", () => {
    infoPanel.classList.remove("open");
    signagePanel.classList.add("is-not-visible");
    bottomNav.classList.add("is-visible");

    showMap(maps.H1.id);

    mainBldgCurrentMap = 1;
  });

  // Buttons to toggle between ground and upper floor
  mainBldgDown.addEventListener("click", () => {
    if (mainBldgCurrentMap === 1) return;

    showMap(maps.H1.id);

    mainBldgCurrentMap = 1;
  });

  mainBldgUp.addEventListener("click", () => {
    if (mainBldgCurrentMap === 2) return;

    showMap(maps.H2.id);

    mainBldgCurrentMap = 2
  });



}