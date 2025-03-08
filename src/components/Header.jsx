import { Link } from "react-router-dom"
import { Filters } from "./Filters"
import { CartIcon } from "./Icons"

export const Header = () => {
    return (
        <header className="header">
            <Link to={'/'} className="link-title">
                <h1> ReactShop <CartIcon /> </h1>
            </Link>
            <Filters /> 
        </header>
    )
}