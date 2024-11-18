const AnimarTexto = (ParametroAnimar)=>{ // funcion para dar animacion segun los que tenga de dataset el elemento 

    const Texto = ParametroAnimar.dataset.texto // accedemos al texto que queremos animar e
    const Cursor = ParametroAnimar.querySelector(".hero__cursor") // en este caso tenemos un cursor que devemos activar como animacion extra
    Cursor.classList.add("hero__cursor--visible")   //lo haccemos por medio de activacion de su css
    
    for (let i = 0; i < Texto.length; i++) {     // para recorrer el texto accemos uso de un for 
        
        setTimeout(()=>{ //la funcion de setiomout es una funcion asincrona lo que significa que va a ejecutarse desde del timepo que le indiquemos 
        const Span = document.createElement("span") // creamos un span para isertarle la letra
        Span.append(Texto[i])    // le añadimos la letra al span
        ParametroAnimar.append(Span) // el span se lo añadimos al elemento donde lo queremos animar

        },i * 100) // es de recordar que el ciclo for se realiza istantaneo pero las tareaas asincronas de setTiomeot esperan en otra pila para su ejecucion, el for no para 
        
    }

    setTimeout(()=>{ // esta funcion se va a ejecuatar de ultimo tenemos un pequeño espera gracias a que sabemos de cuanto es el tiempo de la ultima funcion asincrona para que se activa este funcion

       const Cursores =[...ParametroAnimar.closest(".hero__header").querySelectorAll(".hero__cursor")] // obtenemos todos los cursores en un arry
       const index = Cursores.indexOf(Cursor) // buscamos el index del cursor alctual

       if(index < Cursores.length - 1){ // si el el primero removemos el cursor en la primera linea
        Cursor.classList.remove("hero__cursor--visible")
       }else{

        Cursor.classList.add("hero__cursor--active") // si es el ultimo activamos la animacion de cursor parpadenado
       }

    },Texto.length * 100)

    return new Promise((resolve)=>{ // retornamos una promesa para poder hacer uso del await que utilizamos en el index ademas de que nos sirve para su retroceso

            setTimeout(resolve ,Texto.length * 100); // le damos este tiempo por : la ultima letra que se agrega va a tener este timempo , por que para entonces las demas funciones ya se abran ejecutado 
            // en un menor intervalo de tiempo  
    })

}

const ejemplo = ()=>{

    console.log("que se dice");
}

export {AnimarTexto}