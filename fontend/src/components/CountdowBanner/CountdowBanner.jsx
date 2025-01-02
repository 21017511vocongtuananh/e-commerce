import CountdownTimer from '@components/CountdowTimer/CountdowTimer';
import styles from './styles.module.scss';
import Button from '@components/Button/Button';
function CountdowBanner() {
  const { container, containerTimer, title, boxbtn } = styles;
  const targetDate = '2025-12-31T00:00:00';
  return (
    <div className={container}>
      <div className={containerTimer}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <p className={title}>The Classics Make A Comeback</p>
      <div className={boxbtn}>
        <Button content={'Buy now'} />
      </div>
    </div>
  );
}

export default CountdowBanner;
