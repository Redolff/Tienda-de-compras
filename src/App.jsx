import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from './components/Home'
import { ProductDetails } from './components/ProductDetails'
import { CartProvider } from './context/CartContext'
import { Header } from './components/Header'
import { Cart } from './components/Cart'
import './App.css'

export const App = () => {
    return (
        <BrowserRouter>
            <CartProvider>
                <Header />
                <Cart />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/product/:id' element={<ProductDetails />} />
                </Routes>
            </CartProvider>
        </BrowserRouter>
    )
}