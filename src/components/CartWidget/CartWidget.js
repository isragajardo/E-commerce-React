import cartIcon from "./assets/cartIcon.svg"
import "./cart.css"
const CartWidget = ()=>{
    return(
        <div className="cart">
            <img src={cartIcon} alt="cart-widget"/>
            <p>0</p>

        </div>
    )
}

export default CartWidget