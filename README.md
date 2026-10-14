# Flight Bulb Games

The studio website for Flight Bulb Games, built with [Nuxt](https://nuxt.com) and hosted on Cloudflare Pages.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static build into dist/
```

Site copy (tagline, intro, Nines pitch, about text, contact email) lives at the top of `app/pages/index.vue`. Anything in `[brackets]` is still placeholder text.

The original logo artwork is `content/IMG_4223.PNG`. The web-sized versions in `public/` were made from it.

## Deploying to Cloudflare Pages

1. **Move DNS to Cloudflare.** In the Cloudflare dashboard, add `flightbulbgames.com` as a site (Free plan). Cloudflare imports your existing records and gives you two nameservers. Set those nameservers at your registrar, then wait until Cloudflare shows the domain as Active.
2. **Create the Pages project.** Go to Workers & Pages → Create → Pages → Connect to Git, and pick this repo.
   - Framework preset: **Nuxt.js**
   - Build command: `npm run generate`
   - Build output directory: `dist`
   - Node version comes from `.nvmrc` (22).
3. **Attach the domain.** In the project, open Custom domains and add `flightbulbgames.com`, then `www.flightbulbgames.com`. With DNS on Cloudflare, the records are created for you.
4. **Turn off GitHub Pages** for this repo (Settings → Pages) so the old site isn't also live.

## Nines on its own subdomain

Nines gets its own repo and its own Cloudflare Pages project. Add `nines.flightbulbgames.com` as that project's custom domain. The "Play Nines" buttons on this site already point there.
