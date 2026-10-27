/* Naël Imberti · Portfolio
   English is the source language (written in the HTML pages).
   French strings below replace it when the FR toggle is used.
   Transitions inspired by the IAE Rouen Junior Conseil site: page curtain,
   titles revealed line by line, cascades, clip reveals, magnetic buttons. */

(function () {
  'use strict';

  var root = document.documentElement;
  root.classList.add('js');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

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
    'hero.role': "Développement commercial &amp; projets · International",
    'hero.lead': "Je suis en troisième année de licence de gestion à l'IAE Rouen Normandie, après deux ans de maths-éco. À côté des cours, je fais partie de l'équipe qui crée IAE Rouen Junior Conseil, où je m'occupe du développement commercial, et je monte des projets en tant qu'étudiant-entrepreneur.",
    'hero.tag1': "Responsable développement commercial · IAE Rouen Junior Conseil",
    'hero.tag2': "Statut National d'Étudiant-Entrepreneur · SNEE Pépite Normandie",
    'hero.tag3': "Lauréat Proj'Impact 2026",
    'hero.cta1': 'Voir mes projets',
    'hero.cta2': 'Me contacter',


    'about.eyebrow': 'À propos',
    'about.title': "En quelques <span class=\"hl\">mots</span>",
    'about.p1': "Je suis en L3 Gestion à l'IAE Rouen Normandie. Ce qui m'intéresse : développer des marchés à l'international, coordonner des projets dans un contexte international et accompagner la transformation des organisations.",
    'about.p2': "J'ai commencé par une double licence maths-éco. J'y ai appris à poser un problème et à travailler avec des chiffres. La gestion m'apprend maintenant à m'en servir sur de vrais projets.",
    'about.p3': "J'ai le statut d'étudiant-entrepreneur (SNEE) avec Pépite Normandie et je fais partie des fondateurs d'IAE Rouen Junior Conseil, où je m'occupe du développement commercial. Les deux me font organiser, coordonner et chercher des partenaires.",
    'about.p4': "Plus tard, j'aimerais travailler sur des projets internationaux et, un jour, encadrer une équipe multiculturelle.",
    'about.rolesTitle': 'Rôles actuels',
    'role.jc': "Responsable développement commercial",
    'role.amb': "Ambassadeur Entrepreneuriat",
    'role.ambOrg': "Maison de l'Entrepreneuriat · Université de Rouen",
    'role.snee': 'Étudiant-Entrepreneur (SNEE)',
    'role.l3': "L3 Gestion, parcours Management",

    'common.present': 'En cours',
    'common.current': 'En cours',

    'exp.eyebrow': 'Expériences',
    'exp.title': 'Apprendre sur le <span class="hl">terrain</span>',

    'exp1.title': "Ambassadeur · Maison de l'Entrepreneuriat",
    'exp1.org': "Maison de l'Entrepreneuriat · Université de Rouen Normandie",
    'exp1.meta': 'Sept. 2026 – Aujourd’hui · Hybride',
    'exp1.b1': "Parler d'entrepreneuriat aux étudiants de l'université et de l'IAE, et leur montrer que c'est à leur portée.",
    'exp1.b2': "Leur présenter les dispositifs d'accompagnement qui existent.",
    'exp1.b3': "Participer aux forums et aux événements autour de l'entrepreneuriat.",
    'exp1.b4': "Tenir des stands et discuter directement avec les étudiants.",
    'exp1.b5': "Relayer les initiatives et les événements sur LinkedIn et les réseaux sociaux.",
    'exp1.b6': "Faire le lien entre les étudiants et l'équipe de la Maison de l'Entrepreneuriat.",

    'exp2.title': "Statut national d'étudiant-entrepreneur (SNEE)",
    'exp2.meta': 'Juil. 2025 – Aujourd’hui · Rouen, Normandie · Hybride',
    'exp2.p1': "J'ai obtenu le statut national d'étudiant-entrepreneur via Pépite Normandie en juillet 2025. Il me permet de monter des projets en parallèle de mes études.",
    'exp2.p2': "Concrètement : des études de marché, une offre à construire, un business plan et des pitchs devant un jury.",
    'exp2.b1': "Lauréat de Proj'Impact 2026 avec Silva Edita, un projet de toitures végétalisées.",
    'exp2.b2': "Participant des Jeunes Pousses 2026 avec Naillies : un business plan dans la beauté, construit sur six mois.",

    'exp3.badge': 'Stage',
    'exp3.title': "Stagiaire assistant de direction",
    'exp3.meta': 'Juin 2026 – Juil. 2026 · Rouen · Hybride',
    'exp3.p1': "Deux mois aux côtés du dirigeant de Boc Lab, sur des projets en cours de lancement : de « est-ce que ça peut marcher ? » jusqu'à la mise en route.",
    'exp3.p2': "J'ai touché à un peu de tout : étude de marché, budget prévisionnel, veille réglementaire, gestion de projet et coordination des différents intervenants.",
    'exp3.p3': "C'est là que j'ai vu de près ce que demande vraiment le lancement d'une activité.",

    'exp4.badge': 'Contrat',
    'exp4.title': "Étudiant vacataire · Accueil des étudiants internationaux",
    'exp4.meta': 'Août 2026 – Sept. 2026 · Sur site',
    'exp4.p1': "Pendant la rentrée, j'ai aidé <strong>527 étudiants internationaux</strong> dans leurs démarches administratives et leur arrivée à l'Université de Rouen Normandie.",
    'exp4.b1': "Accueil au guichet",
    'exp4.b2': "Création des dossiers, papier et numérique",
    'exp4.b3': "Vérification des dossiers",

    'proj.eyebrow': 'Projets entrepreneuriaux',
    'proj.title': "De l'idée au <span class=\"hl\">jury</span>",
    'proj1.award': "🏆 Lauréat Proj'Impact 2026",
    'proj1.meta': 'Janv. 2026 – Aujourd’hui · Végétalisation urbaine',
    'proj1.p1': "On est partis d'une question : comment végétaliser les toits de Rouen ? D'abord sur les barres d'immeubles, ensuite sur les campus.",
    'proj1.p2': "Après plusieurs rencontres avec des acteurs locaux et de l'innovation, on s'oriente maintenant vers un test sur les toits des pépinières d'entreprises de Rouen Normandie Création.",
    'proj1.goalLabel': 'Objectif :',
    'proj1.goal': "Trouver des solutions de végétalisation légères, modulables et abordables, qui rendent la ville plus agréable et donnent envie de s'impliquer.",
    'gal.1': 'Pitch de Silva Edita',
    'gal.2': "Remise des prix Proj'Impact 2026",
    'proj2.meta': 'Oct. 2025 – Avr. 2026 · Les Jeunes Pousses 2026 · Pépite Normandie',
    'proj2.p1': "Naillies, c'est le projet de Léa Portmann : des kits créatifs pour apprendre la manucure semi-permanente. Je l'ai rejointe pendant Les Jeunes Pousses comme apporteur de compétences.",
    'proj2.p2': "J'ai aidé Léa à structurer le projet : le produit, l'étude de marché, le positionnement, la proposition de valeur et le pitch final. On a aussi rédigé le dossier final à deux.",
    'proj2.teamLabel': 'Équipe :',
    'proj2.team': 'Léa Portmann (porteuse de projet) · Naël Imberti (apporteur de compétences)',

    'edu.eyebrow': 'Formation',
    'edu.title': 'Des <span class="hl">chiffres</span> au management',
    'edu1.title': "Licence 3 Gestion · Parcours Management",
    'edu1.meta': 'Sept. 2026 – Juil. 2027',
    'edu1.p1': "Une licence de gestion : fonctionnement des organisations, marketing, gestion de projet et entrepreneuriat.",
    'edu1.s1': 'Management et gestion des organisations',
    'edu1.s2': 'Marketing et stratégie commerciale',
    'edu1.s3': 'Gestion de projet',
    'edu1.s4': 'Analyse et prise de décision',
    'edu1.s5': 'Communication professionnelle',
    'edu1.s6': "Entrepreneuriat et développement d'activité",
    'edu1.s7': 'Travail en équipe et conduite de projets',
    'edu1.p2': "Après deux années très théoriques, je voulais quelque chose de plus concret et plus proche de la vie des entreprises.",
    'edu2.badge': "L1 + L2",
    'edu2.title': "Double licence maths-éco, puis économie",
    'edu2.meta': 'Sept. 2024 – Juin 2026',
    'edu2.p1': "Première année en double licence maths-éco, deuxième année en économie. Des maths, de l'économie, des statistiques et un peu de programmation.",
    'edu2.s1': 'Microéconomie et macroéconomie',
    'edu2.s2': 'Statistiques descriptives et probabilités',
    'edu2.s3': 'Algèbre et analyse réelle',
    'edu2.s4': 'Programmation Python et développement web',
    'edu2.s5': 'Analyse de données et méthodes quantitatives',
    'edu2.s6': 'Expression écrite, anglais et projets tutorés',
    'edu2.p2': "Une formation exigeante. J'y ai gagné de la rigueur et l'habitude de travailler seul, et c'est là que j'ai compris que je voulais aller vers la gestion et le commercial.",

    'skills.eyebrow': 'Compétences',
    'skills.title': "Ce que je sais <span class=\"hl hl--gold\">faire</span>",
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

    'eco.title': "Là où j'étudie, je travaille et je monte mes projets",

    'cta.eyebrow': "Je cherche",
    'cta.title': "Un stage de 3 à 6 mois à partir de mars 2027",
    'cta.text': "En développement commercial à l'international, en coordination de projets internationaux, ou en conseil en stratégie et transformation.",
    'cta.linkedin': "Me retrouver sur LinkedIn",

    'footer.tag': "Développement commercial &amp; projets · Rouen, Normandie",
    'footer.nav': 'Navigation',
    'footer.contact': 'Contact',
    'footer.top': 'Haut de page ↑',

    /* ── Multi-page additions ── */
    'nav.home': 'Accueil',
    'nav.eduskills': 'Formation &amp; compétences',
    'common.next': 'Page suivante',
    'common.nextProject': 'Projet suivant',
    'common.back': 'Retour à',
    'common.case': "Voir le projet",

    'explore.eyebrow': "Explorer",
    'explore.title': "Pour aller plus <span class=\"hl\">loin</span>",
    'explore.cta': "Voir",
    'ex1.text': "Deux stages, la Junior Entreprise qu'on est en train de créer et mes engagements dans l'entrepreneuriat.",
    'ex2.text': "Silva Edita, lauréat de Proj'Impact 2026, et Naillies, monté pendant Les Jeunes Pousses.",
    'ex3.text': "Des maths et de l'économie, puis la gestion à l'IAE Rouen. Avec les langues et les outils.",

    'exp.lead': "Depuis juillet 2025 : deux stages, mon engagement dans l'entrepreneuriat et la Junior Entreprise qu'on est en train de créer.",
    'proj.lead': "Deux projets lancés dans des programmes de l'université. L'un des deux continue aujourd'hui.",
    'pc1.text': "L'idée : végétaliser les toits de Rouen. On a commencé par les immeubles, puis les campus, et on vise maintenant un test sur les toits de pépinières d'entreprises.",
    'pc2.text': "Des kits créatifs pour apprendre la manucure semi-permanente. Six mois de travail avec Léa Portmann pendant Les Jeunes Pousses.",
    'edu.lead': "Des maths et de l'économie d'abord, puis le passage à la gestion.",

    'proj1.eyebrow': "Étude de cas · Proj'Impact 2026",
    'case1.title': 'Silva Edita',
    'case1.next': 'Silva Edita',
    'case2.eyebrow': 'Étude de cas · Les Jeunes Pousses 2026',
    'case2.title': 'Naillies',
    'case2.next': 'Naillies · Les Jeunes Pousses',
    'case.evolution': "Comment le projet a évolué",
    'case.goal': 'L’objectif',
    'case.skills': "Compétences travaillées",
    'case.role': 'Mon rôle',
    'case.programme': "Le programme, étape par étape",

    'fact.period': 'Période',
    'fact.field': 'Domaine',
    'fact.recognition': 'Distinction',
    'fact.next': 'Prochaine étape',
    'fact.programme': 'Programme',
    'fact.role': 'Mon rôle',
    'fact.lead': 'Porteuse du projet',
    'fact.support': 'Accompagnement',
    'fact.silvaPeriod': 'Janv. 2026 – Aujourd’hui',
    'fact.silvaField': 'Végétalisation urbaine',
    'fact.silvaRec': "Lauréat Proj'Impact 2026 · 5 février 2026",
    'fact.silvaNext': "Test sur les toits de Rouen Normandie Création",
    'fact.jpPeriod': 'Oct. 2025 – Avr. 2026',
    'fact.jpRole': 'Apporteur de compétences',

    'jp.photo': 'Soirée de clôture des Jeunes Pousses, avril 2026',
    'jp.s1.date': 'Octobre – novembre 2025',
    'jp.s1.title': 'Soirées de lancement à Rouen et Évreux',
    'jp.s2.date': 'Novembre 2025 – mars 2026',
    'jp.s2.title': 'Neuf ateliers de formation',
    'jp.s3.date': 'Avril 2026',
    'jp.s3.title': 'Soirée de clôture, pitch et remises de prix',
    'ws.1': 'Formaliser mon projet',
    'ws.2': 'Proposition de valeur',
    'ws.3': 'Offre commerciale',
    'ws.4': 'Étudier mon marché',
    'ws.5': 'Choisir mon statut juridique',
    'ws.6': 'Financer mon projet',
    'ws.7': 'Gouvernance et partenariats',
    'ws.8': 'Marketing et communication',
    'ws.9': 'Pitcher et vendre mon projet',
    'jp.doc1': 'Dossier final, co-rédigé avec Léa Portmann',
    'jp.doc2': "Calendrier officiel du programme, Maison de l'Entrepreneuriat",

    /* ── Chronology & deck ── */
    'chrono.hint': "Cliquez sur une période de la frise ou faites défiler les cartes.",
    'chrono.exp': 'Expériences',
    'chrono.proj': 'Projets',
    'chrono.edu': 'Formation',
    'chrono.today': "Aujourd'hui",
    'bar.snee': 'SNEE · Pépite Normandie',
    'bar.boc': 'Boc Lab',
    'bar.intl': 'Accueil des étudiants internationaux',
    'bar.amb': 'Ambassadeur Entrepreneuriat',
    'bar.naillies': 'Naillies · Jeunes Pousses',
    'bar.silva': 'Silva Edita',
    'bar.dl': "Maths-éco, puis économie",
    'bar.l3': 'L3 Gestion · IAE Rouen',
    'deck.hint': 'Glissez, utilisez les flèches du clavier ou cliquez sur une carte',

    /* @xp-pages */
    'nav.internships': "Stages &amp; expériences",
    'nav.jobs': "Jobs étudiants",
    'nav.allprojects': "Tous les projets",
    'nav.course': "Mon parcours",
    'nav.skills2': "Compétences &amp; langues",
    'exJ.text': "Trois jobs en parallèle de mes études depuis août 2025, dont un CDI.",
    'jc.title': "Responsable développement commercial",
    'jc.meta': "Sept. 2026 – Aujourd’hui · Rouen · Équipe fondatrice",
    'jc.p1': "On est en train de créer la Junior Entreprise de l'IAE Rouen. Je fais partie des membres fondateurs et je m'occupe du développement commercial.",
    'jc.b1': "Chercher nos premiers clients",
    'jc.b2': "Trouver les étudiants qui réaliseront les missions",
    'jc.b3': "Réseauter pendant des événements professionnels",
    'jc.b4': "Créer le site internet",
    'jc.goal': "Objectif : une structure opérationnelle en décembre 2026.",
    'bar.jc': "IAE Rouen Junior Conseil",
    'job.badge': "En parallèle des études",
    'job.title': "Jobs étudiants",
    'job.meta': "Depuis août 2025 · Rouen et alentours",
    'job.p1': "Trois jobs en parallèle de mes études, dont un CDI.",
    'job.t1': "Agent d'entretien chez Propreté Hygiène + (CDD saisonniers) : août 2025, février 2026 et août 2026",
    'job.t2': "Préparateur de commandes drive chez E.Leclerc Bois-Guillaume, en CDI (9 h/semaine) depuis septembre 2026",
    'job.t3': "Étudiant vacataire à l'Université de Rouen (Espace Monde), en septembre 2026",
    'xp6.d1': "Une journée de formation au logiciel Saphire en juillet 2026",
    'xp6.d2': "Accueillir les étudiants au guichet",
    'xp6.d3': "Les aider à constituer leur dossier d'inscription administrative",
    'xp6.d4': "Créer les dossiers, en papier et en numérique",
    'xp6.d5': "Vérifier les dossiers",
    'sk.intercultural': "Communication interculturelle",
    'sk.english': "Anglais professionnel",
    'sk.listening': "Écoute active",
    'sk.flow': "Gestion de flux",
    'sk.admin': "Démarches administratives",
    'nc.badge': "Stage d'observation",
    'nc.title': "Stagiaire en observation",
    'nc.meta': "Oct. 2026 · Rouen",
    'nc.p1': "Un stage court pour voir de l'intérieur comment fonctionne une structure d'accompagnement des entreprises.",
    'nc.t1': "Découvrir l'accompagnement des entreprises et des entrepreneur·ses",
    'nc.t2': "Observer les missions de gestion, de développement et de soutien à la création d'entreprise",
    'bar.nc': "Normandie Création",
    'tl.now': "En cours",
    'tl.next': "À venir",
    'tl.past': "Terminé",
    'cal.work': "Mois travaillé",
    'cal.train': "Formation",
    'cal.today': "Mois en cours",
    'chrono.mark': "Jalon",
    'chrono.work': "Stage &amp; missions",
    'chrono.jobs': "Jobs étudiants",
    'chrono.commit': "Engagements",
    'bar.ph': "PH+",
    'bar.leclerc': "Leclerc",
    'bar.univ': "Espace Monde",
    'bar.job': "Jobs étudiants",
    'tl.hintExp': "Cliquez sur une étape pour voir l'expérience en détail juste en dessous.",
    'tl.e1d': "Juil. 2025 →",
    'tl.e1t': "Étudiant-entrepreneur",
    'tl.e2d': "Juin – juil. 2026",
    'tl.e2t': "Stage · Boc Lab",
    'tl.e2s': "Assistant de direction, 2 mois",
    'tl.e3d': "Sept. 2026 →",
    'tl.e3t': "Ambassadeur Entrepreneuriat",
    'tl.e4d': "Sept. 2026 →",
    'tl.e4s': "Développement commercial, équipe fondatrice",
    'tl.e5d': "Oct. 2026",
    'tl.e5t': "Stage d'observation",
    'tl.e6d': "Mars 2027",
    'tl.e6t': "Mon prochain stage",
    'tl.e6s': "3 à 6 mois, ce que je cherche",
    'chrono.project': "Projet",
    'chrono.step': "Étape du programme",
    'tl.hintProj': "Chaque projet, étape par étape. Cliquez sur une étape pour ouvrir le projet.",
    'tl.n1d': "Oct. – nov. 2025",
    'tl.n1t': "Soirées de lancement",
    'tl.n1s': "Rouen et Évreux",
    'tl.n2d': "Nov. 2025 – mars 2026",
    'tl.n2t': "Neuf ateliers",
    'tl.n2s': "Marché, offre, financement, pitch",
    'tl.n3d': "9 avril 2026",
    'tl.n3t': "Soirée de clôture",
    'tl.n3s': "Pitch final et remise des prix",
    'tl.s1d': "Janv. 2026",
    'tl.s1t': "L'idée",
    'tl.s1s': "Végétaliser les toits de Rouen",
    'tl.s2d': "5 févr. 2026",
    'tl.s2t': "Lauréat Proj'Impact",
    'tl.s2s': "Pitch devant le jury",
    'tl.s3d': "2026",
    'tl.s3t': "Rencontres avec les acteurs locaux",
    'tl.s3s': "Campus, puis pépinières",
    'tl.s4d': "Prochaine étape",
    'tl.s4t': "Test sur les toits",
    'bac.badge': "Mention Bien",
    'bac.title': "Baccalauréat général",
    'bac.meta': "Obtenu en 2024",
    'bac.p1': "Spécialités : mathématiques et sciences économiques et sociales.",
    'skills.g5': "Langues",
    'lang.fr': "Français",
    'lang.frL': "Langue maternelle",
    'lang.en': "Anglais",
    'lang.enNote': "TOEIC en janvier 2027",
    'lang.de': "Allemand",
    'lang.ja': "Japonais",
    'skills.g6': "Outils",
    'tool.office': "Pack Office",
    'tool.ai': "Prompt et usage de l'IA",
    'tool.web': "Création de sites web",
    'chrono.studies': "Études",
    'chrono.milestones': "Jalons",
    'tl.hintEdu': "Cliquez sur une étape pour voir la formation en dessous.",
    'tl.d1t': "Bac mention Bien",
    'tl.d2t': "L1 maths-éco",
    'tl.d2s': "Double licence, Université de Rouen",
    'tl.d3t': "L2 économie",
    'tl.d3s': "Université de Rouen",
    'tl.d4t': "L3 Gestion",
    'tl.d5d': "Janv. 2027",
    'tl.d5s': "Anglais, niveau B2 actuel",
    'xp.context': "Le contexte",
    'xp.did': "Ce que j'ai fait",
    'xp.takeaway': "Ce que j'en retiens",
    'xp.related': "Pour aller plus loin",
    'xp.details': "Voir le détail",
    'xp.skills': "Compétences travaillées",
    'fact.org': "Structure",
    'fact.place': "Lieu",
    'fact.type': "Type",
    'common.nextXp': "Expérience suivante",
    'xp1.eyebrow': "Expérience · Statut",
    'xp1.lead': "Depuis juillet 2025, j'ai le statut national d'étudiant-entrepreneur. C'est ce qui me permet de mener des projets en parallèle de ma licence.",
    'xp1.f1': "Juil. 2025 – Aujourd’hui",
    'xp1.f3': "Rouen · Hybride",
    'xp1.f4': "Statut",
    'xp1.ctx': "Le SNEE est un statut national pour les étudiants qui veulent monter un projet d'entreprise pendant leurs études. En Normandie, il passe par Pépite Normandie. Je l'ai obtenu en juillet 2025.",
    'xp1.d1': "Silva Edita : un projet de toitures végétalisées, lauréat de Proj'Impact 2026.",
    'xp1.d2': "Naillies : six mois avec Léa Portmann dans Les Jeunes Pousses, à construire un business plan dans la beauté.",
    'xp1.d3': "Des études de marché, des offres, des business plans et des pitchs au fil des projets.",
    'xp1.take': "C'est ce statut qui m'a orienté vers le business development et le développement commercial, avec un vrai intérêt pour l'entrepreneuriat responsable.",
    'xp2.eyebrow': "Expérience · Stage",
    'xp2.lead': "Deux mois aux côtés du dirigeant de Boc Lab, pour aider à créer Magic Lab, une école de magie à Rouen.",
    'xp2.f1': "Juin – juil. 2026 · 2 mois",
    'xp2.f3': "Rouen · Hybride",
    'xp2.f4': "Stage",
    'xp2.ctx': "Boc Lab est à l'origine de Magic Lab, une école de magie à Rouen pour les enfants et les ados de 6 à 17 ans. Mon stage portait sur le passage de l'idée au lancement de l'école, en direct avec le dirigeant.",
    'xp2.d1': "Étude de marché et vérification de l'opportunité",
    'xp2.d2': "Budget prévisionnel et modèle économique",
    'xp2.d3': "Veille réglementaire, notamment les règles ERP (établissement recevant du public)",
    'xp2.d4': "Coordination des différents intervenants",
    'xp2.d5': "Réflexion sur l'expérience client",
    'xp2.d6': "Conception et développement du site de présentation de l'école",
    'xp2.take': "C'est là que j'ai vu de près ce que demande vraiment le lancement d'une activité : les chiffres, les règles et les gens à coordonner.",
    'xp2.site': "Le site que j'ai réalisé",
    'xp6.eyebrow': "Expérience · Job étudiant",
    'xp6.lead': "En parallèle de ma licence, je suis étudiant vacataire à l'Université de Rouen Normandie. À la rentrée 2026, j'étais à l'Espace Monde, le guichet d'accueil des étudiants internationaux.",
    'xp6.f1': "Juil. – sept. 2026",
    'fact.status': "Statut",
    'xp6.f3': "Étudiant vacataire",
    'fact.volume': "Étudiants accueillis",
    'xp6.ctx': "L'Espace Monde, c'est le guichet d'accueil des étudiants internationaux de l'Université de Rouen. Ceux qui arrivent via Campus France, hors programme d'échange, y passent pour s'inscrire, faire leurs démarches et s'installer, et la plupart arrivent pendant les mêmes semaines de septembre.",
    'xp6.take': "Sur ce poste, il faut travailler sa communication, être patient et avoir vraiment envie d'aider.",
    'xp4.eyebrow': "Expérience · En cours",
    'xp4.lead': "Depuis septembre 2026, je représente la Maison de l'Entrepreneuriat de l'Université de Rouen auprès des étudiants.",
    'xp4.f1': "Sept. 2026 – Aujourd’hui",
    'xp4.f3': "Rouen · Hybride",
    'xp4.f4': "Contrat",
    'xp4.ctx': "La Maison de l'Entrepreneuriat aide les étudiants qui veulent se lancer : accompagnement individuel, formations thématiques, événements réseau. C'est aussi elle qui organise Les Jeunes Pousses, le programme que j'ai suivi avec Naillies.",
    'xp4.take': "Comme j'ai moi-même suivi Les Jeunes Pousses, je peux en parler aux étudiants en connaissance de cause.",
    'xp5.eyebrow': "Expérience · En création",
    'xp5.lead': "Je fais partie des membres fondateurs d'IAE Rouen Junior Conseil, la Junior Entreprise qu'on crée à l'IAE Rouen Normandie. Je m'occupe du développement commercial.",
    'xp5.f1': "Sept. 2026 – Aujourd’hui",
    'xp5.f4': "Équipe fondatrice",
    'xp5.ctx': "Une Junior Entreprise est une association étudiante qui réalise des missions de conseil pour des entreprises, menées par des étudiants. On monte celle de l'IAE Rouen, avec l'objectif d'être opérationnels en décembre 2026.",
    'xp5.d5': "Structuration de l'association et démarches administratives",
    'xp5.take': "Trop tôt pour en tirer un bilan : je mettrai cette page à jour dès les premières missions signées.",
    'xp5.site': "Le site que j'ai réalisé",
    'xp7.eyebrow': "Expérience · Stage d'observation",
    'xp7.lead': "En octobre 2026, j'ai fait un stage d'observation chez Normandie Création, pour voir comment on accompagne les entreprises et les entrepreneur·ses dans la Métropole de Rouen.",
    'xp7.f1': "Oct. 2026",
    'xp7.f4': "Stage d'observation",
    'xp7.ctx': "Normandie Création accompagne les créateurs et les entreprises de la Métropole Rouen Normandie. C'est aussi sur les toits de ses pépinières que Silva Edita espère mener son expérimentation.",
    'jobs.f1': "Depuis août 2025",
    'fact.employers': "Employeurs",
    'fact.contracts': "Contrats",
    'jobs.f3': "CDD saisonniers, CDI, vacation",
    'fact.when': "Quand",
    'jobs.f4': "En parallèle de mes études",
    'jobs.eyebrow': "En parallèle des études",
    'jobs.lead': "Je travaille en parallèle de mes études : trois jobs depuis août 2025, dont un CDI.",
    'cal.hint': "Une case = un mois. Cliquez sur un job pour le voir en dessous.",
    'cal.ph': "Agent d'entretien",
    'cal.phs': "PH+ · CDD saisonniers",
    'cal.lec': "Préparateur drive",
    'cal.lecs': "E.Leclerc · CDI 9 h/sem.",
    'cal.univ': "Étudiant vacataire",
    'cal.univs': "Espace Monde · Univ. de Rouen",
    'jobs.ph.badge': "CDD saisonniers",
    'jobs.ph.title': "Agent d'entretien",
    'jobs.ph.meta': "Août 2025 · févr. 2026 · août 2026",
    'jobs.ph.text': "Trois périodes chez le même employeur, qui m'a repris à chaque fois.",
    'jobs.ph.t1': "Entretien et nettoyage des locaux selon les protocoles",
    'jobs.ph.t2': "Utilisation adaptée du matériel et des produits",
    'jobs.ph.t3': "Respect des règles d'hygiène, de sécurité et de qualité",
    'jobs.ph.t4': "Organisation autonome du travail",
    'jobs.lec.badge': "CDI · 9 h/semaine",
    'jobs.lec.title': "Préparateur de commandes drive",
    'jobs.lec.meta': "Depuis sept. 2026",
    'jobs.lec.text': "Neuf heures par semaine en CDI, en parallèle de ma L3.",
    'jobs.lec.t1': "Préparation des commandes clients et collecte des articles",
    'jobs.lec.t2': "Contrôle des produits et des quantités",
    'jobs.lec.t3': "Respect des procédures, des délais et de la qualité",
    'jobs.lec.t4': "Travail en équipe",
    'jobs.univ.badge': "Vacation",
    'jobs.univ.title': "Étudiant vacataire",
    'jobs.univ.meta': "Sept. 2026",
    'jobs.univ.text': "Tout le mois de septembre, pour la rentrée. J'ai aidé <strong>527 étudiants internationaux</strong> à s'inscrire.",
    'jobs.more': "Plus de détails",
    'xp6.d6': "Informer et orienter les étudiants dans leurs démarches",
    'jobs.zoom': "Zoom sur l'Espace Monde"
    /* @xp-pages-end */
  };


  /* ───────── i18n engine ───────── */
  var nodes = document.querySelectorAll('[data-i18n]');
  var EN = {};
  nodes.forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (!(key in EN)) EN[key] = el.innerHTML;
  });
  var metaDesc = document.querySelector('meta[name="description"]');
  var EN_META = { title: document.title, desc: metaDesc ? metaDesc.getAttribute('content') : '' };
  var PAGE_FR = {
    home: ['Naël Imberti · Business Developer en formation', FR['meta.description']],
    experience: ['Expériences · Naël Imberti'],
    projects: ['Projets · Naël Imberti'],
    education: ['Formation &amp; compétences · Naël Imberti']
  };

  var STORAGE_KEY = 'ni-lang';
  var lang = 'en';
  function store(v) { try { localStorage.setItem(STORAGE_KEY, v); } catch (e) { /* storage unavailable */ } }
  function stored() { try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; } }
  function t(key) { return (lang === 'fr' && FR[key] != null) ? FR[key] : EN[key]; }

  function applyLang(next, persist) {
    lang = next;
    var dict = lang === 'fr' ? FR : EN;
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var value = dict[key] != null ? dict[key] : EN[key];
      if (value != null && el.innerHTML !== value) el.innerHTML = value;
    });
    var page = document.body.getAttribute('data-page');
    var fr = PAGE_FR[page];
    if (lang === 'fr' && fr) {
      var tmp = document.createElement('textarea'); tmp.innerHTML = fr[0]; document.title = tmp.value;
      if (fr[1] && metaDesc) metaDesc.setAttribute('content', fr[1]);
    } else {
      document.title = EN_META.title;
      if (metaDesc) metaDesc.setAttribute('content', EN_META.desc);
    }
    root.lang = lang;
    document.querySelectorAll('.lang__btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
    if (persist) {
      store(lang);
      var url = new URL(window.location.href);
      if (lang === 'fr') url.searchParams.set('lang', 'fr'); else url.searchParams.delete('lang');
      history.replaceState(null, '', url.pathname + url.search + url.hash);
    }
    resplitAll();
    document.dispatchEvent(new Event('ni:lang'));
  }

  /* ───────── Curtain (page transitions) ───────── */
  var body = document.body;
  var curtainLabel = document.querySelector('.curtain__label');
  var LABELS = { 'index': 'nav.home', '': 'nav.home', 'experience': 'nav.experience', 'projects': 'nav.projects', 'education': 'nav.eduskills',
    'snee': 'bar.snee', 'boc-lab': 'bar.boc', 'student-job': 'bar.job', 'international-students': 'bar.job', 'ambassador': 'bar.amb', 'junior-conseil': 'bar.jc', 'normandie-creation': 'bar.nc', 'jobs': 'nav.jobs' };
  var LITERAL = { 'silva-edita': 'Silva Edita', 'jeunes-pousses': 'Naillies' };

  function labelFor(url) {
    var file = url.pathname.split('/').pop().replace(/\.html$/, '');
    if (LITERAL[file]) return LITERAL[file];
    var key = LABELS[file];
    return key ? t(key) : '';
  }
  function setLabel(text) {
    if (!curtainLabel) return;
    var tmp = document.createElement('textarea'); tmp.innerHTML = text || ''; curtainLabel.textContent = tmp.value;
  }
  function session(k, v) {
    try { if (v === undefined) return sessionStorage.getItem(k); sessionStorage.setItem(k, v); } catch (e) { return null; }
  }

  // Entry: the curtain lifts by CSS alone; JS only shows the label and settles the final state
  var carried = session('ni-curtain');
  session('ni-curtain', '');
  setLabel(carried || labelFor(location));
  function settle() { body.classList.add('curtain-done'); }
  var curtainMain = document.querySelector('.curtain__gold');
  if (curtainMain) curtainMain.addEventListener('animationend', settle, { once: true });
  setTimeout(settle, 2200);

  function isInternal(a) {
    var href = a.getAttribute('href');
    if (!href || a.target === '_blank' || a.hasAttribute('download')) return null;
    if (href.charAt(0) === '#' || /^(mailto|tel):/.test(href)) return null;
    try {
      var url = new URL(href, location.href);
      if (url.origin !== location.origin) return null;
      if (url.pathname === location.pathname && url.hash) return null;
      return url;
    } catch (e) { return null; }
  }

  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var url = isInternal(a);
    if (!url) return;
    if (lang === 'fr') url.searchParams.set('lang', 'fr'); else url.searchParams.delete('lang');
    if (reduce) { if (lang === 'fr') { e.preventDefault(); location.href = url.href; } return; }
    e.preventDefault();
    closeMenu();
    var label = labelFor(url);
    setLabel(label);
    session('ni-curtain', label);
    body.classList.add('curtain-done', 'is-leaving');
    setTimeout(function () { location.href = url.href; }, 760);
  });
  // Back/forward cache: reopen the page
  window.addEventListener('pageshow', function (e) { if (e.persisted) body.classList.remove('is-leaving'); });

  /* ───────── Language toggle (with curtain) ───────── */
  document.querySelectorAll('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var next = b.getAttribute('data-lang');
      if (next === lang) return;
      if (reduce) { applyLang(next, true); return; }
      setLabel(next === 'fr' ? 'Français' : 'English');
      body.classList.add('curtain-done', 'is-leaving');
      setTimeout(function () {
        applyLang(next, true);
        body.classList.remove('is-leaving');
      }, 820);
    });
  });

  /* ───────── Header: scroll state, mobile menu ───────── */
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

  // Dropdown menus: open on hover/focus (CSS), and with the chevron button for touch and keyboard
  var subs = nav.querySelectorAll('.has-sub');
  function closeSubs(except) {
    subs.forEach(function (it) {
      if (it === except) return;
      it.classList.remove('is-open');
      it.querySelector('.nav__toggle').setAttribute('aria-expanded', 'false');
    });
  }
  subs.forEach(function (it) {
    var t = it.querySelector('.nav__toggle');
    t.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = !it.classList.contains('is-open');
      closeSubs(it);
      it.classList.toggle('is-open', open);
      t.setAttribute('aria-expanded', String(open));
    });
  });
  document.addEventListener('click', function (e) { if (!e.target.closest || !e.target.closest('.has-sub')) closeSubs(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { closeMenu(); closeSubs(); } });

  /* ───────── Titles revealed line by line (masked) ───────── */
  var splitEls = reduce ? [] : Array.prototype.slice.call(document.querySelectorAll('.section__head .title, .cta__title'));
  function escapeHtml(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function splitLines(el) {
    var source = el._src != null ? el._src : el.innerHTML;
    el._src = source;
    el.innerHTML = source;
    var tokens = [];
    (function walk(node, cls) {
      node.childNodes.forEach(function (n) {
        if (n.nodeType === 3) {
          n.textContent.split(/(\s+)/).forEach(function (p) {
            if (p === '') return;
            if (/^\s+$/.test(p)) tokens.push({ space: true }); else tokens.push({ text: p, cls: cls });
          });
        } else if (n.nodeType === 1) {
          if (n.tagName === 'BR') tokens.push({ br: true }); else walk(n, n.getAttribute('class') || cls);
        }
      });
    })(el, '');
    el.innerHTML = tokens.map(function (tk) {
      return tk.br ? '<br>' : tk.space ? ' ' : '<span class="w" data-cls="' + (tk.cls || '') + '">' + escapeHtml(tk.text) + '</span>';
    }).join('');
    var words = el.querySelectorAll('.w'), lines = [], cur = null, lastTop = null;
    words.forEach(function (w) {
      var top = w.offsetTop;
      if (lastTop === null || Math.abs(top - lastTop) > 3) { cur = []; lines.push(cur); lastTop = top; }
      cur.push(w);
    });
    el.innerHTML = lines.map(function (line, li) {
      var html = '', i = 0;
      while (i < line.length) {
        var cls = line[i].getAttribute('data-cls'), seg = [], j = i;
        while (j < line.length && line[j].getAttribute('data-cls') === cls) { seg.push(line[j].textContent); j++; }
        var txt = escapeHtml(seg.join(' '));
        html += cls ? '<span class="' + cls + '">' + txt + '</span>' : txt;
        if (j < line.length) html += ' ';
        i = j;
      }
      return '<span class="rl"><span class="ri" style="--d:' + (li * 0.09).toFixed(2) + 's">' + html + '</span></span>';
    }).join('');
    el.classList.add('is-split');
  }
  function resplitAll() {
    splitEls.forEach(function (el) {
      el._src = null; // the i18n engine has just written fresh source HTML
      var wasIn = el.classList.contains('split-in');
      splitLines(el);
      if (wasIn) el.classList.add('split-in');
    });
  }

  /* ───────── Reveals, cascades, clip reveals, counters ───────── */
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

  function startObservers() {
    var watched = document.querySelectorAll('.reveal, [data-stagger], .reveal-media');
    if (!('IntersectionObserver' in window) || reduce) {
      watched.forEach(function (el) { el.classList.add('is-visible'); });
      splitEls.forEach(function (el) { el.classList.add('split-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        entry.target.querySelectorAll('[data-count]').forEach(countUp);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    watched.forEach(function (el) { io.observe(el); });

    var splitIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('split-in'); splitIO.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px' });
    splitEls.forEach(function (el) { splitIO.observe(el); });
  }

  // Language first (so titles are split in the right language), then animations
  var param = new URLSearchParams(window.location.search).get('lang');
  // No explicit choice yet: follow the browser (French browsers get the French version)
  function browserLang() {
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || ''];
    return /^fr\b/i.test(list[0] || '') ? 'fr' : null;
  }
  var initial = param === 'fr' || param === 'en' ? param : (stored() || browserLang());
  var ready = document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve();
  if (initial === 'fr') applyLang('fr', false);
  ready.then(function () { if (splitEls.length) splitEls.forEach(splitLines); startObservers(); });

  var rz;
  window.addEventListener('resize', function () {
    clearTimeout(rz);
    rz = setTimeout(function () {
      splitEls.forEach(function (el) {
        var wasIn = el.classList.contains('split-in');
        splitLines(el);
        if (wasIn) el.classList.add('split-in');
      });
    }, 200);
  });

  /* ───────── Magnetic buttons (fine pointer) ───────── */
  if (finePointer && !reduce) {
    document.querySelectorAll('.btn, .next__arrow').forEach(function (el) {
      var strength = el.classList.contains('next__arrow') ? .3 : .2;
      el.setAttribute('data-magnetic', '');
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var mx = e.clientX - (r.left + r.width / 2), my = e.clientY - (r.top + r.height / 2);
        el.style.transition = 'transform .18s cubic-bezier(.16,1,.3,1)';
        el.style.transform = 'translate(' + (mx * strength).toFixed(1) + 'px,' + (my * strength).toFixed(1) + 'px)';
      });
      el.addEventListener('pointerleave', function () {
        el.style.transition = 'transform .55s cubic-bezier(.34,1.56,.64,1)';
        el.style.transform = '';
      });
    });
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

  /* ───────── Chronology (Experience page) ─────────
     Bars are placed on a real time axis from their data-start / data-end
     (YYYY-MM, end month included, "now" = today). */
  function monthIndex(v, now) {
    if (v === 'now') return now.getFullYear() * 12 + now.getMonth() + now.getDate() / 31;
    var p = v.split('-');
    var m = parseInt(p[0], 10) * 12 + parseInt(p[1], 10) - 1;
    return p[2] ? m + (parseInt(p[2], 10) - 1) / 31 : m;
  }
  var chronoGrid = document.querySelector('.chrono__grid');
  if (chronoGrid) {
    var now = new Date();
    var from = monthIndex(chronoGrid.getAttribute('data-from'), now);
    var to = monthIndex(chronoGrid.getAttribute('data-to'), now) + 1;
    var span = to - from;
    var pct = function (m) { return Math.max(0, Math.min(100, (m - from) / span * 100)); };
    chronoGrid.querySelectorAll('.chrono__bar').forEach(function (b) {
      var endRaw = b.getAttribute('data-end');
      var s = monthIndex(b.getAttribute('data-start'), now);
      var e = endRaw === 'now' ? monthIndex('now', now) : monthIndex(endRaw, now) + 1;
      b.style.setProperty('--s', pct(s) + '%');
      b.style.setProperty('--w', (pct(e) - pct(s)) + '%');
      b.style.setProperty('--r', b.getAttribute('data-row') || 1);
      if (endRaw === 'now') b.classList.add('is-ongoing');
    });
    // Milestones (diamonds) placed on the same axis
    chronoGrid.querySelectorAll('.chrono__mark').forEach(function (m) {
      m.style.setProperty('--s', pct(monthIndex(m.getAttribute('data-date'), now)) + '%');
      m.style.setProperty('--r', m.getAttribute('data-row') || 1);
    });
    // Bars pointing at a block of the page (not a deck card): scroll to it and highlight it
    chronoGrid.querySelectorAll('.chrono__bar[data-target]').forEach(function (b) {
      var target = document.getElementById(b.getAttribute('data-target'));
      if (!target || target.hasAttribute('data-deck-card')) return;
      b.addEventListener('click', function () {
        chronoGrid.querySelectorAll('.chrono__bar').forEach(function (x) { x.classList.toggle('is-active', x === b); });
        target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
        target.classList.remove('is-flash'); void target.offsetWidth; target.classList.add('is-flash');
      });
    });
    var years = chronoGrid.querySelector('.chrono__years');
    for (var y = Math.ceil(from / 12); y * 12 < to; y++) {
      var tick = document.createElement('div');
      tick.className = 'chrono__tick';
      tick.style.setProperty('--x', pct(y * 12) + '%');
      tick.innerHTML = '<span>' + y + '</span>';
      years.appendChild(tick);
    }
    var today = chronoGrid.querySelector('.chrono__today');
    if (today) today.style.setProperty('--t', pct(monthIndex('now', now)) / 100);
    // Short bars get their full name in a label (hover / selected)
    function labelBars() {
      chronoGrid.querySelectorAll('.chrono__bar').forEach(function (b) {
        var sp = b.querySelector('span');
        b.classList.remove('is-short');
        if (b.offsetWidth < 64) b.classList.add('is-short');
        b.setAttribute('data-label', sp.textContent);
        b.classList.toggle('is-truncated', sp.scrollWidth > sp.clientWidth + 1);
        b.classList.toggle('is-right', b.offsetLeft + b.offsetWidth / 2 > b.parentElement.clientWidth * .6);
      });
      chronoGrid.querySelectorAll('.chrono__mark').forEach(function (m) {
        m.classList.toggle('is-right', m.offsetLeft + m.offsetWidth > m.parentElement.clientWidth);
      });
    }
    labelBars();
    window.addEventListener('resize', labelBars, { passive: true });
    document.addEventListener('ni:lang', labelBars);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(labelBars);
    // On narrow screens, start the scrollable timeline around today
    var scroller = chronoGrid.parentElement;
    if (scroller.scrollWidth > scroller.clientWidth) scroller.scrollLeft = (scroller.scrollWidth - scroller.clientWidth) * .75;
  }


  /* ───────── Paths (timelines): a stop pointing at a block of the page ───────── */
  document.querySelectorAll('.tl__btn[data-target], .cal__name[data-target]').forEach(function (b) {
    var target = document.getElementById(b.getAttribute('data-target'));
    if (!target || target.hasAttribute('data-deck-card')) return;
    b.addEventListener('click', function () {
      var scope = b.closest('.tl-wrap');
      if (scope) scope.querySelectorAll('[data-target]').forEach(function (x) { x.classList.toggle('is-active', x === b); });
      target.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      target.classList.remove('is-flash'); void target.offsetWidth; target.classList.add('is-flash');
    });
  });

  /* ───────── Month calendar (student jobs) ─────────
     Columns run from data-from to the current month; rows read data-periods:
     '2025-08' (one month), '2026-09..now' (until today), '2026-07:train' (training). */
  var cal = document.querySelector('.cal');
  function buildCalendar() {
    if (!cal) return;
    var now = new Date(), nowIdx = now.getFullYear() * 12 + now.getMonth();
    var f = cal.getAttribute('data-from').split('-'), start = parseInt(f[0], 10) * 12 + parseInt(f[1], 10) - 1;
    var n = Math.max(1, nowIdx - start + 1);
    var fmt = new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { month: 'short' });
    var full = new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-GB', { month: 'long', year: 'numeric' });
    function dateOf(i) { return new Date(Math.floor(i / 12), i % 12, 1); }
    cal.style.setProperty('--m', n);
    var head = cal.querySelector('[data-head]'), h = '';
    for (var i = 0; i < n; i++) {
      var idx = start + i, d = dateOf(idx), first = i === 0 || idx % 12 === 0;
      h += '<span class="cal__m' + (idx === nowIdx ? ' is-today' : '') + (first ? ' is-year' : '') + '">' +
        (first ? '<b>' + d.getFullYear() + '</b>' : '<b>&nbsp;</b>') + fmt.format(d).replace('.', '') + '</span>';
    }
    head.innerHTML = h;
    cal.querySelectorAll('.cal__row[data-periods]').forEach(function (row) {
      var marks = {};
      row.getAttribute('data-periods').split(',').forEach(function (part) {
        var kind = part.indexOf(':train') > -1 ? 'train' : 'work';
        part = part.replace(':train', '');
        var ends = part.split('..'), a = ends[0].split('-'), from = parseInt(a[0], 10) * 12 + parseInt(a[1], 10) - 1, to = from;
        if (ends[1]) { if (ends[1] === 'now') to = nowIdx; else { var b = ends[1].split('-'); to = parseInt(b[0], 10) * 12 + parseInt(b[1], 10) - 1; } }
        for (var k = from; k <= to; k++) marks[k] = kind;
      });
      var cells = '';
      for (var i = 0; i < n; i++) {
        var idx = start + i, kind = marks[idx];
        var label = full.format(dateOf(idx)) + (kind === 'train' ? ' · ' + t('cal.train') : '');
        cells += '<span class="cal__cell' + (kind ? ' is-' + kind : '') + (idx === nowIdx ? ' is-today' : '') + '"' +
          (kind ? ' title="' + label + '"' : '') + '></span>';
      }
      row.querySelector('.cal__months').innerHTML = cells;
    });
  }
  buildCalendar();
  document.addEventListener('ni:lang', buildCalendar);
  // On narrow screens the calendar scrolls: open it on the most recent months
  if (cal) { var calScroll = cal.parentElement; calScroll.scrollLeft = calScroll.scrollWidth; }

  /* ───────── 3D card deck ───────── */
  var deck = document.querySelector('[data-deck]');
  if (deck) {
    var stage = deck.querySelector('.deck__stage');
    var cards = Array.prototype.slice.call(stage.querySelectorAll('[data-deck-card]'));
    var count = deck.querySelector('.deck__count');
    var bars = document.querySelectorAll('.chrono__bar[data-target], .tl__btn[data-target]');
    var active = cards.length - 1; // most recent first
    deck.classList.add('deck--3d');

    function measure() {
      var h = 0;
      cards.forEach(function (c) { h = Math.max(h, c.offsetHeight); });
      stage.style.setProperty('--deck-h', (h + 24) + 'px');
    }
    function render() {
      cards.forEach(function (c, i) {
        var d = i - active, ad = Math.abs(d);
        c.style.setProperty('--d', d);
        c.style.setProperty('--ad', ad);
        c.classList.toggle('is-active', d === 0);
        c.classList.toggle('is-far', ad > 2);
        c.setAttribute('aria-hidden', String(d !== 0));
        c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg');
      });
      bars.forEach(function (b) { b.classList.toggle('is-active', b.getAttribute('data-target') === cards[active].id); });
      if (count) count.innerHTML = '<b>' + String(active + 1).padStart(2, '0') + '</b> / ' + String(cards.length).padStart(2, '0');
    }
    function go(i) { active = (i + cards.length) % cards.length; render(); }

    deck.querySelectorAll('.deck__btn').forEach(function (b) {
      b.addEventListener('click', function () { go(active + parseInt(b.getAttribute('data-dir'), 10)); });
    });
    cards.forEach(function (c, i) {
      c.addEventListener('click', function () { if (i !== active && !dragged) go(i); });
    });
    bars.forEach(function (b) {
      b.addEventListener('click', function () {
        var i = cards.findIndex(function (c) { return c.id === b.getAttribute('data-target'); });
        if (i < 0) return;
        go(i);
        var r = deck.getBoundingClientRect();
        if (r.top > window.innerHeight * .6 || r.bottom < 0) deck.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
      });
    });
    stage.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight') { go(active + 1); e.preventDefault(); }
      if (e.key === 'ArrowLeft') { go(active - 1); e.preventDefault(); }
    });

    // Drag / swipe
    var startX = null, dragged = false;
    stage.addEventListener('pointerdown', function (e) { startX = e.clientX; dragged = false; });
    window.addEventListener('pointerup', function (e) {
      if (startX === null) return;
      var dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 50) { dragged = true; go(active + (dx < 0 ? 1 : -1)); setTimeout(function () { dragged = false; }, 50); }
    });

    // Tilt of the front card follows the pointer
    if (finePointer && !reduce) {
      stage.addEventListener('pointermove', function (e) {
        var c = cards[active], r = c.getBoundingClientRect();
        if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom || startX !== null) return;
        c.classList.add('is-tilting');
        c.style.setProperty('--ry', (((e.clientX - r.left) / r.width - .5) * 10).toFixed(2) + 'deg');
        c.style.setProperty('--rx', (-((e.clientY - r.top) / r.height - .5) * 8).toFixed(2) + 'deg');
      });
      stage.addEventListener('pointerleave', function () {
        var c = cards[active];
        c.classList.remove('is-tilting');
        c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg');
      });
    }

    measure(); render();
    window.addEventListener('resize', measure, { passive: true });
    document.addEventListener('ni:lang', measure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);
  }

  /* ───────── 3D tilt on cards and visuals (fine pointer) ───────── */
  if (finePointer && !reduce) {
    document.querySelectorAll('.explore__card, .project, .hero__visual, .docs__frame, .case__fig').forEach(function (el) {
      var lift = el.matches('.explore__card, .project') ? -6 : 0;
      var max = el.matches('.hero__visual') ? 10 : 6;
      el.setAttribute('data-tilt', '');
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
        el.style.transition = 'transform .12s linear';
        el.style.transform = 'perspective(1000px) rotateX(' + (-y * max).toFixed(2) + 'deg) rotateY(' + (x * max).toFixed(2) + 'deg) translateY(' + lift + 'px)';
      });
      el.addEventListener('pointerleave', function () {
        el.style.transition = 'transform .7s cubic-bezier(.16,1,.3,1)';
        el.style.transform = '';
      });
    });
  }

  /* ───────── Cursor light on glass surfaces ───────── */
  var GLASS = '.figures__card, .roles, .card, .feature, .skills__group, .explore__card, .project, .facts';
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
