# Naël Imberti · Portfolio

Bilingual (EN by default, FR toggle) static portfolio, built from my LinkedIn profile.

- `index.html` – page structure, English content
- `assets/js/main.js` – French translations + EN/FR switch (remembered across visits, shareable via `?lang=fr`)
- `assets/css/style.css` – styles (brand colours from the N. logo and LinkedIn banner)
- `assets/img/` – logo, portrait, project photos

No build step: open `index.html` or deploy as-is with GitHub Pages (Settings → Pages → branch, root).

To edit a text: change the English in `index.html` and the matching key (same `data-i18n` name) in the `FR` object of `main.js`.
