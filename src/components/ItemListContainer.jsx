import {useEffect, useState} from "react";
import { NeedData } from "../helpers/NeedData";
import ItemList from "./ItemList";

const ItemListContainer = ()=>{

    const [product, setProduct] = useState([])
    console.log(product)

    useEffect(()=>{

        

        NeedData()
             .then((res)=>{
                setProduct(res)
             })

    }, [])

    

    return(

        <div > 
            <ItemList product={product}/>
        </div>

    )

}

export default ItemListContainer