import { Link } from "react-router-dom";
import style from "./Navbar.module.css"

function Navbar() {
    return (
        <div className={style.container_nav}>
            <div className={style.logo_nav}>
                <img className={style.img_logo} src='./image-alfatih/AL-FATIH_logo.png' alt='image/Logo' />
            </div>
            <div className={style.menu_nav}>
                <ul>
                    <li>
                        <Link to={'/'} className={style.nav_item}>
                            <h4>Home</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/News'} className={style.nav_item}>
                            <h4>News</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Unit-Pendidikan'} className={style.nav_item}>
                            <h4>Unit Pendidikan</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Kerjasama'} className={style.nav_item}>
                            <h4>Kerjasama</h4>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/Pendaftaran'} className={style.nav_item}>
                            <h4>Pendaftaran</h4>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;