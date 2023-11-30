import { Link } from "react-router-dom"


const Item = ({product})=>{

    return(
        <div className="product">
            
            <img src={product.imagen} alt=""/>
            <div>

                <h4>{product.titulo}</h4>
                <p>Precio : ${product.precio}</p>
                <p>Categoria : {product.categoria.id}</p>
                <Link to={`/Item/${product.id}`} className="ver-mas">Ver mas</Link>

            </div>

        </div>
    )
}

export default Item