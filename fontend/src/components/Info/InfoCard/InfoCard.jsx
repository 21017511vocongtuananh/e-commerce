import styles from '../styles.module.scss';

function InfoCard({ titles, description, src }) {
  const { containerCard, containerContent, title, des } = styles;
  return (
    <div className={containerCard}>
      <img width={40} height={41} src={src} alt='Icon' />
      <div className={containerContent}>
        <div className={title}>{titles}</div>
        <div className={des}>{description}</div>
      </div>
    </div>
  );
}

export default InfoCard;
