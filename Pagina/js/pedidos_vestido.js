/**************************************/
/************* VESTIDO ****************/
/**************************************/

function funcionVestido(){
    let vestidoSeleccionado;
    vestidoSeleccionado = obtenerSeleccionadoRadio(document.getElementsByName("TipoVestido"));
    if (vestidoSeleccionado == undefined){
        alert("Debes seleccionar una opcion para poder seguir!");
    }else{
        navegar('step-vestido', 'step-vestido-1');
        escribirSpanStep2(vestidoSeleccionado);
    }
}

function verificarDatosVestido(){
    let arrayInput;
    arrayInput = document.getElementsByName("medidasVestido")
    if(validacionArrayCm(arrayInput)){
        navegar('step-vestido-1','step-2');
    }
}