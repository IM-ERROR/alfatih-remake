import NewsFolder from "../NewsFolder/NewsFolder";
import style from "./NewsPage.module.css"

function NewsPage() {
    return (
         <div className={style.container_News}>
            <div className={style.heros}>
                <div className={style.kosong}></div>
                <div className={style.arrow}>
                    <img className={style.img_arrow} src='./image-alfatih/Home/Arrow.png' alt='image/Arrow' />
                </div>
            </div>

            <div className={style.news_page}>
                <div className={style.title_news}>
                    <h6>Berita Terbaru Al-Fatih</h6>
                </div>
                <div className={style.newsfolder}>
                    <NewsFolder />
                    <NewsFolder />
                </div>
            </div>

        </div>

    )
}

export default NewsPage;