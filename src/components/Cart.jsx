import './Cart.css'
import { useId } from 'react'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'
import { CartIcon, ClearCartIcon } from './Icons'

export const Cart = () => {
    const cartCheckBoxId = useId()
    const { cart, addToCart, removeFromCart, clearCart } = useCart()    

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckBoxId} title='Carrito'>
                <CartIcon />
            </label>
            <input id={cartCheckBoxId} type="checkbox" hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(x => (
                        <CartItem
                            key={x.id}
                            addToCart={() => addToCart(x)}
                            removeFromCart={() => removeFromCart(x)}
                            {...x}
                        />))
                    }
                </ul>

                <button onClick={clearCart} className='btn-clear'>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}