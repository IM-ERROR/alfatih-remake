import style from './InputNews.module.css'

const InputNews = () => {
    return (
        <div className={style.container_input_news}>
            <form>
                <div className={style.input_group}>
                    <label htmlFor='title'>Judul Berita</label>
                    <input type='text' id='title' placeholder='Enter title here' />
                </div>

                <div className={style.input_group}>
                    <label htmlFor='title'>Kontent Berita</label>
                    <input type='text' id='title' placeholder='Enter title here' />
                </div>

                <div className={style.input_group}>
                    <input type='submit' value={'Simpan Berita'} className={style.btn_submit}/>
                </div>


            </form>
        </div>
    )
}

export default InputNews