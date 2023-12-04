import "./ItemDetail.css"

const ItemDetail = ({item})=>{

    
    return (

        
        
        <div className="container-ItemDetaill">

            <div className="product-detail">

                <img src={item.imagen} alt=""/>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="precio">{item.precio} </p>
                
                

            </div>


        </div>
    )
}

export default ItemDetail