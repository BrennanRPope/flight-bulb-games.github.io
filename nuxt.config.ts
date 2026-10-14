// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-10-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: 'Flight Bulb Games',
      meta: [
        { name: 'description', content: 'Flight Bulb Games is an independent game studio. Home of Nines.' },
        { name: 'theme-color', content: '#F7F1E6' },
        { property: 'og:title', content: 'Flight Bulb Games' },
        { property: 'og:description', content: 'Independent game studio. Home of Nines.' },
        { property: 'og:image', content: '/images/logo.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,800&family=Atkinson+Hyperlegible:wght@400;700&display=swap'
        }
      ]
    }
  },

  // Static output for Cloudflare Pages: `npm run generate` writes the site to `dist/`.
  nitro: {
    prerender: { routes: ['/'] }
  }
})
