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
      <Link className={styles.link} href={path}>
        <a>
          <h1>{text}</h1>
        </a>
      </Link>
    </li>
  );
}

export default function Navbar() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Link href="/aktuelles">
        <a>
          <div className={styles.logoWrapper}>
            <Image src={logo} layout="responsive" />
          </div>
        </a>
      </Link>
      <ul className={styles.linkContainer}>
        <LinkWrapper path="/aktuelles" text="Aktuelles" currentPath={router.pathname} />
        <LinkWrapper path="/wuensche" text="Wünsche" currentPath={router.pathname} />
        <LinkWrapper path="/helfen" text="Helfen" currentPath={router.pathname} />
        <LinkWrapper path="/wir" text="Wir" currentPath={router.pathname} />
        <LinkWrapper path="/faq" text="FAQ" currentPath={router.pathname} />
      </ul>
    </div>
  );
}
