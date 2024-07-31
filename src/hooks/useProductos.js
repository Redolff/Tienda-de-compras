import { useEffect, useState } from 'react'
import { products as initialProducts } from '../mocks/products.json'

export const useProductos = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const newProductos = initialProducts
        setProducts(newProductos)
    }, [])

    return { products }
}