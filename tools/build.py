#!/usr/bin/env python3
"""One-off generator: splits the single-page portfolio into a multi-page site."""
import re, sys, os

ROOT = sys.argv[1]
src = open(sys.argv[2], encoding='utf8').read()

def between(s, a, b, inclusive=True):
    i = s.index(a); j = s.index(b, i + len(a))
    return s[i:j + (len(b) if inclusive else 0)] if inclusive else s[i:j]

def cut(s, a, b):
    """from a (included) up to b (excluded)"""
    i = s.index(a); j = s.index(b, i)
    return s[i:j]

ambient = cut(src, '<!-- Ambient background', '<a class="skip"').strip()
hero = cut(src, '<!-- ───────── HERO', '<!-- ───────── ABOUT').strip()
about = cut(src, '<!-- ───────── ABOUT', '<!-- ───────── EXPERIENCE').strip()
exp_cards = cut(src, '    <div class="cards cards--2">', '<!-- ───────── PROJECTS')
exp_cards = exp_cards[:exp_cards.rindex('  </div>\n</section>')].rstrip()
timeline = cut(src, '    <div class="timeline">', '<!-- ───────── SKILLS')
timeline = timeline[:timeline.rindex('  </div>\n</section>')].rstrip()
skills = cut(src, '    <div class="skills">', '<!-- ───────── ECOSYSTEM')
skills = skills[:skills.rindex('  </div>\n</section>')].rstrip()
eco = cut(src, '<!-- ───────── ECOSYSTEM', '<!-- ───────── CTA').strip()
cta = cut(src, '<!-- ───────── CTA', '</main>').strip()
footer = cut(src, '<!-- ───────── FOOTER', '<script').strip()

# Home links now point to pages
hero = re.sub(r'\s*<!-- ───────── KEY FIGURES ───────── -->.*?</section>', '', hero, flags=re.S)
hero = hero.replace('<a href="#projects" class="btn btn--gold"', '<a href="projects.html" class="btn btn--gold"')
# data-stagger on lists that cascade
exp_cards = exp_cards.replace('<div class="cards cards--2">', '<div class="cards cards--2" data-stagger>')
skills = skills.replace('<div class="skills">', '<div class="skills" data-stagger>')
for k in ('skills__group reveal',):
    skills = skills.replace(k, 'skills__group')
exp_cards = exp_cards.replace('class="card reveal"', 'class="card"')

footer_links = '''      <ul class="footer__links">
        <li><a href="index.html" data-i18n="nav.home">Home</a></li>
        <li><a href="experience.html" data-i18n="nav.experience">Experience</a></li>
        <li><a href="projects.html" data-i18n="nav.projects">Projects</a></li>
        <li><a href="education.html" data-i18n="nav.eduskills">Education &amp; Skills</a></li>
      </ul>'''
footer = re.sub(r'      <ul class="footer__links">\s*<li><a href="#about".*?</ul>', footer_links, footer, flags=re.S)
footer = footer.replace('<a href="#top" data-i18n="footer.top">', '<a href="#top" data-i18n="footer.top">')

PAGES = {}
XP_FR = {}
EN_OF = {}
def T(key, en, fr):
    XP_FR[key] = fr
    EN_OF[key] = en
    return key, en
BASE_URL = 'https://naelimberti.github.io/porte-folio/'
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import importlib.util as _iu
_spec = _iu.spec_from_file_location('apply_copy', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'apply_copy.py')); _ac = _iu.module_from_spec(_spec); _spec.loader.exec_module(_ac)
_cs = _iu.spec_from_file_location('copydata', os.path.join(os.path.dirname(os.path.abspath(__file__)), 'copy.py')); _cd = _iu.module_from_spec(_cs); _cs.loader.exec_module(_cd); _ac.COPY = _cd.COPY

def head(title, desc, prefix):
    return f'''<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{desc}">
  <meta name="author" content="Naël Imberti">
  <meta name="theme-color" content="#12061f">
  <meta name="color-scheme" content="dark">
  <link rel="icon" type="image/png" href="{prefix}favicon.png">
  <link rel="apple-touch-icon" href="{prefix}assets/img/apple-touch-icon.png">
  <meta property="og:type" content="website">
  <meta property="og:title" content="{title}">
  <meta property="og:description" content="{desc}">
  <meta property="og:image" content="{BASE_URL}assets/img/og-image.jpg">
  <meta property="og:url" content="__CANONICAL__">
  <link rel="canonical" href="__CANONICAL__">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{prefix}assets/css/style.css">
  <noscript><style>.curtain{{display:none!important}}</style></noscript>
</head>'''

def header(page):
    def link(href, key, label, pg):
        active = ' class="is-active" aria-current="page"' if pg == page else ''
        return f'      <a href="{href}"{active} data-i18n="{key}">{label}</a>'
    return f'''<!-- ───────── HEADER ───────── -->
<header class="header" id="top">
  <div class="container header__inner">
    <a href="index.html" class="brand" aria-label="Naël Imberti, home">
      <img src="assets/img/logo-round.png" alt="" width="40" height="40">
      <span>Naël <strong>Imberti</strong></span>
    </a>

    <nav class="nav" id="nav" aria-label="Main">
{link("index.html", "nav.home", "Home", "home")}
{link("experience.html", "nav.experience", "Experience", "experience")}
{link("projects.html", "nav.projects", "Projects", "projects")}
{link("education.html", "nav.eduskills", "Education &amp; Skills", "education")}
      <a href="#contact" class="nav__cta-mobile" data-i18n="nav.contact">Contact</a>
    </nav>

    <div class="header__actions">
      <div class="lang" role="group" aria-label="Language">
        <button type="button" class="lang__btn" data-lang="en" aria-pressed="true">EN</button>
        <button type="button" class="lang__btn" data-lang="fr" aria-pressed="false">FR</button>
      </div>
      <a href="#contact" class="btn btn--primary btn--sm header__cta" data-i18n="nav.contact">Contact</a>
      <button type="button" class="burger" aria-label="Menu" aria-expanded="false" aria-controls="nav">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
  <div class="progress" aria-hidden="true"></div>
</header>'''

CURTAIN = '''<!-- Page transition curtain (lifts on load, drops before leaving) -->
<div class="curtain" aria-hidden="true">
  <div class="curtain__gold"></div>
  <div class="curtain__main">
    <div class="curtain__inner">
      <div class="curtain__mark">
        <svg class="curtain__ring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="56"/></svg>
        <img src="assets/img/logo-round.png" alt="" width="84" height="84">
      </div>
      <span class="curtain__label"></span>
    </div>
  </div>
</div>'''

def next_band(href, key, label, eyebrow_key='common.next', eyebrow='Next'):
    return f'''<!-- ───────── NEXT PAGE ───────── -->
<section class="next">
  <div class="container">
    <a class="next__link reveal" href="{href}">
      <span class="next__eyebrow" data-i18n="{eyebrow_key}">{eyebrow}</span>
      <span class="next__title" data-i18n="{key}">{label}</span>
      <span class="next__arrow" aria-hidden="true">→</span>
    </a>
  </div>
</section>'''

def page_hero(eyebrow_key, eyebrow, title_key, title, lead_key, lead, crumbs='', media=''):
    cls = 'page-hero page-hero--media' if media else 'page-hero'
    return f'''<!-- ───────── PAGE HERO ───────── -->
<section class="{cls}">
  <div class="container page-hero__grid">
    <div class="page-hero__text">
{crumbs}      <p class="eyebrow" data-i18n="{eyebrow_key}">{eyebrow}</p>
      <h1 class="page-hero__title" data-i18n="{title_key}">{title}</h1>
      <p class="page-hero__lead" data-i18n="{lead_key}">{lead}</p>
    </div>
{media}  </div>
</section>'''

def assemble(page, title, desc, body, prefix=''):
    html = '\n'.join([
        head(title, desc, prefix),
        f'<body data-page="{page}">',
        '',
        ambient,
        '',
        CURTAIN,
        '',
        '<a class="skip" href="#main" data-i18n="skip">Skip to content</a>',
        '',
        header(page),
        '',
        '<main id="main">',
        '',
        body,
        '',
        cta,
        '',
        '</main>',
        '',
        footer,
        '',
        f'<script src="{prefix}assets/js/main.js" defer></script>',
        '</body>',
        '</html>',
        ''])
    if prefix:
        # rewrite relative URLs for pages living in a sub-folder
        html = re.sub(r'(src|href)="(?!https?:|mailto:|#|\.\./|data:)([^"]+)"',
                      lambda m: f'{m.group(1)}="{prefix}{m.group(2)}"' if not m.group(2).startswith(prefix) else m.group(0), html)
        html = html.replace(f'href="{prefix}{prefix}', f'href="{prefix}')
    return html

# ───────────────────────── HOME ─────────────────────────
explore = '''<!-- ───────── EXPLORE ───────── -->
<section class="section" id="explore">
  <div class="container">
    <div class="section__head reveal">
      <p class="eyebrow" data-i18n="explore.eyebrow">Explore</p>
      <h2 class="title" data-i18n="explore.title">My path in <span class="hl">three</span> chapters</h2>
    </div>
    <div class="explore" data-stagger>
      <a class="explore__card" href="experience.html">
        <span class="explore__num">01</span>
        <h3 data-i18n="nav.experience">Experience</h3>
        <p data-i18n="ex1.text">Four roles across entrepreneurship support, a founder's projects and student services.</p>
        <span class="explore__cta"><span data-i18n="explore.cta">Discover</span> <span aria-hidden="true">→</span></span>
      </a>
      <a class="explore__card" href="projects.html">
        <span class="explore__num">02</span>
        <h3 data-i18n="nav.projects">Projects</h3>
        <p data-i18n="ex2.text">Silva Edita, Proj'Impact 2026 laureate, and Naillies, built within Les Jeunes Pousses 2026.</p>
        <span class="explore__cta"><span data-i18n="explore.cta">Discover</span> <span aria-hidden="true">→</span></span>
      </a>
      <a class="explore__card" href="education.html">
        <span class="explore__num">03</span>
        <h3 data-i18n="nav.eduskills">Education &amp; Skills</h3>
        <p data-i18n="ex3.text">From a Double Degree in Mathematics &amp; Economics to Management at IAE Rouen Normandie.</p>
        <span class="explore__cta"><span data-i18n="explore.cta">Discover</span> <span aria-hidden="true">→</span></span>
      </a>
    </div>
  </div>
</section>'''

home_body = '\n\n'.join([hero, about.replace('class="section" id="about"', 'class="section section--tint" id="about"'), explore, eco])
PAGES['index.html'] = assemble('home', 'Naël Imberti · Business Developer in training',
    "Naël Imberti, Business Development &amp; Management student at IAE Rouen Normandie, student-entrepreneur (SNEE · Pépite Normandie). Looking for a 3 to 6-month internship starting March 2027.",
    home_body)

# ───────────────────────── EXPERIENCE ─────────────────────────
_arts = re.findall(r'      <article class="card">.*?</article>', exp_cards, flags=re.S)
assert len(_arts) == 4, len(_arts)
_amb, _snee, _boc, _intl = _arts

_jc = [T('jc.title', 'Business Development Manager', 'Responsable développement commercial'),
       T('jc.meta', 'Sep 2026 – Present · Rouen · Founding team', 'Sept. 2026 – Aujourd’hui · Rouen · Équipe fondatrice'),
       T('jc.p1', "We're setting up IAE Rouen's junior enterprise. I'm one of the founding members and I handle business development.",
         "On est en train de créer la Junior Entreprise de l'IAE Rouen. Je fais partie des membres fondateurs et je m'occupe du développement commercial."),
       T('jc.b1', 'Looking for our first clients', 'Chercher nos premiers clients'),
       T('jc.b2', 'Finding the students who will carry out the missions', 'Trouver les étudiants qui réaliseront les missions'),
       T('jc.b3', 'Networking at professional events', 'Réseauter pendant des événements professionnels'),
       T('jc.b4', 'Building the website', 'Créer le site internet'),
       T('jc.goal', 'Goal: a structure up and running by December 2026.', 'Objectif : une structure opérationnelle en décembre 2026.'),
       T('bar.jc', 'IAE Rouen Junior Conseil', 'IAE Rouen Junior Conseil')]
_JC = dict(_jc)
_jc_article = f'''      <article class="card">
        <header class="card__head">
          <span class="badge badge--live" data-i18n="common.present">Present</span>
          <h3 data-i18n="jc.title">{_JC['jc.title']}</h3>
          <p class="card__org">IAE Rouen Junior Conseil</p>
          <p class="card__meta" data-i18n="jc.meta">{_JC['jc.meta']}</p>
        </header>
        <p data-i18n="jc.p1">{_JC['jc.p1']}</p>
        <ul class="ticks">
          <li data-i18n="jc.b1">{_JC['jc.b1']}</li>
          <li data-i18n="jc.b2">{_JC['jc.b2']}</li>
          <li data-i18n="jc.b3">{_JC['jc.b3']}</li>
          <li data-i18n="jc.b4">{_JC['jc.b4']}</li>
        </ul>
        <p class="muted" data-i18n="jc.goal">{_JC['jc.goal']}</p>
        <ul class="chips chips--sm">
          <li data-i18n="sk.bizdev">Business development</li>
          <li data-i18n="sk.network">Professional networking</li>
          <li data-i18n="sk.oral">Oral communication</li>
        </ul>
      </article>'''

_jb = [T('job.badge', 'Student job', 'Job étudiant'),
       T('job.title', 'Student job · International students welcome desk', 'Job étudiant · Accueil des étudiants internationaux'),
       T('job.meta', 'Jul – Sep 2026 · On-site', 'Juil. – sept. 2026 · Sur site'),
       T('job.p1', 'At the start of the academic year, I helped <strong>527 international students</strong> put together their enrolment files at the University of Rouen Normandie.',
         "À la rentrée, j'ai aidé <strong>527 étudiants internationaux</strong> à constituer leur dossier d'inscription à l'Université de Rouen Normandie."),
       T('xp6.d1', 'A one-day training on the Saphire software in July 2026', 'Une journée de formation au logiciel Saphire en juillet 2026'),
       T('xp6.d2', 'Welcoming students at the front desk', 'Accueillir les étudiants au guichet'),
       T('xp6.d3', 'Helping them put together their administrative enrolment file', "Les aider à constituer leur dossier d'inscription administrative"),
       T('xp6.d4', 'Creating the files, on paper and digitally', 'Créer les dossiers, en papier et en numérique'),
       T('xp6.d5', 'Checking the files', 'Vérifier les dossiers'),
       T('sk.intercultural', 'Intercultural communication', 'Communication interculturelle'),
       T('sk.english', 'Professional English', 'Anglais professionnel'),
       T('sk.listening', 'Active listening', 'Écoute active'),
       T('sk.flow', 'Handling a steady flow of people', 'Gestion de flux'),
       T('sk.admin', 'Administrative procedures', 'Démarches administratives')]
_JB = dict(_jb)
_job_article = f'''      <article class="card">
        <header class="card__head">
          <span class="badge" data-i18n="job.badge">{_JB['job.badge']}</span>
          <h3 data-i18n="job.title">{_JB['job.title']}</h3>
          <p class="card__org">Espace Monde · Université de Rouen Normandie</p>
          <p class="card__meta" data-i18n="job.meta">{_JB['job.meta']}</p>
        </header>
        <p data-i18n="job.p1">{_JB['job.p1']}</p>
        <ul class="ticks">
          <li data-i18n="xp6.d1">{_JB['xp6.d1']}</li>
          <li data-i18n="xp6.d2">{_JB['xp6.d2']}</li>
          <li data-i18n="xp6.d3">{_JB['xp6.d3']}</li>
        </ul>
        <ul class="chips chips--sm">
          <li data-i18n="sk.oral">Oral communication</li>
          <li data-i18n="sk.intercultural">{_JB['sk.intercultural']}</li>
          <li data-i18n="sk.adapt">Adaptability</li>
        </ul>
      </article>'''
_meta = [(_snee, 'exp-snee'), (_boc, 'exp-boc'), (_job_article, 'exp-job'), (_amb, 'exp-amb'), (_jc_article, 'exp-jc')]
_slug = {'exp-snee': 'snee', 'exp-boc': 'boc-lab', 'exp-job': 'student-job', 'exp-amb': 'ambassador', 'exp-jc': 'junior-conseil'}
deck_cards = '\n'.join(a.replace('<article class="card">', f'<article class="card" id="{i}" data-deck-card>')
                         .replace('</article>', f'  <a class="card__more" href="experience/{_slug[i]}.html"><span data-i18n="xp.details">See details</span> <span aria-hidden="true">→</span></a>\n      </article>')
                         for a, i in _meta)


def chrono_block(frm, to, hint, legend, lanes):
    """legend: [(css class, (key, label))]; lanes: [((key, label), rows, [item html])]"""
    leg = '\n'.join(f'          <li class="{c}" data-i18n="{k}">{l}</li>' for c, (k, l) in legend)
    ln = '\n'.join(f'''          <div class="chrono__lane">
            <span class="chrono__label" data-i18n="{k}">{l}</span>
            <div class="chrono__track" style="--rows: {rows}">
{chr(10).join(items)}
            </div>
          </div>''' for (k, l), rows, items in lanes)
    hk, hv = hint
    return f'''    <div class="chrono reveal" role="group" aria-label="Timeline">
      <div class="chrono__top">
        <p class="chrono__hint" data-i18n="{hk}">{hv}</p>
        <ul class="chrono__legend">
{leg}
        </ul>
      </div>
      <div class="chrono__scroll">
        <div class="chrono__grid" data-from="{frm}" data-to="{to}">
          <div class="chrono__years" aria-hidden="true"></div>
{ln}
          <div class="chrono__today" aria-hidden="true"><span data-i18n="chrono.today">Today</span></div>
        </div>
      </div>
    </div>'''

def mark(kl, date, row, href=''):
    k, l = kl
    tag, h = ('a', f' href="{href}"') if href else ('span', '')
    return f'            <{tag} class="chrono__mark" data-date="{date}" data-row="{row}"{h}><i aria-hidden="true"></i><span data-i18n="{k}">{l}</span></{tag}>'

L_MARK = T('chrono.mark', 'Milestone', 'Jalon')

def bar(tag, cls, label_key, label, start, end, row, target='', href=''):
    attrs = f'data-start="{start}" data-end="{end}" data-row="{row}"'
    if tag == 'button':
        return f'            <button type="button" class="chrono__bar {cls}" data-target="{target}" {attrs}><span data-i18n="{label_key}">{label}</span></button>'
    return f'            <a class="chrono__bar {cls}" href="{href}" {attrs}><span data-i18n="{label_key}">{label}</span></a>'

L_WORK = T('chrono.work', 'Jobs &amp; internship', 'Stage &amp; jobs')
L_COMMIT = T('chrono.commit', 'Commitments', 'Engagements')
exp_chrono = chrono_block('2025-06', '2027-06', ('chrono.hint', 'Click a period on the timeline or flip through the cards.'),
    [('is-exp', L_WORK), ('is-proj', L_COMMIT), ('is-markleg', L_MARK)],
    [(L_WORK, 2, [
        bar('button', 'is-exp', 'bar.boc', 'Boc Lab', '2026-06', '2026-07', 1, 'exp-boc'),
        bar('button', 'is-exp', *T('bar.job', 'Student job', 'Job étudiant'), '2026-07', '2026-09', 2, 'exp-job'),
        bar('button', 'is-exp', 'bar.jc', 'IAE Rouen Junior Conseil', '2026-09', 'now', 1, 'exp-jc'),
        mark(T('mark.intern', 'Internship from March 2027', 'Stage dès mars 2027'), '2027-03', 2, '#contact')]),
     (L_COMMIT, 2, [
        bar('button', 'is-proj', 'bar.snee', 'SNEE · Pépite Normandie', '2025-07', 'now', 1, 'exp-snee'),
        bar('button', 'is-proj', 'bar.amb', 'Entrepreneurship Ambassador', '2026-09', 'now', 2, 'exp-amb')])])

chrono = f'''<section class="section section--flush">
  <div class="container">
{exp_chrono}

    <div class="deck" data-deck>
      <div class="deck__stage" tabindex="0" aria-roledescription="carousel" aria-label="Experience">
{deck_cards}
      </div>
      <div class="deck__nav">
        <button type="button" class="deck__btn" data-dir="-1" aria-label="Previous">←</button>
        <span class="deck__count" aria-live="polite"></span>
        <button type="button" class="deck__btn" data-dir="1" aria-label="Next">→</button>
      </div>
      <p class="deck__hint" data-i18n="deck.hint">Drag, use the arrow keys or click a card</p>
    </div>
  </div>
</section>'''

exp_body = '\n\n'.join([
    page_hero('exp.eyebrow', 'Experience', 'exp.title', 'Learning by <span class="hl">doing</span>', 'exp.lead',
              'From supporting a founder to welcoming 527 international students: roles where I learned to coordinate, communicate and deliver.'),
    chrono,
    next_band('projects.html', 'nav.projects', 'Projects')])
PAGES['experience.html'] = assemble('experience', 'Experience · Naël Imberti',
    'Experience of Naël Imberti: Entrepreneurship Ambassador, SNEE student-entrepreneur, Executive Assistant Intern at Boc Lab, student assistant at the University of Rouen.',
    exp_body)

# ───────────────────────── PROJECTS ─────────────────────────
L_PROJ = T('chrono.project', 'Project', 'Projet')
L_STEP = T('chrono.step', 'Programme step', 'Étape du programme')
proj_chrono = chrono_block('2025-09', '2027-01', T('chrono.hintProj', 'Click a project to open it.', 'Cliquez sur un projet pour l’ouvrir.'),
    [('is-proj', L_PROJ), ('is-step', L_STEP), ('is-markleg', L_MARK)],
    [(T('lane.naillies', 'Naillies', 'Naillies'), 2, [
        bar('a', 'is-proj', 'bar.naillies', 'Naillies · Jeunes Pousses', '2025-10', '2026-04', 1, href='projects/jeunes-pousses.html'),
        bar('a', 'is-step', *T('step.launch', 'Launch', 'Lancement'), '2025-10', '2025-10', 2, href='projects/jeunes-pousses.html'),
        bar('a', 'is-step', *T('step.workshops', '9 workshops', '9 ateliers'), '2025-11', '2026-03', 2, href='projects/jeunes-pousses.html'),
        mark(T('mark.closing', 'Closing evening · 9 April', 'Soirée de clôture · 9 avril'), '2026-04-09', 2, 'projects/jeunes-pousses.html')]),
     (T('lane.silva', 'Silva Edita', 'Silva Edita'), 1, [
        bar('a', 'is-proj', 'bar.silva', 'Silva Edita', '2026-01', 'now', 1, href='projects/silva-edita.html')])])
projects_list = '''<section class="section section--flush">
  <div class="container">
''' + proj_chrono + '''
    <div class="projects" data-stagger>
      <a class="project" href="projects/silva-edita.html">
        <div class="project__media reveal-media">
          <img src="assets/img/silva-team.webp" alt="Silva Edita team with the Proj'Impact 2026 award" loading="lazy" width="1200" height="800">
          <span class="feature__award" data-i18n="proj1.award">🏆 Proj'Impact 2026 laureate</span>
        </div>
        <div class="project__body">
          <p class="card__meta" data-i18n="proj1.meta">Jan 2026 – Present · Urban greening</p>
          <h2 class="project__title">Silva Edita</h2>
          <p data-i18n="pc1.text">Greening Rouen's rooftops: from apartment blocks and campuses to an experiment on the rooftops of business incubators.</p>
          <span class="explore__cta"><span data-i18n="common.case">Read the case study</span> <span aria-hidden="true">→</span></span>
        </div>
      </a>
      <a class="project" href="projects/jeunes-pousses.html">
        <div class="project__media reveal-media">
          <img src="assets/img/jp-closing.webp" alt="Closing evening of Les Jeunes Pousses 2026" loading="lazy" width="1600" height="1067">
          <span class="feature__award feature__award--violet">Les Jeunes Pousses 2026</span>
        </div>
        <div class="project__body">
          <p class="card__meta" data-i18n="proj2.meta">Oct 2025 – Apr 2026 · Les Jeunes Pousses 2026 · Pépite Normandie</p>
          <h2 class="project__title">Naillies</h2>
          <p data-i18n="pc2.text">Learning semi-permanent manicure through creative kits: a project structured over six months within the Jeunes Pousses programme.</p>
          <span class="explore__cta"><span data-i18n="common.case">Read the case study</span> <span aria-hidden="true">→</span></span>
        </div>
      </a>
    </div>
  </div>
</section>'''
proj_body = '\n\n'.join([
    page_hero('proj.eyebrow', 'Entrepreneurial projects', 'proj.title', 'From an idea to a <span class="hl">jury</span>', 'proj.lead',
              "Two projects carried within the University of Rouen's entrepreneurship programmes, from the first idea to the final pitch."),
    projects_list,
    next_band('education.html', 'nav.eduskills', 'Education &amp; Skills')])
PAGES['projects.html'] = assemble('projects', 'Projects · Naël Imberti',
    "Entrepreneurial projects of Naël Imberti: Silva Edita (Proj'Impact 2026 laureate) and Naillies (Les Jeunes Pousses 2026).",
    proj_body)

def crumbs(name):
    return f'''    <nav class="crumbs" aria-label="Breadcrumb"><a href="projects.html" data-i18n="nav.projects">Projects</a><span aria-hidden="true">/</span><span>{name}</span></nav>
'''

def facts(rows):
    items = '\n'.join(f'        <div><dt data-i18n="{k}">{kl}</dt><dd{(" data-i18n=" + chr(34) + vk + chr(34)) if vk else ""}>{v}</dd></div>' for k, kl, vk, v in rows)
    return f'''    <dl class="facts facts--row" data-stagger>
{items}
    </dl>'''

# ───────────────────────── SILVA EDITA ─────────────────────────
silva_media = '''    <figure class="page-hero__media reveal-media">
      <img src="assets/img/silva-team.webp" alt="Silva Edita team with the Proj'Impact 2026 award" width="1200" height="800">
      <span class="feature__award" data-i18n="proj1.award">🏆 Proj'Impact 2026 laureate</span>
    </figure>
'''
silva = '\n\n'.join([
    page_hero('proj1.eyebrow', "Case study · Proj'Impact 2026", 'case1.title', 'Silva Edita', 'proj1.p1',
              'The project started from a reflection on greening the rooftops of Rouen, first focused on apartment blocks, then on university campuses.',
              crumbs('Silva Edita'), media=silva_media),
    f'''<section class="section section--flush">
  <div class="container">
{facts([("fact.period", "Period", "fact.silvaPeriod", "Jan 2026 – Present"),
        ("fact.field", "Field", "fact.silvaField", "Urban greening"),
        ("fact.recognition", "Recognition", "fact.silvaRec", "Proj'Impact 2026 laureate"),
        ("fact.next", "Next step", "fact.silvaNext", "Rooftop experiment with Rouen Normandie Création")])}
    <div class="case case--silva">
      <div class="case__text">
        <div class="case__block reveal">
          <h2 class="case__h" data-i18n="case.evolution">How it evolved</h2>
          <p data-i18n="proj1.p2">After several discussions with local stakeholders and innovation players, the project is now moving towards an experiment on the rooftops of the Rouen Normandie Création business incubators.</p>
        </div>
        <div class="case__block reveal">
          <h2 class="case__h" data-i18n="case.goal">The goal</h2>
          <p class="feature__goal" data-i18n="proj1.goal">design light, modular and accessible greening solutions that improve urban spaces while creating a collective momentum around the ecological transition.</p>
        </div>
        <div class="case__block reveal">
          <h2 class="case__h" data-i18n="case.skills">Skills developed</h2>
          <ul class="chips">
            <li data-i18n="sk.network">Professional networking</li>
            <li data-i18n="sk.market">Market research</li>
            <li data-i18n="sk.curiosity">Curiosity &amp; initiative</li>
            <li data-i18n="sk.oral">Oral communication</li>
            <li data-i18n="sk.team">Teamwork</li>
          </ul>
        </div>
      </div>
      <figure class="case__fig reveal-media"><img src="assets/img/silva-pitch.webp" alt="Naël Imberti pitching Silva Edita" loading="lazy" width="1200" height="800"><figcaption data-i18n="gal.1">Pitching Silva Edita</figcaption></figure>
      <figure class="case__fig reveal-media"><img src="assets/img/silva-award.webp" alt="Proj'Impact 2026 award ceremony" loading="lazy" width="1200" height="800"><figcaption data-i18n="gal.2">Proj'Impact 2026 award ceremony</figcaption></figure>
    </div>
  </div>
</section>''',
    next_band('projects/jeunes-pousses.html', 'case2.next', 'Naillies · Les Jeunes Pousses', 'common.nextProject', 'Next project')])
PAGES['projects/silva-edita.html'] = assemble('projects', 'Silva Edita · Naël Imberti',
    "Silva Edita, urban rooftop greening project, Proj'Impact 2026 laureate.", silva, prefix='../')

# ───────────────────────── JEUNES POUSSES / NAILLIES ─────────────────────────
workshops = [('ws.1', 'Formalising my project'), ('ws.2', 'Value proposition'), ('ws.3', 'Commercial offer'),
             ('ws.4', 'Studying my market'), ('ws.5', 'Choosing my legal status'), ('ws.6', 'Financing my project'),
             ('ws.7', 'Governance &amp; partnerships'), ('ws.8', 'Marketing &amp; communication'), ('ws.9', 'Pitching and selling my project')]
ws_html = '\n'.join(f'              <li><span class="workshops__n">{i+1:02d}</span><span data-i18n="{k}">{v}</span></li>' for i, (k, v) in enumerate(workshops))
jp_media = '''    <figure class="page-hero__media reveal-media">
      <img src="assets/img/jp-closing.webp" alt="Participants of Les Jeunes Pousses 2026 on stage at the closing evening" width="1600" height="1067">
      <figcaption data-i18n="jp.photo">Closing evening of Les Jeunes Pousses, April 2026</figcaption>
    </figure>
'''
jp = '\n\n'.join([
    page_hero('case2.eyebrow', 'Case study · Les Jeunes Pousses 2026', 'case2.title', 'Naillies', 'proj2.p1',
              'Development of an entrepreneurial project around learning semi-permanent manicure through accessible and creative learning kits.',
              crumbs('Naillies'), media=jp_media),
    f'''<section class="section section--flush">
  <div class="container">
{facts([("fact.period", "Period", "fact.jpPeriod", "Oct 2025 – Apr 2026"),
        ("fact.programme", "Programme", None, "Les Jeunes Pousses 2026"),
        ("fact.role", "My role", "fact.jpRole", "Skills contributor"),
        ("fact.lead", "Project lead", None, "Léa Portmann"),
        ("fact.support", "Support", None, "Maison de l'Entrepreneuriat · Pépite Normandie")])}
    <div class="case case--jp">
      <div class="case__text">
        <div class="case__block reveal">
          <h2 class="case__h" data-i18n="case.role">My role</h2>
          <p data-i18n="proj2.p2">Contributed to structuring the project as a skills contributor: product thinking, market research, positioning, pitch and value proposition development within the Jeunes Pousses programme.</p>
        </div>
        <div class="case__block reveal">
          <h2 class="case__h" data-i18n="case.skills">Skills developed</h2>
          <ul class="chips">
            <li data-i18n="sk.bp">Business plan development</li>
            <li data-i18n="sk.market">Market research</li>
            <li data-i18n="sk.watch">Marketing intelligence</li>
            <li data-i18n="sk.story">Content writing &amp; storytelling</li>
            <li data-i18n="sk.oral">Oral communication</li>
            <li data-i18n="sk.network">Professional networking</li>
          </ul>
        </div>
      </div>
      <figure class="docs__item reveal">
        <div class="docs__frame"><img src="assets/img/naillies-cover.webp" alt="Cover of the Naillies final report" loading="lazy" width="637" height="900"></div>
        <figcaption data-i18n="jp.doc1">Final report, co-written with Léa Portmann</figcaption>
      </figure>
      <figure class="docs__item reveal">
        <div class="docs__frame"><img src="assets/img/jp-calendar.webp" alt="Official calendar of the Les Jeunes Pousses programme" loading="lazy" width="900" height="1125"></div>
        <figcaption data-i18n="jp.doc2">Official programme calendar, Maison de l'Entrepreneuriat</figcaption>
      </figure>
    </div>

    <div class="programme reveal">
      <h2 class="case__h" data-i18n="case.programme">The programme, step by step</h2>
      <ol class="steps">
        <li class="steps__item">
          <span class="steps__date" data-i18n="jp.s1.date">October – November 2025</span>
          <h3 data-i18n="jp.s1.title">Launch evenings in Rouen and Évreux</h3>
        </li>
        <li class="steps__item">
          <span class="steps__date" data-i18n="jp.s2.date">November 2025 – March 2026</span>
          <h3 data-i18n="jp.s2.title">Nine training workshops</h3>
          <ul class="workshops" data-stagger>
{ws_html}
          </ul>
        </li>
        <li class="steps__item">
          <span class="steps__date" data-i18n="jp.s3.date">April 2026</span>
          <h3 data-i18n="jp.s3.title">Closing evening, pitch and awards</h3>
        </li>
      </ol>
    </div>
  </div>
</section>''',
    next_band('projects/silva-edita.html', 'case1.next', 'Silva Edita', 'common.nextProject', 'Next project')])
PAGES['projects/jeunes-pousses.html'] = assemble('projects', 'Naillies · Les Jeunes Pousses 2026 · Naël Imberti',
    'Naillies, entrepreneurial project built within Les Jeunes Pousses 2026 (University of Rouen Normandie).', jp, prefix='../')

# ───────────────────────── EDUCATION & SKILLS ─────────────────────────
_bac = [T('bac.badge', 'Grade: Bien (good)', 'Mention Bien'),
        T('bac.title', 'French baccalaureate (general)', 'Baccalauréat général'),
        T('bac.meta', 'Obtained in 2024', 'Obtenu en 2024'),
        T('bac.p1', 'Specialisms: Maths and Economic &amp; Social Sciences.', 'Spécialités : mathématiques et sciences économiques et sociales.')]
_B = dict(_bac)
_bac_item = f'''
      <article class="timeline__item reveal">
        <div class="timeline__date">2021 – 2024</div>
        <div class="card">
          <header class="card__head">
            <span class="badge" data-i18n="bac.badge">{_B['bac.badge']}</span>
            <h3 data-i18n="bac.title">{_B['bac.title']}</h3>
            <p class="card__org">Lycée Simone Veil · Liffré</p>
            <p class="card__meta" data-i18n="bac.meta">{_B['bac.meta']}</p>
          </header>
          <p data-i18n="bac.p1">{_B['bac.p1']}</p>
        </div>
      </article>
'''
timeline = timeline[:timeline.rindex('</div>')] + _bac_item.lstrip('\n') + '    </div>'

_lang = [T('skills.g5', 'Languages', 'Langues'),
         T('lang.fr', 'French', 'Français'), T('lang.frL', 'Native', 'Langue maternelle'),
         T('lang.en', 'English', 'Anglais'), T('lang.enNote', 'TOEIC in January 2027', 'TOEIC en janvier 2027'),
         T('lang.de', 'German', 'Allemand'), T('lang.ja', 'Japanese', 'Japonais'),
         T('skills.g6', 'Tools', 'Outils'),
         T('tool.office', 'Microsoft Office', 'Pack Office'),
         T('tool.ai', 'AI tools &amp; prompting', "Prompt et usage de l'IA"),
         T('tool.web', 'Building websites', 'Création de sites web')]
_L = dict(_lang)
def _lvl(name_key, code, v, note=''):
    cells = ''.join(f'<i class="{"on" if k < v else ""}"></i>' for k in range(6))
    return f'''          <li>
            <span class="langs__name" data-i18n="{name_key}">{_L[name_key]}</span>
            <span class="langs__lvl">{code}</span>
            <span class="langs__bar" aria-hidden="true">{cells}</span>{note}
          </li>'''
_langs_html = f'''
      <div class="skills__group skills__group--langs">
        <h3 data-i18n="skills.g5">{_L['skills.g5']}</h3>
        <ul class="langs">
          <li>
            <span class="langs__name" data-i18n="lang.fr">{_L['lang.fr']}</span>
            <span class="langs__lvl langs__lvl--wide" data-i18n="lang.frL">{_L['lang.frL']}</span>
            <span class="langs__bar" aria-hidden="true"><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i><i class="on"></i></span>
          </li>
{_lvl('lang.en', 'B2', 4, chr(10) + '            <span class="langs__note" data-i18n="lang.enNote">' + _L['lang.enNote'] + '</span>')}
{_lvl('lang.de', 'A2', 2)}
{_lvl('lang.ja', 'A1', 1)}
        </ul>
      </div>
      <div class="skills__group">
        <h3 data-i18n="skills.g6">{_L['skills.g6']}</h3>
        <ul class="chips chips--dark">
          <li data-i18n="tool.office">{_L['tool.office']}</li>
          <li data-i18n="tool.ai">{_L['tool.ai']}</li>
          <li data-i18n="tool.web">{_L['tool.web']}</li>
        </ul>
      </div>
'''
skills = skills[:skills.rindex('</div>')] + _langs_html.lstrip('\n') + '    </div>'

# ids so the timeline can point at each course (order in the HTML: L3, double degree, bac)
for _id in ('edu-l3', 'edu-dl', 'edu-bac'):
    timeline = timeline.replace('<article class="timeline__item reveal">', f'<article class="timeline__item reveal" id="{_id}">', 1)
L_STUDIES = T('chrono.studies', 'Studies', 'Études')
L_MILES = T('chrono.milestones', 'Milestones', 'Jalons')
edu_chrono = chrono_block('2021-09', '2027-08', T('chrono.hintEdu', 'Click a period to jump to the course.', 'Cliquez sur une période pour voir la formation.'),
    [('is-edu', L_STUDIES), ('is-markleg', L_MARK)],
    [(L_STUDIES, 1, [
        bar('button', 'is-edu', *T('bar.bac', 'Baccalauréat · Lycée Simone Veil', 'Bac · Lycée Simone Veil'), '2021-09', '2024-07', 1, 'edu-bac'),
        bar('button', 'is-edu', *T('bar.l1', 'L1 Maths &amp; Economics', 'L1 maths-éco'), '2024-09', '2025-06', 1, 'edu-dl'),
        bar('button', 'is-edu', *T('bar.l2', 'L2 Economics', 'L2 économie'), '2025-09', '2026-06', 1, 'edu-dl'),
        bar('button', 'is-edu', 'bar.l3', 'L3 Management · IAE Rouen', '2026-09', '2027-07', 1, 'edu-l3')]),
     (L_MILES, 1, [
        mark(T('mark.bac', 'Bac, grade Bien', 'Bac mention Bien'), '2024-07', 1),
        mark(T('mark.toeic', 'TOEIC', 'TOEIC'), '2027-01', 1)])])

edu_body = '\n\n'.join([
    page_hero('edu.eyebrow', 'Education', 'edu.title', 'From <span class="hl">numbers</span> to management', 'edu.lead',
              'A two-step path: analytical rigour first, then management and entrepreneurship.'),
    f'''<section class="section section--flush">
  <div class="container">
{edu_chrono}

{timeline}
  </div>
</section>''',
    f'''<!-- ───────── SKILLS ───────── -->
<section class="section section--dark" id="skills">
  <div class="container">
    <div class="section__head reveal">
      <p class="eyebrow eyebrow--gold" data-i18n="skills.eyebrow">Skills</p>
      <h2 class="title title--light" data-i18n="skills.title">What I bring to a <span class="hl hl--gold">team</span></h2>
    </div>
{skills}
  </div>
</section>''',
    next_band('index.html', 'nav.home', 'Home', 'common.back', 'Back to')])
PAGES['education.html'] = assemble('education', 'Education &amp; Skills · Naël Imberti',
    'Education and skills of Naël Imberti: Licence 3 Gestion at IAE Rouen Normandie, Double Degree in Mathematics &amp; Economics.',
    edu_body)

# ───────────────────────── EXPERIENCE DETAIL PAGES ─────────────────────────
# Each text is (EN, FR). EN is written into the HTML, FR goes to main.js.
XP_COMMON = [
    T('xp.context', 'Context', 'Le contexte'),
    T('xp.did', 'What I did', "Ce que j'ai fait"),
    T('xp.takeaway', 'What I took from it', "Ce que j'en retiens"),
    T('xp.related', 'Related', 'Pour aller plus loin'),
    T('xp.details', 'See details', 'Voir le détail'),
    T('xp.skills', 'Skills used', 'Compétences travaillées'),
    T('fact.org', 'Organisation', 'Structure'),
    T('fact.place', 'Location', 'Lieu'),
    T('fact.type', 'Type', 'Type'),
    T('common.nextXp', 'Next experience', 'Expérience suivante'),
]

XPS = [
  dict(slug='snee', card='exp-snee', name='SNEE · Pépite Normandie',
       eyebrow=T('xp1.eyebrow', 'Experience · Status', 'Expérience · Statut'),
       title_key='exp2.title', title='Student-entrepreneur status (SNEE)',
       lead=T('xp1.lead', "Since July 2025, I've had the national student-entrepreneur status. It's what lets me run projects alongside my degree.",
              "Depuis juillet 2025, j'ai le statut national d'étudiant-entrepreneur. C'est ce qui me permet de mener des projets en parallèle de ma licence."),
       facts=[('fact.period', 'Period', T('xp1.f1', 'Jul 2025 – Present', 'Juil. 2025 – Aujourd’hui')),
              ('fact.org', 'Organisation', (None, 'Pépite Normandie')),
              ('fact.place', 'Location', T('xp1.f3', 'Rouen · Hybrid', 'Rouen · Hybride')),
              ('fact.type', 'Type', T('xp1.f4', 'Status', 'Statut'))],
       context=T('xp1.ctx', "The SNEE is a national status for students who want to build a business project during their studies. In Normandy, it goes through Pépite Normandie. I got it in July 2025.",
                 "Le SNEE est un statut national pour les étudiants qui veulent monter un projet d'entreprise pendant leurs études. En Normandie, il passe par Pépite Normandie. Je l'ai obtenu en juillet 2025."),
       did=[T('xp1.d1', "Silva Edita: a rooftop greening project, awarded at Proj'Impact 2026.", "Silva Edita : un projet de toitures végétalisées, lauréat de Proj'Impact 2026."),
            T('xp1.d2', 'Naillies: six months with Léa Portmann in Les Jeunes Pousses, building a business plan in the beauty sector.',
              'Naillies : six mois avec Léa Portmann dans Les Jeunes Pousses, à construire un business plan dans la beauté.'),
            T('xp1.d3', 'Market research, offers, business plans and pitches along the way.', 'Des études de marché, des offres, des business plans et des pitchs au fil des projets.')],
       takeaway=T('xp1.take', 'This status is what pushed me towards business development and sales, with a real interest in responsible entrepreneurship.',
                  "C'est ce statut qui m'a orienté vers le business development et le développement commercial, avec un vrai intérêt pour l'entrepreneuriat responsable."),
       skills=['sk.curiosity', 'sk.adapt', 'sk.autonomy', 'sk.team', 'sk.market', 'sk.bp'],
       related=[('projects/silva-edita.html', None, 'Silva Edita', "Proj'Impact 2026"),
                ('projects/jeunes-pousses.html', None, 'Naillies', 'Les Jeunes Pousses 2026')]),
  dict(slug='boc-lab', card='exp-boc', name='Boc Lab',
       eyebrow=T('xp2.eyebrow', 'Experience · Internship', 'Expérience · Stage'),
       title_key='exp3.title', title='Executive assistant intern',
       lead=T('xp2.lead', "Two months alongside Boc Lab's founder, helping to create Magic Lab, a magic school in Rouen.",
              'Deux mois aux côtés du dirigeant de Boc Lab, pour aider à créer Magic Lab, une école de magie à Rouen.'),
       facts=[('fact.period', 'Period', T('xp2.f1', 'Jun – Jul 2026 · 2 months', 'Juin – juil. 2026 · 2 mois')),
              ('fact.org', 'Organisation', (None, 'Boc Lab')),
              ('fact.place', 'Location', T('xp2.f3', 'Rouen · Hybrid', 'Rouen · Hybride')),
              ('fact.type', 'Type', T('xp2.f4', 'Internship', 'Stage'))],
       context=T('xp2.ctx', 'Boc Lab is behind Magic Lab, a magic school in Rouen for children and teenagers aged 6 to 17. My internship was about taking the school from idea to launch, working directly with the founder.',
                 "Boc Lab est à l'origine de Magic Lab, une école de magie à Rouen pour les enfants et les ados de 6 à 17 ans. Mon stage portait sur le passage de l'idée au lancement de l'école, en direct avec le dirigeant."),
       did=[T('xp2.d1', 'Market research and checking that the idea holds up', "Étude de marché et vérification de l'opportunité"),
            T('xp2.d2', 'Budget forecast and business model', 'Budget prévisionnel et modèle économique'),
            T('xp2.d3', 'Regulatory watch, including the rules for premises open to the public (ERP)', 'Veille réglementaire, notamment les règles ERP (établissement recevant du public)'),
            T('xp2.d4', 'Coordinating the people involved in the project', 'Coordination des différents intervenants'),
            T('xp2.d5', 'Thinking about the customer experience', "Réflexion sur l'expérience client"),
            T('xp2.d6', "Designing and building the school's presentation website", "Conception et développement du site de présentation de l'école")],
       takeaway=T('xp2.take', 'It\'s where I saw first-hand what launching a business actually takes: the numbers, the rules and the people to coordinate.',
                  "C'est là que j'ai vu de près ce que demande vraiment le lancement d'une activité : les chiffres, les règles et les gens à coordonner."),
       skills=['sk.bizdev', 'sk.budget', 'sk.strat', 'sk.market', 'sk.entre', 'sk.pm'],
       related=[('https://ecole-magie.vercel.app', T('xp2.site', 'The website I built', "Le site que j'ai réalisé"), 'Magic Lab', 'ecole-magie.vercel.app')]),
  dict(slug='student-job', card='exp-job', name='Student job',
       eyebrow=T('xp6.eyebrow', 'Experience · Student job', 'Expérience · Job étudiant'),
       title_key='job.title', title='Student job · International students welcome desk',
       lead=T('xp6.lead', "Alongside my degree, I work as a student assistant at the University of Rouen Normandie. At the start of the 2026 academic year, I was at Espace Monde, the welcome desk for international students.",
              "En parallèle de ma licence, je suis étudiant vacataire à l'Université de Rouen Normandie. À la rentrée 2026, j'étais à l'Espace Monde, le guichet d'accueil des étudiants internationaux."),
       facts=[('fact.period', 'Period', T('xp6.f1', 'Jul – Sep 2026', 'Juil. – sept. 2026')),
              ('fact.org', 'Organisation', (None, 'Espace Monde · Université de Rouen Normandie')),
              (*T('fact.status', 'Status', 'Statut'), T('xp6.f3', 'Student assistant (vacataire)', 'Étudiant vacataire')),
              (*T('fact.volume', 'Students helped', 'Étudiants accueillis'), (None, '527'))],
       context=T('xp6.ctx', "Espace Monde is the University of Rouen's welcome desk for international students. Those who come through Campus France without an exchange programme go there to enrol, sort out their paperwork and settle in, and most of them arrive in the same few weeks of September.",
                 "L'Espace Monde, c'est le guichet d'accueil des étudiants internationaux de l'Université de Rouen. Ceux qui arrivent via Campus France, hors programme d'échange, y passent pour s'inscrire, faire leurs démarches et s'installer, et la plupart arrivent pendant les mêmes semaines de septembre."),
       did=[('xp6.d1', None), ('xp6.d2', None), ('xp6.d3', None), ('xp6.d4', None), ('xp6.d5', None)],
       takeaway=None,
       skills=['sk.oral', 'sk.intercultural', 'sk.english', 'sk.listening', 'sk.flow', 'sk.admin', 'sk.adapt', 'sk.team'],
       related=[]),
  dict(slug='ambassador', card='exp-amb', name='Entrepreneurship Ambassador',
       eyebrow=T('xp4.eyebrow', 'Experience · Ongoing', 'Expérience · En cours'),
       title_key='exp1.title', title='Entrepreneurship Ambassador',
       lead=T('xp4.lead', "Since September 2026, I've been representing the University of Rouen's Maison de l'Entrepreneuriat among students.",
              "Depuis septembre 2026, je représente la Maison de l'Entrepreneuriat de l'Université de Rouen auprès des étudiants."),
       facts=[('fact.period', 'Period', T('xp4.f1', 'Sep 2026 – Present', 'Sept. 2026 – Aujourd’hui')),
              ('fact.org', 'Organisation', (None, "Maison de l'Entrepreneuriat · Université de Rouen Normandie")),
              ('fact.place', 'Location', T('xp4.f3', 'Rouen · Hybrid', 'Rouen · Hybride')),
              ('fact.type', 'Type', T('xp4.f4', 'Contract', 'Contrat'))],
       context=T('xp4.ctx', "The Maison de l'Entrepreneuriat helps students who want to start something: one-to-one support, themed workshops, networking events. It also runs Les Jeunes Pousses, the programme I took part in with Naillies.",
                 "La Maison de l'Entrepreneuriat aide les étudiants qui veulent se lancer : accompagnement individuel, formations thématiques, événements réseau. C'est aussi elle qui organise Les Jeunes Pousses, le programme que j'ai suivi avec Naillies."),
       did=[('exp1.b1', None), ('exp1.b2', None), ('exp1.b3', None), ('exp1.b4', None), ('exp1.b5', None), ('exp1.b6', None)],
       takeaway=T('xp4.take', "Having been through Les Jeunes Pousses myself, I can tell students what it's really like.",
                  "Comme j'ai moi-même suivi Les Jeunes Pousses, je peux en parler aux étudiants en connaissance de cause."),
       skills=['sk.pm', 'sk.digital', 'sk.sbd', 'sk.oral', 'sk.network'],
       related=[('projects/jeunes-pousses.html', None, 'Les Jeunes Pousses', 'Naillies')]),

  dict(slug='junior-conseil', card='exp-jc', name='IAE Rouen Junior Conseil',
       eyebrow=T('xp5.eyebrow', 'Experience · Being set up', 'Expérience · En création'),
       title_key='jc.title', title='Business Development Manager',
       lead=T('xp5.lead', "I'm one of the founding members of IAE Rouen Junior Conseil, the junior enterprise we're setting up at IAE Rouen Normandie. I handle business development.",
              "Je fais partie des membres fondateurs d'IAE Rouen Junior Conseil, la Junior Entreprise qu'on crée à l'IAE Rouen Normandie. Je m'occupe du développement commercial."),
       facts=[('fact.period', 'Period', T('xp5.f1', 'Sep 2026 – Present', 'Sept. 2026 – Aujourd’hui')),
              ('fact.org', 'Organisation', (None, 'IAE Rouen Junior Conseil')),
              ('fact.place', 'Location', (None, 'Rouen')),
              ('fact.type', 'Type', T('xp5.f4', 'Founding team', 'Équipe fondatrice'))],
       context=T('xp5.ctx', "A junior enterprise is a student association that carries out consulting missions for companies, delivered by students. We're building IAE Rouen's, and we aim to be up and running by December 2026.",
                 "Une Junior Entreprise est une association étudiante qui réalise des missions de conseil pour des entreprises, menées par des étudiants. On monte celle de l'IAE Rouen, avec l'objectif d'être opérationnels en décembre 2026."),
       did=[('jc.b1', None), ('jc.b2', None), ('jc.b3', None), ('jc.b4', None),
            T('xp5.d5', 'Setting up the association and the paperwork', "Structuration de l'association et démarches administratives")],
       takeaway=T('xp5.take', "Too early to draw conclusions: I'll update this page once the first missions are signed.",
                  'Trop tôt pour en tirer un bilan : je mettrai cette page à jour dès les premières missions signées.'),
       skills=['sk.bizdev', 'sk.network', 'sk.oral', 'sk.entre', 'sk.pm'],
       related=[('https://junior-entreprise.vercel.app', T('xp5.site', 'The website I built', "Le site que j'ai réalisé"), 'IAE Rouen Junior Conseil', 'junior-entreprise.vercel.app')]),
]

def _en_of(key, html_source):
    if key in EN_OF: return EN_OF[key]
    if key in _JC: return _JC[key]
    m = re.search(r'data-i18n="' + re.escape(key) + r'"[^>]*>(.*?)</', html_source, flags=re.S)
    return m.group(1) if m else key

def xp_page(i, x):
    nxt = XPS[(i + 1) % len(XPS)]
    k, en = x['eyebrow']; lk, lead = x['lead']
    facts_html = '\n'.join(
        f'      <div><dt data-i18n="{fk}">{fl}</dt><dd{(" data-i18n=" + chr(34) + vk + chr(34)) if vk else ""}>{v}</dd></div>'
        for fk, fl, (vk, v) in x['facts'])
    media = f'''    <dl class="page-hero__media facts facts--hero">
{facts_html}
    </dl>
'''
    crumbs_html = f'''      <nav class="crumbs" aria-label="Breadcrumb"><a href="experience.html" data-i18n="nav.experience">Experience</a><span aria-hidden="true">/</span><span data-i18n="bar.{x['card'][4:]}">{x['name']}</span></nav>
'''
    did = '\n'.join(f'          <li data-i18n="{dk}">{dv if dv else _en_of(dk, src)}</li>' for dk, dv in x['did'])
    skills = '\n'.join(f'          <li data-i18n="{s}">{_en_of(s, src)}</li>' for s in x['skills'])
    ck, ctx = x['context']
    take = ''
    if x['takeaway']:
        tk, tv = x['takeaway']
        take = f'''        <div class="case__block reveal">
          <h2 class="case__h" data-i18n="xp.takeaway">What I took from it</h2>
          <p class="feature__goal" data-i18n="{tk}">{tv}</p>
        </div>
'''
    related = ''
    if x['related']:
        items = []
        for href, label, title, sub in x['related']:
            ext = href.startswith('http')
            attrs = ' target="_blank" rel="noopener"' if ext else ''
            lab = f'<span class="related__label" data-i18n="{label[0]}">{label[1]}</span>' if label else f'<span class="related__label" data-i18n="nav.projects">Projects</span>'
            items.append(f'''        <a class="related__item" href="{href}"{attrs}>
          {lab}
          <span class="related__title">{title}</span>
          <span class="related__sub">{sub}</span>
          <span class="related__arrow" aria-hidden="true">{'↗' if ext else '→'}</span>
        </a>''')
        related = f'''    <div class="related reveal">
      <h2 class="case__h" data-i18n="xp.related">Related</h2>
      <div class="related__grid" data-stagger>
{chr(10).join(items)}
      </div>
    </div>
'''
    body = '\n\n'.join([
        page_hero(k, en, x['title_key'], x['title'], lk, lead, crumbs_html, media=media),
        f'''<section class="section section--flush">
  <div class="container">
    <div class="xp">
      <div class="xp__col">
        <div class="case__block reveal">
          <h2 class="case__h" data-i18n="xp.context">Context</h2>
          <p data-i18n="{ck}">{ctx}</p>
        </div>
{take}      </div>
      <div class="xp__col">
        <div class="case__block reveal">
          <h2 class="case__h" data-i18n="xp.did">What I did</h2>
          <ul class="ticks">
{did}
          </ul>
        </div>
        <div class="case__block reveal">
          <h2 class="case__h" data-i18n="xp.skills">Skills used</h2>
          <ul class="chips">
{skills}
          </ul>
        </div>
      </div>
    </div>
{related}  </div>
</section>''',
        next_band(f"experience/{nxt['slug']}.html", f"bar.{nxt['card'][4:]}", nxt['name'], 'common.nextXp', 'Next experience')])
    PAGES[f"experience/{x['slug']}.html"] = assemble('experience', f"{x['name']} · Naël Imberti", lead, body, prefix='../')

for _i, _x in enumerate(XPS):
    xp_page(_i, _x)

# French strings of the experience pages -> main.js (between markers)
_js_path = os.path.join(ROOT, 'assets/js/main.js')
_js = open(_js_path, encoding='utf8').read()
_js = re.sub(r",\n\n    /\* @xp-pages \*/.*?/\* @xp-pages-end \*/", '', _js, flags=re.S)
import json as _json
_block = ',\n\n    /* @xp-pages */\n' + ',\n'.join(f"    '{k}': " + _json.dumps(v, ensure_ascii=False) for k, v in XP_FR.items()) + '\n    /* @xp-pages-end */'
_i = _js.index('var FR = {'); _j = _js.index('\n  };', _i)
_js = _js[:_j] + _block + _js[_j:]
open(_js_path, 'w', encoding='utf8').write(_js)

PAGES['experience/international-students.html'] = """<!doctype html>
<html lang="en"><head><meta charset="utf-8"><title>Student job · Naël Imberti</title>
<meta http-equiv="refresh" content="0; url=student-job.html"><link rel="canonical" href="__CANONICAL_JOB__">
<meta name="robots" content="noindex"></head>
<body><a href="student-job.html">Student job</a></body></html>
"""
for path, html in PAGES.items():
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    canon = BASE_URL + ('' if path == 'index.html' else path)
    html = html.replace('__CANONICAL_JOB__', BASE_URL + 'experience/student-job.html')
    open(full, 'w', encoding='utf8').write(_ac.apply_en(html.replace('__CANONICAL__', canon)))
    print('wrote', path, len(html))
