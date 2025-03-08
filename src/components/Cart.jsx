import './Cart.css'
import { useId, useMemo } from 'react'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem'
import { CartIcon, ClearCartIcon } from './Icons'

export const Cart = () => {
    const cartCheckBoxId = useId()
    const { cart, addToCart, removeFromCart, clearCart } = useCart()
    
    const sumTotal = useMemo(() => 
        cart.reduce((acc, el) => acc + el.price, 0).toFixed(), 
    [cart]) 

    return (
        <>
            <label className='cart-button' htmlFor={cartCheckBoxId} title='Carrito'>
                <CartIcon />
                {cart.length > 0 && <span className="cart-count"> {cart.length} </span>}
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

                <p>
                    Total price: ${sumTotal}     
                </p>
                <button onClick={clearCart} className='btn-clear'>
                    <ClearCartIcon />
                </button>

            </aside>
        </>
    )
}