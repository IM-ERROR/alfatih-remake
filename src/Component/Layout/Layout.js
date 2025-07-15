import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from "./Layout.module.css"

function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <main className={style.container_main}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;