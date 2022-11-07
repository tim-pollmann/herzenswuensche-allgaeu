import React, { useState } from 'react';
import styles from '../styles/Content.module.css';

export default function Verwaltung() {
  const [regenerating, setRegenerating] = useState(false);

  const addSth = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setRegenerating(true);
    await fetch('api/aktuelles');
    setRegenerating(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        <h1>Verwaltung</h1>
        {regenerating
      && <p>regenerating...</p>}
        <button type="submit" onClick={addSth}>Add Post</button>
      </div>
    </div>
  );
}
