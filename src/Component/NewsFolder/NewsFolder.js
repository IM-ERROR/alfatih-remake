import style from "./NewsFolder.module.css"

function NewsFolder() {
    return (
        <div className={style.container_folder}>
            <div className={style.img_news}></div>
            <div className={style.description}>in adalah</div>
        </div>
    )
}

export default NewsFolder;