import { Link } from "react-router-dom";
import style from "./Footer.module.css"

function Footer() {
    return (
        <div>

            <Link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="style"/>

            <footer>
                <div className={style.footer_container}>
                    <div className={style.footer_left}>
                        <p className={style.title}>Pondok Pesantren Modern IT Multimedia Al-Fatih</p>
                        <div className={style.footer_icons}>

                            <div className={style.shapes}>
                                <a href="https://www.facebook.com/pp.itmultimediaalfatih">
                                    <img
                                        className={`${style.icons_fb_yt} ${style.icons}`}
                                        src="image-alfatih/footer/fb.png"
                                        alt="fb"
                                    ></img>
                                </a>
                            </div>

                            <div className={style.shapes}>
                                <a href="https://www.instagram.com/pp.itmultimediaalfatih/">
                                    <img
                                        className={`${style.icons_ig_x} ${style.icons}`}
                                        src="image-alfatih/footer/ig.png"
                                        alt="ig"
                                    ></img>
                                </a>
                            </div>

                            <div className={style.shapes}>
                                <a href="https://www.youtube.com/@uimchannel-UstadzIndraMartian">
                                    <img
                                        className={`${style.icons_fb_yt} ${style.icons}`}
                                        src="image-alfatih/footer/yt.png"
                                        alt="yt"
                                    ></img>
                                </a>
                            </div>

                            <div className={style.shapes}>
                                <a href="https://x.com/home">
                                    <img
                                        className={`${style.icons_ig_x} ${style.icons}`}
                                        src="image-alfatih/footer/x.png"
                                        alt="x"
                                    ></img>
                                </a>
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