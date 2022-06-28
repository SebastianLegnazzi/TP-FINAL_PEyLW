/**************************************/
/************* ZAPATOS ****************/
/**************************************/
var nombreZapatoSeleccionado;


function funcionZapato(){
    let seleccionGenero, divContentZapatos;
    divContentZapatos = document.getElementById("content_zapatos")
    seleccionGenero = obtenerSeleccionadoRadio(document.getElementsByName("generoZapato"));
    if(seleccionGenero == "hombre"){
        divContentZapatos.innerHTML = `
        <div class="content__tarjetas">
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)">
                <label for="zapato-hombre-1">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/hombre/hombre1.jpg" alt="zapatos negros">
                        <p>Zapatos Galan negros</p>
                        <input type="radio" name="tipoZapato" id="zapato-hombre-1" value="1"> 
                    </div>
                </label>
            </div>
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)">
                <label for="zapato-hombre-2">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/hombre/hombre2.jpg" alt="zapatos marrones">
                        <p>Zapatos Galan marron</p>
                        <input type="radio" name="tipoZapato" id="zapato-hombre-2" value="2"> 
                    </div>
                </label>
            </div>
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)">
                <label for="zapato-hombre-3">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/hombre/hombre3.jpg" alt="zapatos negros con punta cuadrada">
                        <p>Zapatos Cuadrados</p>
                        <input type="radio" name="tipoZapato" id="zapato-hombre-3" value="3"> 
                    </div>
                </label>
            </div>
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)" >
                <label for="zapato-hombre-4">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/hombre/hombre4.jpg" alt="zapatos gamuzados">
                        <p>Zapatos Facha</p>
                        <input type="radio" name="tipoZapato" id="zapato-hombre-4" value="4"> 
                    </div>
                </label>
            </div>
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)">
                <label for="zapato-hombre-5">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/hombre/hombre5.jpg" alt="zapatos marrones chalinaodos">
                        <p>Zapatos Rufiny </p>
                        <input type="radio" name="tipoZapato" id="zapato-hombre-5" value="5"> 
                    </div>
                </label>
            </div>
        </div>`
        navegar("step-zapato", "step-zapato-referencia");
    }else if(seleccionGenero == "mujer"){
        divContentZapatos.innerHTML = `
        <div class="content__tarjetas">
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)">
                <label for="zapato-mujer-1">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/mujer/mujer1.jpg" alt="">
                        <p>Tacon Malchipis</p>
                        <input type="radio" name="tipoZapato" id="zapato-mujer-1" value="1"> 
                    </div>
                </label>
            </div>
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)">
                <label for="zapato-mujer-2">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/mujer/mujer2.jpg" alt="">
                        <p>Tacon Elegant</p>
                        <input type="radio" name="tipoZapato" id="zapato-mujer-2" value="2"> 
                    </div>
                </label>
            </div>
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)">
                <label for="zapato-mujer-3">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/mujer/mujer3.jpg" alt="">
                        <p>Tacon onFire</p>
                        <input type="radio" name="tipoZapato" id="zapato-mujer-3" value="3"> 
                    </div>
                </label>
            </div>
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)">
                <label for="zapato-mujer-4">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/mujer/mujer4.jpg" alt="">
                        <p>Tacon simple</p>
                        <input type="radio" name="tipoZapato" id="zapato-mujer-4" value="4"> 
                    </div>
                </label>
            </div>
            <div class="tarjeta-zapato" onclick="zapatoSeleccionado(this)">
                <label for="zapato-mujer-5">
                    <div class="tarjeta__zapato-info">
                        <img src="../img/step-zapatos/mujer/mujer5.jpg" alt="">
                        <p>Tacon Rosita</p>
                        <input type="radio" name="tipoZapato" id="zapato-mujer-5" value="5">
                    </div>
                </label>
            </div>
        </div>`
        navegar("step-zapato", "step-zapato-referencia");
    }else{
        alert("Debes seleccionar un genero para seguir!")
    }
}

function zapatoSeleccionado(divZapato){
    let buscar, i, divTarjetasZapatos, divZapatoSeleccionado, divReferencia;
    divZapato.classList.add("selected");
    divZapatoSeleccionado = divZapato;
    divReferencia = document.getElementById("content__referencia");
    nombreZapatoSeleccionado = divZapatoSeleccionado.children[0].children[0].childNodes[3].childNodes[0].nodeValue;
    divReferencia.innerHTML = "<p>Referencia</p>"+nombreZapatoSeleccionado;
    divTarjetasZapatos = document.getElementsByClassName("tarjeta-zapato");
    buscar = true;
    i = 0
    while(buscar && (i < divTarjetasZapatos.length)){
        let inputSeleccionado
        inputSeleccionado = divTarjetasZapatos[i].children[0].children[0].children[2];
        if((inputSeleccionado.checked == false) && (divTarjetasZapatos[i].classList[1] == "selected")){
            buscar = false;
            divTarjetasZapatos[i].classList.remove("selected");
        }else{
            i++;
        }
    }
}

function verificarDatosZapato(){
    let arrayInput;
    arrayInput = document.getElementsByName("medidaZapato");
    escribirSpanStep2(nombreZapatoSeleccionado);
    if((arrayInput[0].value > 11.7) && (arrayInput[0].value < 27.4)){
        navegar('step-zapato-medidas','step-2');
        arrayInput[0].classList.remove("inputInvalido");
    }else{
        alert("Los calzados son desde talle 11.8 a 27.3");
        arrayInput[0].classList.add("inputInvalido");
    }
}