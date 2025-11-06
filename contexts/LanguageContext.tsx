'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    resume: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    description: string;
    viewWork: string;
    getInTouch: string;
  };
  about: {
    title: string;
    skills: string;
    experience: string;
    education: string;
    description: string;
    experienceItems: Array<{
      year: string;
      title: string;
      company: string;
      period: string;
      bullets: string[];
      link?: string;
    }>;
    educationItems: Array<{
      year: string;
      title: string;
      institution: string;
      period: string;
      bullets: string[];
      link?: string;
    }>;
  };
  projects: {
    title: string;
    subtitle: string;
    viewDemo: string;
    viewCode: string;
    comingSoon: string;
    items: Array<{
      title: string;
      description: string;
      tags: string[];
      image: string;
      link?: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    workTogether: string;
    workDescription: string;
    email: string;
    location: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    nameLabel: string;
    emailLabel: string;
    messageLabel: string;
    send: string;
    sending: string;
    sent: string;
    success: string;
    error: string;
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      resume: 'Resume',
    },
    hero: {
      greeting: "Hi,\u00A0I'm",
      name: 'MOHDI Abdessamad',
      title: '\u00A0a Software Engineer',
      description: 'I love building meaningful, high-impact software that solves real problems. As a passionate software engineer, I\'m always eager to learn, explore new technologies, and turn ideas into powerful, elegant solutions.',
      viewWork: 'View my work',
      getInTouch: 'Get in touch',
    },
    about: {
      title: 'About Me',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      description:
        "I'm a software engineer focused on crafting reliable, maintainable systems that solve real business problems. I enjoy bridging the gap between clean architecture and delightful user experiences, and I'm always exploring new tools to deliver better products.",
      experienceItems: [
        {
          year: '2025',
          title: 'Software Engineering Intern',
          company: 'OCP Group — Benguerrir, Morocco',
          period: 'April 2025 - Jul 2025',
          link: 'https://www.ocpgroup.ma/en' as string,
          bullets: [
            'Développement d\'un tableau de bord de maintenance prédictive (React, Flask, SQLite) pour le suivi en temps réel d\'équipements industriels.',
            'Contribution à l\'implémentation d\'un modèle LSTM-P pour l\'estimation du RUL (Remaining Useful Life), intégré dans un pipeline complet de données.',
            'Collaboration avec les équipes d\'ingénierie pour la validation des modèles et l\'optimisation des performances',
          ],
        },
      ],
      educationItems: [
        {
          year: 'Ongoing',
          title: "Bachelor's Degree in Digital Professions - Software Engineering Track",
          institution: 'INSSET - UPJV (Université de Picardie Jules Verne), France',
          period: '2025 - 2026',
          link: 'https://www.insset.u-picardie.fr' as string,
          bullets: [
           'Developed a predictive maintenance dashboard (React, Flask, SQLite) for real-time monitoring of industrial equipment.',
           'Contributed to the implementation of an LSTM-P model for RUL (Remaining Useful Life) estimation, integrated into a complete data pipeline.',
           'Collaborated with engineering teams for model validation and performance optimization.',
           ],
        },
        {
          year: '2025',
          title: 'Software Engineering Program',
          institution: '1337 - 42 Network, Benguerir, Morocco',
          period: '2022 - 2025',
          link: 'https://1337.ma' as string,
          bullets: [
            'Project-based curriculum focused on algorithms, system programming, and DevOps.',
            'Built numerous collaborative software projects (C, C++, Shell, Docker, and web).',
            'Strengthened teamwork, autonomy, and peer-learning skills through continuous challenges.',
          ],
        },
        {
          year: '2024',
          title: 'Industrial Digitalization & Operations Engineering Degree',
          institution: 'UM6P - Mohammed VI Polytechnic University, Morocco',
          period: '2021 - 2024',
          link: 'https://www.um6p.ma' as string,
          bullets: [
            'Specialized in industrial systems digitalization, automation, and data analytics.',
            'Final project: predictive maintenance platform for heavy machinery using machine learning and Power BI dashboards.',
            'Engaged in multiple research and innovation initiatives within the Green Tech Institute.',
          ],
        },
      ],


    },
    projects: {
      title: 'Featured Work',
      subtitle:
        'A collection of my work, from personal projects to professional collaborations.',
      viewDemo: 'View Demo',
      viewCode: 'View Code',
      comingSoon: 'Link will be updated soon.',
      items: [
        {
            title: 'Beehive',
            description: 'A web application for managing beekeeping operations, hive tracking, and geolocation visualization.',
            tags: ['Angular', 'Symfony', 'PostgreSQL', 'Docker', 'Leaflet'],
            image: 'Beehive.png',
            link: 'https://github.com/Abdox77/Beehive',
        },
        {
            title: 'Project Skeleton Generator',
            description: 'A Java-based UML editor and code generator that transforms class diagrams into source code automatically.',
            tags: ['Java', 'Swing', 'UML', 'Code Generation'],
            image: 'ProjectSkeletonGenerator.png',
            link: 'https://github.com/Abdox77/ProjectSkeletonGenerator',
        },
        {
            title: 'DockerCeption',
            description: 'A system administration project building a multi-container infrastructure with WordPress, MariaDB, and NGINX using Docker Compose.',
            tags: ['Docker', 'NGINX', 'MariaDB', 'WordPress', 'DevOps'],
            image: 'DockerCeption.png',
            link: 'https://github.com/Abdox77/Inception',
        },
        {
            title: 'WebServer',
            description: 'A custom HTTP web server built from scratch in C++ supporting CGI, multiple clients, and configuration parsing.',
            tags: ['C++', 'HTTP', 'CGI', 'Networking'],
            image: 'webserv.png',
        },
        {
            title: 'ft_transcendence',
            description: 'A full-stack web application featuring real-time multiplayer Pong, chat, authentication, and user profiles.',
            tags: ['FastifyJS', 'React', 'Prisma', 'Docker', 'JWT', 'WebSocket'],
            image: 'ft_transcendence.png',
        },
         {
            title: 'Minishell',
            description: 'A minimalist UNIX shell implementing command parsing, redirections, and environment management.',
            tags: ['C', 'Shell', 'System Programming'],
            image: 'minishell.png',
            link: 'https://github.com/Abdox77/minishell',
        },
        {
            title: 'Wcrawl (Web Crawler)',
            description: 'A web crawler that recursively explores and indexes websites, built to understand networking and parsing fundamentals.',
            tags: ['python', 'Networking', 'Parsing', 'System Programming'],
            image: 'Wcrawl.png',
            link: 'https://github.com/Abdox77/Wcrawl',
        },
        {
            title: 'miniRT',
            description: 'A lightweight ray tracer rendering 3D scenes with lighting, reflections, and object parsing.',
            tags: ['C', 'Ray Tracing', 'Math', 'Graphics'],
            image: 'miniRT.png',
            link: 'https://github.com/Abdox77/miniRT',
        },
        {
            title: 'Fractol',
            description: 'An interactive fractal renderer exploring Mandelbrot and Julia sets with smooth zooming and color gradients.',
            tags: ['C', 'Math', 'Graphics', 'Algorithms'],
            image: 'Fract-al.png',
            link: 'https://github.com/Abdox77/Fract-al',
        },
       
        ],
    },
    contact: {
      title: 'Get In Touch',
      subtitle:
        'Looking for a passionate software engineer or want to discuss a collaboration? Let\'s connect!',
      workTogether: "Let's work together",
      workDescription:
        'I\'m currently seeking internship or collaboration opportunities where I can contribute to impactful projects in software engineering and development, or industrial digitalization.',
      email: 'Email',
      location: 'Location',
      namePlaceholder: 'Your Name',
      emailPlaceholder: 'your.email@example.com',
      messagePlaceholder: 'Your message...',
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      sent: '✓ Sent!',
      success: 'Thanks for reaching out! I will get back to you soon.',
      error: 'Something went wrong while sending your message. Please try again.',
    },
    footer: {
      rights: '© 2025 developed by MOHDI Abdessamad. All rights reserved.',
    },
  },
  fr: {
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      contact: 'Contact',
      resume: 'CV',
    },
    hero: {
    greeting: "Bonjour,\u00A0je suis",
    name: 'MOHDI Abdessamad',
    title: '\u00A0ingénieur logiciel',
    description: "",
    viewWork: 'Voir mes projets',
    getInTouch: 'Me contacter',
    },
    about: {
      title: 'À propos de moi',
      skills: 'Compétences',
      experience: 'Expérience',
      education: 'Formation',
      description:
        "Je suis un ingénieur logiciel qui aime concevoir des solutions fiables et efficaces répondant à de vrais besoins métier. J'aime relier architecture soignée et expérience utilisateur fluide, tout en explorant de nouveaux outils pour livrer des produits toujours meilleurs.",
      experienceItems: [
        {
          year: '2025',
          title: 'Stagiaire ingénierie logicielle',
          company: 'Groupe OCP — Benguerrir, Maroc',
          period: 'Avril. 2025 - Juillet. 2025',
          link: 'https://www.ocpgroup.ma/fr' as string,
          bullets: [
            'Développement d\'un tableau de bord de maintenance prédictive (React, Flask, SQLite) pour le suivi en temps réel d\'équipements industriels.',
            'ontribution à l\'implémentation d\'un modèle LSTM-P pour l\'estimation du RUL(Remaining Useful Life), intégré dans un pipeline complet de données.',
            'Collaboration avec les équipes d\'ingénierie pour la validation des modèles et l\'optimisation des performances.',
          ],
        },
      ],
      educationItems: [
        {
          year: 'En cours',
          title: 'Licence Professionnelle Métiers du Numérique - Parcours Ingénierie Logicielle',
          institution: 'INSSET - UPJV (Université de Picardie Jules Verne), France',
          period: '2025 - 2026',
          link: 'https://www.insset.u-picardie.fr' as string,
          bullets: [
            'Spécialisation en ingénierie logicielle, cloud computing et transformation numérique.',
            'Réalisation de projets académiques en développement full-stack, IoT et conception de systèmes.',
            'Actuellement en dernière année avec une spécialisation en architecture logicielle.',
          ],
        },
        {
          year: '2025',
          title: "Programme d'Ingénierie Logicielle",
          institution: '1337 - 42 Network, Benguerir, Maroc',
          period: '2022 - 2025',
          link: 'https://1337.ma' as string,
          bullets: [
            "Programme basé sur les projets, axé sur l'algorithmique, la programmation système et le DevOps.",
            'Réalisation de nombreux projets collaboratifs (C, C++, Shell, Docker et développement web).',
            "Renforcement des compétences en travail d'équipe, autonomie et apprentissage par les pairs grâce à des défis continus.",
          ],
        },
        {
          year: '2024',
          title: 'Licence en Digitalisation Industrielle et Opérations',
          institution: 'UM6P - Université Mohammed VI Polytechnique, Maroc',
          period: '2021 - 2024',
          link: 'https://www.um6p.ma' as string,
          bullets: [
            'Spécialisation en digitalisation des systèmes industriels, automatisation et analyse de données.',
            "Projet de fin d'études : plateforme de maintenance prédictive pour engins lourds utilisant l'apprentissage automatique et des tableaux de bord Power BI.",
            "Participation à plusieurs projets de recherche et d'innovation au sein du Green Tech Institute.",
          ],
        },
      ],


    },
    projects: {
      title: 'Travaux mis en avant',
      subtitle:
        'Une sélection de mes projets, des initiatives personnelles aux collaborations professionnelles.',
      viewDemo: 'Voir la démo',
      viewCode: 'Voir le code',
      comingSoon: 'Lien disponible bientôt.',
      items: [
        {
        title: 'Beehive',
        description: "Application web de gestion apicole permettant le suivi des ruches, la planification des interventions et la visualisation géographique.",
        tags: ['Angular', 'Symfony', 'PostgreSQL', 'Docker', 'Leaflet'],
        image: 'Beehive.png',
        link: 'https://github.com/Abdox77/Beehive',
        },
        {
        title: 'Project Skeleton Generator',
        description: "Éditeur UML en Java capable de générer automatiquement le code source à partir de diagrammes de classes.",
        tags: ['Java', 'Swing', 'UML', 'Génération de code'],
        image: 'ProjectSkeletonGenerator.png',
        link: 'https://github.com/Abdox77/ProjectSkeletonGenerator',
        },
        {
        title: 'DockerCeption',
        description: "Projet d'administration système consistant à construire une infrastructure multi-conteneurs avec WordPress, MariaDB et NGINX à l’aide de Docker Compose.",
        tags: ['Docker', 'NGINX', 'MariaDB', 'WordPress', 'DevOps'],
        image: 'DockerCeption.png',
        link: 'https://github.com/Abdox77/Inception',
        },
        {
            title: 'WebServer',
            description: "Serveur HTTP personnalisé développé entièrement en C++, prenant en charge le CGI, la gestion de multiples clients et l’analyse de fichiers de configuration.",
            tags: ['C++', 'HTTP', 'CGI', 'Réseaux'],
            image: 'webserv.png',
        },

        {
        title: 'ft_transcendence',
        description: "Application web full-stack intégrant un jeu Pong multijoueur en temps réel, un chat, un système d’authentification et des profils utilisateurs.",
        tags: ['FastifyJS', 'React', 'Prisma', 'Docker', 'JWT', 'WebSocket'],
        image: 'ft_transcendence.png',
        },
        {
        title: 'Minishell',
        description: "Mini shell UNIX implémentant l’exécution de commandes, les redirections et la gestion des variables d’environnement.",
        tags: ['C', 'Shell', 'Programmation système'],
        image: 'minishell.png',
        link: 'https://github.com/Abdox77/minishell',
        },
        {
        title: 'Wcrawl (Web Crawler)',
        description: "Explorateur web récursif permettant d’indexer des sites afin de comprendre les bases du réseau et de l’analyse syntaxique.",
        tags: ['Python', 'Réseaux', 'Parsing', 'Programmation système'],
        image: 'Wcrawl.png',
        link: 'https://github.com/Abdox77/Wcrawl',
        },
        {
        title: 'miniRT',
        description: "Moteur de rendu 3D minimaliste (ray tracer) capable de générer des scènes avec gestion des lumières, reflets et objets.",
        tags: ['C', 'Ray Tracing', 'Mathématiques', 'Graphismes'],
        image: 'miniRT.png',
        link: 'https://github.com/Abdox77/miniRT',
        },
        {
        title: 'Fractol',
        description: "Rendu interactif de fractales (Mandelbrot et Julia) avec zoom fluide et dégradés de couleurs.",
        tags: ['C', 'Mathématiques', 'Graphismes', 'Algorithmes'],
        image: 'Fract-al.png',
        link: 'https://github.com/Abdox77/Fract-al',
        },
   
      ],
    },
    contact: {
      title: 'Contactez-moi',
      subtitle:
        'Vous recherchez un développeur passionné ou souhaitez collaborer sur un projet ? Discutons-en !',
      workTogether: 'Travaillons ensemble',
      workDescription:
        'Je suis actuellement à la recherche d\'un stage ou d\'une collaboration me permettant de contribuer à des projets à fort impact en ingénierie logicielle, développement ou digitalisation industrielle.',
      email: 'E-mail',
      location: 'Localisation',
      namePlaceholder: 'Votre nom',
      emailPlaceholder: 'votre.email@exemple.com',
      messagePlaceholder: 'Votre message...',
      nameLabel: 'Nom',
      emailLabel: 'E-mail',
      messageLabel: 'Message',
      send: 'Envoyer le message',
      sending: 'Envoi en cours...',
      sent: '✓ Envoyé !',
      success: 'Merci pour votre message ! Je vous répondrai rapidement.',
      error: 'Une erreur est survenue lors de l’envoi. Veuillez réessayer.',
    },
    footer: {
      rights: '© 2025 développé par MOHDI Abdessamad. Tous droits réservés.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: translations.en,
    };
  }
  return context;
}
