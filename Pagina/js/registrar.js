/**************************************/
/************ CREAR CUENTA ************/
/**************************************/

function crearCuenta(){
    if(datosObligatorios()){
        var nombre, email, contraseña
        localStorage.setItem("")
    }
}

/**************************************/
/******** CAMPOS OBLIGATORIOS *********/
/**************************************/

/* Verifica a traves de una expresion regular que cumplan con los requisitos */
function datosObligatorios(){
    let arrayDatosValidar, datosCorrectos, contraseñaIguales;
    arrayDatosValidar = [];
    arrayDatosValidar["nombre"] = document.getElementById("input-usuario-resgistrar");
    arrayDatosValidar["contraseña"] = document.getElementById("input-contraseña-Registrar");
    arrayDatosValidar["confContraseña"] = document.getElementById("input__confirmar-contraseña-Registrar");
    arrayDatosValidar["email"] = document.getElementById("input-inputEmail");
    arrayDatosValidar["telefono"] = document.getElementById("input__numero-Registrar");
    arrayDatosValidar["fechaNac"] = document.getElementById("input__fecha-Registrar");
    contraseñaIguales = verificarContraseñaIgual(arrayDatosValidar["contraseña"], arrayDatosValidar["confContraseña"]);
    for(const index in arrayDatosValidar){
        if(validarDato(arrayDatosValidar[index].value, index)){
            arrayDatosValidar[index].classList.remove("obligatorio");
            arrayDatosValidar[index].classList.add("correcto");
            datosCorrectos = true;
        }else{
            arrayDatosValidar[index].classList.add("obligatorio");
            arrayDatosValidar[index].classList.remove("correcto");
            datosCorrectos = false;
        }
    }
    if(datosCorrectos && contraseñaIguales){
        localStorage.setItem("nombre", arrayDatosValidar["nombre"].value);  
        localStorage.setItem("contraseña", arrayDatosValidar["contraseña"].value);  
        localStorage.setItem("email", arrayDatosValidar["email"].value);  
        localStorage.setItem("telefono", arrayDatosValidar["telefono"].value);  
        localStorage.setItem("fechaNac", arrayDatosValidar["fechaNac"].value);
        navegar("formulario-registrar","formulario-ingresar");
        alert("Se ha registrado satisfactoriamente!");
    }else{
        alert("Porfavor, corrija los campos seleccionados");
    }
}

/**************************************/
/*************** MODULOS **************/
/**************************************/

function validarDato(dato, tipo){
    let expresionRegular, verificacion;
    expresionRegular = {
        nombre: /^[a-zA-Z]{3,30}/,
        email: /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.\w+/,
        telefono: /^[0-9]{0,10}$/,
        contraseña: /^.{5,30}$/};
    switch(tipo){
        case "nombre":
            if(expresionRegular.nombre.test(dato)){
                verificacion = true;
            }else{
                verificacion = false;
            }
        break;

        case "contraseña":
            if(expresionRegular.contraseña.test(dato)){
                verificacion = true;
            }else{
                verificacion = false;
            }
        break;

        case "confContraseña":
            if(expresionRegular.contraseña.test(dato)){
                verificacion = true;
            }else{
                verificacion = false;
            }
        break;

        case "email":
            if((expresionRegular.email.test(dato)) && !(dato == localStorage.getItem("email"))){
                verificacion = true;
            }else{
                verificacion = false;
            }
        break;

        case "fechaNac":
            if(validarFecha(dato)){
                verificacion = true;
            }else{
                verificacion = false;
            }
        break;

        case "telefono":
            if(expresionRegular.telefono.test(dato)){
                verificacion = true;
            }else{
                verificacion = false;
            }
        break;
    }
    return verificacion;
}

function verificarContraseñaIgual(contraseña, confContraseña){
    let contraseñaIgual;
    if(!(contraseña.value == confContraseña.value)){
        contraseña.classList.add("obligatorio");
        confContraseña.classList.add("obligatorio");
        contraseñaIgual = false;
    }else{
        contraseña.classList.remove("obligatorio");
        confContraseña.classList.remove("obligatorio");
        contraseña.classList.add("correcto");
        confContraseña.classList.add("correcto");
        contraseñaIgual = true
    }
    return contraseñaIgual;
}

/**************************************/
/***** MODULOS VALIDACION FECHA *******/
/**************************************/

function esBisiesto(anio){
    if ((anio % 4 == 0) && (anio % 100 != 0) || (anio % 400 == 0)){
        bisiesto = true;
    }else{
        bisiesto = false;
    }
    return bisiesto;
}

function validarFecha(fecha){
    let anio, mes, dia
    anio = fecha.substring(0,4);
    mes = fecha.substring(5,7);
    dia = fecha.substring(8,11);
    if(fecha == ""){
        fechaValida = false;
    }else{
        anio = parseInt(anio);
        mes = parseInt(mes);
        dia = parseInt(dia);
        if((dia > 30) && ((mes == 4) || (mes == 6) || (mes == 9) || (mes == 11) )){
            fechaValida = false;
        }else if((dia > 31) && ((mes == 1) || (mes == 3) || (mes == 5) || (mes == 7) || (mes == 8) || (mes == 10) || (mes == 12))){
            fechaValida = false;
        }else if( (mes == 2) && (dia > 28) && (!esBisiesto(anio))){
            fechaValida = false;
        }else{
            fechaValida = true;
        }
    }
    return fechaValida;
}
