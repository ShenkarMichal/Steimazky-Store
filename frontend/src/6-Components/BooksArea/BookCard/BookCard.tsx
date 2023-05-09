import { useNavigate } from "react-router-dom"
import BooksModel from "../../../3-Models/BooksModel"
import booksService from "../../../4-Service/BooksService"
import "./BookCard.css"

interface BookCardProps {
    book: BooksModel
}

function BookCard(props: BookCardProps): JSX.Element{

    const navigate = useNavigate()

    async function deleteBook(bookId:number): Promise<void> {
        try {
            await booksService.deleteBook(bookId)    
            alert("The book has been successfully deleted")
            navigate("/books")
        }
        catch (err: any) {
            alert(err)        
        }    
    }

    return(
        <div className="BookCard">
            <h3>{props.book.bookName} | {props.book.bookTypeName}</h3>
            <span>{props.book.bookSummary}</span> <br />
            <span>{props.book.bookPrice}$ | {props.book.bookStock} units</span>  <br />

            <button onClick={()=>deleteBook(props.book.bookId)}>Delete Book</button>
        </div>
    )
}

export default BookCard