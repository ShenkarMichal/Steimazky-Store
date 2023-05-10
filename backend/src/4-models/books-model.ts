import { json } from "express"
import Joi from "joi"

class BooksModel {
    public bookId: number
    public bookName: string
    public bookSummary: string
    public bookTypeId: number
    public bookPrice: string //Decimal
    public bookStock: number

    public constructor(books: BooksModel) {
        this.bookId = books.bookId
        this.bookName = books.bookName
        this.bookSummary = books.bookSummary
        this.bookTypeId = books.bookTypeId
        this.bookPrice = books.bookPrice
        this.bookStock = books.bookStock
    }

    public static validationSchema = Joi.object({
        bookId: Joi.number().optional().integer().positive(),
        bookName: Joi.string().required().min(3).max(20),
        bookSummary: Joi.string().required().min(3).max(200),
        bookTypeId: Joi.number().required().integer().positive(),
        bookPrice: Joi.string().required(),
        bookStock: Joi.number().required().integer().min(0).max(1000)
    })

    public validate(): string {
        const resoult = BooksModel.validationSchema.validate(this)
        return resoult.error?.message
    }
}

export default BooksModel