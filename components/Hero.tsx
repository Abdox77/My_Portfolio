'use client';

import { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t, language } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>
            <TypeAnimation
              key={language}
              sequence={[`${t.hero.greeting} ${t.hero.name}, ${t.hero.title}.`]}
              wrapper="span"
              speed={30}
              cursor
              repeat={0}
            />
          </h1>
          <div className={styles.cta}>
            <a href="#projects" className="btn btn-primary">
              {t.hero.viewWork}
            </a>
            <a href="#contact" className="btn btn-outline">
              {t.hero.getInTouch}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
