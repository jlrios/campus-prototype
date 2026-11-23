const menuIcon = document.querySelector("#menu-icon");
const sidebar = document.querySelector(".sidebar");

const linkAbout = document.getElementById("link-about");

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

linkAbout.addEventListener("click", () => {
  const aboutModal = document.createElement("div");

  aboutModal.innerHTML = `
      <div style="padding:20px;">
        <div style="display: flex; gap: 8px; align-items:center;">
          <i class="fa-solid fa-circle-info fa-2x"></i>
          <h2 style="color: #343D3A">Acerca de</h2>
        </div>
        <p style="margin-top: 20px; color: #343D3A;">
          El Campus Interactivo es una aplicación parcial desarrollada con fines demostrativos. No se pretende que esta aplicación sea un sistema de control escolar completo, sino más bien se trata de una aplicación complementaria de solo consulta.
        </p>
        <p style="margin-top: 20px; color: #343D3A;">
          Su funcionalidad se limita a presentar, de manera representativa, las características y el tipo de funcionalidades que integrará la aplicación de producción.
        </p> 
        <div style="
          display:flex;
          align-items: center;
          justify-content: center;
          margin-top: 20px;">
          <button id="close-about" type="button" class="button-panel">
          <i class="fa-solid fa-rectangle-xmark"></i>   
          <strong>Cerrar</strong>
          </button>
        </div>
      </div>
    `;

  const aboutModalWindow = new WinBox({
    class: ["map-preview-window"],
    title: "Acerca de",
    x: "center",
    y: "center",
    background: "#e25619",
    modal: true,
    mount: aboutModal,
    index: 1000,
    width: "30%",
    height: "40%",
  });

  const closeAbout = document.getElementById("close-about");

  closeAbout.addEventListener("click", () => {
    aboutModalWindow.close();
  });
});
