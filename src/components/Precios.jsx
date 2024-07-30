import { useState } from "react"

export const Precios = ({ setFilters }) => {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value,
        }))
        setMinPrice(e.target.value)
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
            />
            <span>${minPrice}</span>
        </div>
    )
}