import { NavLink } from "react-router-dom"
import "./Header.css"
import authService from "../../../4-Service/Auth-Service"

function Header(): JSX.Element{
    return(
        <div className="Header">
            <h1>Steimazky Store</h1>
            <h3>The books home</h3>

            <div className="Links">
                <NavLink to={"/auth/login"} onClick={authService.logout}>Logout</NavLink>
            </div>
        </div>
    )
}

export default Header