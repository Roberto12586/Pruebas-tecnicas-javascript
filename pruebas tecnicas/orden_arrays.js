/*IMPLEMENTAR UN ALGORITMO QUE COMBINE DOS ARRAYS ORDENADOS OBTENIENDO UN ARRAY ORDENADO
ANALICE EL ORDEN DE SU ALGORITMO 
IMPLEMENTE UN ALGORITMO EL CUAL DADO UN ARRAY CUALQUIERA LO ORDENE
ANALICE EL ORDEN DE SU ALGORITMO*/

var arr1 = [1,2,3,4];
var arr2 = [3,4,5,6,7];



function combinar(arr1, arr2){
    var Array_combinado = [];
    

    //recorrer el array hasta que uno quede vacio

    while(arr1.length && arr2.length){          //quiere decir que es true no 0 (false)  if(0) = false
        
        var PrimerElemento
        if(arr1[0] < arr2[0]){
            //sacar el primer elemento segundo etc  de arr1, hasta que no cumpla condicion  y ponerlo en arraycombinado
            
            PrimerElemento = arr1.shift();               //shift saca el primer elemento y lo da por return por lo que queda vacio para siguiente posicion

        }else{
            //sacar el primer elemento, segundo etc  de arr2, hasta que no cumpla condicion  y ponerlo en arraycombinado
            
            PrimerElemento = arr2.shift();
        }
        Array_combinado.push(PrimerElemento);               //lo pongo en el combinado
    
        
    }
    Array_combinado = Array_combinado.concat(arr1).concat(arr2);
    
    return Array_combinado;
}

// si ejecutamos da correcto, si reejecutamos da valor restante de fuerda del while

