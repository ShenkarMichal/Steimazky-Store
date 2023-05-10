import { useEffect, useState } from "react"
import "./BooksList.css"
import BooksModel from "../../../3-Models/BooksModel"
import booksService from "../../../4-Service/BooksService"
import BookCard from "../BookCard/BookCard"
import { useNavigate } from "react-router-dom"
import notifyService from "../../../4-Service/NotifyService"

function BooksList(): JSX.Element{

    const navigate = useNavigate()

    const [books, setBooks] = useState<BooksModel[]>([])

    useEffect(()=>{
        const token = sessionStorage.getItem("token")
        if(!token) {
            notifyService.error("You not logged in")
            navigate("/auth/login")
            return          
        }

        booksService.getAllBooks()
            .then(b=>setBooks(b))
            .catch(err => notifyService.error(err))
    },[books])

    return(
        <div className="BooksList">
            {books.map(b => <BookCard key={b.bookId} book={b} />)}
        </div>
    )
}

export default BooksList