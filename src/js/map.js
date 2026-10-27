// Checkboxes
const feSignCheck = document.getElementById("fe-signage");
const noSignCheck = document.getElementById("no-signage");
const eeSignCheck = document.getElementById("ee-signage");
const mpSignCheck = document.getElementById("mp-signage");

// Print button
const printMapBtn = document.getElementById("print-map");

  /*
  ==============================
  Check toggles flag variable 
  ==============================
  */
let signageActive = null;

const signageActiveInfo = document.querySelector('[data-cell-id="signage-active-info"]');

console.log(signageActiveInfo);

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

  // Signage to print
  const signageEr = document.querySelector('[data-cell-id="signage-title"]');
  const signageNote = document.querySelector('[data-cell-id="signage-note"]');
  const signageTexts = document.querySelectorAll(
    '[data-cell-id^="signage-text-"]',
  );
  const signageIcons = document.querySelectorAll(
    '[data-cell-id^="signage-icon-"]',
  );

  signageEr.style.display = "none";
  signageNote.style.display = "none";

  signageTexts.forEach((signage) => {
    signage.style.display = "none";
  });

  signageIcons.forEach((signage) => {
    signage.style.display = "none";
  });

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

    /*checkboxes.forEach((toggle) => {
      if (toggle.checked === true) {
        signageActive = true;
        console.log(signageActive);
        return false;
      } else {
        signageActive = false;
        console.log(signageActive);
      }
    });*/
    
    signageActive = [...checkboxes].some((toggle) => toggle.checked);

    

    if (signageActive === true) {
      console.log(signageActive);

    } else {
      console.log(signageActive);
    }
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

  printMapBtn.addEventListener("click", () => {
    const previewMapPanel = document.createElement("div");

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
            Continuar<i class="fa-solid fa-angle-right fa-2x"></i>
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
      height: "28%",
    });

    // Map area /
    const printMapBtn2 = document.getElementById("print-map2");

    printMapBtn2.addEventListener("click", () => {
      previewPrintMap.close();

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

      // Clone the original SVG.
      const clonedSvg = sourceSvg.cloneNode(true);

      // Remove instructional labels from the printed map.
      clonedSvg
        .querySelectorAll('[data-cell-id^="text-"]')
        .forEach((element) => element.remove());

      clonedSvg.querySelector('[data-cell-id="explore-campus-text-box"]').style.display = "none";
      clonedSvg.querySelector('[data-cell-id="explore-campus-icon"]').style.display = "none";



      
      // Show signage active
      clonedSvg.querySelector('[data-cell-id="signage-title"]').style.display =
        "block";
      clonedSvg.querySelector('[data-cell-id="signage-note"]').style.display =
        "block";

      const signageConfig = {
        fe: feSignCheck,
        ee: eeSignCheck,
        er: eeSignCheck,
        mp: mpSignCheck,
        no: noSignCheck,
      };

      clonedSvg
        .querySelectorAll(
          '[data-cell-id^="signage-icon-"], [data-cell-id^="signage-text-"]',
        )
        .forEach((element) => {
          element.style.display = "block";

          const id = element.getAttribute("data-cell-id");
          const key = id.replace(/^signage-(icon|text)-/, "");
          const checkbox = signageConfig[key];

          if (checkbox) {
            element.classList.toggle("is-disabled", !checkbox.checked);
          }
        });

      // Insert the map into the print layout.
      printContent.replaceChildren(clonedSvg);

      // Open the print dialog.
      window.print();
    });
  });
}