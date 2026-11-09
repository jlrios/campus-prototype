/* Sector H maps */

import { showMap, maps } from "./campus";
import { sectorHGround } from "./sector-h-ground";

let mainBldgCurrentMap = null;

export function initializeSectorHMap() {
  const sectorHMapBtn = document.getElementById("sector-h-map");
  const infoPanel = document.querySelector(".info-panel");
  const signagePanel = document.querySelector(".simbology-bar");
  const bottomNav = document.querySelector(".bottom-nav-container");

  const homeMap = document.getElementById("home-map");
  const mainBldgDown = document.getElementById("main-bldg-down");
  const mainBldgUp = document.getElementById("main-bldg-up");

  // Use the container that holds the dynamically loaded SVG.
  const mapContainer = document.getElementById("map-container");

  sectorHMapBtn.addEventListener("click", () => {
    infoPanel.classList.remove("open");
    signagePanel.classList.add("is-not-visible");
    bottomNav.classList.add("is-visible");

    showMap(maps.H1.id);

    mainBldgCurrentMap = 1;

    sectorHGround();
  });

  // Bottom navigation
  /* homeMap.addEventListener("click", () => {
    bottomNav.classList.remove("is-visible");
    signagePanel.classList.remove("is-not-visible");

    showMap(maps.C.id);
  }); */


  mainBldgDown.addEventListener("click", () => {
    if (mainBldgCurrentMap === 1) return;

    showMap(maps.H1.id);

    mainBldgCurrentMap = 1;

    sectorHGround();
  });

  mainBldgUp.addEventListener("click", () => {
    if (mainBldgCurrentMap === 2) return;

    showMap(maps.H2.id);

    mainBldgCurrentMap = 2;
    
  });

  // Handle clicks on the camera even when the SVG is replaced.
  mapContainer.addEventListener("click", (event) => {
    const h3Camera = event.target.closest(
      '[data-cell-id="camera-h3"]'
    );


    if (!h3Camera) return;

    // Camera interaction here.
    openCameraViewer();
  });


  /* Revisar después*/
  function openCameraViewer() {
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
      <source src="./videos/clasroom-h3.mp4" type="video/mp4">
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
    // modal: true,
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
}
