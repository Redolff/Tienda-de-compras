import { useState } from "react"

export const Precios = ({ setFilters }) => {
    const [minPrice, setMinPrice] = useState(0)

    const handleChangeMinPrice = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }
 
    return (
        <div>
            <label htmlFor="price">Price</label>
            <input 
                type="range" 
                id="price"
                min='0'
                max='1000'
                onChange={handleChangeMinPrice}
            />
            {minPrice}
        </div>
    )
}