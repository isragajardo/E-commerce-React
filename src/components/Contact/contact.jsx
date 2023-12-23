
import {useForm} from "react-hook-form"

function Contact(){

   
    const {register, handleSubmit} = useForm();

    const enviar =(data)=>{

        console.log("enviado", data)

    }


    return(
        <div  className="container">
            <form  className="form" onSubmit={handleSubmit(enviar)}>
                
                <input 

                type="text" 
                placeholder="Ingresa tu Nombre"
                {...register("name")}

                />

                <input 
                type="email" 
                placeholder="Ingresa tu email"
                {...register("email")}
               

                />

                <input 
                type="Phone"
                placeholder="Ingrese Telefono"
                {...register("phone")}
                

                />
                <input 
                type="text"
                placeholder="Ingrese Descripcion"
                {...register("description")}
                

                />

                <button type="submit"> Enviar</button>
            </form>
        </div>
    )

}

export default Contact
