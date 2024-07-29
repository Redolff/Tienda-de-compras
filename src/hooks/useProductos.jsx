import { useEffect, useState } from 'react'
import { products as initialProducts } from '../mocks/products.json'

export const useProductos = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {

        const newProductos = initialProducts
        setProductos(newProductos)

    }, [])

    return { productos }

}