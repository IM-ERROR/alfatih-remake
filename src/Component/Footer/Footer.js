import style from "./Footer.module.css"

function Footer() {
    return (
        <div>
            <footer>
                <div className={style.footer_container}>
                    <div className={style.footer_left}>
                        <p className={style.title}>Pondok Pesantren Multimedia Al-Fatih</p>
                        <div className={style.footer_icons}>
                            <div className={style.shapes}>
                                <img
                                src="image/unitpendidikan/fb.png"
                                href="instagram.com/lemon.shdq/"
                                alt="fb"
                                className={style.icons}>
                                </img>
                                </div>
                        </div>
                    </div>
                    <div className={style.footer_right}>
                        <p className={style.title}>SCHOOL OF IT MULTIMEDIA</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;