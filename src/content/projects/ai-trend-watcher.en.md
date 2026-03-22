---
title: "AI Trend Watcher + Autoposting"
description: "AI trend monitoring and posting automation for an SMM agency"
tags: ["AI", "SMM", "Telegram"]
year: 2026
result: "Trendwatcher is used daily — the agency publishes content proactively"
order: 4
lang: "en"
image: {
  url: "/ai-trend-watcher.webp",
  alt: "AI Trend Watcher"
}
---

## Context

The SMM agency was losing clients due to competition from ChatGPT. Their current autoposting for 20 accounts cost 6,500 rubles/month and regularly crashed. They needed an AI-powered process transformation.

## Task

Replace the broken autoposting system and add AI trend monitoring to stay ahead of the competition.

## What I did

- Migrated 20 accounts to the Late.dev API via n8n
- Notion Database as a content management center (Notion → n8n → Late.dev → Telegram/X/LinkedIn)
- Telegram alerts for any posting errors
- AI Trend Tracker: parsing 10 sources once a day, GPT topic clustering, alerts if a topic is in >50% of sources

## Result

> Trendwatcher is used daily — the agency publishes content proactively and gains more reach. Autoposting works flawlessly.

## Technologies

- Notion API
- Late.dev API
- OpenAI GPT API
- Telegram Bot API