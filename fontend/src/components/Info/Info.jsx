import MainLayout from '@components/Layout/Layout';
import InfoCard from './InfoCard/InfoCard';
import { dataInfo } from './constants';
import styles from './styles.module.scss';

function Info() {
  const { container } = styles;
  return (
    <MainLayout>
      <div className={container}>
        {dataInfo.map((item) => {
          return (
            <InfoCard
              titles={item.title}
              description={item.description}
              src={item.src}
            />
          );
        })}
      </div>
    </MainLayout>
  );
}

export default Info;
