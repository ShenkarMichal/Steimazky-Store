import express, { NextFunction, Request, Response } from 'express'
import booksLogic from '../5-logics/books-logic'

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

export default router