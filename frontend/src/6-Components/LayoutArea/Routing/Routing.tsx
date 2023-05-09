import { Navigate, Route, Routes } from "react-router-dom"
import "./Routing.css"
import BooksList from "../../BooksArea/BooksList/BooksList"
import AddBook from "../../BooksArea/AddBook/AddBook"
import PageNotFound from "../PageNotFound/PageNotFound"
import Login from "../../AuthArea/Login/Login"
import Register from "../../AuthArea/Register/Register"

function Routing(): JSX.Element{
    return(
        <div className="Routing">
            <Routes>                
                <Route path="/books" element={<BooksList />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route path="/" element={<Navigate to={"/auth/login"} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>

        </div>
    )
}

export default Routing