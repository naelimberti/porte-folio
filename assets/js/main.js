/* Naël Imberti · Portfolio
   English is the source language (written in index.html).
   French strings below replace it when the FR toggle is used. */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  /* ───────── Translations (FR) ───────── */
  var FR = {
    'meta.title': 'Naël Imberti · Business Developer en formation',
    'meta.description': "Naël Imberti, étudiant en Licence 3 Gestion à l'IAE Rouen Normandie, étudiant-entrepreneur (SNEE · Pépite Normandie). À la recherche d'un stage de 3 à 6 mois à partir de mars 2027.",

    'skip': 'Aller au contenu',
    'nav.about': 'À propos',
    'nav.experience': 'Expériences',
    'nav.projects': 'Projets',
    'nav.education': 'Formation',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',

    'hero.status': 'Open to work · Stage à partir de mars 2027',
    'hero.role': 'Business Developer en formation',
    'hero.lead': "Étudiant en Licence 3 Gestion à l'IAE Rouen Normandie, j'associe un parcours en Mathématiques &amp; Économie à une expérience concrète en développement de projets, coordination et entrepreneuriat.",
    'hero.tag1': 'Responsable Pôle Commercial · IAE Rouen Junior Conseil',
    'hero.tag2': "Statut National d'Étudiant-Entrepreneur · SNEE Pépite Normandie",
    'hero.tag3': "Lauréat Proj'Impact 2026",
    'hero.cta1': 'Voir mes projets',
    'hero.cta2': 'Me contacter',

    'fig.1': "étudiants internationaux accompagnés à l'Université de Rouen",
    'fig.2': 'projets entrepreneuriaux portés dans des programmes universitaires',
    'fig.3': "Lauréat Proj'Impact avec Silva Edita",
    'fig.4': "Statut National d'Étudiant-Entrepreneur depuis juillet 2025",

    'about.eyebrow': 'À propos',
    'about.title': 'Un profil analytique, un esprit <span class="hl">entrepreneur</span>',
    'about.p1': "Étudiant en troisième année de Licence de Gestion à l'IAE Rouen Normandie, je construis mon parcours autour de la gestion de projet, du management international et de l'entrepreneuriat.",
    'about.p2': "Issu d'une Double Licence Mathématiques &amp; Économie, j'ai développé de solides capacités d'analyse et de résolution de problèmes structurée, que je complète aujourd'hui par des études en management et une expérience concrète en développement et coordination de projets.",
    'about.p3': "Titulaire du Statut National d'Étudiant-Entrepreneur (SNEE) avec Pépite Normandie et Responsable Pôle Commercial chez IAE Rouen Junior Conseil, je développe des compétences en gestion de projet, coordination, stratégie, partenariats et organisation.",
    'about.p4': "À long terme, je souhaite travailler dans la gestion de projets internationaux et, à terme, diriger des équipes multiculturelles.",
    'about.rolesTitle': 'Rôles actuels',
    'role.jc': 'Responsable Pôle Commercial',
    'role.amb': "Ambassadeur Entrepreneuriat",
    'role.ambOrg': "Maison de l'Entrepreneuriat · Université de Rouen",
    'role.snee': 'Étudiant-Entrepreneur (SNEE)',
    'role.l3': 'Licence 3 Gestion, parcours Management',

    'common.present': 'En cours',
    'common.current': 'En cours',

    'exp.eyebrow': 'Expériences',
    'exp.title': 'Apprendre sur le <span class="hl">terrain</span>',

    'exp1.title': "Ambassadeur · Maison de l'Entrepreneuriat",
    'exp1.org': "Maison de l'Entrepreneuriat · Université de Rouen Normandie",
    'exp1.meta': 'Sept. 2026 – Aujourd’hui · Hybride',
    'exp1.b1': "Promouvoir et démocratiser l'entrepreneuriat auprès des étudiants de l'Université de Rouen et de l'IAE.",
    'exp1.b2': "Sensibiliser les étudiants aux opportunités et dispositifs d'accompagnement entrepreneurial.",
    'exp1.b3': "Participer à des événements, forums et actions de promotion de l'entrepreneuriat.",
    'exp1.b4': "Tenir des stands et échanger directement avec les étudiants pour faire connaître la Maison de l'Entrepreneuriat.",
    'exp1.b5': 'Valoriser les initiatives et événements entrepreneuriaux sur LinkedIn et les réseaux sociaux.',
    'exp1.b6': "Être un relais entre les étudiants et la Maison de l'Entrepreneuriat.",

    'exp2.title': "Statut National d'Étudiant-Entrepreneur (SNEE)",
    'exp2.meta': 'Juil. 2025 – Aujourd’hui · Rouen, Normandie · Hybride',
    'exp2.p1': "Titulaire du Statut National d'Étudiant-Entrepreneur via Pépite Normandie depuis juillet 2025, je développe ce statut en parallèle de mes études afin de construire et structurer des projets entrepreneuriaux.",
    'exp2.p2': "Cette expérience me permet de développer des compétences en développement commercial, analyse de marché, stratégie, gestion de projet et structuration d'offres à travers différents projets et initiatives entrepreneuriales.",
    'exp2.b1': "Lauréat de Proj'Impact 2026 avec Silva Edita, projet de végétalisation de toitures urbaines.",
    'exp2.b2': "Participant aux Jeunes Pousses 2026 avec Naillies, autour de la construction d'un business plan dans le secteur de la beauté.",

    'exp3.badge': 'Stage',
    'exp3.title': 'Stagiaire Assistant de Direction',
    'exp3.meta': 'Juin 2026 – Juil. 2026 · Rouen · Hybride',
    'exp3.p1': "Accompagnement du dirigeant dans le développement de projets entrepreneuriaux, de l'étude d'opportunité à la mise en œuvre opérationnelle.",
    'exp3.p2': "Intervention sur des sujets variés : analyse de marché, gestion de projet, budget prévisionnel, veille réglementaire, coordination d'acteurs, développement d'activités et structuration de nouveaux projets.",
    'exp3.p3': "Cette expérience me permet d'appréhender concrètement les enjeux stratégiques, organisationnels et financiers liés à la création et au développement d'une activité.",

    'exp4.badge': 'Contrat',
    'exp4.title': 'Étudiant Vacataire · Accueil des étudiants internationaux',
    'exp4.meta': 'Août 2026 – Sept. 2026 · Sur site',
    'exp4.p1': "Accompagnement des <strong>527 étudiants internationaux</strong> dans leurs démarches administratives et leur installation à l'Université de Rouen Normandie.",
    'exp4.b1': 'Accueil au guichet',
    'exp4.b2': 'Création de dossiers physiques et numériques',
    'exp4.b3': 'Vérification de dossiers physiques et numériques',

    'proj.eyebrow': 'Projets entrepreneuriaux',
    'proj.title': "De l'idée au <span class=\"hl\">jury</span>",
    'proj1.award': "🏆 Lauréat Proj'Impact 2026",
    'proj1.meta': 'Janv. 2026 – Aujourd’hui · Végétalisation urbaine',
    'proj1.p1': "Le projet est né d'une réflexion autour de la végétalisation des toits de Rouen, avec une première approche centrée sur les barres d'immeubles, puis sur les campus universitaires.",
    'proj1.p2': "Après plusieurs échanges avec des acteurs du territoire et de l'innovation locale, le projet évolue aujourd'hui vers une expérimentation sur les toits des pépinières d'entreprise de Rouen Normandie Création.",
    'proj1.goalLabel': 'Objectif :',
    'proj1.goal': 'imaginer des solutions de végétalisation légères, modulaires et accessibles, capables d’améliorer les espaces urbains tout en créant une dynamique collective autour des transitions écologiques.',
    'gal.1': 'Pitch de Silva Edita',
    'gal.2': "Remise des prix Proj'Impact 2026",
    'proj2.meta': 'Oct. 2025 – Avr. 2026 · Les Jeunes Pousses 2026 · Pépite Normandie',
    'proj2.p1': "Développement d'un projet entrepreneurial autour de l'apprentissage de la manucure semi-permanente à travers des kits pédagogiques accessibles et créatifs.",
    'proj2.p2': "Participation à la structuration du projet en tant qu'apporteur de compétences : réflexion produit, étude de marché, positionnement, pitch et développement de la proposition de valeur dans le cadre du programme Jeunes Pousses.",
    'proj2.teamLabel': 'Équipe :',
    'proj2.team': 'Léa Portmann (porteuse de projet) · Naël Imberti (apporteur de compétences)',

    'edu.eyebrow': 'Formation',
    'edu.title': 'Des <span class="hl">chiffres</span> au management',
    'edu1.title': 'Licence 3 Gestion · Parcours Management',
    'edu1.meta': 'Sept. 2026 – Juil. 2027',
    'edu1.p1': "Formation orientée vers le développement des compétences en gestion, management et compréhension de l'environnement des organisations.",
    'edu1.s1': 'Management et gestion des organisations',
    'edu1.s2': 'Marketing et stratégie commerciale',
    'edu1.s3': 'Gestion de projet',
    'edu1.s4': 'Analyse et prise de décision',
    'edu1.s5': 'Communication professionnelle',
    'edu1.s6': "Entrepreneuriat et développement d'activité",
    'edu1.s7': 'Travail en équipe et conduite de projets',
    'edu1.p2': "Cette formation complète mon parcours scientifique et économique en me permettant de renforcer mes compétences en management, développement commercial et entrepreneuriat, avec une approche davantage orientée vers la pratique et la gestion des organisations.",
    'edu2.badge': 'BAC +2',
    'edu2.title': 'Double Licence Mathématiques &amp; Économie',
    'edu2.meta': 'Sept. 2024 – Juin 2026',
    'edu2.p1': 'Formation pluridisciplinaire associant raisonnement analytique, outils quantitatifs et compréhension des enjeux économiques contemporains.',
    'edu2.s1': 'Microéconomie et macroéconomie',
    'edu2.s2': 'Statistiques descriptives et probabilités',
    'edu2.s3': 'Algèbre et analyse réelle',
    'edu2.s4': 'Programmation Python et développement web',
    'edu2.s5': 'Analyse de données et méthodes quantitatives',
    'edu2.s6': 'Expression écrite, anglais et projets tutorés',
    'edu2.p2': "Cette formation exigeante m'a permis de développer rigueur analytique, autonomie et capacité d'adaptation, tout en construisant progressivement mon orientation vers la gestion, le management, le développement commercial et l'entrepreneuriat.",

    'skills.eyebrow': 'Compétences',
    'skills.title': "Ce que j'apporte à une <span class=\"hl hl--gold\">équipe</span>",
    'skills.g1': 'Business &amp; stratégie',
    'skills.g2': 'Gestion &amp; analyse',
    'skills.g3': 'Communication &amp; réseau',
    'skills.g4': 'Savoir-être',

    'sk.bizdev': 'Développement commercial',
    'sk.sbd': 'Small Business Development',
    'sk.entre': 'Entrepreneuriat',
    'sk.strat': 'Analyse stratégique',
    'sk.mkstrat': 'Stratégie marketing',
    'sk.watch': 'Veille marketing',
    'sk.market': 'Études de marché',
    'sk.bp': "Élaboration d'un business plan",
    'sk.pm': 'Organisation &amp; gestion de projet',
    'sk.budget': 'Gestion budgétaire',
    'sk.decision': 'Prise de décision',
    'sk.eco': 'Microéconomie &amp; macroéconomie',
    'sk.stats': 'Statistiques descriptives &amp; probabilités',
    'sk.oral': 'Communication orale',
    'sk.network': 'Réseautage professionnel',
    'sk.digital': 'Communication digitale &amp; réseaux sociaux',
    'sk.story': 'Rédaction de contenu &amp; storytelling',
    'sk.team': "Travail d'équipe",
    'sk.autonomy': 'Travail en autonomie',
    'sk.adapt': 'Adaptabilité',
    'sk.curiosity': "Curiosité &amp; esprit d'initiative",

    'eco.title': "L'écosystème dans lequel j'évolue",

    'cta.eyebrow': 'Ouvert aux opportunités',
    'cta.title': "À la recherche d'un stage de 3 à 6 mois à partir de mars 2027",
    'cta.text': 'Idéalement dans un environnement international et multiculturel, autour de la gestion de projet, de la coordination, des opérations, de la stratégie ou de la transformation.',
    'cta.linkedin': 'Me suivre sur LinkedIn',

    'footer.tag': 'Business Developer en formation · Rouen, Normandie, France',
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.top': 'Haut de page ↑'
  };

  /* ───────── i18n engine ───────── */
  var nodes = document.querySelectorAll('[data-i18n]');
  var EN = {};
  nodes.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (!(key in EN)) EN[key] = el.innerHTML;
  });
  var metaDesc = document.querySelector('meta[name="description"]');
  EN['meta.title'] = document.title;
  EN['meta.description'] = metaDesc ? metaDesc.getAttribute('content') : '';

  var STORAGE_KEY = 'ni-lang';

  function store(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  }
  function stored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }

  function setLang(lang, persist) {
    var dict = lang === 'fr' ? FR : EN;
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = dict[key] != null ? dict[key] : EN[key];
      if (value != null && el.innerHTML !== value) el.innerHTML = value;
    });
    document.title = dict['meta.title'];
    if (metaDesc) metaDesc.setAttribute('content', dict['meta.description']);
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang__btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    if (persist) {
      store(lang);
      var url = new URL(window.location.href);
      if (lang === 'fr') url.searchParams.set('lang', 'fr'); else url.searchParams.delete('lang');
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
  }

  document.querySelectorAll('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang'), true); });
  });

  // English by default; ?lang=fr or a previous choice switches to French.
  var param = new URLSearchParams(window.location.search).get('lang');
  var initial = param === 'fr' || param === 'en' ? param : stored();
  if (initial === 'fr') setLang('fr', false);

  /* ───────── Header: scroll state, mobile menu, active link ───────── */
  var header = document.querySelector('.header');
  var nav = document.getElementById('nav');
  var burger = document.querySelector('.burger');

  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 10); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  function closeMenu() {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }
  burger.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  var links = nav.querySelectorAll('a[href^="#"]');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = '#' + entry.target.id;
        links.forEach(function (l) { l.classList.toggle('is-active', l.getAttribute('href') === id); });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    document.querySelectorAll('main section[id]').forEach(function (s) { spy.observe(s); });
  }

  /* ───────── Reveal on scroll + counters ───────── */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function countUp(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (reduce || !target) return;
    var start = null, duration = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var revealables = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        entry.target.querySelectorAll('[data-count]').forEach(countUp);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealables.forEach(function (el) { io.observe(el); });
  } else {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ───────── Ambient: golden silk ribbons ─────────
     Evolution of the previous portfolio's twisting "DNA" ribbon:
     depth-shaded threads (violet behind, gold in front), soft glow,
     sparks travelling along the threads, scroll twist, idle drift and
     pointer parallax. A second, fainter ribbon echoes the LinkedIn banner. */
  (function () {
    var cv = document.getElementById('ribbon');
    if (!cv || !cv.getContext) return;
    var ctx = cv.getContext('2d');
    var ambient = cv.parentNode;
    var headerEl = document.querySelector('.header');
    var DW = 1920, DH = 1080, BUCKETS = 14, TAU = Math.PI * 2;
    var small = window.matchMedia('(max-width: 760px)');

    function makeRibbon(o) {
      var segs = o.segs, P = o.p, sp = [], nm = [];
      for (var j = 0; j <= segs; j++) {
        var t = j / segs, u = 1 - t;
        sp.push([
          u * u * u * P[0][0] + 3 * u * u * t * P[1][0] + 3 * u * t * t * P[2][0] + t * t * t * P[3][0],
          u * u * u * P[0][1] + 3 * u * u * t * P[1][1] + 3 * u * t * t * P[2][1] + t * t * t * P[3][1]
        ]);
        var tx = 3 * u * u * (P[1][0] - P[0][0]) + 6 * u * t * (P[2][0] - P[1][0]) + 3 * t * t * (P[3][0] - P[2][0]);
        var ty = 3 * u * u * (P[1][1] - P[0][1]) + 6 * u * t * (P[2][1] - P[1][1]) + 3 * t * t * (P[3][1] - P[2][1]);
        var L = Math.hypot(tx, ty) || 1;
        nm.push([-ty / L, tx / L]);
      }
      var X = [], Y = [], D = [];
      for (var i = 0; i < o.n; i++) { X.push(new Float32Array(segs + 1)); Y.push(new Float32Array(segs + 1)); D.push(new Float32Array(segs + 1)); }
      o.sp = sp; o.nm = nm; o.X = X; o.Y = Y; o.D = D;
      return o;
    }

    var ribbons = [
      makeRibbon({ p: [[1852, -180], [1565, 320], [1652, 800], [1060, 1250]], n: 14, r: 165, turns: .62, segs: 84, alpha: 1, dir: 1, par: 26 }),
      makeRibbon({ p: [[-260, 760], [260, 860], [560, 1080], [980, 1320]], n: 9, r: 95, turns: .5, segs: 56, alpha: .55, dir: -1, par: 14, desktopOnly: true })
    ];

    var dpr = 1, vw = 0, vh = 0, scale = 1, ox = 0, oy = 0;
    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, small.matches ? 1.5 : 2);
      vw = window.innerWidth; vh = window.innerHeight;
      cv.width = Math.round(vw * dpr); cv.height = Math.round(vh * dpr);
      scale = Math.max(vw / DW, vh / DH);
      ox = (vw - DW * scale) / 2; oy = (vh - DH * scale) / 2;
      if (small.matches) { scale *= 1.15; ox = vw - DW * scale * .98; }
    }

    function active(rb) { return !(rb.desktopOnly && small.matches); }

    var mx = 0, my = 0, tmx = 0, tmy = 0, drift = 0;
    function build(phase) {
      ribbons.forEach(function (rb) {
        if (!active(rb)) return;
        var n = rb.n, segs = rb.segs, px = mx * rb.par, py = my * rb.par;
        for (var i = 0; i < n; i++) {
          var s = (i / (n - 1)) * 2 - 1, xs = rb.X[i], ys = rb.Y[i], ds = rb.D[i];
          for (var j = 0; j <= segs; j++) {
            var phi = rb.turns * TAU * (j / segs) + phase * rb.dir + s * .17;
            var off = s * rb.r * Math.cos(phi);
            xs[j] = ox + (rb.sp[j][0] + rb.nm[j][0] * off) * scale + px;
            ys[j] = oy + (rb.sp[j][1] + rb.nm[j][1] * off) * scale + py;
            ds[j] = s * Math.sin(phi);
          }
        }
      });
    }

    // Depth -> colour: violet behind, gold in the middle, pale gold in front
    function colour(f) {
      var r, g, b;
      if (f < .5) { var k = f / .5; r = 120 + 120 * k; g = 70 + 115 * k; b = 215 - 125 * k; }
      else { var q = (f - .5) / .5; r = 240 + 15 * q; g = 185 + 50 * q; b = 90 + 80 * q; }
      return [r | 0, g | 0, b | 0];
    }
    var palette = [];
    for (var k = 0; k < BUCKETS; k++) palette.push(colour((k + .5) / BUCKETS));

    // Pre-rendered spark sprite
    var sprite = document.createElement('canvas');
    sprite.width = sprite.height = 48;
    (function () {
      var c = sprite.getContext('2d'), g = c.createRadialGradient(24, 24, 0, 24, 24, 24);
      g.addColorStop(0, 'rgba(255,250,225,1)');
      g.addColorStop(.18, 'rgba(255,224,130,.9)');
      g.addColorStop(.45, 'rgba(255,200,80,.25)');
      g.addColorStop(1, 'rgba(255,200,80,0)');
      c.fillStyle = g; c.fillRect(0, 0, 48, 48);
    })();

    var sparks = [];
    function seedSparks() {
      sparks = [];
      var count = reduce ? 0 : (small.matches ? 10 : 28);
      for (var i = 0; i < count; i++) sparks.push(newSpark(Math.random()));
    }
    function newSpark(t) {
      var rb = Math.random() < .78 || small.matches ? 0 : 1;
      return { rb: rb, fil: (Math.random() * ribbons[rb].n) | 0, t: t, v: .025 + Math.random() * .05, tw: Math.random() * TAU, size: 10 + Math.random() * 16 };
    }

    function render(time) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, vw, vh);
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineCap = 'round';

      ribbons.forEach(function (rb) {
        if (!active(rb)) return;
        // Bucket segments by depth so each colour/width is stroked once
        var buckets = [];
        for (var b = 0; b < BUCKETS; b++) buckets.push([]);
        for (var i = 0; i < rb.n; i++) {
          var xs = rb.X[i], ys = rb.Y[i], ds = rb.D[i];
          for (var j = 0; j < rb.segs; j++) {
            var f = ((ds[j] + ds[j + 1]) * .5 + 1) / 2;
            buckets[Math.min(BUCKETS - 1, (f * BUCKETS) | 0)].push(xs[j], ys[j], xs[j + 1], ys[j + 1]);
          }
        }
        for (var bk = 0; bk < BUCKETS; bk++) {
          var segsArr = buckets[bk];
          if (!segsArr.length) continue;
          var fv = (bk + .5) / BUCKETS, c = palette[bk];
          var alpha = (.035 + .6 * fv * fv) * rb.alpha * (small.matches ? .6 : 1);
          var w = (.4 + 2.5 * fv * fv) * scale * (small.matches ? 1.2 : 1);
          ctx.beginPath();
          for (var m = 0; m < segsArr.length; m += 4) { ctx.moveTo(segsArr[m], segsArr[m + 1]); ctx.lineTo(segsArr[m + 2], segsArr[m + 3]); }
          if (fv > .55) { // soft glow under the front threads
            ctx.strokeStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + (alpha * .11).toFixed(3) + ')';
            ctx.lineWidth = w * 6;
            ctx.stroke();
          }
          ctx.strokeStyle = 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + alpha.toFixed(3) + ')';
          ctx.lineWidth = w;
          ctx.stroke();
        }
      });

      // Sparks riding the threads
      for (var p = 0; p < sparks.length; p++) {
        var sk = sparks[p], rbs = ribbons[sk.rb];
        if (!active(rbs)) continue;
        var pos = sk.t * rbs.segs, j0 = Math.min(rbs.segs - 1, pos | 0), fr = pos - j0;
        var x = rbs.X[sk.fil][j0] + (rbs.X[sk.fil][j0 + 1] - rbs.X[sk.fil][j0]) * fr;
        var y = rbs.Y[sk.fil][j0] + (rbs.Y[sk.fil][j0 + 1] - rbs.Y[sk.fil][j0]) * fr;
        var depth = (rbs.D[sk.fil][j0] + 1) / 2;
        var edge = Math.min(1, sk.t * 8, (1 - sk.t) * 8);
        var tw = .65 + .35 * Math.sin(time * .004 + sk.tw);
        ctx.globalAlpha = Math.max(0, depth * depth * edge * tw * rbs.alpha);
        var sz = sk.size * (.6 + depth * .6);
        ctx.drawImage(sprite, x - sz / 2, y - sz / 2, sz, sz);
      }
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = 'source-over';
    }

    var cur = 0, target = 0, last = 0, lastFrame = 0, raf = null, sy = 0;
    function frame(now) {
      raf = requestAnimationFrame(frame);
      var cap = small.matches ? 33 : 16;
      if (now - lastFrame < cap) return;
      var dt = Math.min(64, now - (last || now)) / 1000;
      last = now; lastFrame = now;
      cur += (target - cur) * .08;
      mx += (tmx - mx) * .05; my += (tmy - my) * .05;
      drift += dt * .06;
      for (var i = 0; i < sparks.length; i++) {
        sparks[i].t += sparks[i].v * dt;
        if (sparks[i].t > 1) sparks[i] = newSpark(0);
      }
      build(cur + drift); render(now);
    }
    function start() { if (!raf && !reduce) { last = 0; raf = requestAnimationFrame(frame); } }
    function stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }

    function onScroll() {
      sy = window.scrollY || document.documentElement.scrollTop || 0;
      target = sy * .005;
      ambient.style.setProperty('--sy', sy.toFixed(0));
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (headerEl) headerEl.style.setProperty('--p', max > 0 ? (sy / max).toFixed(4) : 0);
      if (reduce) { build(target); render(0); }
    }

    resize(); seedSparks(); onScroll(); cur = target; build(cur); render(0);
    window.addEventListener('resize', function () { resize(); build(cur + drift); render(0); }, { passive: true });
    if (small.addEventListener) small.addEventListener('change', seedSparks);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('pointermove', function (e) {
      if (e.pointerType !== 'mouse') return;
      tmx = e.clientX / vw * 2 - 1; tmy = e.clientY / vh * 2 - 1;
    }, { passive: true });
    document.addEventListener('visibilitychange', function () { if (document.hidden) stop(); else start(); });
    start();
  })();

  /* ───────── Cursor light on glass surfaces ───────── */
  var GLASS = '.figures__card, .roles, .card, .feature, .skills__group';
  document.addEventListener('pointermove', function (e) {
    if (e.pointerType !== 'mouse' || !e.target.closest) return;
    var el = e.target.closest(GLASS);
    if (!el) return;
    var r = el.getBoundingClientRect();
    el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    el.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
