<script setup lang="ts">
// All site copy lives in `site` and `games` so it can be edited in one place.
// Anything in [brackets] is a placeholder waiting for real content.

type Game = {
  slug: string
  name: string
  mark: string        // the letters shown on the card until there is real art
  kind: string        // 'Board' or 'Card'
  players: string
  time: string
  hook: string        // one line: why someone would want to play it
  url?: string        // set once the game is playable; the card then shows a Play link
  placeholder?: true  // a game not written up yet
}

const site = {
  eyebrow: 'Board and card games',
  tagline: 'Bright ideas, given wings.',
  intro: 'Traditional board and card games, first designed in the 1990s and now being brought forward.',
  startHereReason: '[Why this is the best first game for someone new to Flight Bulb.]',
  email: '[hello@flightbulbgames.com]',
  about: [
    '[Studio story: how Flight Bulb Games started and who is behind it.]',
    '[What you care about when you make a game.]'
  ]
}

// The "start here" pick. Change this slug to feature a different game.
const featuredSlug = 'nines'

const games: Game[] = [
  {
    slug: 'nines',
    name: 'Nines',
    mark: '9',
    kind: '[Board or card]',
    players: '[Players]',
    time: '[Play time]',
    hook: '[One-line hook for Nines.]',
    url: 'https://nines.flightbulbgames.com'
  },
  {
    slug: 'combination',
    name: 'Combination',
    mark: 'C',
    kind: '[Board or card]',
    players: '[Players]',
    time: '[Play time]',
    hook: '[One-line hook for Combination.]'
  },
  {
    slug: 'hunt-hog',
    name: 'Hunt Hog',
    mark: 'HH',
    kind: '[Board or card]',
    players: '[Players]',
    time: '[Play time]',
    hook: '[One-line hook for Hunt Hog.]'
  },
  {
    slug: 'thicket',
    name: 'Thicket',
    mark: 'T',
    kind: 'Board',
    players: '[Players]',
    time: '[Play time]',
    hook: 'Connect your stones into a network and claim the ground you hold.'
  },
  { slug: 'game-5', name: '[Game title]', mark: '?', kind: '[Board or card]', players: '[Players]', time: '[Play time]', hook: '[One-line hook.]', placeholder: true },
  { slug: 'game-6', name: '[Game title]', mark: '?', kind: '[Board or card]', players: '[Players]', time: '[Play time]', hook: '[One-line hook.]', placeholder: true },
  { slug: 'game-7', name: '[Game title]', mark: '?', kind: '[Board or card]', players: '[Players]', time: '[Play time]', hook: '[One-line hook.]', placeholder: true },
  { slug: 'game-8', name: '[Game title]', mark: '?', kind: '[Board or card]', players: '[Players]', time: '[Play time]', hook: '[One-line hook.]', placeholder: true },
  { slug: 'game-9', name: '[Game title]', mark: '?', kind: '[Board or card]', players: '[Players]', time: '[Play time]', hook: '[One-line hook.]', placeholder: true }
]

const featured = games.find(g => g.slug === featuredSlug) ?? games[0]!
const rest = games.filter(g => g !== featured)
const meta = (g: Game) => [g.kind, g.players, g.time].join(' · ')
const year = new Date().getFullYear()
</script>

<template>
  <div class="page">
    <header class="wrap header">
      <a href="#top" class="brand">
        <img src="/images/logo-mark.png" alt="" width="44" height="40">
        <span>Flight Bulb Games</span>
      </a>
      <nav aria-label="Main" class="nav">
        <a href="#games">Games</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <main>
      <section id="top" class="wrap hero">
        <div class="hero-text">
          <p class="eyebrow">{{ site.eyebrow }}</p>
          <h1>{{ site.tagline }}</h1>
          <p class="lede">{{ site.intro }}</p>
          <div class="actions">
            <a href="#start" class="btn btn-primary">Start with {{ featured.name }}</a>
            <a href="#games" class="btn btn-ghost">Browse all {{ games.length }} games</a>
          </div>
        </div>
        <div class="hero-logo">
          <img src="/images/logo.webp" alt="Flight Bulb Games logo: a glowing light bulb with airplane wings" width="1000" height="1221">
        </div>
      </section>

      <section id="start" class="band">
        <div class="wrap stack">
          <h2>New here? Start with this one.</h2>
          <article class="feature">
            <div class="feature-art" aria-hidden="true">
              <span>{{ featured.mark }}</span>
            </div>
            <div class="feature-body">
              <p class="eyebrow">Start here</p>
              <h3>{{ featured.name }}</h3>
              <p>{{ featured.hook }}</p>
              <p>{{ site.startHereReason }}</p>
              <p class="meta">{{ meta(featured) }}</p>
              <div class="actions">
                <a v-if="featured.url" :href="featured.url" class="btn btn-primary">Play {{ featured.name }}</a>
                <span v-else class="tag">Coming soon</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="games" class="wrap collection">
        <div class="collection-head">
          <h2>The collection</h2>
          <p class="lede">Every game from the Flight Bulb shelf.</p>
        </div>
        <ul class="grid">
          <li v-for="game in rest" :key="game.slug" class="card" :class="{ 'card-placeholder': game.placeholder }">
            <div class="card-mark" aria-hidden="true">{{ game.mark }}</div>
            <div class="card-body">
              <h3>{{ game.name }}</h3>
              <p class="meta">{{ meta(game) }}</p>
              <p>{{ game.hook }}</p>
              <div class="card-foot">
                <a v-if="game.url" :href="game.url" class="card-link">Play {{ game.name }}</a>
                <span v-else class="tag">Coming soon</span>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <section id="about" class="band">
        <div class="wrap about">
          <h2>About the studio</h2>
          <div class="stack-sm">
            <p v-for="(para, i) in site.about" :key="i">{{ para }}</p>
          </div>
        </div>
      </section>
    </main>

    <footer id="contact" class="footer">
      <div class="wrap footer-row">
        <span>© {{ year }} Flight Bulb Games</span>
        <div class="footer-links">
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
        </div>
      </div>
    </footer>
  </div>
</template>
