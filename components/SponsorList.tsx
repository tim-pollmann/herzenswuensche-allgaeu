import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/SponsorList.module.css';

interface SponsorWrapperProps {
  logoPath: string,
  url: string,
  name: string,
  description: string,
}

function SponsorWrapper(props: SponsorWrapperProps) {
  const {
    logoPath, url, name, description,
  } = props;
  return (
    <li className={styles.sponsorWrapper}>
      <Link href={url}>
        <a>
          <div className={styles.sponsorContent}>
            <div className={styles.logoWrapper}>
              <Image src={logoPath} layout="responsive" height="1px" width="1px" />
            </div>
            <div className={styles.sponsorText}>
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default function SponsorList() {
  return (
    <div className={styles.container}>
      <h1>Unsere Sponsoren</h1>
      <ul className={styles.sponsorContainer}>
        <SponsorWrapper logoPath="/sponsors/fc_bayern_muenchen.png" url="/" name="FC Bayern München" description="Was für ein toller Sponsor" />
        <SponsorWrapper logoPath="/sponsors/fc_augsburg.png" url="/" name="FC Augsburg" description="Was für ein anderer toller Sponsor" />
        <SponsorWrapper logoPath="/sponsors/sparkasse_allgaeu.png" url="/" name="Sparkasse Allgäu" description="Was für ein anderer toller Sponsor" />
      </ul>
    </div>
  );
}
