const Galeria = document.getElementById("trabajos") //accedemos a la galeria 


const Observador = new IntersectionObserver((entries)=>{ ///creamos practicamente una funcion observador el cual esta contiene siertos metodos 
 
    if(entries[0].isIntersecting){ // el metodo entra pero a este funcion con otros metodos el cual se encuentrar en un array , interscting nos avisa de cuando cumple las opciones de abajo

        const trabajos = Galeria.querySelectorAll(".trabajos__imagenes a") // traemos todos los trabajos para activarles su css

        trabajos.forEach((trabajo,index)=>{ //recorremos los trabajos y le aplicamos un pequeño efecto con setTimeou() para activar el efecto de 1 en 1 

            setTimeout(()=>{

                trabajo.classList.add("trabajos__trabajo--visible")

            } , index * 100)
        })
    }

    
},{ // opciones para cuando entre en visibilidad el objeto
    rootMargin : '0px', // sirven para aumentar o reducior el cuadro delimitador
    threshold : 0.4 // y este para que sepa en que porcentaje de ese limite va entrar en funcion el observador
})


Observador.observe(Galeria) //aca hacemos el llamado de la funcion con el metodo que vamos a utilizar en este caso la funcion es para que nos observe el elemento selecionado