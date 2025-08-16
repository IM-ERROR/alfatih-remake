import InputForm from '../InputForm/InputForm'
import style from './Event.module.css'

function Event() {
    return(
        <div className={style.container}>
            <InputForm formType="Event"/>
        </div>
    )
}

export default Event