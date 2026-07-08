# GPCWSA — Great Plains Collegiate Water Ski Association

Website for the Great Plains conference, split out of [mcwsa.org](https://mcwsa.org).
React + TypeScript + Vite + Tailwind 4, deployed to GitHub Pages.

- **Live (temporary):** https://artjac19.github.io/gpcwsa
- **Future domain:** https://gpcwsa.org

## Commands

```sh
npm install       # once
npm run dev       # local dev server
npm run build     # type-check + production build
npm run deploy    # build + publish to GitHub Pages (gh-pages branch)
npm run lint
```

## Placeholder → real content swap list

Several things are mocked until the real info arrives. Each is a single-spot swap:

| Pending item | Where to swap |
|---|---|
| Brand red (currently a guess: `#C8102E`) | `src/index.css` → `--color-brand` (one line) |
| Logo | Replace `public/logo.svg` and `public/logo-white.svg` |
| Front-page photo (currently old Team Midwest photo) | Drop new photo in `public/`, change `HERO_IMAGE` const at the top of `src/Home.tsx` |
| Board members (placeholder cards) | Edit the `BOARD` array at the top of `src/AboutUs.tsx` (supports optional `photo` filename) |
| Bylaws (currently the old MCWSA bylaws PDF) | Replace `public/bylaws.pdf` |
| Tournament schedule | Tables in `src/Home.tsx` |
| News (currently empty state) | Replace the empty-state card in `src/Home.tsx` with `<News …/>` items (`src/News.tsx` component is ready to use) |

## When gpcwsa.org is ready

1. Create a `CNAME` file in the repo root containing `gpcwsa.org`.
2. `vite.config.ts`: change `base: '/gpcwsa/'` to `base: '/'`.
3. `package.json`: change `homepage` to `https://gpcwsa.org`, and change the build script to `tsc -b && vite build && xcopy CNAME dist /Y` so the CNAME ships with each deploy.
4. Point the domain's DNS at GitHub Pages and set the custom domain in the repo's Pages settings.
