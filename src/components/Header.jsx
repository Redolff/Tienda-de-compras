import { Filters } from "./Filters"

export const Header = ({ setFilters }) => {
    return (
        <header>
            <h1> Tienda de compras </h1>
            <Filters setFilters={setFilters}/>
        </header>
    )
}