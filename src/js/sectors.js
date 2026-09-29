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
  selectedSector = sector.id;

  sector.classList.remove(sector.id);
  sector.classList.add("sector-selected");

  const clone = sectorData.template.content.cloneNode(true);

  panelContainer.innerHTML = "";

  showInfoPanel(
    panelContainer,
    clone,
    sectorData.title,
    sectorData.icon,
    sector.id,
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

function expandSectors(sector) {
  const expandSector = document.getElementById(`expand-${sector}`);

  if (!expandSector) return;

  expandSector.addEventListener("click", () => {
    // panel.innerHTML = "";

    panel.classList.remove("open");

    // Load sector map.

    // Temp.
    showMap(maps.H.mainBuilding.groundFloor.id);

    const navMapLeft = document.getElementById("nav-map-left");
    const navMapRight = document.getElementById("nav-map-right");

    let mapIndex = 1;

    navMapLeft.addEventListener("click", () => {
      mapIndex -= 1;

      if (mapIndex < 0) {
        mapIndex = 0;
        return;
      }

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
      ? (cloneMap.querySelector("h2").textContent = sectorPatio)
      : (cloneMap.querySelector("h2").textContent = sectorWorkshop);

    sectorMap.innerHTML = "";
    sectorMap.appendChild(cloneMap);
  } else {
    showMap(maps.H.mainBuilding.groundFloor.id);
  }
}

// Cambiar entre planta alta y baja cuando el sector es el
// edificio principal.
const groundFloor = document.getElementById("ground-floor");
const upperFloor = document.getElementById("upper-floor");

console.log(groundFloor);
console.log(upperFloor);

groundFloor.addEventListener("click", () => {
  showMap(maps.H.mainBuilding.groundFloor.id);
});

let classroomH3 = null;

upperFloor.addEventListener("click", () => {
  showMap(maps.H.mainBuilding.upperFloor.id);

  classroomH3 = document.querySelector('g[data-cell-id="shmb-2fch3"] rect');
  const cameraH3 = document.querySelector('g[data-cell-id="camera-h3"]');
  // Classrooms.
  console.log(cameraH3);

  classroomH3.addEventListener("click", () => {
    alert("OK");
  });

  cameraH3.addEventListener("click", () => {
    /*new WinBox({
      title: "Video cámara - Aula H3",
      x: "center",
      y: "center",
      background: "#e25619",
      class: ["camera-window"],
      width: "1280",
      height: "720",
      border: 4,
      header: 45,
    });*/
    createCameraViewer();
  });
});

function createCameraViewer() {
  const cameraPanel = document.createElement("div");

  cameraPanel.className = "camera-viewer";

  cameraPanel.innerHTML = `
    <div class="camera-loader" id="cameraLoader">

      <div class="camera-loader__content">

        <div class="camera-loader__icon" aria-hidden="true">
          <svg viewBox="0 0 64 64">
            <rect x="8" y="18" width="38" height="28" rx="5"></rect>
            <path d="M46 27l10-6v22l-10-6z"></path>
            <circle cx="27" cy="32" r="8"></circle>
          </svg>
        </div>

        <div class="camera-loader__text">
          Conectando con la cámara...
        </div>

        <div class="camera-loader__progress">
          <div
            class="camera-loader__progress-bar"
            id="cameraProgress">
          </div>
        </div>

      </div>

    </div>

    <video
      id="cameraVideo"
      class="camera-video"
      muted
      autoplay
      loop
      playsinline
      preload="auto"
    >
      <source src="/videos/clasroom-h3.mp4" type="video/mp4">
      Tu navegador no soporta video HTML5.
    </video>

    <div class="camera-status">

      <div class="camera-status__left">

        <span>Video cámara:</span>
        <strong>Aula H3</strong>

        <span class="camera-status__separator">|</span>

        <span>Estado:</span>

        <strong class="camera-status__online">
          En línea
        </strong>

      </div>

      <div class="camera-status__right">
        <span id="cameraDateTime"></span>
      </div>

    </div>
  `;

  const cameraWindow = new WinBox({
    class: ["camera-window"],

    mount: cameraPanel,

    title: "Video cámara - Aula H3",
    x: "center",
    y: "center",
    background: "#e25619",
    class: ["camera-window", "camera-window.max"],
    width: "1210",
    height: "760",
    border: 4,
    header: 45,
    index: 300
  });

  const video = cameraPanel.querySelector("#cameraVideo");
  const loader = cameraPanel.querySelector("#cameraLoader");
  const progress = cameraPanel.querySelector("#cameraProgress");
  const dateTime = cameraPanel.querySelector("#cameraDateTime");

  let progressValue = 0;
  let videoReady = false;
  let minimumLoadTimePassed = false;

  const progressTimer = setInterval(() => {
    if (progressValue < 90) {
      progressValue += 2;

      progress.style.width = `${progressValue}%`;
    }
  }, 40);

  video.addEventListener("canplay", () => {
    videoReady = true;

    finishLoading();
  });

  setTimeout(() => {
    minimumLoadTimePassed = true;

    finishLoading();
  }, 1200);

  function finishLoading() {
    if (!videoReady || !minimumLoadTimePassed) {
      return;
    }

    clearInterval(progressTimer);

    progress.style.width = "100%";

    setTimeout(() => {
      loader.classList.add("is-hidden");
    }, 250);
  }

  function updateDateTime() {
    const now = new Date();

    dateTime.textContent = now.toLocaleString("es-MX", {
      dateStyle: "short",
      timeStyle: "medium",
    });
  }

  updateDateTime();

  const clockTimer = setInterval(updateDateTime, 1000);

  cameraWindow.onclose = () => {
    clearInterval(clockTimer);
    clearInterval(progressTimer);
  };

  return cameraWindow;
}