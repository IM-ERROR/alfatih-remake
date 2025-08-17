import { useState } from 'react';
import style from './InputForm.module.css'
import axios from 'axios'

function InputForm(props) {

    const { formType } = props;

    const [form, setForm] = useState({
        title: "",
        content: "",
        type: ""
    });

    const { title, content, type } = form;

    function handleChange(e) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    function addData() {
        axios.post('http://localhost:8080/news',
            {
                title: title,
                content: content,
                formType: type
            }
        ).then((res) => {
            console.log(`Suceeded add new data ${res}`);
            
        })
    }

    function handleClick(e) {
        if (!title || !content || !formType) {
            alert("Data cannot be empty");
            e.preventDefault();
        } else {
            
            addData()
            alert("Succeded add new data")
        }

    }

    return (
        <div className={style.container}>
            <h1>Add New {formType}</h1>
            <div className={style.container_input}>
                <form>
                    <div className={style.input_group}>
                        <label htmlFor='title'>Judul Berita</label>
                        <input type='text' id='title' name='title' placeholder='Enter title here' value={title} onChange={handleChange} />
                    </div>

                    <div className={style.input_group}>
                        <label htmlFor='content'>Kontent Berita</label>
                        <input type='text' id='content' name='content' placeholder='Enter title here' value={content} onChange={handleChange} />
                    </div>

                    <div className={style.input_group}>
                        <label htmlFor='type'>Tipe Berita</label>
                        <input type='number' id='type' name='type' placeholder='Enter title here' value={type} onChange={handleChange} />
                    </div>

                    <div className={style.input_group}>
                        <input type='submit' value={'Simpan Berita'} className={style.btn_submit} onClick={handleClick} />
                    </div>
                </form>
            </div>

        </div>
    )
}

export default InputForm;