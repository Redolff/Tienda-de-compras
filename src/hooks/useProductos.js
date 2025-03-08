import { useEffect, useState } from 'react'

export const useProductos = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
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
                console.log('error ', e.message)
                setLoading(false)
            }
            finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    return { products, loading }
}