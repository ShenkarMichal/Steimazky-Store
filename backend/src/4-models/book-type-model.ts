import Joi from "joi"

class BookTypeModel {
    public bookTypeId: number
    public bookTypeName: string

    public constructor(bookType: BookTypeModel) {
        this.bookTypeId = bookType.bookTypeId
        this.bookTypeName = bookType.bookTypeName
    }

    public static validationSchema = Joi.object({
        bookTypeId: Joi.number().optional().integer().positive(),
        bookTypeName: Joi.string().required().min(3).max(20)
    })

    public validate(): string {
        const resoult = BookTypeModel.validationSchema.validate(this)
        return resoult.error?.message
    }

}

export default BookTypeModel