'use client'
import styles from './Header.module.css';
import React, { useState } from 'react';
import ModalForm from '../ModalForm/ModalForm';


export default function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    return (
        <header className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <div className={styles.logo}>
                        <img src="/home1.svg" alt="Логотип" className={styles.logoImage} />
                        <div>
                            <h4 className={styles.companyName}>Строительные решения</h4>
                            <p className={styles.companyDesc}>строительная компания</p>
                        </div>
                    </div>
                </div>
                <div className={styles.center}>
                    <p className={styles.title}>Адрес офиса:</p>
                    <p>РБ, г. Минск, ул. Ленина, 1</p>
                </div>
                <div className={styles.right}>
                    <p className={styles.phone}>+375 99 999 99 99</p>
                    <p className={styles.schedule}>
                        пн - пт: с 09:00 до 18:00<br />
                        сб - вс: с 10:00 до 16:00
                    </p>
                </div>
                <button onClick={openModal} className={styles.callbackButton}>Заказать звонок</button>
            </div>
            <ModalForm isOpen={isModalOpen} onClose={closeModal}></ModalForm>
        </header>
    );
}
