import InputForm from '../InputForm/InputForm';
import style from './Item.module.css'

function Item() {
    return(
        <div className={style.container}>
            <InputForm formType="Item"/>
        </div>
    )
}

export default Item;