# Локализация (i18n)

## Обзор

Сайт поддерживает два языка: **Русский (ru)** и **Английский (en)**.

## Как работает локализация

### 1. Переключатель языка

Переключатель языка находится в хедере сайта (справа на десктопе, в мобильном меню на мобильных).

### 2. Хранение языка

Язык сохраняется в `localStorage` браузера под ключом `site-lang`. По умолчанию используется русский язык.

### 3. Структура переводов

Все переводы находятся в файле [`src/i18n.ts`](../src/i18n.ts):

```typescript
export const translations: Record<Language, Translations> = {
  ru: { /* русские переводы */ },
  en: { /* английские переводы */ },
};
```

### 4. Использование в компонентах

```astro
---
import { getTranslations } from "@/i18n";
import { getLanguage } from "@/scripts/language";

const lang = getLanguage();
const t = getTranslations(lang);
---

<h1>{t.hero.title}</h1>
```

## Добавление новых переводов

### 1. Добавить текст в `src/i18n.ts`

```typescript
export interface Translations {
  // ... существующие поля
  newSection: {
    title: string;
    description: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    // ... существующие переводы
    newSection: {
      title: "Новый раздел",
      description: "Описание нового раздела",
    },
  },
  en: {
    // ... существующие переводы
    newSection: {
      title: "New Section",
      description: "Description of new section",
    },
  },
};
```

### 2. Использовать в компоненте

```astro
<h2>{t.newSection.title}</h2>
<p>{t.newSection.description}</p>
```

## Локализация контента (статьи, кейсы)

### Вариант 1: Отдельные файлы для каждого языка

Создайте отдельные файлы для каждого языка:

```
src/content/projects/
  polymarket-arbitrage.md      # русский
  polymarket-arbitrage.en.md   # английский
```

### Вариант 2: Поле `lang` в frontmatter

Добавьте поле `lang` в frontmatter:

```yaml
---
title: "Polymarket Arbitrage Bot"
lang: "ru"
---
```

Затем фильтруйте контент по языку при получении:

```typescript
const projects = await getCollection("projects");
const ruProjects = projects.filter(p => p.data.lang === "ru");
```

## Текущие переводы

### Навигация
- Главная / Home
- Обо мне / About
- Кейсы / Cases
- Контакты / Contact

### Hero секция
- Заголовок с HTML (FinTech и Crypto подсвечены цветом)
- Подзаголовок
- Описание
- Кнопки: "Смотреть кейсы" / "View Cases", "Обсудить сотрудничество" / "Let's Talk"

### Контакты
- Заголовок: "Связаться" / "Get in Touch"
- Описание
- Кнопки: "Email", "Telegram"

### Проекты
- Заголовок: "Cases"
- Кнопка "Назад" / "Back"
- Кнопки: "Source", "Live Demo"
- Заголовки секций: "Контекст" / "Context", "Задача" / "Task", "Результат" / "Result", "Что сделал" / "What I Did"

### Footer
- Копирайт

## Известные ограничения

1. **Контент проектов**: В настоящее время все проекты на русском языке. Для добавления английских версий нужно либо создать отдельные файлы, либо добавить поле `lang` в frontmatter.

2. **Блог**: Блог пока не локализован. Можно использовать тот же подход, что и для проектов.

3. **About секция**: Описание в секции "Обо мне" пока хардкод в компоненте. Нужно вынести в переводы.

## Планы по улучшению

1. Добавить локализацию для секции "Обо мне"
2. Добавить локализацию для блога
3. Создать английские версии всех проектов
4. Добавить автоматическое определение языка браузера
{}