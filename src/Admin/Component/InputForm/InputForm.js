import { useState } from 'react';
import style from './InputForm.module.css'

function InputForm(props) {
    const {formType} = props;
    
    const [inputText, setInputText] = useState();
    
    const [form, setForm] = useState({
        title: "",
        content: ""
    });

    const {title, content} = form;
    

    function handleChange(e) {
        const {name, value} = e.target;
        setForm({
            ...form, 
            [name]: value
        })
    }

    function handleClick() {
        alert(title);
    }

    return (
        <div className={style.container}>
            <h1>Add New {formType}</h1>
            <div className={style.container_input}>
                <form method='POST'>
                    <div className={style.input_group}>
                        <label htmlFor='title'>Judul Berita</label>
                        <input type='text' id='title' name='title' placeholder='Enter title here' value={title} onChange={handleChange}/>
                    </div>

                    <div className={style.input_group}>
                        <label htmlFor='content'>Kontent Berita</label>
                        <input type='text' id='content' name='content' placeholder='Enter title here' value={content} onChange={handleChange}/>
                    </div>

                    <div className={style.input_group}>
                        <input type='submit' value={'Simpan Berita'} className={style.btn_submit} onClick={handleClick}/>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default InputForm;