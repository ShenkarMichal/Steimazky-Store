import express, { NextFunction, Request, Response } from 'express'
import booksLogic from '../5-logics/books-logic'
import BooksModel from '../4-models/books-model'

const router = express.Router()

//Get all books-types
router.get("/books-types", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const types = await booksLogic.getAllTypes()
        response.json(types)    
    }
    catch (err: any) {
        next(err)        
    }
})

//Get all books
router.get("/books", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const books = await booksLogic.getAllBooks()
        response.json(books)    
    }
    catch (err: any) {
        next(err)        
    }
})

//Add new book
router.post("/books", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const book = new BooksModel(request.body)
        const newBook = await booksLogic.addNewBook(book)
        response.status(201).send(newBook)
    }
    catch (err: any) {
        next(err)        
    }
})

//Delete book
router.delete("/books/:bookId([0-9]+)", async (request: Request, response: Response, next: NextFunction)=>{
    try {
        const bookId = +request.params.bookId
        await booksLogic.deleteBook(bookId)
        response.status(204)
    }
    catch (err: any) {
        next(err)        
    }
})

export default router