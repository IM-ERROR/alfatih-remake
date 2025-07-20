import style from "./HomePage.module.css"

function HomePage() {
    return (
        <div className={style.container_home}>
            <div className={style.heros}>
                <div className={style.kosong}></div>
                <div className={style.arrow}>
                    <img className={style.img_arrow} src='./image-alfatih/Home/Arrow.png' alt='image/Arrow' />
                </div>
            </div>

        </div>
    )
}

export default HomePage;