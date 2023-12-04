
import {useEffect, useState} from "react";
import { NeedData } from "../../helpers/NeedData";

const ItemDetail = ()=>{

    
    

    const SearchCategori = ()=>{

        const [item, setProduct] = useState([])
    
        useEffect(()=>{
    
            
    
            NeedData()
                 .then((res)=>{
                    setProduct(res)
                 })
    
        }, [])
    }

    const search =()=>{



    }
        


    return (

        
        <div className="container-ItemDetaill">

            <div className="product-detail">

                <img src={item.imagen} alt=""/>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="precio">{item.precio} </p>
                
                

            </div>


        </div>
    )
}

export default ItemDetail