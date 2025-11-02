'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Projects.module.css';

export default function Projects() {
  const { t } = useLanguage();
  const projects = t.projects.items;

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t.projects.title}</h2>
          <p className={styles.subtitle}>{t.projects.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project) => {
            const cardContent = (
              <>
                <div
                  className={styles.image}
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>
                <div className={styles.content}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.description}>{project.description}</p>
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  {!project.link && (
                    <p className={styles.comingSoon}>{t.projects.comingSoon}</p>
                  )}
                </div>
              </>
            );

            return project.link ? (
              <a
                key={project.title}
                className={`${styles.card} ${styles.cardLink}`}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {cardContent}
              </a>
            ) : (
              <div key={project.title} className={`${styles.card} ${styles.cardDisabled}`}
                aria-disabled="true"
              >
                {cardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
