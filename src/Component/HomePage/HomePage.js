import style from "./HomePage.module.css"

function HomePage() {
    return (
        <div className={style.container_home}>
            <div className={style.heros}>
                <img className={style.img_home} src='./image-alfatih/Home.png' alt='image/Home' />
                <div className={style.arrow}>
                    <img className={style.img_arrow} src='./image-alfatih/Arrow.png' alt='image/Arrow' />
                </div>
            </div>

        </div>
    )
}

export default HomePage;