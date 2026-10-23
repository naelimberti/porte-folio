# Page generator

The pages of the site are generated from `source.html.txt` (the original one-page version) by `build.py`.

- `build.py` – page templates (home, experience, detail pages, projects, education) and the French strings of the experience pages
- `copy.py` – the current texts, English and French, applied on top of the templates
- `apply_copy.py` – writes the texts of `copy.py` into the pages and into `assets/js/main.js`

Regenerate everything from the repository root:

```
python3 tools/build.py . tools/source.html.txt
python3 tools/apply_copy.py tools/copy.py .
```

Editing an HTML page by hand works too, but the next regeneration will overwrite it: put lasting text changes in `copy.py`.
