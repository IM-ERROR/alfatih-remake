import { Link } from "react-router-dom";
import style from "./NewsFolder.module.css"

function NewsFolder() {
    return (
        <div className={style.container_folder}>
            <div className={style.img_news}></div>
            <div className={style.description}>
                <h2>Berita Terbaru</h2>
                <p>Berita terbaru mengenai Al fatih hari ini adalah</p>
                <div className={style.button}>
                    <Link to='NewsData' className={style.link}>
                            <h6>See More</h6>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NewsFolder;