import { NavLink } from "react-router-dom"
import "./Menu.css"

function Menu(): JSX.Element{
    return(
        <div className="Menu">
            <NavLink to={"/books"}>Home</NavLink> <br /> <br />
            <NavLink to={"/add-book"}>Add Book</NavLink>

        </div>
    )
}

export default Menu