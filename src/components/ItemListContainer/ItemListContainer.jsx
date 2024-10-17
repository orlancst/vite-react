import { useEffect, useState } from "react";
import data from "../../data/products.json";
import { ItemList } from "./ItemList";


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    console.log(productos.length);
    

    const askProducts = () => {

        return new Promise((resolve, reject) => {
            resolve(data)
        })
    }

    useEffect(() => {
        askProducts()
            .then((res) => {
                setProductos(res);
                console.log(productos.length);
            })

    }, []) 
    

    return (
        <ItemList productos={productos} />
    )
}