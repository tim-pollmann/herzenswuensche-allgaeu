import React from 'react';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>Impressum</h1>
        <p>Herzenswünsche Allgäu e.V.</p>
        <p>Im Oberösch 2</p>
        <p>87437 Kempten</p>
        <p>Vereinsregister: VR201160</p>
        <p>Registergericht: Kempten (Allgäu)</p>
        <p>Vertreten durch den Vorstand:</p>
        <p>Vorsitzende: Andrea Portsidis</p>
        <p>stellv. Vorsitzender: Markus Treffler</p>
        <p>Telefon: 0176 15127413</p>
        <p>E-Mail: andrea@herzenswuensche-allgaeu.de</p>
      </div>
    </footer>
  );
}
