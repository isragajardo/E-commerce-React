import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import "./ItemDetail.css"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({item})=>{


    const {cart,addToCart} = useContext(CartContext)
   

    const [count , setCount] = useState(1)
    
    const handleSubtract = ()=>{
        
        count>1 && setCount(count-1)
       

        
    }

    const handleAdd = ()=>{

        count < item.stock && setCount(count+1)
    
        

        
    }


    
    return (

        
        
        <div className="container-ItemDetail">

            <div className="product-detail">

                <div className="img-target">
                <img className="img-detail" src={item.imagen} alt=""/>
                </div>

                <div>
                <h3 className="title">{item.title}</h3>
                <p className="description">{item.description}</p>
                <p className="stock">Stock : {item.stock}</p>
                <p className="price">Precio : ${item.price} </p>
                <ItemCount item={item}
                 handleAdd={handleAdd}
                  handleSubtract={handleSubtract}
                   count={count}
                    addToCart={() => {addToCart(item,count)}}/>
                </div>
                
                

            </div>


        </div>
    )
}

export default ItemDetail