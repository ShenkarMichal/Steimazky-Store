import dal from "../2-utils/dal";
import BookTypeModel from "../4-models/book-type-model";
import BooksModel from "../4-models/books-model";

async function  getAllTypes(): Promise<BookTypeModel[]> {
    const sql = "SELECT * FROM booktype"
    const types = await dal.execute(sql)
    return types    
}

async function getAllBooks(): Promise<BooksModel[]> {
    const sql = `SELECT B.*, T.bookTypeName
                FROM books AS B JOIN booktype AS T
                ON B.bookTypeId = T.bookTypeId`
    const books = await dal.execute(sql)
    return books    
}

export default {
    getAllTypes,
    getAllBooks
}