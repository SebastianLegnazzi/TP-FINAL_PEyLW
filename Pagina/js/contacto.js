function enviarMensaje(){
    let checkboxChecked, inputEmail, inputNombre, inputComentario;
    checkboxChecked = obtenerSeleccionadoRadio(document.getElementsByName("TipoConsulta"));
    inputEmail = document.getElementsByName("email").value
    inputNombre = document.getElementsByName("nombre").value
    inputComentario = document.getElementsByName("comentario").value
    if((inputEmail == undefined) && (inputNombre == undefined) && (inputComentario == undefined) && (checkboxChecked == null)){
        alert("Debes rellenar el email, nombre y comentario para poder seguir!");
    }else{
        window.location.assign('../index.html');
        alert("Su mensaje fue enviado correctamente!");
    }
}