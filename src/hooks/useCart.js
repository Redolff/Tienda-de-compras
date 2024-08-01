import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"

export const useCart = () => {
    const { cart, setCart} = useContext(CartContext)

    const addToCart = (product) => {

        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        // Producto esta en el carrito
        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        // Producto no esta en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))      
    }

    const clearCart = () => {
        setCart([])
    }

    return { cart, addToCart, clearCart }

}