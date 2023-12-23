import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const Cart =()=>{

    const {cart, totalPrice, cleanCart} = useContext(CartContext);

    const handleClean = ()=>{
        cleanCart();
    }
    
    
 
    return (
        <div className="container">
            <h1>Carrito</h1>

           {
            cart.map((product)=>(
                
                <div className="cart-list" key={product.id}>

                    <img className="img-detail" src={product.imagen} alt=""/>
                    <h2>{product.title}</h2>
                    <h3>${product.price}</h3>
                    <p>Cantidad : {product.quantity}</p>

                </div>
            ))
           }

           <div className="container">

            {  cart.length > 0 && 

            <div className="container">
                  <div>
                  <h4>Precio : ${parseInt(totalPrice())}</h4>
                  <p>IVA : ${parseInt(totalPrice()*0.19)}</p>
                  <h4>Total : ${parseInt(totalPrice()+(totalPrice()*0.19))}</h4>
                  </div>
 
                  <div>
                     
                  <button onClick={handleClean}>Vaciar</button>
                  </div>

            </div>
             }

             { cart.length == 0 && 
                
                <div>
                    <h3>El carrito esta vacio :c</h3>
                </div>


             }
                  
                  
           </div>
        </div>

        
    )
}

export default Cart