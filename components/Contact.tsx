'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import styles from './Contact.module.css';

export default function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(await response.text());
      }

      setStatus('sent');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (error) {
      console.error('Failed to send contact message', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>{t.contact.title}</h2>
          <p className={styles.subtitle}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <h3>{t.contact.workTogether}</h3>
            <p>
              {t.contact.workDescription}
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span className={styles.label}>{t.contact.email}</span>
                <span className={styles.value}>mohdia08@gmail.com</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.label}>{t.contact.location}</span>
                <span className={styles.value}>France</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t.contact.nameLabel}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t.contact.namePlaceholder}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{t.contact.emailLabel}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t.contact.emailPlaceholder}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{t.contact.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder={t.contact.messagePlaceholder}
              />
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' && t.contact.sending}
              {status === 'sent' && t.contact.sent}
              {status === 'idle' && t.contact.send}
              {status === 'error' && t.contact.send}
            </button>
            {(status === 'sent' || status === 'error') && (
              <p
                className={`${styles.feedback} ${status === 'error' ? styles.feedbackError : ''}`}
                role={status === 'error' ? 'alert' : 'status'}
              >
                {status === 'sent' ? t.contact.success : t.contact.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
