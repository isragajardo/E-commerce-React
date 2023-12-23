import { useContext } from "react"
import cartIcon from "./assets/cartIcon.svg"
import "./cartWidget.css"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";

const CartWidget = ()=>{

    const {countCart} = useContext(CartContext)
    
   

    return(
        

      <Link className="link" to="/carrito">
      <div className="cart">
      <img src={cartIcon} alt="cart-widget"/>
      <p className="count">{countCart()}</p>
      </div>
      
      </Link>


        
    )
}

export default CartWidget