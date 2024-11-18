console.log("que se dice");
import {AnimarTexto}  from './AnimarTexto.js'
import './AnimarGaleria.js'
import './MostrarTrabajo.js'
import './slider.js'
import './MostrarFooter.js'


window.addEventListener("load",async(e)=>{

   e.preventDefault()

   await AnimarTexto(document.querySelector(".hero__titulo--uno")) // el wait espera a que la promesa se resuelva para poder seguir con su ejecucion
   await AnimarTexto(document.querySelector(".hero__titulo--dos"))

   document.querySelectorAll(".hero__burbuja")[0].classList.add("hero__burbuja--active-1") // despues de esperara la ultima asincronia , se busca todas las burbujas 
   document.querySelectorAll(".hero__burbuja")[1].classList.add("hero__burbuja--active-2") // no devulve un nodelist en array alcual podemos hacerder por index y activarles su css

   

})