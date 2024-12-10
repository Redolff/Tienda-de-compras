import { useEffect, useState } from 'react'

export const useProductos = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async() => {
            const API = 'https://dummyjson.com/products'
            try{
                const response = await fetch(API)
                if(!response.ok) {
                    throw new Error('Error fetching API')
                }

                const data = await response.json()
                const newProducts = data.products
                setProducts(newProducts)
            }
            catch(e){
                console.log('error', e.message)
            }
        }
        fetchData()
    }, [])

    return { products }
}