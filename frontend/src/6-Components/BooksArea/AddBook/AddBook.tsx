import { useForm } from "react-hook-form"
import "./AddBook.css"
import BooksModel from "../../../3-Models/BooksModel"
import { useNavigate } from "react-router-dom"
import booksService from "../../../4-Service/BooksService"
import BookTypeModel from "../../../3-Models/BookTypeModel"
import { useEffect, useState } from "react"
import notify from "../../../4-Service/NotifyService"

function AddBook(): JSX.Element{


    const {register, handleSubmit} = useForm<BooksModel>()
    const navigate = useNavigate()

    const [types, setTypes] = useState<BookTypeModel[]>([])
    useEffect(()=>{
        booksService.getAllTypes()
            .then(t => setTypes(t))
            .catch(err => notify.error(err))
    },[])

    async function addBook(newBook: BooksModel){
        try {
            await booksService.addNewBook(newBook)
            notify.success("The new book has been successfully adding")
            navigate("/books")            
        }
        catch (err: any) {
           notify.error(err)            
        }
    }

    return(
        <div className="AddBook">
            <form onSubmit={handleSubmit(addBook)}>
                <label>Name:</label>
                <input type="text" {...register("bookName")} required/> <br />

                <label>Summary:</label>
                <textarea {...register("bookSummary")} required></textarea>  <br />

                <select {...register("bookTypeId")} required>
                    <option></option>
                    {types.map(t => 
                        <option key={t.bookTypeId} value={t.bookTypeId}>{t.bookTypeName}</option>)}
                </select>

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