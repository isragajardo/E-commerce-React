import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import {doc, getDoc} from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer =()=>{

    
    const [item,setItem] = useState(null)
    const id = useParams().id;

    useEffect(()=>{

        const docRef = doc(db, "products", id)
        getDoc(docRef)
          .then((data)=>{
            setItem({ ...data.data(),id: data.id})
          })
        

    },[id])

    return(
        <div>
            {item && <ItemDetail item={item} />}
            
            
            
            
        </div>
    )
    
}

export default ItemDetailContainer