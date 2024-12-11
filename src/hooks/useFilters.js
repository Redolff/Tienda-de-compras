import { useContext, useMemo } from "react"
import { FilterContext } from "../context/FilterContext.jsx"

export const useFilters = ({ products }) => {
    const { filters, setFilters } = useContext(FilterContext)

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            return product.price >= filters.minPrice && (
                filters.category === 'all' ||
                product.category === filters.category
            )
        })
    }, [products, filters.minPrice, filters.category])
    
    return { filteredProducts, setFilters }    
}