//DOM 
/*let titulo = document.querySelector('h1'); document.querySelector nos permite unir o puentear el .js con el html. y es 
variable tipo objeto
titulo.innerHTML = 'Hola mariela, bienvenida.';*/
let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados = [];// VER LÍNEA 51!
let numeroMaximo = 10 
console.log(numeroSecreto);

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

function verificarIntento() {
    
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); /*Con este se obtiene el valor
                                                                            ingresado desde el HTML, como tipo prompt*/
   
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `¡Acertaste el numero en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //activa el botón nuevo juego
    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento ('p', 'Mmm el número secreto es menor');
        
        }else{
            asignarTextoElemento ('p', 'El número secreto es mayor parce');
        }
        intentos++;
        limpiarCaja(); //se invoca la función de la lína 40-41.
    }
    
    return;
}
function limpiarCaja(){
  document.querySelector ('#valorUsuario').value = ''; // función que limpia la caja vacía en el HTML.
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo+1); // si el número generado esta incluido en la lista operamos
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Fin del juego, se sortearon todos los números posibles');
    }else{ 
        if (listaNumerosSorteados.includes(numeroGenerado)){ //FUNCION DE RECURSIVIDAD!!!!
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
            
        }  
    }
}    
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p',`Por favor, indica un número entre el 1 y el ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}
function reiniciarJuego(){
    limpiarCaja();//limpiar caja
    condicionesIniciales();//indicar mensaje de intervalo de números
    //Generar el número aleatorio(linea 58)
    //Inicializar el número de intentos (línea 58)
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');//Deshabilitar el botón nuevo juego
}

condicionesIniciales();

