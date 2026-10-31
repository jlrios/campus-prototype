import Notify from "simple-notify";
import "simple-notify/dist/simple-notify.css";

// Checkboxes
const feSignCheck = document.getElementById("fe-signage");
const noSignCheck = document.getElementById("no-signage");
const eeSignCheck = document.getElementById("ee-signage");
const mpSignCheck = document.getElementById("mp-signage");

// Print button
const printMapBtn = document.getElementById("print-map");

// Store all signage checkboxes in one collection.
const checkboxes = [feSignCheck, noSignCheck, eeSignCheck, mpSignCheck];

// Track the signage toast state and instance.
let signageToastShown = false;
let signageToastInstance = null;
let isInitializing = false;

// Restore checkbox states from localStorage.
function restoreToggleState(checkbox) {
  const savedState = localStorage.getItem(checkbox.id);
  checkbox.checked = savedState === "true";
}

// Save checkbox states to localStorage.
function saveToggleState(checkbox) {
  localStorage.setItem(checkbox.id, checkbox.checked);
}

// Check whether any signage option is enabled.
function isAnySignageActive() {
  return checkboxes.some((toggle) => toggle.checked);
}

// Display the signage toast once per activation cycle.
function updateSignageToast() {
  const signageActive = isAnySignageActive();

  // Close the toast and reset its state when all signage is disabled.
  if (!signageActive) {
    signageToastInstance?.close();
    signageToastInstance = null;
    signageToastShown = false;
    return;
  }

  // Do not display notifications while restoring saved states.
  if (isInitializing || signageToastShown) return;

  // Create the notification and keep its instance for later.
  signageToastInstance = new Notify({
    status: "info",
    title: "Modo señalética activo",
    text: "La selección de sectores ha sido deshabilitada, desactive toda la señalética visible para volver al modo normal.",
    effect: "slide",
    speed: 300,
    customClass: "",
    customIcon: "",
    showIcon: true,
    showCloseButton: true,
    autoclose: false,
    autotimeout: 3000,
    notificationsGap: null,
    notificationsPadding: null,
    type: "outline",
    position: "right bottom",
    customWrapper: "",
  });

  signageToastShown = true;
}

// Apply the visibility state to a collection of SVG elements.
function updateSignageVisibility(elements, isVisible) {
  elements.forEach((element) => {
    element.classList.toggle("is-visible", isVisible);
  });
}

// Initialize signage on the SVG main map.
export function initializeMapSignage() {
  const erSignage = document.querySelectorAll('[data-cell-id^="er-"]');
  const mpSignage = document.querySelectorAll('[data-cell-id^="mp-"]');
  const eeSignage = document.querySelectorAll('[data-cell-id^="ee-"]');
  const feSignage = document.querySelectorAll('[data-cell-id^="fe-"]');
  const noSignage = document.querySelector('[data-cell-id="no-01"]');

  // Signage labels for printing.
  const signageEr = document.querySelector('[data-cell-id="signage-title"]');
  const signageNote = document.querySelector('[data-cell-id="signage-note"]');

  const signageTexts = document.querySelectorAll(
    '[data-cell-id^="signage-text-"]',
  );

  const signageIcons = document.querySelectorAll(
    '[data-cell-id^="signage-icon-"]',
  );

  if (signageEr) signageEr.style.display = "none";
  if (signageNote) signageNote.style.display = "none";

  signageTexts.forEach((element) => {
    element.style.display = "none";
  });

  signageIcons.forEach((element) => {
    element.style.display = "none";
  });

  // Restore saved states before registering the event handlers.
  isInitializing = true;

  checkboxes.forEach(restoreToggleState);

  // Escape routes and meeting points.
  mpSignCheck.onchange = () => {
    saveToggleState(mpSignCheck);
    updateSignageVisibility(erSignage, mpSignCheck.checked);
    updateSignageVisibility(mpSignage, mpSignCheck.checked);
    updateSignageToast();
  };

  // Fire extinguishers.
  feSignCheck.onchange = () => {
    saveToggleState(feSignCheck);
    updateSignageVisibility(feSignage, feSignCheck.checked);
    updateSignageToast();
  };

  // Emergency exits.
  eeSignCheck.onchange = () => {
    saveToggleState(eeSignCheck);
    updateSignageVisibility(eeSignage, eeSignCheck.checked);
    updateSignageToast();
  };

  // First-aid kit.
  noSignCheck.onchange = () => {
    saveToggleState(noSignCheck);

    if (noSignage) {
      noSignage.classList.toggle("is-visible", noSignCheck.checked);
    }

    updateSignageToast();
  };

  // Apply the restored states to the map.
  checkboxes.forEach((checkbox) => {
    checkbox.dispatchEvent(new Event("change"));
  });

  // Avoid displaying a toast just because saved settings are active.
  signageToastShown = isAnySignageActive();
  isInitializing = false;

  // Register the print button handler without accumulating listeners.
  printMapBtn.onclick = () => {
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
          justify-content: center;
          margin-top: 20px;">
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

    // Handle the print confirmation button.
    const printMapBtn2 = previewMapPanel.querySelector("#print-map2");

    printMapBtn2.addEventListener("click", () => {
      previewPrintMap.close();

      const mapContainer = document.getElementById("map-container");
      const sourceSvg = mapContainer?.querySelector("svg");
      const printContent = document.getElementById("print-map-content");

      if (!sourceSvg) {
        console.error("The source map SVG was not found.");
        return;
      }

      if (!printContent) {
        console.error("The print map container was not found.");
        return;
      }

      // Clear the previous map, if any.
      printContent.replaceChildren();

      // Clone the original SVG.
      const clonedSvg = sourceSvg.cloneNode(true);

      // Remove instructional labels from the printed map.
      clonedSvg
        .querySelectorAll('[data-cell-id^="text-"]')
        .forEach((element) => element.remove());

      const exploreText = clonedSvg.querySelector(
        '[data-cell-id="explore-campus-text-box"]',
      );

      const exploreIcon = clonedSvg.querySelector(
        '[data-cell-id="explore-campus-icon"]',
      );

      if (exploreText) exploreText.style.display = "none";
      if (exploreIcon) exploreIcon.style.display = "none";

      // Show signage labels on the printed map.
      const printSignageTitle = clonedSvg.querySelector(
        '[data-cell-id="signage-title"]',
      );

      const printSignageNote = clonedSvg.querySelector(
        '[data-cell-id="signage-note"]',
      );

      if (printSignageTitle) printSignageTitle.style.display = "block";
      if (printSignageNote) printSignageNote.style.display = "block";

      // Match signage elements to their corresponding checkboxes.
      const signageConfig = {
        fe: feSignCheck,
        ee: eeSignCheck,
        er: mpSignCheck,
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
  };
}