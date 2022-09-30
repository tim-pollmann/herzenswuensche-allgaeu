import styles from '../styles/Footer.module.css';
import SponsorList from './SponsorList';

export default function Footer() {
  return (
    <div className={styles.container}>
      <SponsorList />
    </div>
  );
}
