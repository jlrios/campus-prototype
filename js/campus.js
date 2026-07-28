const floorHF1 = document.getElementById("buildingHF1");
const sectorToast = document.querySelector(".sector-toast");
const sectorSelected = document.querySelector("#sector-toast");

let sectorH;
let toastSectors = {};


async function loadSvgInto(el, url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  el.innerHTML = await res.text();
  const svg = document.querySelector("svg");

  sectorH = document.getElementById("sector-h");
  
  initSvg(svg);

    svg.addEventListener("pointerover", (e) => {
      const sector = e.target.closest(".sector")
      if (!sector) return;
      
      const sectorTitle = sectorSelected.querySelector(".sector-text");
      const sectorDescription = sectorSelected.querySelector(".sector-text");
      const sectorIcon = sectorSelected.querySelector(".sector-icon");

      let title = sectorTitle.querySelector("h3");
      let description = sectorDescription.querySelector("p");
      let icon = sectorIcon.querySelector("i");

          switch(sector.id) {
        case "sector-h": 
          title.textContent = toastSectors.h.title;
          description.textContent = toastSectors.h.description;
          icon.className = toastSectors.h.icon;
          sectorToast.classList.add("active");
          break;
        case "sector-c1":
          title.textContent = toastSectors.c1.title;
          description.textContent = toastSectors.c1.description;
          icon.className = toastSectors.c1.icon;
          sectorToast.classList.add("active");
          break;
        case "sector-d":
          title.textContent = toastSectors.d.title;
          description.textContent = toastSectors.d.description;
          icon.className = toastSectors.d.icon;
          sectorToast.classList.add("active");
          break;
        case "sector-m":
          title.textContent = toastSectors.m.title;
          description.textContent = toastSectors.m.description;
          icon.className = toastSectors.m.icon;
          sectorToast.classList.add("active");
          break;
        case "sector-c2":
          title.textContent = toastSectors.c2.title;
          description.textContent = toastSectors.c2.description;
          icon.className = toastSectors.c2.icon;
          sectorToast.classList.add("active");
          break;
      }
    });

    svg.addEventListener("pointerout", (e) => {
      const sector = e.target.closest(".sector");
      if (!sector) return;
      switch(sector.id) {
        case "sector-h":
          sectorToast.classList.remove("active");
          break;
        case "sector-d":
          sectorToast.classList.remove("active");
          break;
        case "sector-c1":
          sectorToast.classList.remove("active");
          break;
        case "sector-c2":
          sectorToast.classList.remove("active");
          break;
        case "sector-m":
          sectorToast.classList.remove("active");
          break;
        }
    });

    svg.addEventListener("click", (e) => {

    const sector = e.target.closest(".sector");
    if (!sector) return;


    switch(sector.id) {
      case "sector-h":
        panel.classList.add("open");
        break;
    }
  });
}

(async function init() {

  await Promise.all([
    loadSvgInto(floorHF1, "./assets/maps/campus20/campus-test.svg"),
  ]);

  const response = await fetch("./../data/toast-sectors.json");

  toastSectors = await response.json();

  console.log(toastSectors);

})().catch(console.error);