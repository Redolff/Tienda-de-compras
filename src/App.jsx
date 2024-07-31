import './App.css'
import { Products } from './components/Products'
import { useProductos } from './hooks/useProductos'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'

export const App = () => {
    const { products } = useProductos()
    const { filteredProducts, setFilters } = useFilters({ products })
      
    return (
        <main>
            <Header setFilters={setFilters}/>
            <Products products={filteredProducts}/>
        </main>
    )
}