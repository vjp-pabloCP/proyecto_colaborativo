function mostrarImagen(id) { 
    var viewerImage = document.getElementById("viewerImage");
    var imagen = document.getElementById(id);
    var imagenViewer = document.getElementById("imageViewer");

    viewerImage.src = imagen.src;

    if (imagenViewer.style.display = "none") {
        imagenViewer.style.display = "flex";
    }
    
}

function cerrarVisor() {
    document.getElementById("imageViewer").style.display = "none";
}
window.onload = function () {
    document.getElementById('loader').style.display = 'none'; 
};

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;
  
    // Aplicar modo oscuro si está guardado en localStorage
    if (localStorage.getItem("darkMode") === "enabled") {
      body.classList.add("dark-mode");
    }
  
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("dark-mode");
  
      // Guardar la preferencia en localStorage
      if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
      } else {
        localStorage.setItem("darkMode", "disabled");
      }
    });
  });