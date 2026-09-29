const imageViewer = document.getElementById("imageViewer");
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
});

/*
==============================
Calendar.
==============================
*/
const monthYear = document.getElementById("month-year");
const calendarDays = document.getElementById("calendar-days");

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
    calendarDays.innerHTML = '<div class="empty"></div>';
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

function previousMonth() {
  date.setMonth(date.getMonth() - 1);
  showCalendar();
}

function nextMonth() {
  date.setMonth(date.getMonth() + 1);
  showCalendar();
}

showCalendar();