import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import ins from '@icons/svgs/insIcon.svg';
import ytb from '@icons/svgs/ytIcon.svg';

function BoxIcon({ type, href }) {
  const { boxIcon } = styles;
  const hanfleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return ins;
      case 'ytb':
        return ytb;
    }
  };
  return (
    <div className={boxIcon}>
      <img src={hanfleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
