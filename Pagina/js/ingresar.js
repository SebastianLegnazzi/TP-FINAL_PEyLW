function validarUsuario(){
    var inputUsuario, inputContraseña;
    inputUsuario = document.getElementById("input-usuario-Ingresar");
    inputContraseña = document.getElementById("input-contraseña-Ingresar");
    if(localStorage.getItem("nombre") == null){
        alert("La cuenta ingresada no existe!")
    }else{
        if((inputUsuario.value.toLowerCase() == localStorage.getItem("nombre").toLocaleLowerCase()) && (inputContraseña.value == localStorage.getItem("contraseña"))){
            inputUsuario.classList.remove("obligatorio");
            inputContraseña.classList.remove("obligatorio");
            inputUsuario.classList.add("correcto");
            inputContraseña.classList.add("correcto");
            window.location.assign("../index.html");
            localStorage.setItem("inicioSesion", "si");
            alert("Inicio sesion correctamente!")
        }else{
            inputUsuario.classList.remove("correcto");
            inputContraseña.classList.remove("correcto");
            inputUsuario.classList.add("obligatorio");
            inputContraseña.classList.add("obligatorio");
            localStorage.setItem("inicioSesion", "no");
            alert("Nombre y/o contraseña incorrecta o inexistente")
        }
    }
}