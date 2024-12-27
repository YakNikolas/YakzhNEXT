import ContactForm from '../ContactForm/ContactForm';
import styles from './FormSection.module.css';
export default function FormSection() {
    return (
        <div className={styles.container}>
            <img src='/formPhoto.png'></img>
            <ContactForm></ContactForm>
        </div>
    );
}
