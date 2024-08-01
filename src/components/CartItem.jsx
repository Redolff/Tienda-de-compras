export const CartItem = ({ img, title, price, quantity, addToCart }) => {

    return (
        <li>
            <img 
                src='https://http2.mlstatic.com/D_NQ_NP_864844-MLM51559388062_092022-O.webp'
                alt='Iphone'
                width={200}
                height={200}
            />
            <div>
                <strong> {title} </strong> - ${price}
            </div>
            <footer>
                <small>
                    Cantidad: {quantity}
                </small>
                <button onClick={() => console.log('addToCart(product)')}>+</button>
            </footer>
        </li>
    )
}