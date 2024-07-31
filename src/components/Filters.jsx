import { Categorys } from "./Categorys"
import { Prices } from "./Prices"
import './Filters.css'

export const Filters = ({ setFilters }) => {
    
    return (
        <section className="filters">
            <Prices setFilters={setFilters}/>
            <Categorys setFilters={setFilters}/>
        </section>
    )
}