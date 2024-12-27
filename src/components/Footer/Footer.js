import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.column}>
                    <div className={styles.logo}>
                        <img src="/home1.svg" alt="Логотип" className={styles.logoImage} />
                        <div>
                            <h4 className={styles.companyName}>Строительные решения</h4>
                            <p className={styles.companyDesc}>строительная компания</p>
                        </div>
                    </div>
                    <p className={styles.copyright}>
                        © 2024 ООО "Строительные решения"
                    </p>
                </div>

                <div className={styles.column}>
                    <p className={styles.title}>Адрес офиса:</p>
                    <p>РБ, г. Минск, ул. Ленина, 1</p>
                    <p>пн – пт: с 09:00 до 18:00</p>
                    <p>сб – вс: с 10:00 до 16:00</p>
                </div>
                
                <div className={styles.column}>
                    <p className={styles.title}>ООО "Строительные решения"</p>
                    <p>Юридический адрес:</p>
                    <p>РБ, г. Минск, ул. Ленина, 1</p>
                    <p>УНП: 111111111</p>
                    <p>
                        Разработка сайта:
                        <a 
                        href="https://web-space.by" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.link}>
                            Web-space.by
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
