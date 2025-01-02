import MainLayout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import CountdowBanner from '@components/CountdowBanner/CountdowBanner';
function HeadingListProduct() {
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <CountdowBanner />
        <div className={containerItem}>
          <div>1</div>
          <div>2</div>
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProduct;
