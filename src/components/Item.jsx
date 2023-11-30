import { Link } from "react-router-dom"
import "./Item.css"

const Item = ({product})=>{

    return(
        <div>
            
            <div className="target">
            <img src={product.imagen} alt=""/>
            <div>

                <h4>{product.titulo}</h4>
                <p>Precio : ${product.precio}</p>
                <p>Categoria : {product.categoria.id}</p>
                <div className="link-container">
                  <Link  to={`/Item/${product.id}`} className="link">Ver mas</Link>

                </div>

            </div>
            </div>

        </div>
    )
}

export default Item