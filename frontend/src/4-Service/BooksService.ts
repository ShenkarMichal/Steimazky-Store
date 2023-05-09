import axios from "axios"
import BookTypeModel from "../3-Models/BookTypeModel"
import BooksModel from "../3-Models/BooksModel"
import appConfig from "../2-Utils/Config"

class BooksService {
    public async getAllTypes(): Promise<BookTypeModel[]> {
        const response = await axios.get<BookTypeModel[]>(appConfig.booksTypesURL)
        const types = response.data
        return types           
    }

    public async getAllBooks(): Promise<BooksModel[]> {
        const response = await axios.get<BooksModel[]>(appConfig.booksURL)
        const books = response.data
        return books       
    }

    public async addNewBook(newBook:BooksModel): Promise<BooksModel> {
        const response = await axios.post<BooksModel>(appConfig.booksURL, newBook)
        const book = response.data
        return book
    }

    public async deleteBook(bookId:number): Promise<void> {
        await axios.delete(appConfig.booksURL + bookId)        
        
    }
}

const booksService = new BooksService()
export default booksService
