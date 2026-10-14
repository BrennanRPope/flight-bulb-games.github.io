# Flight Bulb Games: site decisions

Everything settled so far, what it was settled against, and what is still open.
Written so that picking this up cold does not mean re-deriving it.

---

## 1. Name and domain

**Flight Bulb Games**, with **flightbulbgames.com**, which is already owned.

DNS moves to Cloudflare. The domain is not live on Cloudflare yet.

---

## 2. Hosting: Cloudflare Pages

Chosen over keeping GitHub Pages. Cloudflare Pages builds from this repo on
every push, costs nothing at this size, and puts DNS, hosting and subdomains in
one dashboard.

When the switch happens, GitHub Pages is turned off for this repo so the old
Jekyll page is not live alongside the new site.

---

## 3. Framework: Nuxt, generated static

Nuxt 4, built with `nuxt generate` into `dist/`. Static output means no server
to run or pay for, and nothing on Cloudflare beyond serving files.

Settled against a server-rendered Nuxt deploy (Workers): nothing on a studio
homepage needs a server, so it would only add moving parts.

One build note worth keeping: on npm 10.9 a fresh `npm install` of Nuxt 4.6
failed with an internal npm error (`Cannot read properties of null (reading
'edgesOut')`). The lockfile was generated with npm 11, and `npm ci` from it
works on npm 10, which is what Cloudflare runs. Keep the lockfile committed.

---

## 4. Nines lives on a subdomain

**`nines.flightbulbgames.com`, as its own repo and its own Pages project.** The
studio site showcases it and links out with "Play Nines".

Settled against `flightbulbgames.com/nines`. A path keeps search authority on
one domain and is simpler when a game is only a showcase page. A subdomain wins
when the game is a separate app with its own deploys, which is the assumption
here. On Cloudflare the subdomain costs one custom-domain entry, so the usual
argument for a path (less setup) mostly disappears.

**This rests on Nines being playable in the browser.** If it ships through an
app store or Steam instead, the "Play" buttons become store links and the
subdomain may not be needed at all.

---

## 5. Look

Taken from the logo: brown script wordmark, amber filament glow, warm cream
ground. Display type Bricolage Grotesque, body Atkinson Hyperlegible.

An earlier dark navy draft was dropped because the brown wordmark is not
readable on it. See `CLAUDE.md`.

---

## Still open

- **What Nines is.** Genre, platforms, player count, a one-line pitch. Nothing
  on the site can be finished without it.
- **Where Nines is played**: browser, app store or Steam. This decides whether
  section 4 holds.
- **The tagline.** "Bright ideas, given wings." is a starting point, not a
  decision. It describes the logo rather than the games; a tagline that says
  something concrete about what Flight Bulb makes would be stronger.
- **Studio copy**: the intro, the about text and a real contact address.
- **Key art for Nines.** The game card shows a large "9" until there is real
  art.
