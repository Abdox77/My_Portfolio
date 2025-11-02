'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './About.module.css';

export default function About() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const { t } = useLanguage();
  const experienceItems = t.about.experienceItems;
  const educationItems = t.about.educationItems;

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <a
                href="https://www.linkedin.com/in/abdessamad-mohdi-90a439244/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className={styles.imageLink}
              >
                <Image
                  src="/amohdi.jpeg"
                  alt="MOHDI Abdessamad"
                  width={160}
                  height={160}
                  quality={100}
                  className={styles.profileImg}
                />
              </a>
            </div>
          </div>
          <div className={styles.intro}>
            <h1 className={styles.name}>MOHDI Abdessamad</h1>
            <p className={styles.bio}>{t.about.description}</p>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>{t.about.skills}</h2>
          <div className={styles.skills}>
            <div className={styles.skill}>C/C++</div>
            <div className={styles.skill}>PHP</div>
            <div className={styles.skill}>Java</div>
            <div className={styles.skill}>JavaScript</div>
            <div className={styles.skill}>TypeScript</div>
            <div className={styles.skill}>HTML/CSS</div>
            <div className={styles.skill}>Angular</div>
            <div className={styles.skill}>Symfony</div>
            <div className={styles.skill}>FastifyJS</div>
            <div className={styles.skill}>MySQL</div>
            <div className={styles.skill}>Docker</div>
            <div className={styles.skill}>Git</div>
            <div className={styles.skill}>CI/CD</div>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.tabContainer}>
            <button
              className={`${styles.tab} ${activeTab === 'experience' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              {t.about.experience}
            </button>
            <button
              className={`${styles.tab} ${activeTab === 'education' ? styles.tabActive : ''}`}
              onClick={() => setActiveTab('education')}
            >
              {t.about.education}
            </button>
          </div>

          {activeTab === 'experience' && (
            <div className={styles.timeline}>
              {experienceItems.map((item) => (
                <div className={styles.timelineItem} key={`${item.year}-${item.title}`}>
                  <div className={styles.timelineDate}>
                    <span className={styles.year}>{item.year}</span>
                    <div className={styles.timelineDot}></div>
                  </div>
                  {item.link ? (
                    <a
                      className={`${styles.timelineContent} ${styles.timelineLink}`}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.experience}>
                        <div className={styles.expHeader}>
                          <div>
                            <h3 className={styles.expTitle}>{item.title}</h3>
                            <p className={styles.expCompany}>{item.company}</p>
                          </div>
                          <p className={styles.expDate}>{item.period}</p>
                        </div>
                        <ul className={styles.expList}>
                          {item.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </a>
                  ) : (
                    <div className={styles.timelineContent}>
                      <div className={styles.experience}>
                        <div className={styles.expHeader}>
                          <div>
                            <h3 className={styles.expTitle}>{item.title}</h3>
                            <p className={styles.expCompany}>{item.company}</p>
                          </div>
                          <p className={styles.expDate}>{item.period}</p>
                        </div>
                        <ul className={styles.expList}>
                          {item.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className={styles.timeline}>
              {educationItems.map((item) => (
                <div className={styles.timelineItem} key={`${item.year}-${item.title}`}>
                  <div className={styles.timelineDate}>
                    <span className={styles.year}>{item.year}</span>
                    <div className={styles.timelineDot}></div>
                  </div>
                  {item.link ? (
                    <a
                      className={`${styles.timelineContent} ${styles.timelineLink}`}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className={styles.experience}>
                        <div className={styles.expHeader}>
                          <div>
                            <h3 className={styles.expTitle}>{item.title}</h3>
                            <p className={styles.expCompany}>{item.institution}</p>
                          </div>
                          <p className={styles.expDate}>{item.period}</p>
                        </div>
                        <ul className={styles.expList}>
                          {item.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </a>
                  ) : (
                    <div className={styles.timelineContent}>
                      <div className={styles.experience}>
                        <div className={styles.expHeader}>
                          <div>
                            <h3 className={styles.expTitle}>{item.title}</h3>
                            <p className={styles.expCompany}>{item.institution}</p>
                          </div>
                          <p className={styles.expDate}>{item.period}</p>
                        </div>
                        <ul className={styles.expList}>
                          {item.bullets.map((bullet, index) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
