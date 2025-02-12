'use client'
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css';

const Carousel = () => {
  const slides = [
    ['Создадим ваш идеальный дом в установленные сроки и с 10-летней гарантией', 'Без головной боли и отклонений от сметы строительства'],
    ['Мы создаем надежные и современные дома для вашего уютного проживания', 'Мы создаем надежные и современные дома для вашего уютного проживания'],
    ['В нашей команде работают квалифицированные сотрудники с опытом работы от 5 лет', 'Мы оперативно выполняем весь спектр строительных работ']
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(slides.length - 1);

  const goToSlide = (index) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     goToSlide((currentIndex + 1) % slides.length);
  //   }, 10000);

  //   return () => clearInterval(interval);
  // }, [currentIndex]);

  return (
    <>
    <div className={styles.carousel}>
      <div className={styles.slides}>
        {slides.map(([title, subtitle], index) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''} ${index === prevIndex ? styles.prev : ''}`}
          >
            <h1 className={styles.title}>{title}</h1>
            <h3 className={styles.subtitle}>{subtitle}</h3>
            <button className={styles.button}>Узнать стоимость</button>
          </div>
        ))}
      </div>
    </div>
          <div className={styles.dots}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div></>
  );
};

export default Carousel;
