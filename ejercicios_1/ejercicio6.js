'use strict'

// programa que diga si un numero es par o impar y tiene que tener ventana prompt, si no es valido que pida de nuevo el numero

var numero = parseInt(prompt("introduce un numero", 0));

while(isNaN(numero)){
    var numero = parseInt(prompt("introduce un numero", 0));
}

if(numero%2 ==0){

    console.log("es un par "+ numero);
}else{
    console.log("el numero es impar "  + numero);
}