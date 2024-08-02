import { useContext, useId } from "react"
import { FilterContext } from "../context/FilterContext"

export const Prices = () => {
    const priceId = useId()
    const { filters, setFilters } = useContext(FilterContext)

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value,
        }))
    }
 
    return (
        <div className="precios">
            <label htmlFor={priceId}>Price</label>
            <input 
                type="range" 
                id={priceId}
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
                value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
        </div>
    )
}