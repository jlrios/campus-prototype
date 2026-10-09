// Checkboxes
const feSignCheck = document.getElementById("fe-signage");
const noSignCheck = document.getElementById("no-signage");
const eeSignCheck = document.getElementById("ee-signage");
const mpSignCheck = document.getElementById("mp-signage");

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
}