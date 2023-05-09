class Config {
    public booksTypesURL = "http://localhost:3001/api/books-types/"
    public booksURL = "http://localhost:3001/api/books/"
    public registerURL = "http://localhost:3001/api/auth/register/"
    public loginURL = "http://localhost:3001/api/auth/login/"
}

const appConfig = new Config()
export default appConfig