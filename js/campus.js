/*function showFloor(n) {
    const isFl = n === 1;
    console.log("isFl: " + n);
    floorHF1.classList.toggle("active", isFl);
    floorHF2.classList.toggle("active", !isFl);
    btnHF1.classList.toggle("active", isFl);
    btnHF2.classList.toggle("active", !isFl);
}*/

const floorHF1 = document.getElementById("buildingHF1");

let sectorH;


async function loadSvgInto(el, url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  el.innerHTML = await res.text();
  const svg = document.querySelector("svg");

  sectorH = document.getElementById("sector-h");

  console.log("Sector H: " + sectorH);
  
  //document.querySelector(".wrapper").classList.toggle("side-panel-open");
    initSvg(svg);
  
    svg.addEventListener("click", (e) => {

    const sector = e.target.closest(".sector");
    console.log("SECTOR: " + sector.id)
    if (!sector) return;


    switch(sector.id) {
      case "sector-h":
        panel.classList.add("open");
        break;
    }


    /*document.getElementById("title").textContent =
        sector.dataset.name;

    document.querySelector(".wrapper")
        .classList.add("side-panel-open");*/
});
  



}

(async function init() {
    await Promise.all([
        loadSvgInto(floorHF1, "./assets/maps/campus20/campus-test.svg"),
        //loadSvgInto(floorHF1, "./assets/maps/campus20/campus-test.svg"),
    ]);

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
