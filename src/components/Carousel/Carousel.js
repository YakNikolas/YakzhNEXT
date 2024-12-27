'use client'
import React, { useState } from 'react';
import styles from './Carousel.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

library.add(faArrowRight);
library.add(faArrowLeft);


const Carousel = () => {
  const slides = [
    ['Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией','Без головной боли и отклонений от сметы строительства'],
    ['Мы создаем надежные и современные дома для вашего уютного проживания','Мы создаем надежные и современные дома для вашего уютного проживания'],
    ['В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет','Мы оперативно выполняем весь спектр строительных работ']
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.slides}>
        {slides.map(([title,subtitle], index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === currentIndex ? styles.active : ''
            }`}
          >
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <button className={styles.button}>Узнать стоимость</button>
          </div>
        ))}
      </div>
        <div className={styles.arrows}>
        <button className={styles.leftArrow} onClick={goToPrevious}><FontAwesomeIcon icon="fa-solid fa-arrow-left" /></button>
        <button className={styles.rightArrow} onClick={goToNext}><FontAwesomeIcon icon="fa-solid fa-arrow-right" /></button>
        </div>
    </div>
  );
};

export default Carousel;
