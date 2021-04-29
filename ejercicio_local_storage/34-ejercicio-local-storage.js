'use strict'

//FOrmulario que permita añadir peliculas

var formulario = document.querySelector("#formpelis");

formulario.addEventListener('submit', function(){

    var titulo = document.querySelector("#añadepeli").value;                                        //No lo llega a hacer en firefox  error en chrome no lo muestra

    if(titulo.lenght >=1){
        localStorage.setItem(titulo, titulo);
    }
    
});

var ul = document.querySelector("#peliculas-lista");

for(var indice in localStorage){

    if(typeof localStorage[indice]== 'string'){
        var li = document.createElement("li");
        li.append(localStorage[indice]);
        ul.append(li);
    }
    
}

