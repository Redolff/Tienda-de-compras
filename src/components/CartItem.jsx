export const CartItem = ({ thumbnail, title, price, quantity, addToCart, removeFromCart }) => {
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
                <button className="btn-item" onClick={addToCart}> + </button>
                <button className="btn-item" onClick={removeFromCart}> <i className="fas fa-trash"></i>
                </button>

            </footer>
        </li>
    )
}