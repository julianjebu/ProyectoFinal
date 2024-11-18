const slider = document.getElementById("slider") //acedemos al elemneto slider

let ClickPresionado = false // comienza en false por que no estamos presionando el click
let CordenadaInicial
let CordenadaScroll


const PresionarClick = (e)=>{ // cada que llememos PresionarClick esta va ser verdadera
    
   ClickPresionado = true

    CordenadaInicial = e.pageX - slider.offsetLeft
    CordenadaScroll = slider.scrollLeft

  /*  console.log("Xpage",e.pageX); // nos muestra las cordenas x de donde dimos click dentro del elemento selecionado
   console.log('espaciado documento a elemento' , slider.offsetLeft)
   console.log("codernados del scroll",slider.scrollLeft);  */

   console.log(CordenadaScroll);
}

const MoverClick = (e)=>{
    
    if(!ClickPresionado){ // en caso de que no se este oprimiendo el click  finaliza la ejecución de la función
       
        return
    } //de lo contrario se muestra o se sigue mostrando la ejecucion de la funcion

    const espaciado = e.pageX - slider.offsetLeft // el evento toma una cordenada esta se lo restamos al punto de incio del elemento selecionado

    const distanciaRecorrida = espaciado- CordenadaInicial // de el espaciado que estamos recorriendo - de donde dimos click de primero  nos da la distancia recorrida

    slider.scrollLeft = CordenadaScroll - distanciaRecorrida // de la posicion de primera del scroll - la distancia que estamos recorriendo
                                                              // tomar en cuenta que si se desplaza hacia de derecha a izquierda se empieza en 0 y se va aumentadno pero en negativo              
    /* console.log("cordenada de escrollinicial : ",CordenadaScroll);
    console.log("cordenada de distanciaRecorrida : ",distanciaRecorrida); */
}

const SoltarClick = (e)=>{ //como ya no estamos presinando el click entonces cambiamos la variable
    
    ClickPresionado = false
}




slider.addEventListener("mousedown",PresionarClick) // evento para cuando dimos click en el elemento
slider.addEventListener("mousemove",MoverClick)// evento para cuando movemos el click en el elemento
slider.addEventListener("mouseup",SoltarClick)// evento para cuando soltamos el click de elemento
