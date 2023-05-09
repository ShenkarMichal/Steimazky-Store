import { useEffect, useState } from "react"
import "./BooksList.css"
import BooksModel from "../../../3-Models/BooksModel"
import booksService from "../../../4-Service/BooksService"
import BookCard from "../BookCard/BookCard"

function BooksList(): JSX.Element{

    const [books, setBooks] = useState<BooksModel[]>([])

    useEffect(()=>{
        booksService.getAllBooks()
            .then(b=>setBooks(b))
            .catch(err => alert(err))
    },[])

    return(
        <div className="BooksList">
            {books.map(b => <BookCard key={b.bookId} book={b} />)}
        </div>
    )
}

export default BooksList