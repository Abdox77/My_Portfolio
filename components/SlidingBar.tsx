'use client';

import { useEffect, useState } from 'react';
import styles from './SlidingBar.module.css';

export default function SlidingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const inTimer = setTimeout(() => setVisible(true), 160);
    const outTimer = setTimeout(() => setVisible(false), 2000 + 200);
    return () => {
      clearTimeout(inTimer);
      clearTimeout(outTimer);
    };
  }, []);

  return (
    <div className={`${styles.wrapper} ${visible ? styles.visible : ''}`} aria-hidden>
      <div className={styles.bar} />
    </div>
  );
}
