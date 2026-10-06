# greenlabs.be

The Greenlabs website, in English (`/`), French (`/fr/`) and Flemish (`/nl/`). It's a static Astro site, deployed to GitHub Pages at https://greenlabs.be.

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs dist/
```

- Copy for all three languages: `src/i18n/strings.ts`. French and Flemish are drafts that need review by a native speaker.
- Page markup: `src/components/Pinboard.astro`. Styles, including dark mode: `src/styles/pinboard.css`.
- Each push to `main` deploys via `.github/workflows/deploy.yml`.
- The original Claude Design handoff (prototype, chat and brief) is kept in `design/`.
