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

