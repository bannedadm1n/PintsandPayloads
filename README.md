# Pints & Payloads

A deliberately simple Astro-powered cyber security blog for **pintsandpayloads.com**.

## Run locally

```bash
npm install
npm run dev
```

Then open the local URL Astro gives you.

## Add a post

Create a new Markdown file in:

`src/content/posts/`

Example:

```md
---
title: "My New Rambling"
description: "A short description shown on the homepage."
pubDate: 2026-08-20
category: "Red Teaming"
tags: ["red-team", "pentesting"]
draft: false
---

Write your post here.

## Heading

More content.
```

The filename becomes the URL, e.g. `my-new-rambling.md` becomes `/posts/my-new-rambling/`.

Set `draft: true` while writing if you do not want it published.

## Cloudflare Pages

Connect the repository to Cloudflare Pages.

- Framework preset: **Astro**
- Build command: `npm run build`
- Build output directory: `dist`

No server is required; Astro generates a static site suitable for Cloudflare Pages.

## Custom domain

In Cloudflare Pages, add `pintsandpayloads.com` as a custom domain. If the domain is already in the same Cloudflare account, Cloudflare can manage the DNS automatically.

## Design

The site intentionally uses a warm paper background, black terminal-style elements and a red-orange accent. It is meant to feel more like a notebook/pub table than a corporate cyber security consultancy site.
