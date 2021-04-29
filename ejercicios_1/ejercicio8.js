'use strict'

/* Hacer una calculadora que pida 2 numeros en pantalla, 
y si metemos uno mal nos lo vuelva a pedir. 
-Que nos muestre en el body de la pàgina en una alerta
Por la consola el resultado de sumar, restar, multiplicar y dividir esas 2 cifras.
*/

var numero1 = parseInt(prompt("introduce un numero1", 0));

var numero2 = parseInt(prompt("introduce un numero2", 0));


while(numero1 <0 ||numero2<0 ||isNaN (numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("introduce un numero1", 0));
    numero2 = parseInt(prompt("introduce un numero2", 0));
}

var resultado = "la suma " + " es " + (numero1+numero2)+ "<br/>"+                   //me da problemas concatena en vez de sumar  edit: era por no poner el parseInt (hay que identificar como numero)
                "la resta  " + " es " + (numero1-numero2)+ "<br/>"+
                "la multi  " +  "es " + (numero1*numero2)+ "<br/>"+
                "la division  " +" es " + (numero1/numero2);

var resultadocmd = "la suma " + " es " + (numero1+numero2)+  "\n" +                  // para mostrarlo desde alerta o consola \n
"la resta  " + " es " + (numero1-numero2)+ "\n"+
"la multi  " +  "es " + (numero1*numero2)+ "\n"+
"la division  " +" es " + (numero1/numero2);


document.write(resultado);
alert(resultadocmd);
console.log(resultadocmd);