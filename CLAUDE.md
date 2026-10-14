# Working in this repository

## What this is

The Flight Bulb Games studio site: a Nuxt 4 app that generates static files for
Cloudflare Pages. One page today. Games live elsewhere: each game gets its own
repo and its own subdomain, and this site links out to them.

Read [`docs/decisions.md`](docs/decisions.md) before changing anything
structural. It records what was settled and what it was settled against.

## Never invent facts about the games

Nothing on this site describes Nines beyond what its maker has written down.
Genre, platforms, player counts, release dates, features: if it has not been
stated, it stays a `[bracketed placeholder]`. A placeholder that is obviously a
placeholder is better than a plausible sentence that is wrong, because the
plausible sentence ships.

The same goes for the studio: no invented history, team size, awards or
numbers.

## Copy lives in one place

All site copy sits in the `site` and `nines` objects at the top of
`app/pages/index.vue`. Keep it there. Someone filling in the words should never
have to read the template to find them.

## The look comes from the logo

The palette is taken from `content/IMG_4223.PNG`: the brown of the script
wordmark, the amber of the filament, and a warm cream ground the brown can be
read against. The script wordmark is too dark to sit on a dark background, which
is why the site is light. Do not move the site to a dark theme without solving
that first.

Never redraw or trace the logo. Use the artwork, resized from the original.

## Static, always

`npm run generate` must keep producing a plain static site in `dist/`. No
server routes, no runtime API calls from this site. If a game needs a server,
that belongs in the game's own repo and project, not here.

## Before pushing

Run `npm ci && npm run generate` and check it finishes. Cloudflare runs the same
two steps from the committed lockfile, so a change that only builds with a
fresh install will fail there.
