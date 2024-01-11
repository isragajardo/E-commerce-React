import { createContext, useEffect, useState } from "react"

export const CartContext = createContext();

const setStyleCount = document.querySelector("count");


const initialCart = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    

    const [cart, setCart] = useState(initialCart)

    const addToCart = (item, count) => {

        const ItemAdd = { ...item, quantity: count }



        const newCart = [...cart]
        const itsInCart = newCart.find((product) => product.id === ItemAdd.id)

        if (itsInCart) {

            itsInCart.quantity = itsInCart.quantity + count




        } else {

            newCart.push(ItemAdd)



        }

        setCart(newCart)

      



    }

    const countCart = () => {

        return cart.reduce((acc, prod) => acc + prod.quantity, 0)
    }

    const totalPrice = () => {

        return cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0)
    }

    const cleanCart = () => {
        setCart([])
    }

    useEffect(()=>{
        localStorage.setItem("cart", JSON.stringify(cart))
    },[cart])

    return (
        <CartContext.Provider value={{cart,addToCart,countCart,totalPrice,cleanCart}}>
         {children}
         </CartContext.Provider>
    )

}