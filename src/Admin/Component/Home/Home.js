import style from './Home.module.css'
import InputNews from "../Input/InputNews";

const Home = () => {
    return (
        <div className={style.container_home}>
            <InputNews />
        </div>
    )
}

export default Home;