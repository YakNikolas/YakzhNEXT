import Carousel from '../Carousel/Carousel';
import styles from './MainSection.module.css';

export default function MainSection() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <Carousel></Carousel>
            </div>
            <div className={styles.right}>
                <div className={styles.card}>
                    <h3>Оформление рассрочки по ставке от 15% годовых</h3>
                    <a href="#" className={styles.link}>Подробнее →</a>
                </div>
                <div className={styles.card}>
                    <h3>Барнхаусы</h3>
                </div>
                <div className={styles.card}>
                    <h3>Таунхаусы</h3>
                </div>
                <div className={styles.card}>
                    <h3>Скидка до 5% при полной предоплате за проект</h3>
                    <a href="#" className={styles.link}>Подробнее →</a>
                </div>
            </div>
        </div>
    );
}
