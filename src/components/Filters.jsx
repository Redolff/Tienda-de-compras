import { Categorias } from "./Categorias"
import { Precios } from "./Precios"

export const Filters = ({ setFilters }) => {
    
    return (
        <section className="filters">
            <Precios setFilters={setFilters}/>
            <Categorias setFilters={setFilters}/>
        </section>
    )
}