import styles from '../styles/Footer.module.css';
import SponsorList from './SponsorList';

export default function () {
  return (
    <div className={styles.container}>
      <SponsorList />
      Hello
    </div>
  );
}
