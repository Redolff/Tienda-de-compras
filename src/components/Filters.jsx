import { Categorys } from "./Categorys"
import { Prices } from "./Prices"
import '../styles/Filters.css'

export const Filters = () => {
    
    return (
        <section className="filters">
            <Prices />
            <Categorys />
        </section>
    )
}