# myfirstdate.lol 💛

> An icebreaker game for first dates. Phone on the table, tap your colour, answer together. No awkward silences.

**Live site:** [myfirstdate.lol](https://myfirstdate.lol)

---

## What it is

A dead-simple web app you open on a first date. Put your phone flat on the table between you. Each person has a coloured side. Tap yours when it's your turn, get a question, both answer it, hit done. Alternate until you've run out of things you want to know, or until you're already three hours deep in conversation and forgot the app exists.

No accounts. No downloads. No ads cluttering the game. Free forever.

---

## Features

- **57 handwritten questions** across 5 vibes: Spark, Laugh, Go Deep, Wild Card, Dream Big
- **🌶️ Spicy Mode** — 25 flirty/intimate questions for adults (18+ age gate)
- **Full theme shift** when Spicy Mode activates — deep crimson/magenta palette
- **Pronoun-aware** — pick your couple type (man/woman, two women, two men, non-binary) and questions adjust
- **Save favourites** — heart questions mid-game, copy them to share at the end
- **Progress bar** — subtle gold bar so you feel momentum
- **Works offline** — pure HTML/CSS/JS, no frameworks, no dependencies
- **Installable PWA** — add to home screen from Safari/Chrome
- **Haptic feedback** on mobile

---

## File structure

```
myfirstdate.lol/
├── index.html          # App shell — all HTML, links to style.css + app.js
├── style.css           # All styles including spicy mode theme
├── app.js              # All game logic, questions, palettes
├── netlify.toml        # Deploy config, headers, redirects, caching
├── site.webmanifest    # PWA manifest
├── robots.txt          # SEO: allow all
├── sitemap.xml         # SEO: sitemap
├── favicon.ico         # Multi-size .ico (16/32/48)
├── icons/
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png      (180×180)
│   ├── icon-192x192.png          (PWA)
│   ├── icon-512x512.png          (PWA)
│   └── icon-maskable-512x512.png (PWA maskable)
└── assets/
    └── og-image.png              (1200×630 social share image)
```

---

## Deploy to Netlify via GitHub

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "initial commit"
gh repo create myfirstdate --public --source=. --push
```

Or manually on github.com: **New repository** → upload files.

### 2. Connect to Netlify

1. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import an existing project**
2. Connect GitHub → select your repo
3. Build settings:
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.`
4. Click **Deploy site**

### 3. Add your custom domain

In Netlify → **Domain management** → **Add custom domain** → `myfirstdate.lol`

Follow their DNS instructions. HTTPS is automatic.

---

## Set up Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com)
2. Create a property → get your **Measurement ID** (format: `G-XXXXXXXXXX`)
3. In `index.html`, replace both instances of `G-XXXXXXXXXX` with your ID

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  gtag('config', 'G-YOUR_ID');
</script>
```

---

## Set up Google AdSense

> ⚠️ Only add AdSense after your site has real traffic and is approved by Google. Adding the code before approval is fine, but ads won't show until approved.

1. Go to [adsense.google.com](https://adsense.google.com) → **Get started**
2. Add your site URL and get your **Publisher ID** (format: `ca-pub-XXXXXXXXXXXXXXXX`)
3. In `index.html`, replace all instances of `ca-pub-XXXXXXXXXXXXXXXX` with your Publisher ID
4. Replace `XXXXXXXXXX` and `YYYYYYYYYY` in the `data-ad-slot` attributes with your actual **Ad Unit IDs** (create these in AdSense under **Ads** → **By ad unit**)

Ad slots are placed:
- **Welcome screen** — horizontal banner below the hero, before name inputs
- **End screen** — horizontal banner between the saved questions and Play Again button

These positions are intentionally non-intrusive — they're only visible outside the game itself.

---

## Favicons

Favicons were generated programmatically. To regenerate or replace them with a custom design:

1. Design your icon (SVG or PNG, at least 512×512)
2. Upload to [realfavicongenerator.net](https://realfavicongenerator.net)
3. Download the package and replace everything in `/icons/`
4. Update `site.webmanifest` icon paths if they change

---

## Adding or editing questions

All questions live in `app.js` in the `QS` array (standard) and `QS_SPICY` array (spicy mode).

Each question object:
```js
{ id: 58, c: "spark", q: "What's something you can't stop recommending?" }
```

- `id` — unique integer, never reuse
- `c` — category: `spark` | `laugh` | `deep` | `wild` | `dream` | `spicy`
- `q` — question text. Use `{they}` `{their}` `{them}` for partner pronouns

---

## SEO notes

- `index.html` includes full Open Graph, Twitter Card, and JSON-LD structured data
- `robots.txt` allows all crawlers
- `sitemap.xml` has one entry — update `<lastmod>` when you make changes
- Update the canonical URL if you change domains
- Target keywords: *first date game*, *first date questions*, *icebreaker game*, *date night ideas*, *conversation starters for dates*

---

## Tech

Pure HTML, CSS, and vanilla JS. Zero frameworks, zero build step, zero dependencies (except Google Fonts). The whole app is three files and works offline once cached.

---

## License

MIT. Use it, fork it, build on it.
