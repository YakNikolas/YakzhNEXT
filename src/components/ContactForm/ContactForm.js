'use client'
import Loader from '../Loader/Loader';
import styles from './ContactForm.module.css';
import { useState } from 'react';


export default function ContactForm() {
    const [phone, setPhone] = useState('');
    const [comment, setComment] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await fetch('/api/sendToTelegram', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ phone, comment }),
            });

            if (response.ok) {
                setSuccess(true);
                setPhone('');
                setComment('');
                setAgreement(false);
                alert('Сообщение успешно отправлено!');
            } else {
                setSuccess(false);
                alert('Ошибка при отправке сообщения.');
            }
        } catch (error) {
            console.error('Ошибка:', error);
            setSuccess(false);
            alert('Ошибка при отправке сообщения.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Остались вопросы?</h2>
            <p className={styles.subtitle}>
                Заполните форму ниже, и наш специалист свяжется с вами в ближайшее время.
            </p>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label className={styles.label}>
                    Телефон<span className={styles.required}>*</span>
                    <input
                        type="tel"
                        placeholder="+375 (99) 999-99-99"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={styles.input}
                        required
                    />
                </label>
                <label className={styles.label}>
                    Комментарий
                    <textarea
                        placeholder="Ваш комментарий"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className={styles.textarea}
                    />
                </label>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={agreement}
                        onChange={(e) => setAgreement(e.target.checked)}
                        className={styles.checkbox}
                        required
                    />
                    Согласие на обработку персональных данных
                </label>
                <button type="submit" className={styles.button} disabled={loading}>
                    {loading ? <Loader></Loader> : 'Отправить'}
                </button>
            </form>
        </div>
    );
}
