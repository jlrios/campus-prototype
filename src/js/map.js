// Checkboxes
const feSignCheck = document.getElementById("fe-signage");
const noSignCheck = document.getElementById("no-signage");
const eeSignCheck = document.getElementById("ee-signage");
const mpSignCheck = document.getElementById("mp-signage");

// Print button
const printMapBtn = document.getElementById("print-map");

// Restore checkbox states from localStorage
function restoreToggleState(checkbox) {
  const savedState = localStorage.getItem(checkbox.id);

  checkbox.checked = savedState === "true";
}

// Save checkbox states to localStorage
function saveToggleState(checkbox) {
  localStorage.setItem(checkbox.id, checkbox.checked);
}

// Signage on SVG main map
export function initializeMapSignage() {
  const erSignage = document.querySelectorAll('[data-cell-id^="er-"]');
  const mpSignage = document.querySelectorAll('[data-cell-id^="mp-"]');
  const eeSignage = document.querySelectorAll('[data-cell-id^="ee-"]');
  const feSignage = document.querySelectorAll('[data-cell-id^="fe-"]');
  const noSignage = document.querySelector('[data-cell-id="no-01"]');

  // Restore saved states before registering the event listeners
  const checkboxes = [feSignCheck, noSignCheck, eeSignCheck, mpSignCheck];

  checkboxes.forEach(restoreToggleState);

  // Escape routes and meeting points
  mpSignCheck.addEventListener("change", () => {
    saveToggleState(mpSignCheck);

    erSignage.forEach((signage) => {
      signage.classList.toggle("is-visible", mpSignCheck.checked);
    });

    mpSignage.forEach((signage) => {
      signage.classList.toggle("is-visible", mpSignCheck.checked);
    });
  });

  // Fire extinguishers
  feSignCheck.addEventListener("change", () => {
    saveToggleState(feSignCheck);

    feSignage.forEach((signage) => {
      signage.classList.toggle("is-visible", feSignCheck.checked);
    });
  });

  // Emergency exits
  eeSignCheck.addEventListener("change", () => {
    saveToggleState(eeSignCheck);

    eeSignage.forEach((signage) => {
      signage.classList.toggle("is-visible", eeSignCheck.checked);
    });
  });

  // First-aid kit
  noSignCheck.addEventListener("change", () => {
    saveToggleState(noSignCheck);

    noSignage.classList.toggle("is-visible", noSignCheck.checked);
  });

  // Apply the restored states to the map
  checkboxes.forEach((checkbox) => {
    checkbox.dispatchEvent(new Event("change"));
  });

  // Print button functionality
  /*function createPreviewPrintMap() {
    const previewMapPanel = document.createElement("div");

    previewMapPanel.innerHTML = `
      <div>Mapa</div>
    `;
  }*/

  printMapBtn.addEventListener("click", () => {
    const previewMapPanel = document.createElement("div");

    /*previewMapPanel.innerHTML = `
      <div class="map-preview-container">
        <div class="map-preview-sheet">
          <div class="map-print-header">
            <h1 id="map-print-title">PLANTEL 20 ORIENTE - PLANO GENERAL</h1>
            <p id="map-print-subtitle">Distribución de espacios e instalaciones</p>
          </div>
          <div class="map-print-content">
            <!-- The cloned SVG will be inserted here -->
          </div>
        </div>
      </div>
      <div style="display: flex; gap: 5px; justify-content: center;">
        <p style="display: flex; align-items: center; gap: 8px; margin: 0;">
          <i class="fa-solid fa-circle-info fa-2x"></i>
          La señalética que haya sido habilitada en la vista del plano general, es la que será visible en el mapa impreso.
        </p>
        <button id="print-map" type="button" style="padding: 5px; display: flex; align-items: center; gap:5px;">
          <i class="fa-solid fa-print fa-2x"></i>Imprimir
        </button>
        <button id="dowload-map" type="button" style="padding: 5px; display: flex; align-items: center; gap:5px;">
          <i class="fa-solid fa-file-pdf fa-2x"></i>Descargar
        </button>
      </div>
    `;*/

    previewMapPanel.innerHTML = `
      <div style="padding:20px;">
        <div style="display: flex; gap: 8px; align-items:center;">
          <i class="fa-solid fa-circle-info fa-2x"></i>
          <h2 style="color: #343D3A">Atención</h2>
        </div>
        <p style="margin-top: 20px; color: #343D3A;">
      
          La señalética que haya sido habilitada en la vista del mapa principal, es 
          la misma que será visible en el mapa impreso.
        </p>
        <div style="
          display:flex; 
          align-items: center;
          justify-content: center; margin-top: 20px;">
          <button id="print-map2" type="button" class="button-panel">
            Continuars<i class="fa-solid fa-angle-right fa-2x"></i>
          </button>
        </div>
      </div>
    `;


    const previewPrintMap = new WinBox({
      class: ["map-preview-window"],
      title: "Imprimir mapa",
      x: "center",
      y: "center",
      background: "#e25619",
      modal: true,
      mount: previewMapPanel,
      index: 1000,
      width: "25%",
      height: "27%",
    });

    // Map area /

const printMapBtn2 = document.getElementById("print-map2");
console.log(printMapBtn2);

printMapBtn2.addEventListener("click", () => {

  previewPrintMap.close();
  
  const sourceSvg = document
    .getElementById("map-container")
    .querySelector("svg");

  const printContent = document.getElementById("print-map-content");

  console.log(sourceSvg);

  if (!sourceSvg) {
    console.error("The source map SVG was not found.");
    return;
  }

  // Clear the previous map, if any
  printContent.replaceChildren();

  // Clone the original SVG.
  const clonedSvg = sourceSvg.cloneNode(true);

  // Remove instructional labels from the printed map.
  clonedSvg
    .querySelectorAll("#text-01, #text-02")
    .forEach((element) => element.remove());

  // Remove fixed dimensions from the original SVG.
  clonedSvg.removeAttribute("width");
  clonedSvg.removeAttribute("height");

  // Preserve the original coordinate system.
  clonedSvg.setAttribute("viewBox", "0 0 2467 1499");
  clonedSvg.setAttribute("preserveAspectRatio", "xMidYMid meet");

  // Make the SVG fill the print container.
  clonedSvg.style.width = "100%";
  clonedSvg.style.height = "100%";
  clonedSvg.style.display = "block";

  // Insert the map into the print layout.
  printContent.replaceChildren(clonedSvg);

  // Open the print dialog.
  window.print();
});





   /* const svgMap = document.getElementById("map-area").querySelector("svg");
    const printSheet = document.querySelector(".map-preview-sheet");

    if (svgMap && printSheet) {
      printSheet.replaceChildren(svgMap.cloneNode(true));
    }*/
    
    //const printButton = previewMapPanel.querySelector("#print-map");

    /*printButton.addEventListener("click", () => {
      const mapSheet = previewMapPanel.querySelector(".map-preview-sheet");

      if (!mapSheet) return;

      // Create a dedicated print container.
      const printRoot = document.createElement("div");
      printRoot.id = "print-map-root";

      // Copy only the map sheet, excluding the modal controls.
      const printSheet = mapSheet.cloneNode(true);
      printSheet.classList.add("print-map-sheet");

      printRoot.appendChild(printSheet);
      document.body.appendChild(printRoot);

      // Remove the temporary print container after printing.
      window.addEventListener("afterprint", () => printRoot.remove(), {
        once: true,
      });

      window.print();
    });*/





/*const printMapBtn = document.getElementById("print-map");

printMapBtn.addEventListener("click", () => {
  const sourceSvg = document
    .getElementById("map-container")
    .querySelector("svg");

  const printContent = document.getElementById("print-map-content");

  if (!sourceSvg) {
    console.error("The source map SVG was not found.");
    return;
  }

  // Clear the previous map, if any
  printContent.replaceChildren();

  // Clone the original SVG
  const clonedSvg = sourceSvg.cloneNode(true);

  // Remove instructional labels from the printed map
  clonedSvg
    .querySelectorAll("#text-01, #text-02")
    .forEach((element) => element.remove());

  // Insert the prepared map into the print layout
  printContent.appendChild(clonedSvg);

  // Open the browser print dialog
  window.print();
});*/

  });
}