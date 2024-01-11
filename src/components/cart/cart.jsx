import React, { useContext } from "react"
import Swal from 'sweetalert2'
import { CartContext } from "../../context/CartContext"
import "./cart.css"


const Cart =()=>{

    const {cart, totalPrice, cleanCart} = useContext(CartContext);

    const handleClean = ()=>{
        cleanCart();
    }
    const handleCheckOut = ()=>{
        Swal.fire({
            title: 'Total $'+parseInt(totalPrice()),
            text: "Subtotal :"+parseInt(totalPrice()+(totalPrice()*0.19))+ " + IVA (19%)",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Pagar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Pagado!',
                'Muchas gracias por su compra!',
                'success'
                
              )
              cleanCart();
            }
            
          })
    }
    
    
 
    return (
        <div className="container">
            <h1>Carrito</h1>

           {
            cart.map((product)=>(
                
                <div className="cart-list" key={product.id}>

                    <img className="cart-img-detail" src={product.imagen} alt=""/>
                    <h2>{product.title}</h2>
                    <h3>${product.price}</h3>
                    <p>Cantidad : {product.quantity}</p>

                </div>
            ))
           }

           <div className="container">

            {  cart.length > 0 && 

            <div className="container">
                  <div className="total-price">
                  <h4>Precio : ${parseInt(totalPrice())}</h4>
                  <p>IVA : ${parseInt(totalPrice()*0.19)}</p>
                  <h4>Total : ${parseInt(totalPrice()+(totalPrice()*0.19))}</h4>
                  </div>
 
                  <div className="cart-button">
                     
                  
                  <button className="checkout" onClick={handleCheckOut}>Comprar</button>
                  <button className="clean" onClick={handleClean}>Vaciar</button>
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