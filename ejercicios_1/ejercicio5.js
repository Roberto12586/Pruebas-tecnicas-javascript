'use strict'

// programa que muestre todos los numeros divisores de un numero introducido por user

var numero = parseInt(prompt("introduce un numero ", 0 ));                  //numero es divisor de otro numro cuando al dividirlo entre si da 0

for(var i = 1; i<= numero; i++){
    

    if(numero%i ==0){
        console.log("divisor: "+ i)
    }
}