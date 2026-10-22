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

  /* ───────── Hero gold waves (echo of the LinkedIn banner) ───────── */
  var svg = document.getElementById('waves');
  if (svg) {
    var ns = 'http://www.w3.org/2000/svg';
    for (var i = 0; i < 16; i++) {
      var t = i / 15;
      var d = 'M ' + (-50 + t * 80) + ' ' + (760) +
        ' C ' + (300 + t * 120) + ' ' + (520 - t * 160) + ', ' +
        (520 + t * 60) + ' ' + (40 + t * 60) + ', ' +
        (1650) + ' ' + (60 + t * 140);
      var path = document.createElementNS(ns, 'path');
      path.setAttribute('d', d);
      svg.appendChild(path);
    }
  }

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
