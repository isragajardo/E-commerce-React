import {useEffect, useState} from "react";
import { NeedData } from "../../helpers/NeedData";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ()=>{

    const [product, setProduct] = useState([])
    const [title, setTitle] = useState([])
    const category = useParams().categoria
    console.log(category)

    useEffect(()=>{

        

        NeedData()
             .then((res)=>{
                if(category)
                {
                    setProduct(res.filter((prod)=> prod.categoria.id === category))
                    setTitle(category)

                }else{
                    setProduct(res)
                    setTitle("productos")

                }
                
             })

    }, [category])

    

    return(

        <div > 
            <ItemList product={product} title={title}/>
        </div>

    )

}

export default ItemListContainer