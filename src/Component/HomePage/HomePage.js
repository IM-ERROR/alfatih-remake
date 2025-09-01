import style from "./HomePage.module.css"

function HomePage() {
    return (
        <div className={style.container_home}>
            <div className={style.heros}>
                <div className={style.two_icone}>
                    <img src='./image-alfatih/Home/Home-org.png' alt='image/org /' className={style.org} />
                    <img src='./image-alfatih/Home/Home-logo.png' alt='image/logo /' className={style.logo}/>
                </div>
                <div className={style.kosong}></div>
                <div className={style.arrow}>
                    <img className={style.img_arrow} src='./image-alfatih/Home/Arrow.png' alt='image/Arrow' />
                </div>
            </div>

        </div>
    )
}

export default HomePage;