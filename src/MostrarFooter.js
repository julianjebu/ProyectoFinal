/* const footer = document.querySelector("footer") */
const ventanaCorreo =  document.getElementById("ventana-correo")

document.body.addEventListener("click",(e)=>{

    e.preventDefault()
    
    if(e.target.closest('[data-action="abrir-ventana-correo"]')){ 

       ventanaCorreo.classList.add("ventana--active")
       document.body.style.overflow = 'hidden'
       ventanaCorreo.addEventListener("click",(e)=>{

            if(e.target.closest('.ventana__btn-cerrar') ){ 

                ventanaCorreo.classList.remove("ventana--active")
                document.body.style.overflow = ''

            }
            

       }) 
    }


})