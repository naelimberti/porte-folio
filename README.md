# Naël Imberti · Portfolio

Bilingual (EN by default, FR toggle) static portfolio, built from my LinkedIn profile.

## Pages
- `index.html` – home: hero, key figures, about, three chapters, ecosystem
- `experience.html` – internships & experience: its own timeline (internships & roles, commitments) + 3D cards
- `jobs.html` – student jobs (PH+, E.Leclerc Drive, Espace Monde) with the student-job CV
- `experience/*.html` – one detail page per experience (SNEE, Boc Lab, ambassador, IAE Rouen Junior Conseil, Normandie Création)
- `projects.html` – projects overview
- `projects/silva-edita.html` – case study, Proj'Impact 2026
- `projects/jeunes-pousses.html` – case study, Naillies · Les Jeunes Pousses 2026
- `education.html` – education & skills

## Assets
- `assets/css/style.css` – styles (brand colours from the N. logo and LinkedIn banner)
- `assets/js/main.js` – French translations, EN/FR switch, page transitions (curtain), reveals, animated background
- `assets/img/` – logo, portrait, project photos
- `assets/cv/` – internship CV and student-job CV, each in English and French (buttons show the file matching the page language; the student-job CV is offered on the Student jobs page)

No build step: deploy as-is with GitHub Pages (Settings → Pages → branch `main`, root).

## Editing a text
The pages are generated: see `tools/README.md`. Put lasting text changes (English and French) in `tools/copy.py`, then regenerate.

## Language
English by default; visitors whose browser is in French get the French version. The EN/FR switch overrides this and is remembered.
