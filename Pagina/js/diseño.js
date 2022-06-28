var ruta;

function abrirDetalle(imagen){
    let detallePopUp, detalleFoto;
    ruta = imagen.children[0].children[0].src;
    detalleFoto = document.getElementById("foto__detalle");
    detallePopUp = document.getElementById("detalle");
    detalleFoto.src = ruta;
    detallePopUp.style = "display: flex;"
}

function descargarImg(){
    let imagen, botonDescargar;
    imagen = document.getElementById("foto__detalle").src;
    botonDescargar = document.getElementById("detalle__guardar");
    botonDescargar.href = ruta
}

function cerrarDetalle(){
    let detallePopUp;
    detallePopUp = document.getElementById("detalle");
    detallePopUp.style = "display: none";
}