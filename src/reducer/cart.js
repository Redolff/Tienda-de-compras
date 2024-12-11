export const initialState = []

export const reducer = (state, action) => {
    const { type, payload } = action

    switch (type){

        case 'ADD_TO_CART': {
            const productInCartIndex = state.findIndex(item => item.id === payload.id)
            // Producto esta en el carrito
            if(productInCartIndex >= 0){
                const newCart = [...state]
                const product = newCart[productInCartIndex]
                //Actualizo cantidad
                product.quantity += 1
                //Actualizo precio total
                product.price = product.unitPrice * product.quantity;

                return newCart
            }
            // Producto no esta en el carrito
            return [
                ...state,
                {
                    ...payload,
                    quantity: 1,
                    unitPrice: payload.price,
                    price: payload.price
                }
            ]
        }

        case 'REMOVE_FROM_CART': {
            //Filtro el carro y solo muestro los que no estan dentro de el.
            return state.filter(item => item.id !== payload.id)
        }

        case 'CLEAR_CART': {
            return []
        }

        default: 
            return state
    } 
    
}