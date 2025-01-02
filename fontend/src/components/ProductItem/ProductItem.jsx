import styles from './style.module.scss';
import reload from '@icons/svgs/reloadIcon.svg';
import hert from '@icons/svgs/heartIcon.svg';
import cart from '@icons/svgs/cartIcon.svg';
function ProductItem({ src, prevsrc, name, prices }) {
  const { boxImg, showImgWhenHover, showWhenHover, boxIcon, title, price } =
    styles;
  return (
    <div>
      <div className={boxImg}>
        <img src={src} alt='' />
        <img src={prevsrc} className={showImgWhenHover} />
        <div className={showWhenHover}>
          <div className={boxIcon}>
            <img src={cart} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={hert} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={reload} alt='' />
          </div>
          <div className={boxIcon}>
            <img src={cart} alt='' />
          </div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={price}>${prices}</div>
    </div>
  );
}

export default ProductItem;
