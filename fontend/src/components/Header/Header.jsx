import BoxIcon from './BoxIcon/BoxIcon';
import Menu from './Menu/Menu';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import logo from '@icons/image/Sapo-logo.svg';
import reload from '@icons/svgs/reloadIcon.svg';
import hert from '@icons/svgs/heartIcon.svg';
import cart from '@icons/svgs/cartIcon.svg';

function MyHeader() {
  const {
    containerIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container
  } = styles;

  return (
    <div className={container}>
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerIcon}>
            {dataBoxIcon.map((item) => {
              return <BoxIcon type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
        </div>
        <div>
          <img
            src={logo}
            alt='logo'
            style={{
              width: '130px',
              height: '60px'
            }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item) => {
              return <Menu content={item.content} href={item.href} />;
            })}
          </div>
          <div className={containerIcon}>
            <img width={26} height={26} src={reload} alt='reload' />
            <img width={26} height={26} src={hert} alt='hert' />
            <img width={26} height={26} src={cart} alt='cart' />
          </div>
        </div>
      </div>
    </div>
  );
}
export default MyHeader;
