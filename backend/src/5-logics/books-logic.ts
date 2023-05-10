import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import BookTypeModel from "../4-models/book-type-model";
import BooksModel from "../4-models/books-model";
import { ResourceNotFoundErrorModel, ValidateErrorModel } from "../4-models/errors-model";

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

async function addNewBook(newBook:BooksModel): Promise<BooksModel> {

    //Validation
    const err = newBook.validate()
    if(err) throw new ValidateErrorModel(err)
    
    const sql = `INSERT INTO books
                VALUES(DEFAULT, ?,?,?,?,?)`
    const info:OkPacket = await dal.execute(sql, [newBook.bookName, newBook.bookSummary, newBook.bookTypeId,
                                                    newBook.bookPrice, newBook.bookStock])
    newBook.bookId = info.insertId
    return newBook    
}

async function deleteBook(bookId:number): Promise<void> {
    const sql = `DELETE FROM books
                WHERE bookId = ?`
    const info: OkPacket = await dal.execute(sql, [bookId])
    if(info.affectedRows === 0) throw new ResourceNotFoundErrorModel(bookId)    
}

export default {
    getAllTypes,
    getAllBooks,
    addNewBook,
    deleteBook
}