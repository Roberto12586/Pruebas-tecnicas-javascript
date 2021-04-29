//programa que pida dos numeros y que nos diga cual es el mayor, menor, si son iguales
//plus si los numeros son menores a 0 o letras nos lo vuelva a pedir

/*var numero1 = parseInt(prompt("introduce ele primer numero", 0));
var numero2 = parseInt(prompt("introduce el segundo numero", 0));

if(numero1>numero2){
    alert("es mayor el primero");
}else if(numero1==numero2){
    alert("iguales");
}else if(numero1<numero2){
    alert("es mayor el segundo");
}else{
    alert("no son numeros");
}*/



var resultado = parseInt(prompt ("introduce primer numeros", 0));
var resultado2 = parseInt(prompt ("introduce segundo numeros", 0));

if(resultado>resultado2){
    console.log(resultado + " es mayor que "+ resultado2);
}else if(resultado2>resultado){
    console.log(resultado2 + " es mayor que "+ resultado);
}else if (resultado == resultado2){
    console.log("son iguales")
}


else{
    console.log("introduce numeros correctos");
}

while(resultado<=0 || resultado2<= 0 ||isNaN(resultado) ||isNaN(resultado2)){
    resultado = parseInt(prompt ("introduce primer numeros", 0));
    resultado2 = parseInt(prompt ("introduce segundo numeros", 0));

    if(resultado>resultado2){
        console.log(resultado + " es mayor que "+ resultado2);
    }else if(resultado2>resultado){
        console.log(resultado2 + " es mayor que "+ resultado);
    }else if (resultado == resultado2){
        console.log("son iguales")
    }
    
    
    else{
        console.log("introduce numeros correctos");
    }
    

}
