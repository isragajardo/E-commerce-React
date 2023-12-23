import { useState, useEffect } from "react"
import "./ItemCount.css"

function ItemCount({handleAdd, handleSubtract, count, addToCart}) {

   


    return(
        <div  className="count-container">

            
            
            
            <div>
            <button className="button-count button-count-subtract" onClick={handleSubtract}>-</button>
            </div>
            <div>
                
                <div className="count">
                    <p>{count}</p>
                </div>
                <div className="adToCart">
                    <button className="addToCart-button" onClick={addToCart}>Agregar al carrito</button>
                </div>
            </div>
            <div>
            <button className="button-count button-count-add" onClick={handleAdd}>+</button>
            </div>
        
        
        
    </div>
    )

}

export default ItemCount