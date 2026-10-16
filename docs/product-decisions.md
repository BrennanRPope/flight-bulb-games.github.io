# Flight Bulb Games — product decisions

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

## 6. The homepage is a gallery, not a single hero

Flight Bulb is a collection: around nine or ten traditional board and card
games, first designed in the 1990s and being brought forward one at a time,
with browser versions planned for all of them and app-store versions possibly
later. The site's job is to answer two questions fast: *is there something here
for me*, and *where do I start*.

So the page is one **"start here" pick** given the full treatment, then a grid
of every other game as a card: name, board or card, players, play time, and a
one-line hook. Games not written up yet appear as dashed placeholder cards, so
the shelf reads as a collection in progress rather than a single title.

Settled against the first draft, which made Nines the whole page. That hid
every other game, and with a catalogue this size the catalogue is the point.

Each game follows the Nines pattern from section 4: its own repo and its own
subdomain once it is playable, with the card's Play link pointing there. Until
then the card says *Coming soon*.

Written up so far: **Nines, Combination, Hunt Hog.**

---

## 7. Quad Clusters is renamed Thicket

**Thicket.** A connection game: you build a network of the stones or spaces you
own. A thicket is a dense, tangled growth, which is close to literally what the
board looks like by the end, and the name hints at the game without explaining
it. It also sits with the rest of the shelf — Nines, Combination, Hunt Hog —
short and a little mysterious.

Settled against keeping **Quad Clusters**. The reason is feedback, not taste:
people said the name was not appealing. A rename is worth its cost when the old
name has a real problem, and that is one.

The name has been checked for collisions and is settled. This is probably the
strongest game in the collection, which makes it a candidate for the start-here
pick once its redesign is done.

---

## Still open

- **The start-here pick.** Nines holds the slot for now because it already has
  a subdomain. Thicket is the likely long-term answer once its redesign is
  done. Changing it is one line: `featuredSlug` in `app/pages/index.vue`.
- **The rest of the shelf.** Around five or six games still to write up. Each
  needs a name, board or card, players, play time and a one-line hook.
- **What Nines is.** Board or card, player count, play time, a one-line pitch.
- **Where the games are played**: browser first, app stores possibly later.
  This decides whether the subdomain-per-game pattern in section 4 holds.
- **The tagline.** "Bright ideas, given wings." is a starting point, not a
  decision. It describes the logo rather than the games; a tagline that says
  something concrete about what Flight Bulb makes would be stronger.
- **Studio copy**: the about text and a real contact address.
- **Card art.** Every card shows lettering (9, C, HH, T) until there is real
  art for each game.
