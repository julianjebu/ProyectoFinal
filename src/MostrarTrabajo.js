const trabajos = document.getElementById("trabajos")
const ventana = document.getElementById("ventana-trabajos")

const Trabajos = [//simulamos una base de datos con este array

    {
        id : '1',
        fecha : '1 de Enero de 2023',
        loremp : '1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?'
    },
    {
        id : '2',
        fecha : '2 de Enero de 2023',
        loremp : '2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?'
    },
    {
        id : '3',
        fecha : '3 de Enero de 2023',
        loremp : '3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?'
    },
    {
        id : '4',
        fecha : '4 de Enero de 2023',
        loremp : '4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?'
    },
    {
        id : '5',
        fecha : '5 de Enero de 2023',
        loremp : '5 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?'
    },
    {
        id : '6',
        fecha : '6 de Enero de 2023',
        loremp : '6 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quis, veniam eius nesciunt ex enim delectus, nobis perferendis ut minima optio id earum consectetur repellat ea natus qui, aliquid totam?'
    }

]

trabajos.addEventListener("click",(e)=>{ // evento para el elemento que contine las imagenes de los trabajos

    e.preventDefault()

    const trabajo = e.target.closest(".trabajos__trabajo")  // registramos lo que capturamos del evento
    
    if(trabajo){ //e.target.closest(".trabajos__trabajo") // comprobamos que si targeteamos ese elemento 

         /* ventana.classList.add("ventana--active")
        document.body.style.overflow = 'hidden'
         const id = trabajo.dataset.id
         ventana.querySelector(".ventana__imagen").src = `./img/trabajo-${id}.jpg`
         ventana.querySelector(".ventana__titulo").innerHTML = `Trabajo # ${id}`      
         
         ventana.addEventListener("click",(e)=>{

            if(e.target.closest('[data-action="cerrar-ventana"]')){ 

                console.log("BOTON DE CERRAR");
                ventana.classList.remove("ventana--active")
                document.body.style.overflow = ''
            }

            }) */

            const idTrabajo = trabajo.dataset.id // obtenemos el id de la foto

            const trabajoCLikeado = Trabajos.filter((trabajo)=>{

                if(trabajo.id === idTrabajo){

                    return trabajo
                }

            }) // traemos el trabajo de la base de datos segun el id que le dimos de la foto 

          const {id,fecha,loremp}  = trabajoCLikeado[0]; // una vez que trameos el trabajo de la base datos , extramos su info y la hacemos uso de ella en sus elementos correspondientes

          // activar el css poner el el numero del id y el loremp , para poner la imagen se busca con el query y se activaa con un addlinester

          
          
          ventana.querySelector(".ventana__imagen").src = trabajo.querySelector("img").src // al clikear tramos la direcion de la imagen y nos sirve para ponerla en la ventana imagen
          ventana.querySelector(".ventana__fecha").innerHTML = fecha // fecga de la base de datso
          ventana.querySelector(".ventana__parrafo").innerHTML = loremp // loremp de la base de datos
          ventana.querySelector(".ventana__titulo").innerHTML = `Trabajo # ${id}`// id traida de la base de datos       
            
          ventana.classList.add("ventana--active") // activamos la ventana 


          /* ventana.querySelector(".ventana__btn-cerrar").addEventListener("click",(e)=>{

            ventana.classList.remove("ventana--active")
          })
         */

          ventana.addEventListener("click",(e)=>{ // una vez abierta la ventana , disparamos un evento , comprobamos donde dimos click  y segun esto cerramos la ventana

            if(e.target.closest('[data-action="cerrar-ventana"]') || e.target.matches('.ventana__overlay') ){  // si dimos click en el boton cerrar o en el overley 

              
                ventana.classList.remove("ventana--active")
                document.body.style.overflow = ''// este es para quitar la barra lateral 
            }

            })
         

    }else{

        console.log("no es un trabajo");
    }
    
})    





