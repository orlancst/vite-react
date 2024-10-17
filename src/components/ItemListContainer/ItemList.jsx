export const ItemList = ( {productos} ) => {
    return (
        <div>
            <h1>PRODUCTOS</h1>
            {
                productos.length > 0 &&

                productos.map((prod) => {
                    return (
                        <div key={prod.id}>
                            <img src={prod.image} alt={prod.title} />
                            <h2>{prod.title}</h2>
                            <p><b>${prod.price}</b></p>
                            <p>{prod.description}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}