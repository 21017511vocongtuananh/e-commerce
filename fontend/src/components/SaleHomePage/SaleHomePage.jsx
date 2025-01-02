import Button from '@components/Button/Button';
import styles from './style.module.scss';
import { useEffect } from 'react';
import useTransLateX from './translateXImage';
function SaleHomePage() {
  const { container, title, des, boxBtn, boxImage } = styles;

  const { translateXpostition } = useTransLateX();

  return (
    <div className={container}>
      <div
        className={boxImage}
        style={{
          transform: `translateX(${translateXpostition}px)`,
          transition: 'transform 0.6s ease'
        }}
      >
        <img
          src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
          alt=''
        />
      </div>
      <div>
        <h2 className={title}>Sale Of The Year</h2>
        <p className={des}>
          Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.
        </p>
        <div className={boxBtn}>
          <Button content={'Read more'} isPrimary={false} />
        </div>
      </div>
      <div
        className={boxImage}
        style={{
          transform: `translateX(-${translateXpostition}px)`,
          transition: 'transform 0.6s ease'
        }}
      >
        <img
          src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
          alt=''
        />
      </div>
    </div>
  );
}

export default SaleHomePage;
