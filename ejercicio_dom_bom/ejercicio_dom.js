'use strict'
window.addEventListener('load', function(){                                             //¡¡¡¡¡¡¡¡¡¡¡¡IMPORTANTE RECORDAR TODO CODIGO DENTRO DE AQUI!!!!!!!!!!!!!!!!!!! 
    console.log("DOM cargado");

    var formulario = document.querySelector("#formulario");
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display="none";

    formulario.addEventListener('submit', function(){
        console.log("Evento submit capturado");
      

        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;

        if(nombre== "" || nombre.lenght ==0){                                  
            alert("El nombre no es valido");    
            return false;
            
        }
        if(apellidos== "" || apellidos.lenght ==0){                                     //trim comprueba espacios por delante y detras pero no funciona porque es empty string en vez de null
            alert("Los apellidos no son validos");    
            return false;
            
        }
        if(edad<=0 || isNaN(edad)){                                                     //inNaN es numero
            alert("Edad no es valida");    
            return false;
            
        }

        box_dashed.style.display= "block";

        console.log(nombre, apellidos, edad);

        /*var parrafo = document.createElement("P");
        parrafo.append(nombre);     
        parrafo.append(apellidos);
        parrafo.append(edad);
        box_dashed.append(parrafo);*/                                                    //esto seria correcto pero salen datos seguidos asi que es mejor crear un array para autosepararlo
        
        var datos_usuario = [nombre, apellidos, edad];
        var indice;
        for(indice in datos_usuario){
            var parrafo= document.createElement("p");
            parrafo.append(datos_usuario[indice])
            box_dashed.append(parrafo);
        }

    }); 

});
                        
