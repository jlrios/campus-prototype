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

  const response = await fetch("../data/toast-sectors.json");

  toastSectors = await response.json();

  console.log(toastSectors);

})().catch(console.error);

/*sectorH.addEventListener("click", () => {
  "FC-No puede ser..."
})*/


//btnHF1.addEventListener("click", () => showFloor(1));
//btnHF2.addEventListener("click", () => showFloor(2));

/*document.querySelector(".wrap").addEventListener("click", (e) => {
  const classroom = e.target.closest(".classroom");
  if (!classroom) return;
  console.log("clicked:", classroom.dataset.index);
});*/
/*function initSVG(svg) {
const tooltip = document.getElementById("tooltip");

  console.log("svg -> " + svg);

  function showTooltip(sector) {
    const rect = sector.getBoundingClientRect();

    console.log(rect);

    // Posición fija (arriba del sector)
    const tooltipX = rect.left + rect.width / 2;
    const tooltipY = rect.top - 10;

    tooltip.style.left = `${tooltipX}px`;
    tooltip.style.top = `${tooltipY}px`;
    tooltip.style.transform = "translate(-50%, -100%)";

    tooltip.classList.remove("hidden");
  }

  function hideTooltip() {
    tooltip.classList.add("hidden");
  }

  svg.addEventListener("mouseover", (e) => {
    const sector = e.target.closest(".sector");
    if (!sector) return;
    showTooltip(sector);
  });

  svg.addEventListener("mouseout", (e) => {
    const sector = e.target.closest(".sector");
    if (!sector) return;
    hideTooltip();
  });
}  */

/*function initSVG() {
  const rect36 = document.getElementById('rect36');
  //console.log(rect36)
document.getElementById('rect36').addEventListener('mousemove', (e) => {
  let x = e.clientX
  let y = e.clientY

//console.log(x)

console.log(e.target.className);



  if (e.target.className === 'sector sector-h tooltip-box') {
    console.log("1")
    e.target.children[0].style.top = (y + 15) + 'px'
    e.target.children[0].style.left = (x + 15) + 'px'
  }

  if (e.target.parentNode.className === 'sector sector-h tooltip-box') {
    console.log("2")
    e.target.parentNode.children[0].style.top = (y + 15) + 'px'
    e.target.parentNode.children[0].style.left = (x + 15) + 'px'
  }
});
}*/

function initSvg(svg) {
 // const tooltip = document.getElementById("tooltip");

  /*svg.addEventListener("mouseover", (e) => {
    const sector = e.target.closest?.(".sector");
    if (!sector) return;

    const name = sector.dataset.name || sector.id || "Sector";
    tooltip.textContent = name;

    // Posición fija junto al sector (derecha + un poco abajo)
    const r = sector.getBoundingClientRect();
    tooltip.style.left = `${r.right + 12}px`;
    tooltip.style.top = `${r.top + 10}px`;

    tooltip.classList.remove("hidden");
  });

  svg.addEventListener("mouseout", (e) => {
    const sector = e.target.closest?.(".sector");
    if (!sector) return;

    tooltip.classList.add("hidden");
  });*/
}


/*document.querySelector(".side-panel-toggle").addEventListener("click", () => {
  let drawer = document.querySelector(".wrapper")
  console.log(drawer)
  if (drawer.classList.contains("wrapper") && drawer.classList.length === 1) {
    console.log(drawer.classList.value);
    console.log("if")
  document.querySelector(".wrapper").classList.toggle("side-panel-open");

  } else {
    console.log(drawer.classList.value)
      document.querySelector(".wrapper").classList.toggle("side-panel-open");

  }
    document.querySelector(".wrapper").classList.toggle("side-panel-open");

});*/