import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';
import logo from '../public/logo.png';

interface LinkWrapperProps {
  path: string,
  text: string,
  currentPath: string,
}

function LinkWrapper(props: LinkWrapperProps) {
  const { path, text, currentPath } = props;
  return (
    <li className={`${styles.linkWrapper} ${currentPath === path ? styles.selected : null}`}>
      <Link className={styles.link} href={path}>{text}</Link>
    </li>
  );
}

export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>
          <div className={styles.logoWrapper}>
            <Image src={logo} layout="responsive" />
          </div>
        </a>
      </Link>
      <ul className={styles.linkContainer}>
        <LinkWrapper path="/" text="Aktuelles" currentPath={router.pathname} />
        <LinkWrapper path="/help" text="Helfen" currentPath={router.pathname} />
      </ul>
    </div>
  );
}
