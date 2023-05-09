import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Main from "../Main/Main"
import Menu from "../Menu/Menu"
import "./Layout.css"

function Layout(): JSX.Element{
    return(
        <div className="Layout">
            <header>
                <Header />
            </header>
            <main>
                <Main />
            </main>
            <aside>
                <Menu />
            </aside>
            <footer>
                <Footer />
            </footer>

        </div>

    )
}

export default Layout