import { useContext } from "react"
import { FilterContext } from "../context/FilterContext.jsx"

export const useFilters = ({ products }) => {
    const { filters, setFilters } = useContext(FilterContext)

    const filterProducts = (products) => {
        return products.filter(product => {
            return product.price >= filters.minPrice && (
                filters.category === 'all' ||
                product.category === filters.category
            )
        })
    }

    const filteredProducts = filterProducts(products)
    
    return { filteredProducts, setFilters }    
}