import Item from "./Item";

export const ItemList = ( {productos} ) => {
    return (
        <div>
            <h1>PRODUCTOS</h1>
            {
                productos.length > 0 &&

                productos.map((prod) => {
                    return (
                        <Item key={prod.id} prod={prod} />
                    )
                })
            }
        </div>
    )
}