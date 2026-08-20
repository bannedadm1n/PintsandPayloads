# Pints & Payloads

Cyberpunk/offensive-security themed Astro blog built for Cloudflare Pages.

## Run locally

```bash
npm install
npm run dev
```

## Add a post

Create a Markdown file in `src/content/posts/`:

```md
---
title: "My New Rambling"
description: "A short description shown on the homepage."
pubDate: 2026-08-20
category: "Red Teaming"
tags: ["red-team", "pentesting"]
draft: false
---

Write the post here.
```

## Cloudflare Pages

- Framework preset: Astro
- Build command: `npm run build`
- Build output directory: `dist`

Push to GitHub and Cloudflare Pages will rebuild automatically.
