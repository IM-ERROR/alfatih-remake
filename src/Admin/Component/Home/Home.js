import { useNavigate } from 'react-router-dom'
import style from './Home.module.css'


const Home = () => {

    const navigate = useNavigate();

    function handleClick(params) {
        navigate(`/Admin/add-${params}`)
    }

    return (
        <div className={style.container_home}>

            <div className={style.container_item} onClick={() => handleClick("news")}>
                <img src='image/icon/test-icon.jpg' alt='input-news-image'/>
                <p>Add News</p>
            </div>

            <div className={style.container_item} onClick={() => handleClick("event")}>
                <img src='image/icon/test-icon-2.jpg' alt='input-news-image'/>
                <p>Add Upcoming Event</p>
            </div>

            <div className={style.container_item} onClick={() => handleClick("item")}>
                <img src='image/icon/test-icon.jpg' alt='input-news-image'/>
                <p>Add Item</p>
            </div>

        </div>
    )
}

export default Home;