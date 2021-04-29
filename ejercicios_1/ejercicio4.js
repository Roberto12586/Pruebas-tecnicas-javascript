'use strict'

//todos los impares entre dos numeros introducidos por user

var numero1 = parseInt(prompt("introduce numero 1 ", 0));  
var numero2 = parseInt(prompt("introduce numero 2 ", 0));  

while(numero1<numero2){
    numero1++;

    if(numero1%2 != 0){                         // Para sabersi es impar se hace con el resto dividido entre dos tiene que ser diferente a 0
        console.log("El " + numero1 +" Es impar" );
    }
}