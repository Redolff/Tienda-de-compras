import { useState } from 'react'
import './App.css'
import { Products } from './components/Products'
import { useProductos } from './hooks/useProductos'
import { Header } from './components/Header'

export const App = () => {
    const { productos } = useProductos()
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    })
    
    const filterProducts = (productos) => {
        return productos.filter(producto => {
            return (
                producto.price >= filters.minPrice && 
                    (
                    filters.category === 'all' ||
                    producto.category === filters.category
                    )
            )
        })
    }

    const filteredProducts = filterProducts(productos)
    
    return (
        <main>
            <Header setFilters={setFilters}/>
            <Products productos={filteredProducts}/>
        </main>
    )
}