import style from './Home.module.css'


const Home = () => {
    return (
        <div className={style.container_home}>

            <div className={style.container_item}>
                <img src='image/icon/test-icon.jpg' alt='input-news-image'/>
                <p>Add News</p>
            </div>

            <div className={style.container_item}>
                <img src='image/icon/test-icon-2.jpg' alt='input-news-image'/>
                <p>Add Upcoming Event</p>
            </div>

            <div className={style.container_item}>
                <img src='image/icon/test-icon.jpg' alt='input-news-image'/>
                <p>Add Item</p>
            </div>

        </div>
    )
}

export default Home;