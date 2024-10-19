const Item = ({prod}) => {
    return (
        <div>
            <img src={prod.image} alt={prod.title} />
            <h2>{prod.title}</h2>
            <p><b>${prod.price}</b></p>
            <p>{prod.description}</p>
        </div>
    )
}

export default Item;