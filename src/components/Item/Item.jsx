import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({product})=>{

    return(
        <div>
            
            <div className="target">
            <img src={product.imagen} alt=""/>
            <div className="item-target">

                <h4 className="title">{product.title}</h4>
                <p>Precio : ${product.price}</p>
                

            </div>
            <div className="link-container">
                <Link  to={`/Item/${product.id}`} className="link">VER MAS</Link>

                </div>
            </div>

        </div>
    )
}

export default Item