class BooksModel {
    public bookId: number
    public bookName: string
    public bookSummary: string
    public bookTypeId: number
    public bookPrice: string //Decimal
    public bookStock: number

    public bookTypeName : string

    public static nameVlidation = {
        required: {value: true, message: "Name is missing"},
        min: {value: 3, message: "Name too short"},
        max: {value: 10, message: "Name too long"}
    }
    public static summaryVlidation = {
        required: {value: true, message: "Summary is missing"},
        min: {value: 3, message: "Summary too short"},
        max: {value: 200, message: "Summary too long"}
    }
    public static priceVlidation = {
        required: {value: true, message: "Price is missing"},
        min: {value: 0, message: "Price too low"},
        max: {value: 1000, message: "Price too high"}
    }
    public static stockVlidation = {
        required: {value: true, message: "Stock is missing"},
        min: {value: 0, message: "Stock too low"},
        max: {value: 1000, message: "Stock too high"}
    }

}

export default BooksModel