# Dr. Fran Casino — Research Portfolio

[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://francasino.github.io/web_personal/)
[![No build step](https://img.shields.io/badge/Build-none-brightgreen)](#stack)
[![Bilingual](https://img.shields.io/badge/Languages-EN%20%7C%20ES-blue)](#bilingual-content)
[![Accessibility](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-gold)](#accessibility)

Personal site of **Dr. Fran Casino (Francisco José Casino Cembellín)** — Ramón y Cajal Senior Researcher & Lecturer at the Department of Computer Engineering and Mathematics (DEIM), **Universitat Rovira i Virgili (URV)**, Tarragona.

The site is an interactive research portfolio: a visitor enters a "level 00" hero and moves through seven levels via the level map, the header, or the next-level links. Each level has a single purpose and a compact, accessible layout.

## Levels

| # | Level | Content |
|---|-------|---------|
| 01 | Profile | Wide award photograph, biography, honors, profile links (Scholar, ORCID, CVN, Scopus, ResearchGate, GitHub) |
| 02 | Research | Four research lines with topic chips |
| 03 | Publications | Verified Google Scholar band, CVN summary, 30 selected papers with search, domain filters (incl. systems) and 10-per-page pagination, abstracts, BibTeX copy |
| 04 | Projects | Featured EU/national projects (SAFEHORIZON, LAZARUS, HEROES, CTC, LOCARD, ECEAAS) + 12-project archive + animated GitHub repository tree |
| 05 | Archive | Four authentic event photographs, full-size lightbox |
| 06 | Community | Kizuna Global — social resilience and digital inclusion |
| 07 | Contact | Direct email with copy + mailto, public profiles |

Navigation: the header **Levels** button (or `M`) opens a full-screen level map with arrow-key navigation and a focus trap; `Esc` closes it. Each level ends with a link to the next one.

## Verified metrics

Google Scholar profile `YzfuK8AAAAAJ` (checked November 2026):

- 9,351 citations
- h-index 35
- i10-index 59
- 81 publications

CVN FECYT record `0000-0003-4296-2876` (dated May 2026): 41 journal articles (22 Q1), 37 conference papers and 3 book chapters.

Recognition: Stanford/Elsevier **Top 2%** — single-year since 2021 and career-long since 2026. Metrics live in `js/data.js` and can be refreshed with the scripts below.

## Stack

Static HTML + CSS + vanilla JavaScript. No framework, no bundler, no dependencies, no audio.

```
index.html                   Markup: masthead, hero, 7 levels, dialogs
css/styles.css               Design system: dark / light themes, level and repository-tree styles
js/data.js                   Bilingual content store (profile, 30 publications, projects, repository tree)
js/main.js                   Renderers, i18n, level map, scrollspy, filters, pagination, lightbox, canvas
assets/                      Local photographs used by the Profile and Archive levels
scripts/fetch_scholar.js     Metrics updater (Node)
scripts/fetch_scholar.py     Metrics updater (Python)
.github/workflows/           GitHub Pages deploy + weekly metrics update
```

### Design notes

- Typography: Fraunces (serif display), Instrument Sans (text), IBM Plex Mono (labels).
- Two themes, persisted in `localStorage`: dark (default) and light.
- The hero canvas is a subtle flow field. It pauses when the tab is hidden and falls back to a static drawing under `prefers-reduced-motion`.
- The repository tree renders from `repoTree` in `js/data.js`; branches and leaves animate in sequence and are fully static under reduced motion.
- Publications sort by year (newest first) then citations, paginate 10 at a time, and hide citation counts when they are zero.
- Photographs keep their natural aspect ratio; nothing is force-cropped. Images declare intrinsic dimensions to avoid layout shift.

## Accessibility

- Semantic landmarks, a skip link, visible focus rings and a focus trap in the level map.
- Keyboard support: `M` level map, `/` focuses publication search, arrow keys navigate the level map and lightbox, `Esc` closes dialogs.
- `aria-live` publication counter and toast for clipboard feedback; accessible names on icon-only controls.
- Honors `prefers-reduced-motion` and `forced-colors`; includes print styles.
- Bilingual document: switching EN/ES updates `lang` and all rendered strings.

## Bilingual content

All copy is stored in `js/data.js` (content) and in the `i18n` dictionary inside `js/main.js` (interface). Adding a language means adding a dictionary and extending `applyLanguage`; content fields use `*En` / `*Es` pairs where the text differs.

## Updating metrics

The weekly workflow runs `scripts/fetch_scholar.py` (OpenAlex by ORCID, with a Google Scholar fallback) and commits `js/data.js` if citations or h-index changed. Locally:

```bash
node scripts/fetch_scholar.js
# or
python scripts/fetch_scholar.py
```

## Local preview

Open `index.html` directly, or serve the folder and visit `http://localhost:8000`:

```bash
python -m http.server 8000
```

No build step is required.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which publishes the repository root to GitHub Pages at <https://francasino.github.io/web_personal/>. Enable **Settings → Pages → Source: GitHub Actions** once per repository.

## Photography

Local files in `assets/`, all provided by Dr. Fran Casino:

- `consell-social-2025.jpg` — Premi Joan Pedro i Gallego a l'impacte social de la recerca, URV 2025
- `ursi.jpg` — URSI 2025, Tarragona (CONDOR project)
- `research-portfolio.jpg` — ALUNA consortium meeting, Universidad Complutense de Madrid
- `research-systems.jpg` — ApplyApps 2025, Politecnico di Torino

To swap a photo, replace the file (keep approximately the same aspect ratio) and update its `width`/`height` fields in the `gallery` array of `js/data.js`.
