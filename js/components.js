// Dropdown menu
/*const optionMenu = document.querySelector(".select-menu");
const selectBtn = optionMenu.querySelector(".select-btn");
const options = optionMenu.querySelectorAll(".option");
const selBtnText = optionMenu.querySelector("sel-btn-text");*/

const imageViewer = document.getElementById("imageViewer");
const viewerImage = document.getElementById("viewerImage");
const viewerCaption = document.getElementById("viewerCaption");
const closeButton = document.querySelector(".image-viewer__close");

function openImage(src, description, alt = "") {

  console.log("SRC: " + src)
  console.log("dakjdfkl "+imageViewer);

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

/*selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");  
});

options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    selBtnText.innerText =selectedOption;
    console.log(selectedOption);
  });
});*/

/*
  Image viewer
*/


