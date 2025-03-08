import '../styles/Products.css'
import { useCart } from '../hooks/useCart'
import { AddToCartIcon, ClearCartIcon } from './Icons'
import { Link } from 'react-router-dom'

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
                                <Link to={`/product/${x.id}`} className='product-link'>
                                    <img
                                        src={x.thumbnail}
                                        alt={x.title}
                                    />
                                    <div className='title-price'>
                                        <strong> {x.title} - ${x.price} </strong> 
                                    </div>
                                </Link>
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