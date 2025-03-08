import { useParams } from "react-router-dom"
import { useCart } from "../hooks/useCart"
import { AddToCartIcon, ClearCartIcon } from "./Icons"
import { useProductos } from "../hooks/useProductos"
import { useFilters } from "../hooks/useFilters"
import { StarRating } from "./StarRating"
import '../styles/ProductDetails.css'

export const ProductDetails = () => {
    const { products, loading } = useProductos()
    const { filteredProducts } = useFilters({ products })
    const { id } = useParams()
    const { cart, addToCart, removeFromCart } = useCart()

    const product = filteredProducts.find((x) => x.id === Number(id))

    if(loading) return <h3> Cargando... </h3>
    if(!product) return <h3> Producto no encontrado </h3>
    
    const isProductInCart = cart.some((item) => item.id === product.id)
    
    return (
        <section className="product-details">
            <img src={product.thumbnail} alt={product.title} />
            <div className="details">
                <h2>{product.title}</h2>
                <strong> <StarRating rating={product.rating}/> </strong>
                <p>{product.description}</p>
                <h3>Precio: ${product.price}</h3>
                <button
                        className={isProductInCart ? "remove-from-cart" : "add-to-cart"}
                        onClick={() =>
                            isProductInCart ? removeFromCart(product) : addToCart(product)
                        }
                        >
                        {isProductInCart 
                            ? <p> Remover del carrito <ClearCartIcon /> </p> 
                            : <p> Agregar al carrito <AddToCartIcon /> </p>
                        }
                </button>
            </div>
        </section>
    )
}