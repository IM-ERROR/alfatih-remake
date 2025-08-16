import InputForm from '../InputForm/InputForm'
import style from './News.module.css'

function News() {
    return (
        <div className={style.container}>
            <InputForm formType="News"/>
        </div>

    )
}

export default News