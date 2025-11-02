'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useColorMode } from './ui/color-mode';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const [showLanguageMenu, setShowLanguageMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    setMounted(true);
    setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (lang: 'en' | 'fr') => {
    setLanguage(lang);
    setShowLanguageMenu(false);
  };

  if (!mounted) {
    return (
      <nav className={`${styles.navbar} ${styles.scrolled}`}>
        <div className="container">
          <div className={styles.content}>
              <a href="/" className={styles.logo} aria-label="Home — Mohdi Abdessamad">
                <svg
                  className={styles.logoMark}
                  width="48"
                  height="48"
                  viewBox="0 0 64 64"
                  aria-hidden="true"
                >
                  <path
                    d="M12 50V16L28 40L32 16L48 50"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M48 50V16"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M36 32H56"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </a>
            <div className={styles.nav}>
              <a href="/">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
            <div className={styles.actions}>
              <button className={styles.languageBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                EN
              </button>
              <a href="/resume.pdf" download className={styles.resumeBtn}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Resume
              </a>
              <div className={styles.themeToggle}>
                <div className={styles.toggleTrack}>
                  <div className={styles.toggleThumb}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isVisible ? styles.visible : ''}`}>
      <div className="container">
        <div className={styles.content}>
          <a href="/" className={styles.logo} aria-label="Home — Mohdi Abdessamad">
            <svg
              className={styles.logoMark}
              width="48"
              height="48"
              viewBox="0 0 64 64"
              aria-hidden="true"
            >
              <path
                d="M12 50V16L28 40L32 16L48 50"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M48 50V16"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M36 32H56"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </a>
          
          <div className={styles.nav}>
            <a href="/" className={styles.navLink} style={{ animationDelay: '0.1s' }}>Home</a>
            <a href="#about" className={styles.navLink} style={{ animationDelay: '0.2s' }}>About</a>
            <a href="#projects" className={styles.navLink} style={{ animationDelay: '0.3s' }}>Projects</a>
            <a href="#contact" className={styles.navLink} style={{ animationDelay: '0.4s' }}>Contact</a>
          </div>

          <div className={styles.actions}>
            <button 
              className={styles.hamburger}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.hamburgerLineOpen : ''}`}></span>
            </button>
            <div className={styles.languageSelector}>
              <button 
                className={styles.languageBtn}
                onClick={() => setShowLanguageMenu(!showLanguageMenu)}
                aria-label="Select language"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="2" y1="12" x2="22" y2="12"></line>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                </svg>
                {language.toUpperCase()}
              </button>
              
              {showLanguageMenu && (
                <div className={styles.languageMenu}>
                  <button 
                    className={`${styles.languageOption} ${language === 'en' ? styles.active : ''}`}
                    onClick={() => handleLanguageChange('en')}
                  >
                    English
                  </button>
                  <button 
                    className={`${styles.languageOption} ${language === 'fr' ? styles.active : ''}`}
                    onClick={() => handleLanguageChange('fr')}
                  >
                    Français
                  </button>
                </div>
              )}
            </div>

            <a href="/resume.pdf" download className={styles.resumeBtn}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Resume
            </a>
            
            <button 
              onClick={toggleColorMode}
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              <div className={`${styles.toggleTrack} ${colorMode === 'dark' ? styles.toggleTrackDark : ''}`}>
                <div className={styles.toggleThumb}>
                  {colorMode === 'dark' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="5"></circle>
                      <line x1="12" y1="1" x2="12" y2="3"></line>
                      <line x1="12" y1="21" x2="12" y2="23"></line>
                      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                      <line x1="1" y1="12" x2="3" y2="12"></line>
                      <line x1="21" y1="12" x2="23" y2="12"></line>
                      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                    </svg>
                  )}
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <a href="/" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#projects" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#contact" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      </div>
    </nav>
  );
}
