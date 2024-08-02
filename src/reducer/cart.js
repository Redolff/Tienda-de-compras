export const initialState = []

export const reducer = (state, action) => {
    const { type, payload } = action
    switch (type){
        case 'ADD_TO_CART': {
            const productInCartIndex = state.findIndex(item => item.id === payload.id)
            // Producto no esta en el carrito
            if(productInCartIndex >= 0){
                const newCart = structuredClone(state)
                newCart[productInCartIndex].quantity += 1
                return newCart
            }
            // Producto no esta en el carrito
            return ([
                ...state,
                {
                    ...payload,
                    quantity: 1
                }
            ])
        }

        case 'REMOVE_FROM_CART': {
            //Filtro el carro y solo muestro los que no estan dentro de el.
            const newCart = state.filter(item => item.id !== payload.id)
            return newCart
        }

        case 'CLEAR_CART': {
            return initialState
        }
    } 
    
    return state
}