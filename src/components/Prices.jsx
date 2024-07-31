import { useContext } from "react"
import { FilterContext } from "../context/FilterContext"

export const Prices = () => {
    const { filters, setFilters } = useContext(FilterContext)

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value,
        }))
    }
 
    return (
        <div className="precios">
            <label htmlFor="price">Price</label>
            <input 
                type="range" 
                id="price"
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>
    )
}