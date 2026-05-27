/* ═══════════════════════════════════════════════════════
   JOSHUA BARRAZA — PORTFOLIO
   app.js · All JavaScript logic
═══════════════════════════════════════════════════════ */

'use strict';

/* ── CONFIG ─────────────────────────────────────────── */
const CONFIG = {
  SHEET_ID:       '1S8WD-5mC3ayTUfMJHcytjov7nEGJxMDVZ4v6D1QyIDg',
  SHEET_NAME:     'videos',
  PROJECTS_SHEET: 'projects',
  PAGE_SIZE:       9,
  COMPANY_LIMIT:   4,
};

/* ── TRANSLATIONS ───────────────────────────────────── */
const I18N = {
  en: {
    navAbout:      'About',
    navSkills:     'Skills',
    navPortfolio:  'Portfolio',
    navProjects:   'Projects',
    navContact:    'Contact',
    navContactBtn: 'Contact Now',
    heroGreeting:  "Hey there. I'm",
    heroLine2:     'Barraza',
    heroDesc:      'I craft high-impact video content for global media brands, build mobile apps with Flutter, and design intuitive digital experiences. Based in Chile, working worldwide.',
    heroBtnMain:   "Let's Connect",
    heroBtnSec:    'View Work',
    heroStatus:    'Available for new projects',
    heroBadgeLabel:'Creative Professional',
    heroBadgeMain: 'Video',
    heroBadgeFaded:'Editor',
    stat1Label:    'Videos',
    stat2Label:    'Years Exp.',
    stat3Label:    'Apps Live',
    stat4Label:    'Brands',
    sectionAboutLabel: 'Who I Am',
    sectionAboutTitle: 'About',
    sectionAboutFaded: 'Me',
    aboutP1: 'I\'m a <strong>creative professional</strong> based in Santiago, Chile, with a unique blend of skills across video editing, mobile development, and UI/UX design.',
    aboutP2: 'I\'ve edited <strong>95+ videos</strong> for Screen Rant and WatchMojo — two of the most recognized names in online entertainment. I also founded <strong>Screen View</strong>, a Spanish-language YouTube channel, and developed <strong>Socio LH</strong>, a Flutter app on Google Play.',
    aboutP3: 'Always looking to work with <strong>ambitious teams</strong> on projects that push creative boundaries.',
    exp1Role:  'Video Editor (Power Creator) · Nov 2024 – Feb 2025',
    exp2Role:  'Freelance Video Editor · ~2022–2023',
    exp3Role:  'Flutter Developer · App on Google Play',
    exp4Role:  'Founder & Editor · 2023 – Present',
    sectionSkillsLabel: 'What I Do',
    sectionSkillsTitle: 'My',
    sectionSkillsFaded: 'Skills',
    skill1: 'Video Editing',
    skill2: 'Mobile Dev',
    skill3: 'Design',
    skill4: 'AI Tools',
    skill5: 'Platforms',
    skill6: 'Languages',
    sectionPortLabel: 'My Work',
    sectionPortTitle: 'Video',
    sectionPortFaded: 'Work',
    filterAll:     'All',
    filterMarvel:  'Marvel',
    filterDC:      'DC',
    filterTV:      'TV',
    filterMovies:  'Movies',
    filterGaming:  'Gaming',
    filterAnime:   'Anime',
    filterComics:  'Comics',
    loadMore:      'Load More',
    sectionProjLabel: 'Dev & Design',
    sectionProjTitle: 'My',
    sectionProjFaded: 'Projects',
    proj1Type:  'Flutter App',
    proj1Title: 'Socio LH',
    proj1Desc:  'Android notification and partner management app built with Flutter, published on Google Play under Sistemas LH.',
    proj2Type:  'YouTube Channel',
    proj2Title: 'Screen View',
    proj2Desc:  'Spanish-language YouTube channel covering film theories, TV news and pop culture for Marvel, DC, Netflix and more.',
    proj3Type:  'Video Production',
    proj3Title: 'Screen Rant · 95+ Videos',
    proj3Desc:  'Professional video editing for one of the world\'s top entertainment platforms covering Marvel, DC, Gaming, TV and more.',
    sectionContactLabel: 'Get In Touch',
    sectionContactTitle: "Let's",
    sectionContactFaded: 'Work',
    contactDesc: 'Open to remote opportunities in video editing, mobile development, and UI/UX design. Based in Santiago, Chile — working with teams worldwide.',
    footerLeft:  '© 2026 Joshua Barraza. All rights reserved.',
    footerRight: 'Santiago, Chile · Available Worldwide',
    loading:     'Loading videos...',
  },
  es: {
    navAbout:      'Sobre mí',
    navSkills:     'Habilidades',
    navPortfolio:  'Portafolio',
    navProjects:   'Proyectos',
    navContact:    'Contacto',
    navContactBtn: 'Contáctame',
    heroGreeting:  'Hola, soy',
    heroLine2:     'Barraza',
    heroDesc:      'Creo contenido de video de alto impacto para marcas globales, desarrollo apps con Flutter y diseño experiencias digitales intuitivas. Basado en Chile, trabajo globalmente.',
    heroBtnMain:   'Conectemos',
    heroBtnSec:    'Ver Trabajo',
    heroStatus:    'Disponible para proyectos',
    heroBadgeLabel:'Profesional Creativo',
    heroBadgeMain: 'Editor',
    heroBadgeFaded:'de Video',
    stat1Label:    'Videos',
    stat2Label:    'Años Exp.',
    stat3Label:    'Apps Publicadas',
    stat4Label:    'Marcas',
    sectionAboutLabel: 'Quién Soy',
    sectionAboutTitle: 'Sobre',
    sectionAboutFaded: 'Mí',
    aboutP1: 'Soy un <strong>profesional creativo</strong> basado en Santiago, Chile, con una combinación única de habilidades en edición de video, desarrollo móvil y diseño UI/UX.',
    aboutP2: 'He editado <strong>más de 95 videos</strong> para Screen Rant y WatchMojo, dos de los nombres más reconocidos del entretenimiento online. Fundé <strong>Screen View</strong>, canal de YouTube en español, y desarrollé <strong>Socio LH</strong>, una app Flutter publicada en Google Play.',
    aboutP3: 'Siempre buscando trabajar con <strong>equipos ambiciosos</strong> en proyectos que empujen los límites creativos.',
    exp1Role:  'Editor de Video (Power Creator) · Nov 2024 – Feb 2025',
    exp2Role:  'Editor de Video Freelance · ~2022–2023',
    exp3Role:  'Desarrollador Flutter · App en Google Play',
    exp4Role:  'Fundador & Editor · 2023 – Presente',
    sectionSkillsLabel: 'Qué Hago',
    sectionSkillsTitle: 'Mis',
    sectionSkillsFaded: 'Habilidades',
    skill1: 'Edición de Video',
    skill2: 'Desarrollo Móvil',
    skill3: 'Diseño',
    skill4: 'Herramientas IA',
    skill5: 'Plataformas',
    skill6: 'Idiomas',
    sectionPortLabel: 'Mi Trabajo',
    sectionPortTitle: 'Trabajo en',
    sectionPortFaded: 'Video',
    filterAll:     'Todos',
    filterMarvel:  'Marvel',
    filterDC:      'DC',
    filterTV:      'TV',
    filterMovies:  'Películas',
    filterGaming:  'Gaming',
    filterAnime:   'Anime',
    filterComics:  'Comics',
    loadMore:      'Ver Más',
    sectionProjLabel: 'Dev & Diseño',
    sectionProjTitle: 'Mis',
    sectionProjFaded: 'Proyectos',
    proj1Type:  'App Flutter',
    proj1Title: 'Socio LH',
    proj1Desc:  'App Android de notificaciones y gestión de socios desarrollada con Flutter, publicada en Google Play bajo Sistemas LH.',
    proj2Type:  'Canal de YouTube',
    proj2Title: 'Screen View',
    proj2Desc:  'Canal de YouTube en español sobre teorías de cine, noticias de TV y análisis de cultura pop para Marvel, DC, Netflix y más.',
    proj3Type:  'Producción de Video',
    proj3Title: 'Screen Rant · 95+ Videos',
    proj3Desc:  'Edición de video profesional para una de las plataformas de entretenimiento más grandes del mundo, cubriendo Marvel, DC, Gaming y TV.',
    sectionContactLabel: 'Contáctame',
    sectionContactTitle: 'Trabajemos',
    sectionContactFaded: 'Juntos',
    contactDesc: 'Disponible para oportunidades remotas en edición de video, desarrollo móvil y diseño UI/UX. Basado en Santiago, Chile — trabajo con equipos de todo el mundo.',
    footerLeft:  '© 2026 Joshua Barraza. Todos los derechos reservados.',
    footerRight: 'Santiago, Chile · Disponible Globalmente',
    loading:     'Cargando videos...',
  }
};

/* ── FALLBACK PROJECT DATA ──────────────────────────── */
const FALLBACK_PROJECTS = [
  {
    title:'Car Wash Gloo', type:'App',
    description:'Notification and partner management app for Android, built with Flutter and published on Google Play.',
    thumbnail:'https://play-lh.googleusercontent.com/n3qmlfxZo8c8CeL10bKylwP2TfbW7vpo0mMoSD3HU8fX964mkkR6btzMIOC5XxtyT8o=w416-h235',
    url:'https://play.google.com/store/apps/details?id=com.sistemaslh.lh_serviteca_app_3',
    tech:'Flutter, Dart, Firebase', featured:'TRUE',
  },
  {
    title:'Socio LH', type:'App',
    description:'Lleva el control de tu consumo de agua y gestiona tus boletas de manera fácil y rápida.',
    thumbnail:'https://play-lh.googleusercontent.com/m9-RhTSmG8pgq974Nk1ZyaZvInL3paJKN6F2dKQjnjLe6PPs4F4ojR3bYlCHfqyU0hq458yplNpD2DinMWFwZA=w416-h235',
    url:'https://play.google.com/store/apps/details?id=com.sistemaslh.lh_notificacion_app',
    tech:'Flutter, Dart, Firebase', featured:'TRUE',
  },
  {
    title:'SSR LH', type:'App',
    description:'App diseñada para tomar lecturas de agua en zonas rurales sin acceso a internet.',
    thumbnail:'https://play-lh.googleusercontent.com/Wyet2q0jb81MKgnaOoyRTQzHToYPbewgULXFh9htZ1cgnnwVAqXHWWYQCXW_rA9sQg=w416-h235',
    url:'https://play.google.com/store/apps/details?id=com.sistemaslh.lh_apr_app_2',
    tech:'Flutter, Dart, Firebase', featured:'TRUE',
  },
];

/* ── FALLBACK VIDEO DATA ────────────────────────────── */
const FALLBACK_VIDEOS = [
  {title:"All Live-Action Superman Movie Costumes, Ranked",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2025/02/brandon-routh-and-henry-cavill-as-superman.jpg",url:"https://screenrant.com/video/superman-live-action-movie-costumes-ranked/",category:"DC",duration:"2:55",featured:"TRUE"},
  {title:"The White Lotus Season 3 Cast & Character Guide",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2025/02/the-cast-of-white-lotus-behind-flowers.jpg",url:"https://screenrant.com/video/the-white-lotus-season-3-cast-character-guide/",category:"TV",duration:"2:44",featured:"TRUE"},
  {title:"Will Grand Theft Auto 6 Actually Release This Year?",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2025/01/grand-theft-auto-6-poster.jpg",url:"https://screenrant.com/video/grand-theft-auto-6-release-date-delay-possibility/",category:"Gaming",duration:"2:59",featured:"TRUE"},
  {title:"5 Best The Far Side Comics Featuring the Military",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2025/01/military-comics-from-the-far-side.jpg",url:"https://screenrant.com/video/best-the-far-side-comics-featuring-the-military/",category:"Comics",duration:"2:31",featured:"FALSE"},
  {title:"Every Marvel Character John Malkovich Could Play In Fantastic Four: First Steps",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2025/01/red-ghost-from-marvel-comics-next-to-john-malkovich.jpg",url:"https://screenrant.com/video/fantastic-four-first-steps-john-malkovich-character-theory/",category:"Marvel",duration:"2:56",featured:"TRUE"},
  {title:"Is Tony Todd in Final Destination: Bloodlines",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2025/01/tony-todd-final-destination-bloodlines.jpg",url:"https://screenrant.com/video/final-destination-bloodlines-tony-todd-appearance/",category:"Movies",duration:"2:47",featured:"FALSE"},
  {title:"What Final Destination: Bloodlines Needs to Do to Succeed After 14 Years",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2025/01/richard-harmon-final-destination-bloodlines.jpg",url:"https://screenrant.com/video/what-final-destination-bloodlines-needs-to-do-to-succeed/",category:"Movies",duration:"3:03",featured:"FALSE"},
  {title:"Every Celebrity Cameo in Prime Video's You're Cordially Invited",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2025/01/nick-jonas-will-ferrell-youre-cordially-invited.jpg",url:"https://screenrant.com/video/youre-cordially-invited-celebrity-cameos-list/",category:"Movies",duration:"2:46",featured:"FALSE"},
  {title:"28 Years Later: Cast, Story, Franchise Future & Everything We Know So Far",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/28-years-later-cast.jpg",url:"https://screenrant.com/video/28-years-later-cast-story-franchise-future-updates/",category:"Movies",duration:"3:05",featured:"TRUE"},
  {title:"Your Friendly Neighborhood Spider-Man: All Marvel Easter Eggs in Episodes 1 & 2",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/spider-man-friendly-neighborhood.jpg",url:"https://screenrant.com/video/your-friendly-neighborhood-spider-man-episode-1-2-easter-eggs/",category:"Marvel",duration:"3:32",featured:"TRUE"},
  {title:"What Ash vs Evil Dead Season 4 Could Have Been About",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/ash-vs-evil-dead-season-4.jpg",url:"https://screenrant.com/video/ash-vs-evil-dead-season-4-plot-theories/",category:"TV",duration:"3:13",featured:"FALSE"},
  {title:"Mythic Quest: Why You Need to Be Watching Rob McElhenney's AppleTV+ Series",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/mythic-quest-ian-poppy.jpg",url:"https://screenrant.com/video/mythic-quest-worth-watching-reasons/",category:"TV",duration:"3:33",featured:"FALSE"},
  {title:"Chicago Fire Season 14 Plot Theory",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/12/chicago-fire-season-14.jpg",url:"https://screenrant.com/video/chicago-fire-season-14-plot-theory/",category:"TV",duration:"8:16",featured:"FALSE"},
  {title:"Happy Gilmore 2: 3 Things That Must Happen in the Adam Sandler Sequel",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/happy-gilmore-2-adam-sandler.jpg",url:"https://screenrant.com/video/happy-gilmore-2-storylines-must-happen/",category:"Movies",duration:"3:00",featured:"FALSE"},
  {title:"How Thor: Love & Thunder's Gorr the God Butcher Compares to Marvel Comics",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/thor-love-thunder-gorr.jpg",url:"https://screenrant.com/video/thor-love-thunder-gorr-the-god-butcher-marvel-comics-comparison/",category:"Marvel",duration:"3:01",featured:"FALSE"},
  {title:"Presence Ending Explained",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/lucy-liu-presence.jpg",url:"https://screenrant.com/video/presence-ending-explained/",category:"Movies",duration:"2:51",featured:"FALSE"},
  {title:"Is the Hunter x Hunter Anime Returning This Year?",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/hunter-x-hunter-anime.jpg",url:"https://screenrant.com/video/is-hunter-x-hunter-anime-returning-this-year/",category:"Anime",duration:"3:05",featured:"FALSE"},
  {title:"Star Trek Section 31 Ending Explained",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/star-trek-section-31.jpg",url:"https://screenrant.com/video/star-trek-section-31-ending-explained/",category:"TV",duration:"2:56",featured:"FALSE"},
  {title:"What is Watchmen Author Alan Moore's Next Adaptation, The Great When, About?",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/watchmen-alan-moore-the-great-when.jpg",url:"https://screenrant.com/video/watchmen-author-alan-moore-adaptation-the-great-when-about/",category:"Comics",duration:"2:54",featured:"FALSE"},
  {title:"5 Dinosaurs Jurassic World: Rebirth Should Introduce",company:"Screen Rant",thumbnail:"https://static0.srcdn.com/wordpress/wp-content/uploads/2024/11/jurassic-world-rebirth-dinosaurs.jpg",url:"https://screenrant.com/video/5-dinosaurs-jurassic-world-rebirth-should-introduce/",category:"Movies",duration:"3:17",featured:"FALSE"},
];

/* ── STATE ──────────────────────────────────────────── */
let state = {
  lang:         'en',
  allVideos:    [],
  filtered:     [],
  filter:       'all',
  visible:      CONFIG.PAGE_SIZE,
};

/* ── CURSOR ─────────────────────────────────────────── */
function isTouchDevice() {
  return window.matchMedia('(hover: none), (pointer: coarse)').matches;
}

function initCursor() {
  if (isTouchDevice()) return;
  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  let mx = 0, my = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
  });

  (function loop() {
    fx += (mx - fx) * 0.1;
    fy += (my - fy) * 0.1;
    follower.style.transform = `translate(${fx - 18}px, ${fy - 18}px)`;
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button, .video-card, .project-card, .role-pill').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform += ' scale(1.8)';
      cursor.style.background = 'var(--accent)';
      cursor.style.mixBlendMode = 'multiply';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.background = 'var(--black)';
      cursor.style.mixBlendMode = 'normal';
    });
  });
}

/* ── PHOTO ──────────────────────────────────────────── */
function initPhoto() {
  const img = document.getElementById('heroPhoto');
  if (typeof PHOTO_SRC !== 'undefined') {
    img.src = PHOTO_SRC;
  }
}

/* ── ROLE PILLS ─────────────────────────────────────── */
const ROLES = {
  'Video Editor': {
    main: 'Video', faded: 'Editor', label: 'Creative Professional',
    desc: {
      en: 'I craft high-impact video content for global media brands like Screen Rant and WatchMojo — with 95+ videos published and millions of views worldwide.',
      es: 'Creo contenido de video de alto impacto para marcas globales como Screen Rant y WatchMojo — con más de 95 videos publicados y millones de reproducciones.',
    },
  },
  'Flutter Developer': {
    main: 'Flutter', faded: 'Developer', label: 'Mobile Developer',
    desc: {
      en: 'I build cross-platform mobile apps with Flutter and Dart, published on Google Play. From UI to backend integration — I ship complete, production-ready apps.',
      es: 'Desarrollo apps móviles multiplataforma con Flutter y Dart, publicadas en Google Play. Desde la UI hasta la integración backend — entrego apps listas para producción.',
    },
  },
  'UI/UX Designer': {
    main: 'UI/UX', faded: 'Designer', label: 'Creative Designer',
    desc: {
      en: 'I design intuitive digital experiences using Figma and Canva — wireframes, prototypes, and polished interfaces that balance aesthetics with usability.',
      es: 'Diseño experiencias digitales intuitivas con Figma y Canva — wireframes, prototipos e interfaces que equilibran estética y usabilidad.',
    },
  },
};

function initRolePills() {
  document.querySelectorAll('.role-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.role-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const role = ROLES[pill.textContent.trim()];
      if (!role) return;

      const badgeMain  = q('#badge-main');
      const badgeFaded = q('#badge-faded');
      const badgeLabel = q('#badge-label');
      const heroDesc   = q('#hero-desc');
      if (badgeMain)  badgeMain.textContent  = role.main;
      if (badgeFaded) badgeFaded.textContent = role.faded;
      if (badgeLabel) badgeLabel.textContent = role.label;
      if (heroDesc)   heroDesc.textContent   = role.desc[state.lang] || role.desc.en;
    });
  });
}

/* ── LANGUAGE ───────────────────────────────────────── */
function setLang(lang) {
  state.lang = lang;
  const t = I18N[lang];

  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === lang);
  });

  // Nav
  q('#nav-about').textContent    = t.navAbout;
  q('#nav-skills').textContent   = t.navSkills;
  q('#nav-portfolio').textContent= t.navPortfolio;
  q('#nav-projects').textContent = t.navProjects;
  q('#nav-contact').textContent  = t.navContact;
  q('#nav-contact-btn').innerHTML= `${t.navContactBtn} <span class="arrow">→</span>`;

  // Hero
  q('#hero-greeting').textContent  = t.heroGreeting;
  q('#hero-line2').textContent     = t.heroLine2;
  q('#hero-desc').textContent      = t.heroDesc;
  q('#hero-btn-main').innerHTML    = `${t.heroBtnMain} <span class="arrow-circle">→</span>`;
  q('#hero-btn-sec').textContent   = t.heroBtnSec;
  q('#hero-status').innerHTML      = `<span class="status-dot"></span>${t.heroStatus}`;
  q('#badge-label').textContent    = t.heroBadgeLabel;
  q('#badge-main').textContent     = t.heroBadgeMain;
  q('#badge-faded').textContent    = t.heroBadgeFaded;
  q('#stat1-label').textContent    = t.stat1Label;
  q('#stat2-label').textContent    = t.stat2Label;
  q('#stat3-label').textContent    = t.stat3Label;
  q('#stat4-label').textContent    = t.stat4Label;

  // About
  q('#about-section-label').textContent = t.sectionAboutLabel;
  q('#about-title').innerHTML    = `${t.sectionAboutTitle} <span class="faded">${t.sectionAboutFaded}</span>`;
  q('#about-p1').innerHTML       = t.aboutP1;
  q('#about-p2').innerHTML       = t.aboutP2;
  q('#about-p3').innerHTML       = t.aboutP3;
  q('#exp1-role').textContent    = t.exp1Role;
  q('#exp2-role').textContent    = t.exp2Role;
  q('#exp3-role').textContent    = t.exp3Role;
  q('#exp4-role').textContent    = t.exp4Role;

  // Skills
  q('#skills-section-label').textContent = t.sectionSkillsLabel;
  q('#skills-title').innerHTML   = `${t.sectionSkillsTitle} <span class="faded">${t.sectionSkillsFaded}</span>`;
  q('#skill1-name').textContent  = t.skill1;
  q('#skill2-name').textContent  = t.skill2;
  q('#skill3-name').textContent  = t.skill3;
  q('#skill4-name').textContent  = t.skill4;
  q('#skill5-name').textContent  = t.skill5;
  q('#skill6-name').textContent  = t.skill6;

  // Portfolio
  q('#portfolio-section-label').textContent = t.sectionPortLabel;
  q('#portfolio-title').innerHTML = `${t.sectionPortTitle} <span class="faded">${t.sectionPortFaded}</span>`;

  // Projects
  q('#projects-section-label').textContent = t.sectionProjLabel;
  q('#projects-title').innerHTML = `${t.sectionProjTitle} <span class="faded">${t.sectionProjFaded}</span>`;

  // Contact
  q('#contact-section-label').textContent = t.sectionContactLabel;
  q('#contact-title').innerHTML = `${t.sectionContactTitle} <span class="faded">${t.sectionContactFaded}</span>`;
  q('#contact-desc').textContent = t.contactDesc;

  // Footer
  q('#footer-left').textContent  = t.footerLeft;
  q('#footer-right').textContent = t.footerRight;

  renderVideos();
}

/* ── FETCH GOOGLE SHEETS ────────────────────────────── */
async function fetchVideos() {
  const url = `https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}/gviz/tq?tqx=out:json&sheet=${CONFIG.SHEET_NAME}`;
  try {
    const res  = await fetch(url);
    const text = await res.text();
    const json = JSON.parse(text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\)/)[1]);
    const cols = json.table.cols.map(c => c.label.toLowerCase().trim());
    return json.table.rows.map(row => {
      const obj = {};
      row.c.forEach((cell, i) => {
        obj[cols[i]] = cell ? (cell.f != null ? String(cell.f) : String(cell.v)) : '';
      });
      return obj;
    }).reverse();
  } catch (e) {
    console.warn('Sheets unavailable, using fallback:', e.message);
    return FALLBACK_VIDEOS;
  }
}

/* ── FETCH PROJECTS ─────────────────────────────────── */
async function fetchProjects() {
  const url = `https://docs.google.com/spreadsheets/d/${CONFIG.SHEET_ID}/gviz/tq?tqx=out:json&sheet=${CONFIG.PROJECTS_SHEET}`;
  try {
    const res  = await fetch(url);
    const text = await res.text();
    const json = JSON.parse(text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*)\)/)[1]);
    const cols = json.table.cols.map(c => c.label.toLowerCase().trim());
    return json.table.rows.map(row => {
      const obj = {};
      row.c.forEach((cell, i) => {
        obj[cols[i]] = cell ? (cell.f != null ? String(cell.f) : String(cell.v)) : '';
      });
      return obj;
    }).reverse();;
  } catch (e) {
    console.warn('Projects sheet unavailable, using fallback:', e.message);
    return FALLBACK_PROJECTS;
  }
}

/* ── RENDER PROJECTS ────────────────────────────────── */
function renderProjects(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  if (!projects.length) {
    grid.innerHTML = '<div class="loading-state"><p>No projects found.</p></div>';
    return;
  }

  grid.innerHTML = projects.map((p, i) => {
    const techs = p.tech
      ? p.tech.split(',').map(t => `<span class="tech-tag">${escHtml(t.trim())}</span>`).join('')
      : '';
    const thumb = p.thumbnail
      ? `<img src="${escHtml(p.thumbnail)}" alt="${escHtml(p.title)}" loading="lazy"
              onerror="this.style.display='none'"/>`
      : `<div class="project-thumb-emoji">📱</div>`;
    return `
      <a href="${escHtml(p.url)}" target="_blank" rel="noopener"
         class="project-card fade-up" style="transition-delay:${i * 0.1}s">
        <div class="project-thumb">${thumb}</div>
        <div class="project-info">
          <div class="project-type">${escHtml(p.type || 'Project')}</div>
          <h3 class="project-title">${escHtml(p.title)}</h3>
          <p class="project-desc">${escHtml(p.description)}</p>
          <div class="tech-list">${techs}</div>
        </div>
      </a>`;
  }).join('');

  setTimeout(() => {
    grid.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, 30);
}

/* ── VIDEO CARD HTML ────────────────────────────────── */
function videoCardHTML(v, i) {
  return `
    <a href="${escHtml(v.url)}" target="_blank" rel="noopener"
       class="video-card fade-up" style="transition-delay:${i * 0.04}s">
      <div class="video-thumb">
        <img src="${escHtml(v.thumbnail)}" alt="${escHtml(v.title)}" loading="lazy"
             onerror="this.parentElement.style.background='var(--bg2)';this.style.display='none'"/>
        <div class="video-duration">${escHtml(v.duration || '')}</div>
        <div class="video-overlay"><div class="play-btn">▶</div></div>
      </div>
      <div class="video-info">
        <div class="video-cat">${escHtml(v.category || 'Video')}</div>
        <div class="video-title">${escHtml(v.title)}</div>
      </div>
    </a>`;
}

/* ── RENDER VIDEOS (grouped by company) ─────────────── */
function renderVideos() {
  const grid = document.getElementById('videosGrid');
  if (!state.allVideos.length) {
    grid.innerHTML = `<div class="loading-state"><p>No videos found.</p></div>`;
    return;
  }

  const lim = CONFIG.COMPANY_LIMIT;
  const t   = I18N[state.lang];

  // Group by company preserving order
  const grouped = {};
  state.allVideos.forEach(v => {
    const co = v.company || 'Other';
    if (!grouped[co]) grouped[co] = [];
    grouped[co].push(v);
  });

  grid.innerHTML = Object.entries(grouped).map(([company, videos]) => {
    const visible = videos.slice(0, lim);
    const hidden  = videos.slice(lim);
    const hasMore = hidden.length > 0;

    return `
      <div class="company-section fade-up">
        <div class="company-header">
          <h3 class="company-name">${escHtml(company)}</h3>
          <span class="company-count">${videos.length} video${videos.length !== 1 ? 's' : ''}</span>
        </div>
        <div class="videos-grid">
          ${visible.map((v, i) => videoCardHTML(v, i)).join('')}
        </div>
        ${hasMore ? `
        <div class="hidden-videos" style="display:none">
          <div class="videos-grid">
            ${hidden.map((v, i) => videoCardHTML(v, lim + i)).join('')}
          </div>
        </div>
        <div class="show-more-wrap">
          <button class="btn-show-more" data-company="${escHtml(company)}">
            ${t.loadMore || 'Load More'} <span class="show-more-count">(+${hidden.length})</span>
          </button>
        </div>` : ''}
      </div>`;
  }).join('');

  // Show more buttons
  grid.querySelectorAll('.btn-show-more').forEach(btn => {
    btn.addEventListener('click', () => {
      const section  = btn.closest('.company-section');
      const hiddenEl = section.querySelector('.hidden-videos');
      hiddenEl.style.display = 'block';
      btn.closest('.show-more-wrap').style.display = 'none';
      // Animate new cards
      hiddenEl.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
    });
  });

  setTimeout(() => {
    grid.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
  }, 30);
}

/* ── COMPANY FILTERS (dynamic) ──────────────────────── */
function buildCompanyFilters(videos) {
  const bar = document.getElementById('filterBar');
  if (!bar) return;

  // Extract unique companies preserving insertion order
  const companies = ['all', ...new Set(videos.map(v => v.company).filter(Boolean))];

  bar.innerHTML = companies.map(c => {
    const label = c === 'all' ? (I18N[state.lang].filterAll || 'All') : c;
    return `<button class="filter-btn${c === state.filter ? ' active' : ''}"
              data-company="${escHtml(c)}">${escHtml(label)}</button>`;
  }).join('');

  bar.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => applyFilter(btn.dataset.company));
  });
}

/* ── FILTER ─────────────────────────────────────────── */
function applyFilter(company) {
  state.filter   = company;
  state.visible  = CONFIG.PAGE_SIZE;
  state.filtered = company === 'all'
    ? [...state.allVideos]
    : state.allVideos.filter(v => v.company === company);

  document.querySelectorAll('.filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.company === company);
  });
  renderVideos();
}

function loadMore() {
  state.visible += CONFIG.PAGE_SIZE;
  renderVideos();
}

/* ── SCROLL ANIMATION ───────────────────────────────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

function observeAll() {
  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

/* ── UTILS ──────────────────────────────────────────── */
function q(sel) { return document.querySelector(sel); }
function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;');
}

/* ── INIT ───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', async () => {
  initCursor();
  initPhoto();
  initRolePills();
  observeAll();

  // Lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });

  // Fetch videos + projects in parallel
  const videosGrid = document.getElementById('videosGrid');
  videosGrid.innerHTML = `<div class="loading-state"><div class="spinner"></div><span>${I18N.en.loading}</span></div>`;

  const [videos, projects] = await Promise.all([fetchVideos(), fetchProjects()]);

  state.allVideos = videos;
  state.filtered  = [...state.allVideos];
  renderProjects(projects);

  // Set default lang (also calls renderVideos)
  setLang('en');
});
