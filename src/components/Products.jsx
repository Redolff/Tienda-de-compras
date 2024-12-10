import './Products.css'
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, ClearCartIcon } from './Icons'

export const Products = ({ products }) => {

    const { cart, addToCart, removeFromCart } = useCart()

    const checkProductInCart = (product) => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <section className="products">
            <ul>
                {(products.map(x => {
                        const isProductInCart = checkProductInCart(x)
                        return (
                            <li key={x.id}>
                                <img
                                    src={x.thumbnail}
                                    alt={x.title}
                                    height={150}
                                />
                                <div>
                                    <strong> {x.title} </strong> - ${x.price}
                                </div>
                                <div>
                                    <button
                                        style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                                        onClick={() => {
                                            isProductInCart
                                                ? removeFromCart(x)
                                                : addToCart(x)
                                        }}>
                                        {
                                            isProductInCart
                                                ? <ClearCartIcon />
                                                : <AddToCartIcon />
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    }))
                }
            </ul>
        </section>
    )
}