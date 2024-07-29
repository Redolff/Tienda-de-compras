export const Categorias = ({ setFilters }) => {

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <div>
            <label htmlFor="category">Categoria</label>
            <select id="category" onChange={handleChangeCategory}>
                <option value="all">Todos</option>
                <option value="smartphones">Celulares</option>
                <option value="laptops">Computadoras</option>
                <option value="skincare">Skincare</option>
                <option value="fragrances">Fragancias</option>
                <option value="home-decoration">Decoraciones del hogar</option>
            </select>
        </div>
    )
}