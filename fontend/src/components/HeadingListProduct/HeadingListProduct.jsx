import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdowBanner from '@components/CountdowBanner/CountdowBanner';
import ProductItem from '@components/ProductItem/ProductItem';
function HeadingListProduct({ data }) {
  const { container, containerItem } = styles;
  console.log(data);
  return (
    <MainLayout>
      <div className={container}>
        <CountdowBanner />
        <div className={containerItem}>
          {data.map((item) => (
            <ProductItem
              key={item._id}
              src={item.images[0]}
              prevsrc={item.images[1]}
              name={item.name}
              prices={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
