

const ItemDetail = ({item})=>{

    
    return (

        
        
        <div className="container">

            <div className="product-detail">

                <img src={item.imagen} alt=""/>
                <h3 className="titulo">{item.titulo}</h3>
                <p className="descripcion">{item.descripcion}</p>
                <p className="precio">{item.precio} </p>
                hola
                

            </div>


        </div>
    )
}

export default ItemDetail