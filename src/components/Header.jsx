import { Filters } from "./Filters"
import { CartIcon } from "./Icons"

export const Header = () => {
    return (
        <header className="header">
            <h1> React Shop <CartIcon /> </h1>
            <Filters /> 
        </header>
    )
}