
import Item from "./Item.jsx"
import "./ItemList.css"
const ItemList = ({product})=>{

    return(
        <div className="container" >
            <h2 className="main-title">Productos</h2>

            <div className="product">

                {product.map((prod) => <Item product={prod} key={prod.id}/>)}



            </div>

        </div>
    )
}

export default ItemList