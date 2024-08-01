import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import './Cart.css'
import { CartItem } from './CartItem'
import { CartIcon, ClearCartIcon } from './Icons'

export const Cart = () => {
    const cartCheckBoxId = useId()
    const { cart, addToCart, clearCart } = useCart()
    
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckBoxId}>
                <CartIcon />
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem 
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>

                <button onClick={() => console.log('ClearCart')}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}