import styles from './Header.module.css';
import sushiImg from '../../../assets/images/sushi.jpg';
import HeaderCartButton from "./cartButton";

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <h1>Japanese Food</h1>
                <HeaderCartButton/>
            </header>
            <div className={styles.mainImage}>
                <img src={sushiImg} alt=""/>
            </div>
        </>
    )
}

export default Header;