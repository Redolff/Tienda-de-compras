import { useContext, useId } from "react"
import { FilterContext } from "../context/FilterContext"

export const Categorys = () => {
    const categoryId = useId()
    const { setFilters } = useContext(FilterContext)

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <div className="categorias">
            <label htmlFor={categoryId}>Categoria</label>
            <select id={categoryId} onChange={handleChangeCategory}>
                <option value="all">Todos</option>
                <option value="beauty">Belleza</option>
                <option value="groceries">Comestibles</option>
                <option value="fragrances">Fragancias</option>
                <option value="furniture">Muebles</option>
            </select>
        </div>
    )
}