# Flight Bulb Games

The studio website for Flight Bulb Games: a collection of traditional board and
card games, first designed in the 1990s and being brought forward.

**Status: the homepage is built, most of the words are not.** The gallery
layout, logo and build are done and deploy cleanly. Every line in `[brackets]`
is a placeholder waiting for real copy: each game's details and hook, the games
not yet written up, the about text and the contact address. Nothing is live on
Cloudflare yet; `main` still serves the old GitHub Pages site.

- [`docs/product-decisions.md`](docs/product-decisions.md) — what is settled,
  what is not, and why
- [`CLAUDE.md`](CLAUDE.md) — working rules for anyone writing here
- [`app/pages/index.vue`](app/pages/index.vue) — the homepage; all site copy sits
  at the top of the file

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static build into dist/
```

The original logo artwork is `content/IMG_4223.PNG`. The web-sized versions in
`public/` were made from it.

## Deploying to Cloudflare Pages

1. **Move DNS to Cloudflare.** In the Cloudflare dashboard, add
   `flightbulbgames.com` as a site (Free plan). Cloudflare imports your existing
   records and gives you two nameservers. Set those at your registrar and wait
   for the domain to show as Active.
2. **Create the Pages project.** Go to Workers & Pages → Create → Pages →
   Connect to Git, and pick this repo.
   - Framework preset: **Nuxt.js**
   - Build command: `npm run generate`
   - Build output directory: `dist`
   - Node version comes from `.nvmrc` (22).
3. **Attach the domain.** In the project, open Custom domains and add
   `flightbulbgames.com`, then `www.flightbulbgames.com`.
4. **Turn off GitHub Pages** for this repo (Settings → Pages) so the old site is
   not also live.

## Nines on its own subdomain

Nines gets its own repo and its own Cloudflare Pages project, with
`nines.flightbulbgames.com` as that project's custom domain. The "Play Nines"
buttons on this site already point there.
