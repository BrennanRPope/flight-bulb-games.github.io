<script setup lang="ts">
// Site copy lives here so it's easy to edit in one place.
// Anything in [brackets] is a placeholder waiting for real content.
const site = {
  tagline: 'Bright ideas, given wings.',
  intro: '[One or two sentences about Flight Bulb Games: who you are and what kind of games you make.]',
  email: '[hello@flightbulbgames.com]',
  about: [
    '[Studio story: how Flight Bulb Games started and who is behind it.]',
    '[What you care about when you make a game.]'
  ]
}

const nines = {
  name: 'Nines',
  url: 'https://nines.flightbulbgames.com',
  pitch: '[One-line pitch for Nines: what you do and why it is fun.]',
  details: ['[Genre]', '[Platforms]', '[Players]']
}

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
          <p class="eyebrow">Independent game studio</p>
          <h1>{{ site.tagline }}</h1>
          <p class="lede">{{ site.intro }}</p>
          <div class="actions">
            <a :href="nines.url" class="btn btn-primary">Play {{ nines.name }}</a>
            <a href="#games" class="btn btn-ghost">See our games</a>
          </div>
        </div>
        <div class="hero-logo">
          <img src="/images/logo.webp" alt="Flight Bulb Games logo: a glowing light bulb with airplane wings" width="1000" height="1221">
        </div>
      </section>

      <section id="games" class="band">
        <div class="wrap stack">
          <h2>Our games</h2>
          <article class="game">
            <div class="game-art" aria-hidden="true">
              <span>9</span>
            </div>
            <div class="game-body">
              <p class="eyebrow">Featured · Play now</p>
              <h3>{{ nines.name }}</h3>
              <p>{{ nines.pitch }}</p>
              <p class="meta">{{ nines.details.join(' · ') }}</p>
              <div class="actions">
                <a :href="nines.url" class="btn btn-primary">Play {{ nines.name }}</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section id="about" class="wrap about">
        <h2>About the studio</h2>
        <div class="stack-sm">
          <p v-for="(para, i) in site.about" :key="i">{{ para }}</p>
        </div>
      </section>
    </main>

    <footer id="contact" class="footer">
      <div class="wrap footer-row">
        <span>© {{ year }} Flight Bulb Games</span>
        <div class="footer-links">
          <a :href="`mailto:${site.email}`">{{ site.email }}</a>
          <a :href="nines.url">nines.flightbulbgames.com</a>
        </div>
      </div>
    </footer>
  </div>
</template>
