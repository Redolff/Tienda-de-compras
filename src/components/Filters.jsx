import { Categorys } from "./Categorys"
import { Prices } from "./Prices"
import './Filters.css'

export const Filters = () => {
    
    return (
        <section className="filters">
            <Prices />
            <Categorys />
        </section>
    )
}