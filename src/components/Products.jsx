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
                                />
                                <div>
                                    <strong> {x.title} </strong> - ${x.price}
                                </div>
                                <div>
                                    <button
                                        className={isProductInCart ? 'remove-from-cart' : 'add-to-cart'}
                                        onClick={() => {
                                            isProductInCart
                                                ? removeFromCart(x)
                                                : addToCart(x)
                                        }}>
                                        {
                                            isProductInCart
                                                ? <span> Remover del carrito <ClearCartIcon /> </span>
                                                : <span> Agregar al carrito <AddToCartIcon /> </span>
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