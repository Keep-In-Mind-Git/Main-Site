---
title: "Polymarket Arbitrage Bot"
description: "A Telegram bot for automatically finding arbitrage opportunities on prediction markets"
tags: ["Crypto", "AI", "Telegram"]
year: 2026
result: "5 arbitrage opportunities per day with a spread of 3-6%"
order: 1
lang: "en"
image: {
  url: "/polymarket-arbitrage.webp",
  alt: "Polymarket Arbitrage Bot"
}
---

## Context

The end of 2025 saw a boom in prediction markets. Competing platforms such as Polymarket, Kalshi, and others emerged. The client wanted to automatically catch price discrepancies on identical events between platforms and conduct arbitrage.

## Task

A Telegram bot that monitors over 2,000 events on 4 platforms in real time and finds spreads.

## What it did

- Parsing 4 platforms at a set interval
- AI matching of events by name (GPT) — without this, manual matching is impossible
- Telegram alert with instant notification when a spread is detected

## Result

> 5 arbitrage opportunities per day with a spread of 3-6%. The client used the bot to make trading decisions during peak market activity.

## Technologies

- Python
- Telegram Bot API
- OpenAI GPT API
- Web scraping