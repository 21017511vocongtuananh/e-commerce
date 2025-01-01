import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;
  return (
    <div className={boxIcon}>
      <img src={fbIcon} alt={type} />
    </div>
  );
}

export default BoxIcon;
