import { Filters } from "./Filters"

export const Header = ({ setFilters }) => {
    return (
        <header className="header">
            <h1> React Shop </h1>
            <Filters setFilters={setFilters}/>
        </header>
    )
}