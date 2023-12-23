import {useEffect, useState} from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from "../../firebase/config"

const ItemListContainer = ()=>{

    const [product, setProduct] = useState([])
    const [title, setTitle] = useState([])
    const category = useParams().category
   
    

    useEffect(()=>{

        const productRef = collection(db, "products");
        const q = category ? query(productRef, where("category", "==", category)) : productRef
        
   


        getDocs(q)
          .then((data)=>{

            setProduct(data.docs.map((doc)=>{
                return {...doc.data(), id: doc.id,}

            
            }))
          })


        

       

    }, [category])

    

    return(

        <div > 
            <ItemList product={product} title={title}/>
        </div>

    )

}

export default ItemListContainer