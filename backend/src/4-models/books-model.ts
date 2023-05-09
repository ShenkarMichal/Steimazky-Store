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
}

export default BooksModel