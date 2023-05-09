import { useForm } from "react-hook-form"
import "./AddBook.css"
import BooksModel from "../../../3-Models/BooksModel"

function AddBook(): JSX.Element{

    const {register, handleSubmit} = useForm<BooksModel>()
    function addBook(newBook: BooksModel){

    }
    return(
        <div className="AddBook">
            <form onSubmit={handleSubmit(addBook)}>
                <label>Name:</label>
                <input type="text" {...register("bookName")} required/> <br />

                <label>Summary:</label>
                <textarea {...register("bookSummary")} required></textarea>  <br />

                <label>Price:</label>
                <input type="text" {...register("bookPrice")} required/> <br />

                <label>Stock:</label>
                <input type="text" {...register("bookStock")} required/> <br />

                <button>Add Book</button>

            </form>
        </div>
    )
}

export default AddBook