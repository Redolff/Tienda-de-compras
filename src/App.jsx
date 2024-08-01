import './App.css'
import { Products } from './components/Products'
import { useProductos } from './hooks/useProductos'
import { useFilters } from './hooks/useFilters'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import { CartProvider } from './context/CartContext'

export const App = () => {
    const { products } = useProductos()
    const { filteredProducts } = useFilters({ products })
      
    return (
        <CartProvider>
            <main>
                <Header />
                <Cart />    
                <Products products={filteredProducts}/>
            </main>
        </CartProvider>
    )
}