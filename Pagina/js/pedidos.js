/**************************************/
/********** CARGAR USUARIO ************/
/**************************************/

function cargarUsuario(){
    let spanNombre, spanTelefono, spanEmail;
    spanNombre = document.getElementById("nombre-suario")
    spanTelefono = document.getElementById("telefono-suario")
    spanEmail = document.getElementById("email-usuario")
    spanNombre.innerHTML = localStorage.getItem("nombre");
    spanTelefono.innerHTML = localStorage.getItem("telefono");
    spanEmail.innerHTML = localStorage.getItem("email");
}

/**************************************/
/************* INICIO *****************/
/**************************************/
var seleccion, arrayEleccionTraje = [], arrayDatoGuardados = [];

/* Escribe codigo en el HTML para mostrar los formularios segun la seleccion que se realice */
function inicioPrograma(){
    seleccion = obtenerSeleccionadoRadio(document.getElementsByName("TipoPedido"));
    if(seleccion == null){
            alert("Debes ingresar algun tipo de pedido para poder seguir!")
            let tituloTipoPedidos = document.getElementById("titulo-tipo-pedidos");
            tituloTipoPedidos.innerHTML += " *";
            tituloTipoPedidos.style = "color: red;"
    }else{
        navegar("step-1","step-"+seleccion);
    }
}

/**************************************/
/********* ENVIAR PEDIDO **************/
/**************************************/

function enviarPedido(){
    navegar("step-2", "step-enviar");
    let datosAdicionales, divMedidas, divSeleccion;
    divMedidas = document.getElementById("enviar__medidas");
    divSeleccion = document.getElementById("seleccion");
    datosAdicionales = document.getElementById("datos__adicionales");
    divSeleccion.innerHTML = "<h4>La tela elegida es: </h4>"+ "<p>"+document.getElementById("input__tipo-tela").value+"</p>"
    divSeleccion.innerHTML += "<h4>Las prendas seleccionadas son: </h4>";
    datosAdicionales.innerHTML = "<h4>Color seleccionado: </h4>"+"<p>"+"<div id='mostrar__color'></div>"+"</p>"+
    "<h4> Archivo ingresado: </h4>"+"<p>"+arrayDatoGuardados["referencia"]+"</p>"+
    "<h4> Comentarios ingresados: </h4>"+"<p>"+arrayDatoGuardados["comentario"]+"</p>";
    divColor = document.getElementById("mostrar__color");
    divColor.style = "background-color: "+arrayDatoGuardados["color"]+";";
    switch(seleccion){
        case "traje":
            for (const index in arrayDatoGuardados["tipoPrendas"]) {
                divSeleccion.innerHTML += "<p>▶ "+arrayDatoGuardados["tipoPrendas"][index]+"</p>";
            }
            if(arrayDatoGuardados["medidasSaco"] != null){
                divMedidas.innerHTML += "<div><br>"+"<h4>Las medidas del saco son:</h4>"+
                "<p> Medida Hombros: "+arrayDatoGuardados["medidasSaco"]["hombros"]+"</p>"+
                "<p> Medida Mangas: "+arrayDatoGuardados["medidasSaco"]["mangas"]+"</p>"+
                "<p> Medida Pecho: "+arrayDatoGuardados["medidasSaco"]["pecho"]+"</p>"+
                "<p> Medida Abdomen: "+arrayDatoGuardados["medidasSaco"]["abdomen"]+"</p>"+
                "<p> Medida Largo: "+arrayDatoGuardados["medidasSaco"]["largo"]+"</p>"+"</div>";
                
            }
            if(arrayDatoGuardados["medidasChaleco"] != null){
                divMedidas.innerHTML += "<div><br>"+"<h4>Las medidas del chaleco son:</h4>"+
                "<p> Medida Largo: "+arrayDatoGuardados["medidasChaleco"]["largo"]+"</p>"+
                "<p> Medida Pecho: "+arrayDatoGuardados["medidasChaleco"]["pecho"]+"</p>"+
                "<p> Medida Cintura: "+arrayDatoGuardados["medidasChaleco"]["cintura"]+"</p>"+
                "<p> Medida Cadera: "+arrayDatoGuardados["medidasChaleco"]["cadera"]+"</p>"+"</div>";
            }
            if(arrayDatoGuardados["medidasPantalon"] != null){
                divMedidas.innerHTML += "<div><br>"+"<h4>Las medidas del pantalon son:</h4>"+
                "<p> Medida Cadera: "+arrayDatoGuardados["medidasPantalon"]["cadera"]+"</p>"+
                "<p> Medida Tiro DEL: "+arrayDatoGuardados["medidasPantalon"]["tiroDel"]+"</p>"+
                "<p> Medida largo: "+arrayDatoGuardados["medidasPantalon"]["largo"]+"</p>"+
                "<p> Medida Muslo: "+arrayDatoGuardados["medidasPantalon"]["muslo"]+"</p>"+"</div>";
            }
            if(arrayDatoGuardados["medidasCamisa"] != null){
                divMedidas.innerHTML += "<div><br>"+"<h4>Las medidas del camisa son:</h4>"+
                "<p> Medida Hombros: "+arrayDatoGuardados["medidasCamisa"]["hombros"]+"</p>"+
                "<p> Medida Sisa: "+arrayDatoGuardados["medidasCamisa"]["sisa"]+"</p>"+
                "<p> Medida Largo: "+arrayDatoGuardados["medidasCamisa"]["largo"]+"</p>"+
                "<p> Medida Manga: "+arrayDatoGuardados["medidasCamisa"]["manga"]+"</p>"+
                "<p> Medida Cuello: "+arrayDatoGuardados["medidasCamisa"]["cuello"]+"</p>"+"</div>";
            }
        break;
            
        case "vestido":
            divSeleccion.innerHTML += "<p>▶ "+arrayDatoGuardados["tipoVestido"]+"</p>";
            divMedidas.innerHTML += "<div><br>"+"<h4>Las medidas del vestido son:</h4>"+
            "<p> Medida Pecho: "+arrayDatoGuardados["medidaVestido"]["pecho"]+"</p>"+
            "<p> Medida Cintura: "+arrayDatoGuardados["medidaVestido"]["cintura"]+"</p>"+
            "<p> Medida Cadera: "+arrayDatoGuardados["medidaVestido"]["cadera"]+"</p>"+
            "<p> Medida Largo: "+arrayDatoGuardados["medidaVestido"]["largo"]+"</p>";
        break;

        case "zapato":
            divSeleccion.innerHTML += "<p>▶ "+arrayDatoGuardados["tipoZapato"]+"</p>";
            divMedidas.innerHTML += "<div><br>"+"<h4>Las medidas del zapato son:</h4>"+
            "<p> Largo del pie: "+arrayDatoGuardados["medidaZapato"]+"</p>";
        break;
    }
}

/**************************************/
/************* MODULOS ****************/
/**************************************/

function escribirSpanStep2(texto){
    let arraySpanStep2
    arraySpanStep2 = document.getElementsByClassName('tipo-prenda-seleccionado');
    for (const index in arraySpanStep2) {
        arraySpanStep2[index].innerHTML = texto;
    }
}
function clearEnviar(){
    let divSeleccion, divMedidas;
    divSeleccion = document.getElementById("seleccion");
    divMedidas = document.getElementById("enviar__medidas");
    divMedidas.innerHTML = " ";
    divSeleccion.innerHTML = " ";
}

function validacionCm(input){
    let validacionMedidas
    if(input.value > 0 && input.value <= 300){
        validacionMedidas = true
        input.classList.remove("inputInvalido");
    }else{
        validacionMedidas = false;
        input.classList.add("inputInvalido");
    }
    return validacionMedidas
}

function validacionArrayCm(arrayInput){
    let datosCorrectos;
    for(i=0; i < arrayInput.length; i++) {
        if(validacionCm(arrayInput[i])){
            datosCorrectos = true;
        }else{
            datosCorrectos = false;
            break;
        }
    };
    if(datosCorrectos){
        verificacion = true;
    }else{
        verificacion = false;
        alert("los valores validos son entre 1 y 300");
    }
    return verificacion;
}

/**************************************/
/********** GUARDAR DATOS *************/
/**************************************/

/* guarda datos en las variables */
function guardarDatosPedido(){
    let  color, referencia, comentario, input, arrayMedidas;
    color = document.getElementById("input__color");
    referencia = document.getElementById("input__referencia");
    comentario = document.getElementById("comentario__prenda");
    arrayDatoGuardados["color"] = color.value;
    if(referencia != null){
        arrayDatoGuardados["referencia"] = referencia.value;
    }
    arrayDatoGuardados["comentario"] = comentario.value;
    switch (seleccion){
        case "traje":
            arrayDatoGuardados["tipoPrendas"] = arrayEleccionTraje;
            for (const index in arrayEleccionTraje){
                switch(arrayEleccionTraje[index]){
                    case "saco":
                        input = document.getElementsByName("medidaSaco");
                        arrayMedidas = [];
                        arrayMedidas["hombros"] = input[0].value;
                        arrayMedidas["mangas"] = input[1].value;
                        arrayMedidas["pecho"] = input[2].value;
                        arrayMedidas["abdomen"] = input[3].value;
                        arrayMedidas["largo"] = input[4].value;
                        arrayDatoGuardados["medidasSaco"] = arrayMedidas;
                    break;

                    case "chaleco":
                        input = document.getElementsByName("medidaChaleco");
                        arrayMedidas = [];
                        arrayMedidas["largo"] = input[0].value;
                        arrayMedidas["pecho"] = input[1].value;
                        arrayMedidas["cintura"] = input[2].value;
                        arrayMedidas["cadera"] = input[3].value;
                        arrayDatoGuardados["medidasChaleco"] = arrayMedidas;
                    break;

                    case "pantalon":
                        input = document.getElementsByName("medidaPantalon");
                        arrayMedidas = [];
                        arrayMedidas["cadera"] = input[0].value;
                        arrayMedidas["tiroDel"] = input[1].value;
                        arrayMedidas["largo"] = input[2].value;
                        arrayMedidas["muslo"] = input[3].value;
                        arrayDatoGuardados["medidasPantalon"] = arrayMedidas;
                    break;

                    case "camisa":
                        input = document.getElementsByName("medidaCamisa");
                        arrayMedidas = [];
                        arrayMedidas["hombro"] = input[0].value;
                        arrayMedidas["sisa"] = input[1].value;
                        arrayMedidas["largo"] = input[2].value;
                        arrayMedidas["manga"] = input[3].value;
                        arrayMedidas["cuello"] = input[3].value;
                        arrayDatoGuardados["medidasCamisa"] = arrayMedidas;
                    break;
                }
            }
        break;
            
        case "vestido":
            arrayDatoGuardados["tipoVestido"] = obtenerSeleccionadoRadio(document.getElementsByName("TipoVestido"))
            input = document.getElementsByName("medidasVestido");
            arrayMedidas = [];
            arrayMedidas["pecho"] = input[0].value;
            arrayMedidas["cintura"] = input[1].value;
            arrayMedidas["cadera"] = input[2].value;
            arrayMedidas["largo"] = input[3].value;
            arrayDatoGuardados["medidaVestido"] = arrayMedidas;
        break;

        case "zapato":
            arrayDatoGuardados["tipoZapato"] = nombreZapatoSeleccionado;
            arrayDatoGuardados["medidaZapato"] = document.getElementsByName("medidaZapato")[0].value
            arrayDatoGuardados["referencia"] = nombreZapatoSeleccionado;
        break;
    }
}
