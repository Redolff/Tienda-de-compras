export const CartItem = ({ thumbnail, title, price, quantity, addToCart }) => {
    return (
        <li>
            <img 
                src={thumbnail}
                alt={title}
            />
            <div>
                <strong> {title} </strong> - ${price}
            </div>
            <footer>
                <small>
                    Cantidad: {quantity}
                </small>
                <button className="btn-item" onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}