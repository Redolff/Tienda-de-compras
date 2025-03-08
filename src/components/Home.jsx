import { useFilters } from "../hooks/useFilters"
import { useProductos } from "../hooks/useProductos"
import { Products } from "./Products"

export const Home = () => {
    const { products, loading } = useProductos()
    const { filteredProducts } = useFilters({ products })

    if(loading) return <h3> Cargando... </h3>

    return (
        <>
            <Products products={filteredProducts} />
        </>
    )
}

export default Home