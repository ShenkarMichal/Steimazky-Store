import { useEffect, useState } from "react"
import "./BooksList.css"
import BooksModel from "../../../3-Models/BooksModel"
import booksService from "../../../4-Service/BooksService"
import BookCard from "../BookCard/BookCard"
import useVerifyLoggedIn from "../../../2-Utils/UseVerifyLoggedIn"

function BooksList(): JSX.Element{

    useVerifyLoggedIn()

    const [books, setBooks] = useState<BooksModel[]>([])

    useEffect(()=>{
        booksService.getAllBooks()
            .then(b=>setBooks(b))
            .catch(err => console.log(err))
    },[books])

    return(
        <div className="BooksList">
            {books.map(b => <BookCard key={b.bookId} book={b} />)}
        </div>
    )
}

export default BooksList