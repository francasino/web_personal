/**
 * Dr. Fran Casino — research portfolio engine
 * Level navigation, bilingual content, paginated publications, repository
 * tree, gallery, accessible menus and a cursor-reactive canvas.
 */

(() => {
  "use strict";

  if (typeof siteData === "undefined") return;

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

  const store = {
    get(key) {
      try { return localStorage.getItem(key); } catch { return null; }
    },
    set(key, value) {
      try { localStorage.setItem(key, value); } catch { /* private mode */ }
    }
  };

  const state = {
    lang: store.get("fc_lang") || "en",
    theme: store.get("fc_theme") || "dark",
    search: "",
    category: "all",
    programme: "all",
    pubPage: 0,
    galleryIndex: 0,
    lastFocus: null,
    activeRoom: "top"
  };

  const PUB_PAGE_SIZE = 10;

  const rooms = [
    { id: "top", num: "00", en: "Entrance", es: "Entrada" },
    { id: "room-profile", num: "01", en: "Profile", es: "Perfil" },
    { id: "room-research", num: "02", en: "Research", es: "Investigación" },
    { id: "room-publications", num: "03", en: "Publications", es: "Publicaciones" },
    { id: "room-projects", num: "04", en: "Projects", es: "Proyectos" },
    { id: "room-archive", num: "05", en: "Archive", es: "Archivo" },
    { id: "room-trajectory", num: "06", en: "Community", es: "Comunidad" },
    { id: "room-contact", num: "07", en: "Contact", es: "Contacto" }
  ];

  const i18n = {
    en: {
      brandSub: "Researcher · URV",
      openMenu: "Levels",
      linkedinLabel: "Fran Casino on LinkedIn",
      emailLabel: "Email Fran Casino",
      themeLabel: "Switch theme",
      langLabel: "Language",
      menuTitle: "Level map",
      closeMenu: "Close level map",
      roomProfile: "Profile",
      roomResearch: "Research",
      roomPublications: "Publications",
      roomProjects: "Projects",
      roomArchive: "Archive",
      roomTrajectory: "Community",
      roomContact: "Contact",
      indexProfileMeta: "Biography & honors",
      indexResearchMeta: "Main research lines",
      indexPublicationsMeta: "Peer-reviewed work",
      indexProjectsMeta: "EU & national funding",
      indexArchiveMeta: "Photographs",
      indexTrajectoryMeta: "Kizuna Global",
      indexContactMeta: "Email & profiles",
      menuHint: "Use ↑ ↓ to browse · Enter to open · Esc to close",
      roomWord: "Level",
      heroKicker: "",
      heroRole: "Cybersecurity · Digital forensics · Cognitive security",
      heroMeta: "Ramón y Cajal Fellow — Universitat Rovira i Virgili",
      heroRank: "Stanford Top 2% — single-year since 2021 · career-long since 2026",
      heroCta: "Start level 01",
      heroMenuLabel: "Level directory",
      scrollHint: "Scroll to explore · Press M for the level map",
      heroLocation: "41.1189° N · 1.2445° E",
      metricsNote: "Google Scholar · November 2026 · CVN FECYT · May 2026",
      r1Kicker: "Level 01 — Profile",
      r1Title: "The researcher",
      roomMap: "Level map",
      profileCaption: "Cybersecurity & Digital Forensics Research Lab · URV",
      toggleFigureStyle: "Toggle research lab visual style",
      viewRetroMode: "View 16-bit retro",
      viewModernMode: "View modern lab",
      findMe: "Find me",
      nextRoom: "Next level",
      r2Kicker: "Level 02 — Research",
      r2Title: "Main Research Lines",
      keywordsLabel: "Keywords",
      r3Kicker: "Level 03 — Publications",
      r3Title: "Selected publications",
      scholarVerified: "Verified Google Scholar profile",
      openScholar: "Open Scholar",
      cvnNote: "CVN FECYT · 38 journal articles (34 with impact factor, 20 Q1) · 35 conference papers · 3 book chapters",
      searchLabel: "Search publications",
      searchPlaceholder: "Search by title, author, venue or year…",
      filterLabel: "Filter publications",
      filterAll: "All",
      filterBlockchain: "Blockchain",
      filterForensics: "Forensics",
      filterCognitive: "Cognitive & AI",
      filterPrivacy: "Privacy",
      filterSystems: "Systems",
      citations: "citations",
      keyPaper: "Key paper",
      abstract: "Abstract & citation",
      viewDoi: "View DOI",
      copyBibtex: "Copy BibTeX",
      bibtexCopied: "BibTeX copied to clipboard",
      noResults: "No publications match this search.",
      ofText: "of",
      publicationsWord: "publications",
      showing: "Showing",
      pageWord: "Page",
      prevPage: "Previous 10",
      nextPage: "Next 10",
      publicationPages: "Publication pages",
      r4Kicker: "Level 04 — Funded research",
      r4Title: "Projects & grants",
      projectFilterLabel: "Filter projects",
      filterAllProjects: "All projects",
      filterEu: "European",
      filterNational: "National",
      visitProject: "Project site",
      fullPortfolio: "Complete portfolio",
      fullPortfolioNote: "Additional projects and COST actions",
      resourcesKicker: "Open repositories",
      resourcesTitle: "Repository tree",
      repoIntro: "Every branch links to public code, data or prototypes on GitHub. Start at the root to browse all repositories.",
      repoCount: "{n} public repositories",
      repoBrowse: "Browse all repositories",
      repoOpen: "Open repository",
      repoStars: "stars",
      r5Kicker: "Level 05 — Visual archive",
      r5Title: "Photographs",
      openImage: "Open image",
      closeImage: "Close image",
      previousImage: "Previous image",
      nextImage: "Next image",
      r6Kicker: "Level 06 — Community",
      r6Title: "Kizuna Global",
      kizunaKicker: "Collaboration with a non-profit",
      visitKizuna: "Visit kizunaglobal.org",
      r7Kicker: "Level 07 — Contact",
      r7Title: "Get in touch",
      directEmail: "Direct email",
      copyEmail: "Copy address",
      sendEmail: "Open mail app",
      locationLabel: "Location",
      affiliationLabel: "Affiliation",
      profilesLabel: "Public profiles",
      backTopLabel: "Back to",
      entrance: "Entrance",
      footerRole: "Ramón y Cajal Fellow · URV · Tarragona",
      footerNote: "© 2026 Dr. Fran Casino. All rights reserved.",
      footerBuilt: "Hand-built HTML · CSS · JS.",
      emailCopied: "Email address copied to clipboard"
    },
    es: {
      brandSub: "Investigador · URV",
      openMenu: "Niveles",
      linkedinLabel: "Fran Casino en LinkedIn",
      emailLabel: "Escribir a Fran Casino",
      themeLabel: "Cambiar el tema",
      langLabel: "Idioma",
      menuTitle: "Mapa de niveles",
      closeMenu: "Cerrar el mapa de niveles",
      roomProfile: "Perfil",
      roomResearch: "Investigación",
      roomPublications: "Publicaciones",
      roomProjects: "Proyectos",
      roomArchive: "Archivo",
      roomTrajectory: "Comunidad",
      roomContact: "Contacto",
      indexProfileMeta: "Biografía y honores",
      indexResearchMeta: "Líneas principales de investigación",
      indexPublicationsMeta: "Trabajo revisado por pares",
      indexProjectsMeta: "Financiación europea y nacional",
      indexArchiveMeta: "Fotografías",
      indexTrajectoryMeta: "Kizuna Global",
      indexContactMeta: "Correo y perfiles",
      menuHint: "Usa ↑ ↓ para navegar · Enter para abrir · Esc para cerrar",
      roomWord: "Nivel",
      heroKicker: "",
      heroRole: "Ciberseguridad · Informática forense · Seguridad cognitiva",
      heroMeta: "Investigador Ramón y Cajal — Universitat Rovira i Virgili",
      heroRank: "Top 2% de Stanford — anual desde 2021 · trayectoria completa desde 2026",
      heroCta: "Empezar nivel 01",
      heroMenuLabel: "Directorio de niveles",
      scrollHint: "Desliza para explorar · Pulsa M para el mapa de niveles",
      heroLocation: "41.1189° N · 1.2445° E",
      metricsNote: "Google Scholar · noviembre de 2026 · CVN FECYT · mayo de 2026",
      r1Kicker: "Nivel 01 — Perfil",
      r1Title: "El investigador",
      roomMap: "Mapa de niveles",
      profileCaption: "Laboratorio de Investigación en Ciberseguridad y Forense Digital · URV",
      toggleFigureStyle: "Alternar estilo visual del laboratorio",
      viewRetroMode: "Ver retro 16-bit",
      viewModernMode: "Ver lab moderno",
      findMe: "Encuéntrame en",
      nextRoom: "Siguiente nivel",
      r2Kicker: "Nivel 02 — Investigación",
      r2Title: "Líneas principales de investigación",
      keywordsLabel: "Palabras clave",
      r3Kicker: "Nivel 03 — Publicaciones",
      r3Title: "Publicaciones seleccionadas",
      scholarVerified: "Perfil verificado en Google Scholar",
      openScholar: "Abrir Scholar",
      cvnNote: "CVN FECYT · 38 artículos de revista (34 con factor de impacto, 20 Q1) · 35 trabajos en congresos · 3 capítulos de libro",
      searchLabel: "Buscar publicaciones",
      searchPlaceholder: "Busca por título, autor, revista o año…",
      filterLabel: "Filtrar publicaciones",
      filterAll: "Todas",
      filterBlockchain: "Blockchain",
      filterForensics: "Forense",
      filterCognitive: "Cognitiva e IA",
      filterPrivacy: "Privacidad",
      filterSystems: "Sistemas",
      citations: "citas",
      keyPaper: "Artículo clave",
      abstract: "Resumen y cita",
      viewDoi: "Ver DOI",
      copyBibtex: "Copiar BibTeX",
      bibtexCopied: "Cita BibTeX copiada al portapapeles",
      noResults: "Ninguna publicación coincide con esta búsqueda.",
      ofText: "de",
      publicationsWord: "publicaciones",
      showing: "Mostrando",
      pageWord: "Página",
      prevPage: "Anteriores 10",
      nextPage: "Siguientes 10",
      publicationPages: "Páginas de publicaciones",
      r4Kicker: "Nivel 04 — Investigación financiada",
      r4Title: "Proyectos y ayudas",
      projectFilterLabel: "Filtrar proyectos",
      filterAllProjects: "Todos los proyectos",
      filterEu: "Europeos",
      filterNational: "Nacionales",
      visitProject: "Sitio del proyecto",
      fullPortfolio: "Portafolio completo",
      fullPortfolioNote: "Proyectos adicionales y acciones COST",
      resourcesKicker: "Repositorios abiertos",
      resourcesTitle: "Árbol de repositorios",
      repoIntro: "Cada rama enlaza con código, datos o prototipos públicos en GitHub. Empieza en la raíz para ver todos los repositorios.",
      repoCount: "{n} repositorios públicos",
      repoBrowse: "Ver todos los repositorios",
      repoOpen: "Abrir repositorio",
      repoStars: "estrellas",
      r5Kicker: "Nivel 05 — Archivo visual",
      r5Title: "Fotografías",
      openImage: "Abrir imagen",
      closeImage: "Cerrar imagen",
      previousImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      r6Kicker: "Nivel 06 — Comunidad",
      r6Title: "Kizuna Global",
      kizunaKicker: "Colaboración con una entidad sin ánimo de lucro",
      visitKizuna: "Visitar kizunaglobal.org",
      r7Kicker: "Nivel 07 — Contacto",
      r7Title: "Hablemos",
      directEmail: "Correo directo",
      copyEmail: "Copiar dirección",
      sendEmail: "Abrir aplicación de correo",
      locationLabel: "Ubicación",
      affiliationLabel: "Afiliación",
      profilesLabel: "Perfiles públicos",
      backTopLabel: "Volver a",
      entrance: "Entrada",
      footerRole: "Investigador Ramón y Cajal · URV · Tarragona",
      footerNote: "© 2026 Dr. Fran Casino. Todos los derechos reservados.",
      footerBuilt: "HTML · CSS · JS escritos a mano.",
      emailCopied: "Dirección de correo copiada al portapapeles"
    }
  };
  const t = () => i18n[state.lang];
  const isEn = () => state.lang === "en";
  const fmt = (n) => new Intl.NumberFormat(isEn() ? "en-US" : "es-ES").format(n);

  /* =========================================================
     THEME & LANGUAGE
     ========================================================= */
  function applyTheme(theme) {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    const meta = $("#themeColorMeta");
    if (meta) meta.setAttribute("content", theme === "light" ? "#f4f1ea" : "#07090e");
    document.dispatchEvent(new CustomEvent("fctheme"));
  }

  function toggleTheme() {
    const next = state.theme === "dark" ? "light" : "dark";
    store.set("fc_theme", next);
    applyTheme(next);
  }

  function applyLanguage(lang) {
    state.lang = lang;
    document.documentElement.lang = lang;
    const dict = i18n[lang];

    $$("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    $$("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (dict[key]) el.setAttribute("aria-label", dict[key]);
    });
    $$("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key]) el.setAttribute("placeholder", dict[key]);
    });

    $$(".lang__btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", String(active));
    });

    const portraitImg = $("#portraitImg");
    if (portraitImg) {
      portraitImg.alt = lang === "es"
        ? "Dr. Fran Casino — Laboratorio de Investigación en Ciberseguridad y Forense Digital"
        : "Dr. Fran Casino — Cybersecurity & Digital Forensics Research Lab";
    }

    updateRoomIndicator();
  }

  function setLanguage(lang) {
    if (lang === state.lang) return;
    store.set("fc_lang", lang);
    applyLanguage(lang);
    renderAll();
  }

  /* =========================================================
     RENDER — PROFILE & METRICS
     ========================================================= */
  function renderProfile() {
    const p = siteData.profile;
    const nameEl = $("#profileFullName");
    if (nameEl) nameEl.textContent = p.fullName;
    const roleEl = $("#profileRole");
    if (roleEl) roleEl.textContent = isEn() ? p.title.en : p.title.es;
    const tagEl = $("#profileTagline");
    if (tagEl) {
      const tagText = isEn() ? (p.tagline?.en || "") : (p.tagline?.es || "");
      if (tagText) {
        tagEl.textContent = tagText;
        tagEl.style.display = "";
      } else {
        tagEl.style.display = "none";
      }
    }
    const affEl = $("#profileAffiliation");
    if (affEl) {
      affEl.textContent =
        `${p.affiliation.department} — ${p.affiliation.institution} (${p.affiliation.location})`;
    }

    const honors = $("#honorsList");
    if (honors) {
      honors.innerHTML = (isEn() ? p.honors.en : p.honors.es)
        .map((h) => `<li>${h}</li>`)
        .join("");
    }

    const bio = $("#profileBio");
    if (bio) {
      const raw = isEn() ? p.bio.en : p.bio.es;
      bio.innerHTML = raw.split("\n\n").map((para) => `<p>${para}</p>`).join("");
    }

    const linkIds = ["scholar", "orcid", "linkedin", "cvn", "scopus", "researchgate", "github"];
    const links = p.socialLinks.filter((l) => linkIds.includes(l.id));
    const linksEl = $("#profileLinks");
    if (linksEl) {
      linksEl.innerHTML = links.map((l) => `
        <li><a href="${l.url}" target="_blank" rel="noopener noreferrer">
          ${l.name}<span class="arrow" aria-hidden="true">↗</span>
          <span class="visually-hidden"> (opens in a new tab)</span>
        </a></li>
      `).join("");
    }
  }

  let metricsAnimated = false;

  function runMetricsCountUp() {
    const metricValues = $$(".metric__value[data-target]");
    if (!metricValues.length) return;

    const duration = 1200; // ms
    const startTime = performance.now();

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / duration);
      const ease = easeOutCubic(progress);

      metricValues.forEach((el) => {
        const target = Number(el.dataset.target);
        if (isNaN(target)) return;
        const current = Math.round(target * ease);
        const prefix = el.dataset.prefix || "";
        el.innerHTML = `${prefix ? `<span aria-hidden="true">${prefix}</span>` : ""}${fmt(current)}`;
      });

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    }

    window.requestAnimationFrame(tick);
  }

  function initMetricsAnimation() {
    const grid = $("#metricsGrid");
    if (!grid || metricsAnimated) return;

    if (reduceQuery.matches || !("IntersectionObserver" in window)) {
      metricsAnimated = true;
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      if (entries[0] && entries[0].isIntersecting && !metricsAnimated) {
        metricsAnimated = true;
        observer.disconnect();
        runMetricsCountUp();
      }
    }, { threshold: 0.15 });

    observer.observe(grid);
  }

  function renderMetrics() {
    const grid = $("#metricsGrid");
    if (!grid) return;
    const metrics = siteData.profile.metrics;
    grid.innerHTML = metrics.map((m, i) => {
      const label = isEn() ? m.labelEn : m.labelEs;
      const numeric = typeof m.val === "number";
      let valueHtml = "";
      if (m.id === "ranking") {
        valueHtml = `<span class="metric__badge"><span class="status-dot"></span>Top 2%</span>`;
      } else if (numeric) {
        const currentVal = metricsAnimated ? fmt(m.val) : "0";
        valueHtml = `${m.prefix ? `<span aria-hidden="true">${m.prefix}</span>` : ""}${currentVal}`;
      } else {
        valueHtml = m.val;
      }
      const dataAttr = numeric ? `data-target="${m.val}" data-prefix="${m.prefix || ""}"` : "";
      return `
        <div class="metric reveal" style="--i:${i}">
          <p class="metric__value" ${dataAttr}>${valueHtml}</p>
          <p class="metric__label">${label}</p>
        </div>`;
    }).join("");
    if (!metricsAnimated) initMetricsAnimation();
    initReveal();
  }

  /* =========================================================
     RENDER — RESEARCH
     ========================================================= */
  function renderResearch() {
    const pillars = siteData.researchPillars;
    $("#pillarsList").innerHTML = pillars.map((p, i) => `
      <li class="pillar reveal" style="--i:${i}">
        <span class="pillar__num" aria-hidden="true">${String(i + 1).padStart(2, "0")}</span>
        <div>
          <h3 class="pillar__title">${isEn() ? p.titleEn : p.titleEs}</h3>
          <ul class="pillar__tags" aria-label="Topics">
            ${p.tags.map((tag) => `<li>${tag}</li>`).join("")}
          </ul>
        </div>
        <p class="pillar__desc">${isEn() ? p.descEn : p.descEs}</p>
      </li>
    `).join("");

    $("#keywordsList").innerHTML = siteData.profile.keywords
      .map((k) => `<li>${k}</li>`)
      .join("");

    initReveal();
  }

  /* =========================================================
     RENDER — PUBLICATIONS
     ========================================================= */
  function normalize(value) {
    return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  function matchesQuery(pub, query) {
    if (!query) return true;
    const haystack = normalize([
      pub.title,
      pub.journal,
      pub.publisher,
      pub.year,
      ...pub.authors
    ].join(" "));
    return haystack.includes(normalize(query));
  }

  function renderScholarStats() {
    const p = siteData.profile;
    const byId = Object.fromEntries(p.metrics.map((m) => [m.id, m]));
    const cites = byId.citations ? fmt(byId.citations.val) : "—";
    const h = byId.hindex ? byId.hindex.val : "—";
    const i10 = byId.i10 ? byId.i10.val : "—";
    const pubs = byId.publications ? byId.publications.val : "—";
    $("#scholarStats").innerHTML = isEn()
      ? `<strong>${cites}+</strong> citations · <strong>h-index ${h}</strong> · <strong>i10-index ${i10}</strong> · <strong>${pubs}+</strong> publications · <strong>Stanford Top 2%</strong>`
      : `<strong>${cites}+</strong> citas · <strong>índice h ${h}</strong> · <strong>índice i10 ${i10}</strong> · <strong>${pubs}+</strong> publicaciones · <strong>Top 2% Stanford</strong>`;
  }

  function renderPublications() {
    const dict = t();
    const list = $("#pubList");
    const pager = $("#pubPager");
    const prev = $("#pubPrev");
    const next = $("#pubNext");
    const status = $("#pubPageStatus");
    const total = siteData.publications.length;
    const query = state.search.trim();

    const sorted = siteData.publications
      .slice()
      .sort((a, b) => (b.year - a.year) || ((b.citations || 0) - (a.citations || 0)));

    const filtered = sorted.filter((pub) => {
      const catOk = state.category === "all" || pub.category === state.category;
      return catOk && matchesQuery(pub, query);
    });

    const pages = Math.max(1, Math.ceil(filtered.length / PUB_PAGE_SIZE));
    state.pubPage = Math.min(Math.max(0, state.pubPage), pages - 1);
    const start = state.pubPage * PUB_PAGE_SIZE;
    const visible = filtered.slice(start, start + PUB_PAGE_SIZE);
    const end = start + visible.length;

    if (!filtered.length) {
      $("#pubCount").textContent = `0 ${dict.ofText} ${total} ${dict.publicationsWord}`;
    } else {
      $("#pubCount").textContent =
        `${dict.showing} ${start + 1}–${end} ${dict.ofText} ${filtered.length} ${dict.publicationsWord}`;
    }

    if (pager) pager.hidden = filtered.length <= PUB_PAGE_SIZE;
    if (prev) prev.disabled = state.pubPage === 0;
    if (next) next.disabled = state.pubPage >= pages - 1;
    if (status) {
      status.textContent = filtered.length > PUB_PAGE_SIZE
        ? `${dict.pageWord} ${state.pubPage + 1} ${dict.ofText} ${pages}`
        : "";
    }

    if (!filtered.length) {
      list.innerHTML = `<p class="pub-empty">${dict.noResults}</p>`;
      return;
    }

    list.innerHTML = visible.map((pub, i) => {
      const authors = pub.authors
        .map((a) => (a === "Fran Casino" ? `<b>${a}</b>` : a))
        .join(", ");
      const venue = [
        pub.journal,
        pub.publisher,
        pub.volume ? `Vol. ${pub.volume}${pub.number ? `(${pub.number})` : ""}` : null,
        pub.pages ? `pp. ${pub.pages}` : null
      ].filter(Boolean).join(" · ");

      return `
        <article class="pub" data-cat="${pub.category}" style="--i:${i}">
          <p class="pub__top">
            <span class="pub__num">${String(start + i + 1).padStart(2, "0")}</span>
            <span>${pub.year}</span>
            ${pub.highlight ? `<span class="pub__flag">${dict.keyPaper}</span>` : ""}
            ${pub.citations ? `<span class="pub__cites">${fmt(pub.citations)} ${dict.citations}</span>` : ""}
          </p>
          <h3 class="pub__title">
            <a href="${pub.url}" target="_blank" rel="noopener noreferrer">${pub.title}</a>
          </h3>
          <p class="pub__authors">${authors}</p>
          <p class="pub__venue">${venue}</p>
          <details class="pub__more">
            <summary>${dict.abstract}</summary>
            <p class="pub__abstract">${isEn() ? pub.abstractEn : pub.abstractEs}</p>
            <div class="pub__actions">
              <a class="btn btn--small" href="${pub.url}" target="_blank" rel="noopener noreferrer">
                ${dict.viewDoi}<span aria-hidden="true">↗</span>
              </a>
              <button type="button" class="btn btn--small" data-bibtex="${pub.id}">${dict.copyBibtex}</button>
            </div>
          </details>
        </article>`;
    }).join("");
  }

  /* =========================================================
     RENDER — PROJECTS, REPOSITORIES
     ========================================================= */
  function renderProjects() {
    const dict = t();
    const filtered = siteData.projects.filter((p) => state.programme === "all" || p.programme === state.programme);
    const grid = $("#projectsGrid");

    grid.innerHTML = filtered.map((p, i) => `
      <article class="project reveal" style="--i:${i}">
        <div class="project__top">
          <span class="project__type">${p.type}</span>
          <span>${p.period}</span>
        </div>
        <h3 class="project__code">${p.code}</h3>
        <p class="project__title">${isEn() ? p.titleEn : p.titleEs}</p>
        <p class="project__desc">${isEn() ? p.descEn : p.descEs}</p>
        <ul class="project__tags" aria-label="Topics">
          ${p.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
        <div class="project__foot">
          <span>${p.grant} · ${isEn() ? p.roleEn : p.roleEs}</span>
          <a href="${p.url}" target="_blank" rel="noopener noreferrer">
            ${dict.visitProject} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    `).join("");

    renderArchiveList();
    initReveal();
  }

  function renderArchiveList() {
    const filtered = siteData.projectArchive.filter(
      (p) => state.programme === "all" || p.programme === state.programme
    );
    const list = $("#projectArchive");
    if (!filtered.length) {
      list.innerHTML = "";
      return;
    }
    list.innerHTML = filtered.map((p) => `
      <li class="archive-item">
        <span class="archive-item__code">${p.code}</span>
        <span class="archive-item__grant">${p.grant}</span>
        <span class="archive-item__type">${p.type}</span>
      </li>
    `).join("");
  }

  function renderRepoTree() {
    const tree = siteData.repoTree;
    const host = $("#repoTree");
    if (!tree || !host) return;
    const dict = t();

    const branches = tree.branches.map((branch, bIndex) => `
      <li class="repo-branch" style="--branch:${bIndex}">
        <div class="repo-branch__head">
          <span class="repo-branch__dot" aria-hidden="true"></span>
          <h4>${isEn() ? branch.titleEn : branch.titleEs}</h4>
          <span class="repo-branch__count mono">${String(branch.repos.length).padStart(2, "0")}</span>
        </div>
        <ul class="repo-branch__leaves">
          ${branch.repos.map((repo, i) => {
            const langClass = (repo.language || "code").toLowerCase().replace(/[^a-z]+/g, "-");
            return `
            <li style="--leaf:${i}">
              <a class="repo-leaf" href="${repo.url}" target="_blank" rel="noopener noreferrer">
                <span class="repo-leaf__top">
                  <span class="repo-leaf__name">${repo.name}</span>
                  ${repo.stars ? `<span class="repo-leaf__stars" aria-label="${repo.stars} ${dict.repoStars}">★ ${repo.stars}</span>` : ""}
                </span>
                <span class="repo-leaf__desc">${isEn() ? repo.descEn : repo.descEs}</span>
                <span class="repo-leaf__meta">
                  <span class="repo-leaf__lang" data-lang="${langClass}">${repo.language}</span>
                  <span class="repo-leaf__arrow" aria-hidden="true">↗</span>
                </span>
                <span class="visually-hidden"> (${dict.repoOpen})</span>
              </a>
            </li>`;
          }).join("")}
        </ul>
      </li>`).join("");

    host.innerHTML = `
      <div class="repo-tree__root-wrap">
        <a class="repo-tree__root" href="${tree.url}" target="_blank" rel="noopener noreferrer">
          <span class="repo-tree__mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="8" r="2.4"/><path d="M6 8.4v7.2M8.4 6h5.1c2.5 0 4.5 1.8 4.5 4.4"/></svg>
          </span>
          <span class="repo-tree__id">
            <strong>${tree.handle}</strong>
            <span>${dict.repoCount.replace("{n}", tree.count)}</span>
          </span>
          <span class="repo-tree__all">${dict.repoBrowse}<span aria-hidden="true">↗</span></span>
        </a>
      </div>
      <div class="repo-tree__trunk" aria-hidden="true"><span></span></div>
      <ul class="repo-tree__branches">${branches}</ul>`;

    initReveal();
  }

  /* =========================================================
     RENDER — GALLERY & 3D CAROUSEL (Kizuna Style)
     ========================================================= */
  let carouselAutoplayTimer = null;
  let carouselPaused = false;

  function renderGallery() {
    const stage = $("#carouselStage");
    const dots = $("#carouselDots");
    const thumbs = $("#carouselThumbs");
    if (!stage) return;

    const items = siteData.gallery;
    const len = items.length;

    // Render 3D Slides
    stage.innerHTML = items.map((item, i) => {
      const title = isEn() ? item.titleEn : item.titleEs;
      const desc = isEn() ? item.descEn : item.descEs;
      return `
        <article class="carousel-slide" data-carousel-index="${i}" role="group" aria-label="${title}">
          <img src="${item.image}" alt="${title}" width="${item.width}" height="${item.height}" loading="lazy" decoding="async">
          <div class="carousel-slide__overlay">
            <div class="carousel-slide__meta">
              <span class="carousel-slide__tag">${item.tag}</span>
              <span class="carousel-slide__hint">
                <span>Zoom</span>
                <span aria-hidden="true">↗</span>
              </span>
            </div>
            <h3 class="carousel-slide__title">${title}</h3>
            <p class="carousel-slide__desc">${desc}</p>
          </div>
        </article>`;
    }).join("");

    // Render Indicator Dots (Pills)
    if (dots) {
      dots.innerHTML = items.map((_, i) => `
        <button type="button" class="carousel-dot ${i === state.galleryIndex ? "is-active" : ""}"
          data-carousel-dot="${i}"
          aria-label="${isEn() ? `Photograph ${i + 1} of ${len}` : `Fotografía ${i + 1} de ${len}`}"
          aria-selected="${i === state.galleryIndex}">
        </button>
      `).join("");
    }

    // Render Thumbnails
    if (thumbs) {
      thumbs.innerHTML = items.map((item, i) => {
        const title = isEn() ? item.titleEn : item.titleEs;
        return `
          <button type="button" class="carousel-thumb ${i === state.galleryIndex ? "is-active" : ""}"
            data-carousel-thumb="${i}"
            aria-label="${title}">
            <img src="${item.image}" alt="" loading="lazy" decoding="async">
          </button>`;
      }).join("");
    }

    updateGalleryCarousel();
  }

  function updateGalleryCarousel() {
    const slides = $$(".carousel-slide");
    const dots = $$(".carousel-dot");
    const thumbs = $$(".carousel-thumb");
    const len = siteData.gallery.length;
    if (!slides.length) return;

    const current = state.galleryIndex;
    const isMobile = window.innerWidth <= 640;

    slides.forEach((slide, i) => {
      let diff = i - current;
      if (diff > len / 2) diff -= len;
      if (diff < -len / 2) diff += len;

      slide.classList.toggle("is-active", diff === 0);

      if (diff === 0) {
        slide.style.transform = "translateX(0px) translateZ(0px) rotateY(0deg) scale(1)";
        slide.style.opacity = "1";
        slide.style.zIndex = "10";
        slide.style.pointerEvents = "auto";
      } else if (diff === 1) {
        const tx = isMobile ? "62%" : "min(32vw, 360px)";
        const rot = isMobile ? "-18deg" : "-24deg";
        slide.style.transform = `translateX(${tx}) translateZ(-140px) rotateY(${rot}) scale(${isMobile ? 0.88 : 0.86})`;
        slide.style.opacity = isMobile ? "0.55" : "0.65";
        slide.style.zIndex = "8";
        slide.style.pointerEvents = "auto";
      } else if (diff === -1) {
        const tx = isMobile ? "-62%" : "max(-32vw, -360px)";
        const rot = isMobile ? "18deg" : "24deg";
        slide.style.transform = `translateX(${tx}) translateZ(-140px) rotateY(${rot}) scale(${isMobile ? 0.88 : 0.86})`;
        slide.style.opacity = isMobile ? "0.55" : "0.65";
        slide.style.zIndex = "8";
        slide.style.pointerEvents = "auto";
      } else {
        const tx = diff > 0 ? "540px" : "-540px";
        const rot = diff > 0 ? "-38deg" : "38deg";
        slide.style.transform = `translateX(${tx}) translateZ(-280px) rotateY(${rot}) scale(0.72)`;
        slide.style.opacity = "0";
        slide.style.zIndex = "1";
        slide.style.pointerEvents = "none";
      }
    });

    dots.forEach((dot, i) => {
      const active = i === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-selected", String(active));
    });

    thumbs.forEach((thumb, i) => {
      thumb.classList.toggle("is-active", i === current);
    });
  }

  function setGallerySlide(index) {
    const len = siteData.gallery.length;
    state.galleryIndex = (index + len) % len;
    updateGalleryCarousel();
    updateLightbox();
  }

  function nextGallerySlide() {
    setGallerySlide(state.galleryIndex + 1);
  }

  function prevGallerySlide() {
    setGallerySlide(state.galleryIndex - 1);
  }

  function startCarouselAutoplay() {
    if (carouselAutoplayTimer || reduceQuery.matches) return;
    carouselAutoplayTimer = setInterval(() => {
      if (!carouselPaused && document.visibilityState === "visible") {
        nextGallerySlide();
      }
    }, 4500);
  }

  function stopCarouselAutoplay() {
    if (carouselAutoplayTimer) {
      clearInterval(carouselAutoplayTimer);
      carouselAutoplayTimer = null;
    }
  }

  function setupCarouselEvents() {
    const wrap = $("#carouselStageWrap");
    const stage = $("#carouselStage");
    const dots = $("#carouselDots");
    const thumbs = $("#carouselThumbs");
    const prevBtn = $("#carouselPrev");
    const nextBtn = $("#carouselNext");

    prevBtn?.addEventListener("click", () => {
      prevGallerySlide();
    });

    nextBtn?.addEventListener("click", () => {
      nextGallerySlide();
    });

    stage?.addEventListener("click", (e) => {
      const slide = e.target.closest("[data-carousel-index]");
      if (!slide) return;
      const idx = Number(slide.dataset.carouselIndex);
      if (idx === state.galleryIndex) {
        openLightbox(idx);
      } else {
        setGallerySlide(idx);
      }
    });

    dots?.addEventListener("click", (e) => {
      const dot = e.target.closest("[data-carousel-dot]");
      if (!dot) return;
      setGallerySlide(Number(dot.dataset.carouselDot));
    });

    thumbs?.addEventListener("click", (e) => {
      const thumb = e.target.closest("[data-carousel-thumb]");
      if (!thumb) return;
      setGallerySlide(Number(thumb.dataset.carouselThumb));
    });

    if (wrap) {
      wrap.addEventListener("mouseenter", () => { carouselPaused = true; });
      wrap.addEventListener("mouseleave", () => { carouselPaused = false; });
      wrap.addEventListener("focusin", () => { carouselPaused = true; });
      wrap.addEventListener("focusout", () => { carouselPaused = false; });

      let touchStartX = 0;
      let touchStartY = 0;
      wrap.addEventListener("touchstart", (e) => {
        carouselPaused = true;
        if (e.changedTouches && e.changedTouches[0]) {
          touchStartX = e.changedTouches[0].clientX;
          touchStartY = e.changedTouches[0].clientY;
        }
      }, { passive: true });

      wrap.addEventListener("touchend", (e) => {
        carouselPaused = false;
        if (e.changedTouches && e.changedTouches[0]) {
          const dx = e.changedTouches[0].clientX - touchStartX;
          const dy = e.changedTouches[0].clientY - touchStartY;
          if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) nextGallerySlide();
            else prevGallerySlide();
          }
        }
      }, { passive: true });
    }

    startCarouselAutoplay();
  }

  function openLightbox(index) {
    const dialog = $("#lightbox");
    if (!dialog) return;
    state.galleryIndex = (index + siteData.gallery.length) % siteData.gallery.length;
    updateLightbox();
    updateGalleryCarousel();
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) dialog.showModal();
    } else {
      window.open(siteData.gallery[state.galleryIndex].image, "_blank", "noopener");
    }
  }

  function updateLightbox() {
    const item = siteData.gallery[state.galleryIndex];
    if (!item) return;
    const title = isEn() ? item.titleEn : item.titleEs;
    $("#lightboxImg").src = item.image;
    $("#lightboxImg").alt = title;
    $("#lightboxTag").textContent = item.tag;
    $("#lightboxTitle").textContent = title;
    $("#lightboxDesc").textContent = isEn() ? item.descEn : item.descEs;
    $("#lightboxCount").textContent =
      `${String(state.galleryIndex + 1).padStart(2, "0")} / ${String(siteData.gallery.length).padStart(2, "0")}`;
  }

  /* =========================================================
     RENDER — KIZUNA
     ========================================================= */
  function renderKizuna() {
    const k = siteData.community;
    $("#kizunaTitle").textContent = isEn() ? k.titleEn : k.titleEs;
    $("#kizunaDesc").textContent = isEn() ? k.descEn : k.descEs;
    $("#kizunaLocation").textContent = k.location;
    $("#kizunaPillars").innerHTML = k.pillars.map((p) => `
      <li>
        <h4>${isEn() ? p.titleEn : p.titleEs}</h4>
        <p>${isEn() ? p.descEn : p.descEs}</p>
      </li>
    `).join("");
  }

  /* =========================================================
     RENDER — CONTACT
     ========================================================= */
  function renderContact() {
    const p = siteData.profile;
    $("#contactLocation").textContent = `${p.affiliation.campus}, ${p.affiliation.location}`;
    $("#contactAffiliation").textContent = `${p.affiliation.department} · ${p.affiliation.institution}`;

    $("#contactLinks").innerHTML = p.socialLinks.map((l) => `
      <li>
        <a href="${l.url}" target="_blank" rel="noopener noreferrer">
          <span class="profile-link__name">${l.name}<span class="profile-link__metric">${l.metric}</span></span>
          <span class="profile-link__tag">${l.tag}</span>
          <span class="arrow" aria-hidden="true">↗</span>
        </a>
      </li>
    `).join("");
  }

  function renderAll() {
    renderProfile();
    renderMetrics();
    renderResearch();
    renderScholarStats();
    renderPublications();
    renderProjects();
    renderRepoTree();
    renderGallery();
    renderKizuna();
    renderContact();
    updateRoomIndicator();
  }

  /* =========================================================
     ROOM MAP
     ========================================================= */
  let menuOpen = false;
  let menuTriggers = [];

  function setBackgroundInert(value) {
    [$("#main"), $(".masthead"), $(".footer")].forEach((el) => {
      if (el) el.inert = value;
    });
  }

  function openMenu() {
    const menu = $("#roomMenu");
    if (!menu || menuOpen) return;
    menuOpen = true;
    state.lastFocus = document.activeElement;
    menu.hidden = false;
    document.body.classList.add("is-locked");
    setBackgroundInert(true);
    menuTriggers.forEach((b) => b.setAttribute("aria-expanded", "true"));
    const first = $(".menu__link", menu);
    if (first) first.focus();
  }

  function closeMenu(restoreFocus = true) {
    const menu = $("#roomMenu");
    if (!menu || !menuOpen) return;
    menuOpen = false;
    menu.hidden = true;
    document.body.classList.remove("is-locked");
    setBackgroundInert(false);
    menuTriggers.forEach((b) => b.setAttribute("aria-expanded", "false"));
    if (restoreFocus && state.lastFocus && typeof state.lastFocus.focus === "function") {
      state.lastFocus.focus();
    }
  }

  function setupMenu() {
    menuTriggers = $$(".js-open-menu");
    menuTriggers.forEach((btn) => {
      btn.setAttribute("aria-haspopup", "dialog");
      btn.addEventListener("click", openMenu);
    });

    const menu = $("#roomMenu");
    if (!menu) return;
    const panel = $(".menu__panel", menu);

    $("#menuClose")?.addEventListener("click", () => closeMenu());
    menu.addEventListener("click", (e) => {
      if (e.target === menu) closeMenu();
    });

    panel.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }

      const focusables = $$('a[href], button:not([disabled])', panel);
      if (e.key === "Tab" && focusables.length) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
        return;
      }

      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        const links = $$(".menu__link", panel);
        const current = links.indexOf(document.activeElement);
        e.preventDefault();
        let next;
        if (e.key === "ArrowDown") next = current < 0 ? 0 : (current + 1) % links.length;
        else next = current <= 0 ? links.length - 1 : current - 1;
        links[next].focus();
      }
    });
  }

  /* =========================================================
     SCROLL: PROGRESS, ROOM INDICATOR, REVEALS
     ========================================================= */
  let scrollTick = false;

  function updateRoomIndicator() {
    const indicator = $("#roomIndicator");
    if (!indicator) return;
    const room = rooms.find((r) => r.id === state.activeRoom) || rooms[0];
    indicator.textContent =
      `${t().roomWord} ${room.num} — ${isEn() ? room.en : room.es}`;
  }

  function currentRoomId() {
    const probe = window.scrollY + (window.innerHeight * 0.32) + 72;
    let current = "top";
    rooms.forEach((room) => {
      const section = document.getElementById(room.id);
      if (section && section.offsetTop <= probe) current = room.id;
    });
    return current;
  }

  function onScroll() {
    if (scrollTick) return;
    scrollTick = true;
    window.requestAnimationFrame(() => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      doc.style.setProperty("--scroll-progress", ratio.toFixed(4));
      const bar = $("#progressBar");
      if (bar) bar.style.width = `${ratio * 100}%`;

      const next = currentRoomId();
      if (next !== state.activeRoom) {
        state.activeRoom = next;
        updateRoomIndicator();
        $$(".menu__link").forEach((link) => {
          if (link.dataset.menuRoom === next) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        });

        // Synchronize Relay flow spine nodes
        const activeIdx = rooms.findIndex((r) => r.id === next);
        $$(".light-node").forEach((node) => {
          const room = node.dataset.room;
          const nodeIdx = rooms.findIndex((r) => r.id === room);
          const isActive = room === next;
          const isPassed = nodeIdx >= 0 && nodeIdx < activeIdx;
          node.classList.toggle("is-active", isActive);
          node.classList.toggle("is-passed", isPassed);
          if (isActive) node.setAttribute("aria-current", "step");
          else node.removeAttribute("aria-current");
        });
      }
      scrollTick = false;
    });
  }

  let revealObserver = null;
  function initReveal() {
    const elements = $$(".reveal:not(.is-visible)");
    if (!revealObserver) {
      if (reduceQuery.matches || !("IntersectionObserver" in window)) {
        elements.forEach((el) => el.classList.add("is-visible"));
        return;
      }
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.05, rootMargin: "0px 0px -40px 0px" });
    }
    elements.forEach((el) => revealObserver.observe(el));
  }

  /* =========================================================
     EVENTS
     ========================================================= */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(() => true).catch(() => fallbackCopy(text));
    }
    return Promise.resolve(fallbackCopy(text));
  }

  function fallbackCopy(text) {
    const area = document.createElement("textarea");
    area.value = text;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch { ok = false; }
    document.body.removeChild(area);
    return ok;
  }

  let toastTimer = null;
  function toast(message) {
    const box = $("#toast");
    if (!box) return;
    box.textContent = message;
    box.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => box.classList.remove("is-visible"), 2800);
  }

  function setupEvents() {
    $("#themeBtn")?.addEventListener("click", toggleTheme);

    $$(".lang__btn").forEach((btn) => {
      btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });

    // Search
    const form = $("#pubSearchForm");
    if (form) form.addEventListener("submit", (e) => e.preventDefault());

    const search = $("#pubSearch");
    if (search) {
      search.addEventListener("input", () => {
        state.search = search.value;
        state.pubPage = 0;
        renderPublications();
      });
      search.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && search.value) {
          e.preventDefault();
          search.value = "";
          state.search = "";
          state.pubPage = 0;
          renderPublications();
        }
      });
    }

    // Publication filters
    $$(".chips .chip[data-cat]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.category = btn.dataset.cat;
        state.pubPage = 0;
        $$(".chip[data-cat]").forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });
        renderPublications();
      });
    });

    // Project filters
    $$(".chip[data-programme]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.programme = btn.dataset.programme;
        $$(".chip[data-programme]").forEach((b) => {
          const active = b === btn;
          b.classList.toggle("is-active", active);
          b.setAttribute("aria-pressed", String(active));
        });
        renderProjects();
      });
    });

    // Publication pagination
    const pubList = $("#pubList");
    const scrollToPubs = () => {
      if (!pubList) return;
      pubList.scrollIntoView({ behavior: reduceQuery.matches ? "auto" : "smooth", block: "start" });
    };
    $("#pubPrev")?.addEventListener("click", () => {
      state.pubPage -= 1;
      renderPublications();
      scrollToPubs();
    });
    $("#pubNext")?.addEventListener("click", () => {
      state.pubPage += 1;
      renderPublications();
      scrollToPubs();
    });

    // BibTeX copy (delegated)
    if (pubList) {
      pubList.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-bibtex]");
        if (!btn) return;
        const pub = siteData.publications.find((p) => p.id === btn.dataset.bibtex);
        if (!pub) return;
        copyText(pub.bibtex).then((ok) => {
          if (ok) toast(t().bibtexCopied);
        });
      });
    }

    // Email copy
    const copyBtn = $("#copyEmailBtn");
    if (copyBtn) {
      copyBtn.addEventListener("click", () => {
        copyText(siteData.profile.email).then((ok) => {
          if (ok) toast(t().emailCopied);
        });
      });
    }

    // 3D Visual Archive Carousel (Kizuna Style)
    setupCarouselEvents();

    const dialog = $("#lightbox");
    if (dialog) {
      $("#lightboxClose")?.addEventListener("click", () => dialog.close());
      $("#lightboxPrev")?.addEventListener("click", () => {
        state.galleryIndex = (state.galleryIndex - 1 + siteData.gallery.length) % siteData.gallery.length;
        updateLightbox();
        updateGalleryCarousel();
      });
      $("#lightboxNext")?.addEventListener("click", () => {
        state.galleryIndex = (state.galleryIndex + 1) % siteData.gallery.length;
        updateLightbox();
        updateGalleryCarousel();
      });
      dialog.addEventListener("click", (e) => {
        if (e.target === dialog) dialog.close();
      });
      dialog.addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft") {
          e.preventDefault();
          state.galleryIndex = (state.galleryIndex - 1 + siteData.gallery.length) % siteData.gallery.length;
          updateLightbox();
          updateGalleryCarousel();
        }
        if (e.key === "ArrowRight") {
          e.preventDefault();
          state.galleryIndex = (state.galleryIndex + 1) % siteData.gallery.length;
          updateLightbox();
          updateGalleryCarousel();
        }
      });
    }

    // Global keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && menuOpen) {
        closeMenu();
        return;
      }
      const el = document.activeElement;
      const typing = el && (
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT" ||
        el.isContentEditable
      );
      if (typing) return;

      if ((e.key === "m" || e.key === "M") && !e.ctrlKey && !e.metaKey && !e.altKey) {
        e.preventDefault();
        if (menuOpen) closeMenu();
        else openMenu();
      }

      if (e.key === "/") {
        e.preventDefault();
        const target = document.getElementById("room-publications");
        if (target) {
          target.scrollIntoView({ behavior: reduceQuery.matches ? "auto" : "smooth" });
          window.setTimeout(() => {
            const input = $("#pubSearch");
            if (input) input.focus({ preventScroll: true });
          }, reduceQuery.matches ? 0 : 650);
        }
      }
    });

    // In-page navigation: close the map and move focus to the room heading
    document.addEventListener("click", (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      const target = document.querySelector(hash);
      if (!target) return;

      if (menuOpen) closeMenu(false);

      const heading = target.id === "main"
        ? target
        : (target.querySelector(".room__title, .hero__title") || target);
      if (!heading) return;
      window.setTimeout(() => {
        if (heading.hasAttribute("tabindex")) heading.focus({ preventScroll: true });
      }, reduceQuery.matches ? 0 : 700);
    });

    let resizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        onScroll();
        updateGalleryCarousel();
      }, 120);
    }, { passive: true });
  }

  /* =========================================================
     LIVING PAINTING (canvas)
     ========================================================= */
  function initPaint() {
    const canvas = $("#paintCanvas");
    if (!canvas) return;
    const hero = $("#top");
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const palettes = {
      dark: ["214,168,95", "131,182,163", "243,240,232", "160,132,88", "96,140,124"],
      light: ["138,95,34", "47,93,80", "22,23,27", "176,146,96", "110,132,120"]
    };

    let width = 0;
    let height = 0;
    let particles = [];
    let running = false;
    let raf = 0;
    let time = 0;
    let inView = true;
    let reduced = reduceQuery.matches;

    const mouse = { x: 0, y: 0, active: false };

    function palette() {
      return document.documentElement.dataset.theme === "light" ? palettes.light : palettes.dark;
    }

    function resize() {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      width = canvas.clientWidth || hero.clientWidth;
      height = canvas.clientHeight || hero.clientHeight;
      if (!width || !height) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      buildParticles();
      if (reduced) paintStill();
      else paintBurst(220);
    }

    function buildParticles() {
      const count = Math.max(70, Math.min(380, Math.floor((width * height) / 11000)));
      const colors = palette();
      particles = Array.from({ length: count }, () => spawn(colors));
    }

    function spawn(colors, anywhere = true) {
      const c = colors[Math.floor(Math.random() * colors.length)];
      return {
        x: Math.random() * width,
        y: anywhere ? Math.random() * height : height + 10,
        px: 0,
        py: 0,
        seed: Math.random() * Math.PI * 2,
        speed: 0.35 + Math.random() * 0.9,
        weight: 0.4 + Math.random() * 1.1,
        alpha: 0.05 + Math.random() * 0.1,
        color: c
      };
    }

    function field(x, y) {
      const s = 0.0017;
      const a = Math.sin(x * s + time * 0.00008) * Math.cos(y * s * 0.9 - time * 0.00005);
      const b = Math.sin((x + y) * s * 0.72 + time * 0.00011);
      return (a * 0.6 + b * 0.4) * Math.PI * 2;
    }

    function paintBurst(n) {
      const colors = palette();
      ctx.lineCap = "round";
      for (let i = 0; i < n; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const angle = field(x, y) + Math.random() * 0.8;
        const len = 6 + Math.random() * 22;
        const c = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
        ctx.strokeStyle = `rgba(${c},${0.04 + Math.random() * 0.08})`;
        ctx.lineWidth = 0.4 + Math.random() * 1;
        ctx.stroke();
      }
    }

    function paintStill() {
      ctx.clearRect(0, 0, width, height);
      const colors = palette();
      ctx.lineCap = "round";
      const n = Math.min(1400, Math.floor((width * height) / 900));
      for (let i = 0; i < n; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        const angle = field(x, y) + Math.random() * 0.5;
        const len = 8 + Math.random() * 30;
        const c = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(angle) * len, y + Math.sin(angle) * len);
        ctx.strokeStyle = `rgba(${c},${0.05 + Math.random() * 0.08})`;
        ctx.lineWidth = 0.4 + Math.random() * 1.1;
        ctx.stroke();
      }
    }

    function frame() {
      if (!running) return;

      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.03)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "source-over";
      ctx.lineCap = "round";

      const colors = palette();

      for (const p of particles) {
        p.px = p.x;
        p.py = p.y;

        const angle = field(p.x, p.y) + p.seed * 0.15;
        let vx = Math.cos(angle) * p.speed;
        let vy = Math.sin(angle) * p.speed;

        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 190) {
            const force = (1 - dist / 190) * 2.6;
            vx += (dx / dist) * force;
            vy += (dy / dist) * force;
          }
        }

        p.x += vx;
        p.y += vy;

        if (p.x < -30 || p.x > width + 30 || p.y < -30 || p.y > height + 30) {
          const fresh = spawn(colors);
          p.x = fresh.x;
          p.y = fresh.y;
          p.px = p.x;
          p.py = p.y;
          p.color = fresh.color;
          continue;
        }

        ctx.beginPath();
        ctx.moveTo(p.px, p.py);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(${p.color},${p.alpha})`;
        ctx.lineWidth = p.weight;
        ctx.stroke();
      }

      time += 16;
      raf = window.requestAnimationFrame(frame);
    }

    function start() {
      if (reduced || running) return;
      running = true;
      time += 16;
      raf = window.requestAnimationFrame(frame);
    }

    function stop() {
      running = false;
      window.cancelAnimationFrame(raf);
    }

    function reset() {
      stop();
      resize();
      if (inView && !reduced) start();
    }

    hero.addEventListener("pointermove", (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    }, { passive: true });

    hero.addEventListener("pointerleave", () => { mouse.active = false; });

    if ("IntersectionObserver" in window) {
      new IntersectionObserver((entries) => {
        inView = entries[0].isIntersecting;
        if (inView && !reduced) start();
        else stop();
      }, { threshold: 0.02 }).observe(hero);
    }

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stop();
      else if (inView && !reduced) start();
    });

    document.addEventListener("fctheme", reset);

    const onMotionChange = () => {
      reduced = reduceQuery.matches;
      if (reduced) {
        stop();
        paintStill();
      } else {
        reset();
      }
    };
    if (typeof reduceQuery.addEventListener === "function") {
      reduceQuery.addEventListener("change", onMotionChange);
    }

    let paintResizeTimer = null;
    window.addEventListener("resize", () => {
      clearTimeout(paintResizeTimer);
      paintResizeTimer = setTimeout(() => {
        stop();
        resize();
        if (inView && !reduced) start();
      }, 180);
    }, { passive: true });

    resize();
    start();
  }

  /* =========================================================
     INIT
     ========================================================= */
  function init() {
    applyTheme(state.theme);
    applyLanguage(state.lang);

    renderAll();
    setupMenu();
    setupEvents();
    initReveal();
    initPaint();

    state.activeRoom = "top";
    updateRoomIndicator();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        window.setTimeout(() => {
          target.scrollIntoView({ behavior: "auto", block: "start" });
          const heading = target.querySelector(".room__title, .hero__title");
          if (heading && heading.hasAttribute("tabindex")) heading.focus({ preventScroll: true });
        }, 100);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
