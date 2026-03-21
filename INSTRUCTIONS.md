# Инструкции по добавлению изображений

## Фото профиля

**Путь**: `public/portrait.webp`

**Размер**: Рекомендуется 668x516 px (соотношение сторон 1.29:1)

**Формат**: WebP (для лучшей оптимизации) или PNG/JPG

**Как добавить**:
1. Подготовь фото профиля
2. Переименуй в `portrait.webp`
3. Помести в папку `public/` в корне проекта

---

## Скриншоты для кейсов

### 1. Polymarket Arbitrage Bot
**Путь**: `public/polymarket-arbitrage.webp`
**Размер**: 610x400 px (соотношение сторон 1.525:1)

### 2. DeFi Liquidity Automation
**Путь**: `public/defi-liquidity-automation.webp`
**Размер**: 610x400 px

### 3. Meteora Liquidity Radar
**Путь**: `public/meteora-liquidity-radar.webp`
**Размер**: 610x400 px

### 4. AI Trend Watcher
**Путь**: `public/ai-trend-watcher.webp`
**Размер**: 610x400 px

### 5. KofreKo
**Путь**: `public/kofreko.webp`
**Размер**: 610x400 px

**Как добавить**:
1. Подготовь скриншоты для каждого кейса
2. Переименуй согласно таблице выше
3. Помести в папку `public/` в корне проекта

---

## Обновление путей в файлах кейсов

После добавления изображений нужно обновить пути в файлах кейсов:

### Пример для Polymarket Arbitrage Bot

Файл: `src/content/projects/polymarket-arbitrage.md`

**Было**:
```yaml
image: {
  url: "https://placehold.co/600x400/27FF0B/000000?text=Polymarket+Arbitrage+Bot",
  alt: "Polymarket Arbitrage Bot"
}
```

**Стало**:
```yaml
image: {
  url: "/polymarket-arbitrage.webp",
  alt: "Polymarket Arbitrage Bot"
}
```

### Повтори для остальных кейсов:

- `defi-liquidity-automation.md` → `/defi-liquidity-automation.webp`
- `meteora-liquidity-radar.md` → `/meteora-liquidity-radar.webp`
- `ai-trend-watcher.md` → `/ai-trend-watcher.webp`
- `kofreko.md` → `/kofreko.webp`

---

## Логотип (опционально)

**Путь**: `public/logo.svg` или `public/logo.png`

**Размер**: Любой, но рекомендуется квадратный или с соотношением сторон 1:1

**Как добавить**:
1. Подготовь логотип
2. Переименуй в `logo.svg` (или `logo.png`)
3. Помести в папку `public/`
4. Обнови компонент `src/components/Header.astro` для использования логотипа

---

## Запуск сайта

### Локально
```bash
npm run dev
```

Сайт будет доступен по адресу: `http://localhost:4321`

### Сборка для продакшена
```bash
npm run build
```

Результат будет в папке `dist/`

---

## Деплой

### Vercel
1. Подключи репозиторий к Vercel
2. Настрой домен `keep-in-mind.ru`
3. Деплой произойдет автоматически

### Netlify
1. Подключи репозиторий к Netlify
2. Настрой домен `keep-in-mind.ru`
3. Деплой произойдет автоматически

---

## Проверка

После добавления изображений:
1. Запусти `npm run dev`
2. Открой `http://localhost:4321`
3. Проверь, что все изображения отображаются корректно
4. Проверь адаптивность на мобильных устройствах

---

## Оптимизация изображений

Для лучшей производительности:
- Используй формат WebP
- Сжимай изображения (рекомендуемый размер: < 200KB)
- Используй правильные размеры (610x400 px для кейсов)

Инструменты для оптимизации:
- [Squoosh](https://squoosh.app/)
- [TinyPNG](https://tinypng.com/)
- [ImageOptim](https://imageoptim.com/)
