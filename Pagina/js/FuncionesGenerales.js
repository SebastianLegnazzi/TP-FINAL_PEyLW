/* Cambia los formularios segun las selecciones que se realicen */
function navegar(desde, hacia){
    let stepDesde, stepHacia;
    stepDesde = document.getElementById(desde);
    stepHacia = document.getElementById(hacia);
    stepDesde.classList.remove("active");
    stepHacia.classList.add("active");
}

/* Recibe un array de checkbox y devuelve todos los seleccionados */
function obtenerSeleccionadoCheckbox(arrayCheckbox){
    let checkboxSeleccionado = []
    arrayCheckbox.forEach(checkbox => {
        if(checkbox.checked){
            checkboxSeleccionado.push(checkbox);
        }
    });
    return checkboxSeleccionado;
}

/* Devuelve la opcion seleccionada en el step-1 */
function obtenerSeleccionadoRadio(arrayRadio){
    let buscar, i, radioEncontrado;
    i = 0;
    buscar = true;
    radioEncontrado = null;
    while (buscar && i < arrayRadio.length){
        if (arrayRadio[i].checked){
            radioEncontrado = arrayRadio[i].value;
            buscar = false;
        }else{
            i++;
        }
    }
    return radioEncontrado;
}
