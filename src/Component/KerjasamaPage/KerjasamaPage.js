import style from "./KerjasamaPage.module.css"

function KerjasamaPage() {
    return (
        <div className={style.container_kerjasama}>
            <div className={style.heros}>
                <div className={style.kosong}></div>
                <div className={style.arrow}>
                    <img className={style.img_arrow} src='./image-alfatih/Home/Arrow.png' alt='image/Arrow' />
                </div>
            </div>
        </div>
    )
}

export default KerjasamaPage;