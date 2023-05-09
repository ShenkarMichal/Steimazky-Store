class BookTypeModel {
    public bookTypeId: number
    public bookTypeName: string

    public constructor(bookType: BookTypeModel) {
        this.bookTypeId = bookType.bookTypeId
        this.bookTypeName = bookType.bookTypeName
    }

}

export default BookTypeModel