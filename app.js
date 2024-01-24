
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;


//lo que hacemos es pasarle a la funcion un elemento y a ese elmento le asignamos el texto
function asignarTextoElemento(elemento, texto){
//creamos una variable para obtener el h1
let elementoHtml = document.querySelector(elemento);
//a la variable le asignamos un valor
elementoHtml.innerHTML = texto;
}


//Funcion de intento de usuario
function verificarIntento(){

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //evaluamos el numero digitado por el usuario vs el numero secreto generado
    if(numeroUsuario === numeroSecreto){
        console.log('Acertaste el numero');
        asignarTextoElemento('h3',  `Felicidades, Acertaste! en  ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else  {
        limpiarCaja();
        // el usuario no acerto
       if(numeroUsuario > numeroSecreto){
        asignarTextoElemento('h3', 'El número secreto es menor !')
       } else {
        asignarTextoElemento('h3', 'El número secreto es mayor !')
       } 
       intentos++;       
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}




//creamos una funcion para generar un numero aleatorio
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}


function CondicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', 'Indica un número del 1 a 10');
    asignarTextoElemento('h3', '');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    
    //Indicar mensaje 
    CondicionesIniciales(); 
   
    //Inicializar numero de intentos
    document.getElementById('reiniciar').setAttribute('disabled', 'true');

}


CondicionesIniciales();

