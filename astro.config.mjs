import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [mdx()],
  site: 'https://pintsandpayloads.com',
  adapter: cloudflare()
});