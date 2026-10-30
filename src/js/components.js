/*const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerCaption = document.getElementById("viewerCaption");
const closeButton = document.querySelector(".image-viewer__close");

function openImage(src, description, alt = "") {
  viewerImage.src = src;
  viewerImage.alt = alt;
  viewerCaption.textContent = description;

  imageViewer.showModal();
}

function closeImage() {
  imageViewer.close();
}

closeButton.addEventListener("click", closeImage);

// Cerrar haciendo click fuera de la imagen
imageViewer.addEventListener("click", (e) => {
  const rect = imageViewer.getBoundingClientRect();

  const inside =
    e.clientX >= rect.left &&
    e.clientX <= rect.right &&
    e.clientY >= rect.top &&
    e.clientY <= rect.bottom;

  if (!inside) {
    imageViewer.close();
  }
});*/

/*
==============================
Calendar.
==============================
*/
const monthYear = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");

const prevMonthBtn = document.getElementById("previous-month");
const nextMonthBtn = document.getElementById("next-month");

console.log(prevMonthBtn);

let date = new Date();

function showCalendar() {
  const year = date.getFullYear();
  const month = date.getMonth();
  
  const firstDay = new Date(year, month, 1).getDay();
  const lastDate = new Date(year, month + 1, 0).getDate();


  calendarDays.innerHTML = "";

  monthYear.innerText = `${date.toLocaleDateString("default", {
    month: "long",
  })} ${year}`;


  for (let i = 0; i < firstDay; i++) {
    calendarDays.innerHTML += '<div class="empty"></div>';
  }

  for (let d = 1; d <= lastDate; d++) {
    const today = new Date();
    const isToday =
      d === today.getDate() &&
      year === today.getFullYear() &&
      month === today.getMonth();

      calendarDays.innerHTML += `<div class="${isToday ? "today" : ""}">${d}</div>`;
  }
}

prevMonthBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  showCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  showCalendar();
})

showCalendar();

/*
==============================
Info panel
==============================
*/
const panel = document.querySelector(".info-panel");
const closePanelButton = document.querySelector(".panel-close-button");
const infoPanelButton = document.querySelector(".info-panel-button");

// Expand the information panel and check its content.
// Load the empty state if the panel is empty.
infoPanelButton.addEventListener("click", () => {
  const panelBlank = document.querySelector(".panel-container");
  const emptyStateTmpl = document.getElementById("empty-state");

  if (panelBlank.textContent.trim() === "") {
    const clone = emptyStateTmpl.content.cloneNode(true);

    panelBlank.appendChild(clone);
  }

  panel.classList.add("open");
});

// Collapsed information panel.
closePanelButton.addEventListener("click", () => {
  panel.classList.remove("open");
});
