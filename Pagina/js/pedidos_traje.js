/**************************************/
/************* TRAJE ******************/
/**************************************/

function funcionTraje(){
    let opcionTraje;
    opcionTraje = obtenerSeleccionadoRadio(document.getElementsByName("TipoTraje"));
    if((arrayEleccionTraje.length == 0) && (opcionTraje == null)){
        alert("Tiene que seleccionar alguna opcion para seguir!")
    }else{
        switch (opcionTraje){
            case "saco":
                navegar("step-traje", "step-traje-1");
                if(!arrayEleccionTraje.includes("saco")){
                    arrayEleccionTraje.push("saco");
                }
            break;
            
            case "chaleco":
                navegar("step-traje", "step-traje-2");
                if(!arrayEleccionTraje.includes("chaleco")){
                    arrayEleccionTraje.push("chaleco");
                }
            break;

            case "pantalon":
                navegar("step-traje", "step-traje-3");
                if(!arrayEleccionTraje.includes("pantalon")){
                    arrayEleccionTraje.push("pantalon");
                }
            break;

            case "camisa":
                navegar("step-traje", "step-traje-4");
                if(!arrayEleccionTraje.includes("camisa")){
                    arrayEleccionTraje.push("camisa");
                }
            break;
        }
    }
}

function sumarPrendaTraje(arrayInput, step){
    let cantOpciones, divStepTraje, desicion;
    cantOpciones = document.getElementsByName("TipoTraje");
    escribirSpanStep2("traje");
    if(validacionArrayCm(arrayInput)){
        if(cantOpciones.length > 1){
            desicion = prompt('Desea agregar otra prenda? (si / no)');
            if(desicion.toLowerCase() == "si"){
                divStepTraje = document.getElementById("step-traje");
                /* Borra la prenda ya ingresada, para no repetirla */
                divStepTraje.children[1].children[(step - 1)].innerHTML = "";
                navegar("step-traje-"+step, "step-traje");
            }else{
                navegar("step-traje-"+step, "step-2");
            }
        }else{
            navegar("step-traje-"+step, "step-2");
        }
    }
}

