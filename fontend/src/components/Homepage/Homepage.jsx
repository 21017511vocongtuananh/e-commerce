import Banner from '@components/Banner/Banner';
import MyHeader from '@components/Header/Header';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';
import { useEffect, useState } from 'react';
import { getProduct } from '@/apis/productService';
import PopularProduct from '@components/PopularProduct/PopularProduct';

function HomePage() {
  const [lisProduct, setProduct] = useState([]);

  useEffect(() => {
    getProduct().then((product) => {
      setProduct(product.contents);
    });
  }, []);

  const { container } = styles;
  return (
    <div>
      <div className={container}>
        <MyHeader />
        <Banner />
        <Info />
        <AdvanceHeadling />
        <HeadingListProduct data={lisProduct.slice(0, 2)} />
        <PopularProduct data={lisProduct.slice(2, 10)} />
        <div
          style={{
            height: 200
          }}
        ></div>
      </div>
    </div>
  );
}

export default HomePage;
