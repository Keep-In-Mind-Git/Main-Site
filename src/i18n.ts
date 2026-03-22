export type Language = "ru" | "en";

export interface Translations {
  nav: {
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaCases: string;
    ctaContact: string;
  };
  about: {
    title: string;
    description: string;
    techStack: string;
    tech: {
      llm: string;
      smartContracts: string;
      rag: string;
      onchain: string;
      defi: string;
      product: string;
      mvp: string;
      vibeCoding: string;
    };
  };
  projects: {
    title: string;
    viewAll: string;
  };
  contact: {
    title: string;
    description: string;
    email: string;
    telegram: string;
  };
  footer: {
    copyright: string;
    description: string;
  };
  project: {
    back: string;
    source: string;
    liveDemo: string;
    context: string;
    task: string;
    result: string;
    whatIDid: string;
  };
  card: {
    viewProject: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      projects: "Кейсы",
      contact: "Контакты",
    },
    hero: {
      title: "Строю AI-продукты<br/>для FinTech и Crypto",
      subtitle: "Никита · AI · MVP за 2 недели",
      description: "Crypto · DeFi · Фонды · Анализ рынков",
      ctaCases: "Смотреть кейсы",
      ctaContact: "Обсудить сотрудничество",
    },
    about: {
      title: "Обо мне",
      description: "22 года. Год в команде DS/AI-агентов крупнейшего банка РФ, полгода prompt engineer в международной компании. Ушёл — стало скучно. Сейчас строю собственные продукты и партнёрюсь с теми, у кого есть аудитория или задача в финансовой нише. Ты приносишь трафик — я строю рабочий продукт. Так же занимаюсь заказной разработкой в AI.",
      techStack: "Стек технологий",
      tech: {
        llm: "LLM / AI агенты",
        smartContracts: "Smart Contracts",
        rag: "RAG",
        onchain: "Onchain-аналитика",
        defi: "DeFi",
        product: "Product",
        mvp: "MVP Building",
        vibeCoding: "Vibe Coding",
      },
    },
    projects: {
      title: "Cases",
      viewAll: "Смотреть все",
    },
    contact: {
      title: "Связаться",
      description: "Есть идея? Проблема? Комплимент? Напиши мне — создадим что-то стоящее вместе.",
      email: "Email",
      telegram: "Telegram",
    },
    footer: {
      copyright: "© 2025 Keep in Mind. Все права защищены.",
      description: "Строю AI-продукты для финтеха — MVP за 4–14 дней",
    },
    project: {
      back: "Назад",
      source: "Source",
      liveDemo: "Live Demo",
      context: "Контекст",
      task: "Задача",
      result: "Результат",
      whatIDid: "Что сделал",
    },
    card: {
      viewProject: "Смотреть проект",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Cases",
      contact: "Contact",
    },
    hero: {
      title: "Building AI products<br/>for FinTech and Crypto",
      subtitle: "Nikita · AI · MVP in 2 weeks",
      description: "Crypto · DeFi · Funds · Market Analysis",
      ctaCases: "View Cases",
      ctaContact: "Let's Talk",
    },
    about: {
      title: "About Me",
      description: "22 years old. One year in the DS/AI agents team of the largest bank in Russia, six months as a prompt engineer at an international company. Left — got bored. Now building my own products and partnering with those who have an audience or a task in the financial niche. You bring traffic — I build a working product. Also doing custom AI development.",
      techStack: "Tech Stack",
      tech: {
        llm: "LLM / AI Agents",
        smartContracts: "Smart Contracts",
        rag: "RAG",
        onchain: "Onchain Analytics",
        defi: "DeFi",
        product: "Product",
        mvp: "MVP Building",
        vibeCoding: "Vibe Coding",
      },
    },
    projects: {
      title: "Cases",
      viewAll: "View All",
    },
    contact: {
      title: "Get in Touch",
      description: "Have an idea? A problem? A compliment? Write to me — let's create something great together.",
      email: "Email",
      telegram: "Telegram",
    },
    footer: {
      copyright: "© 2025 Keep in Mind. All rights reserved.",
      description: "Building AI products for fintech — MVP in 4–14 days",
    },
    project: {
      back: "Back",
      source: "Source",
      liveDemo: "Live Demo",
      context: "Context",
      task: "Task",
      result: "Result",
      whatIDid: "What I Did",
    },
    card: {
      viewProject: "View Project",
    },
  },
};

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
