import BooksModel from "../../../3-Models/BooksModel"
import "./BookCard.css"

interface BookCardProps {
    book: BooksModel
}

function BookCard(props: BookCardProps): JSX.Element{
    return(
        <div className="BookCard">
            <h3>{props.book.bookName} | {props.book.bookTypeName}</h3>
            <span>{props.book.bookSummary}</span> <br />
            <span>{props.book.bookPrice}$ | {props.book.bookStock} units</span>         
        </div>
    )
}

export default BookCard