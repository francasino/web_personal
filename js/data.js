/**
 * Dr. Fran Casino — research portfolio data store
 * Verified against Google Scholar (user=YzfuK8AAAAAJ, November 2026),
 * the CVN FECYT record (May 2026) and github.com/francasino.
 * Bilingual content: EN / ES.
 */

const siteData = {
  profile: {
    name: "Dr. Fran Casino",
    shortName: "Fran Casino",
    fullName: "Francisco José Casino Cembellín",
    born: "Tarragona, 1986",
    title: {
      en: "Ramón y Cajal Senior Researcher & Lecturer",
      es: "Investigador Senior Ramón y Cajal y Docente"
    },
    tagline: {
      en: "",
      es: ""
    },
    rank: {
      en: "IEEE Senior Member • Stanford Top 2% — single-year since 2021, career-long since 2026",
      es: "Senior Member IEEE • Top 2% de Stanford — anual desde 2021, trayectoria completa desde 2026"
    },
    affiliation: {
      institution: "Universitat Rovira i Virgili (URV)",
      department: "Departament d'Enginyeria Informàtica i Matemàtiques (DEIM)",
      group: "ASCLEPIUS Research Group",
      campus: "Campus Sescelades",
      location: "Tarragona, Spain",
      url: "https://www.urv.cat/en/research/support/programmes/ramon-y-cajal/casino/"
    },
    email: "franciscojose.casino@urv.cat",
    identifiers: {
      orcid: "0000-0003-4296-2876",
      researcherId: "AAB-7833-2021",
      scopus: "56022479700"
    },
    avatar: "assets/profile-modern-figure.jpg",
    socialLinks: [
      {
        id: "scholar",
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=YzfuK8AAAAAJ&hl=en",
        metric: "9,315 citations · h-index 35",
        tag: "Verified"
      },
      {
        id: "orcid",
        name: "ORCID",
        url: "https://orcid.org/0000-0003-4296-2876",
        metric: "0000-0003-4296-2876",
        tag: "Author ID"
      },
      {
        id: "cvn",
        name: "CVN FECYT",
        url: "https://editor.cvn.fecyt.es/editor/cvnOnline/0000-0003-4296-2876",
        metric: "Normalised CV · May 2026",
        tag: "CVN"
      },
      {
        id: "scopus",
        name: "Scopus",
        url: "https://www.scopus.com/authid/detail.uri?authorId=56022479700",
        metric: "ID 56022479700",
        tag: "Elsevier"
      },
      {
        id: "researchgate",
        name: "ResearchGate",
        url: "https://www.researchgate.net/profile/Fran-Casino",
        metric: "Fran Casino",
        tag: "Profile"
      },
      {
        id: "github",
        name: "GitHub",
        url: "https://github.com/francasino",
        metric: "@francasino",
        tag: "Code"
      },
      {
        id: "linkedin",
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fran-casino-212783133/",
        metric: "fran-casino",
        tag: "Network"
      },
      {
        id: "kizuna",
        name: "Kizuna Global",
        url: "https://kizunaglobal.org",
        metric: "kizunaglobal.org",
        tag: "Association"
      }
    ],
    metrics: [
      { id: "citations", val: 9315, prefix: "+", labelEn: "Citations", labelEs: "Citas" },
      { id: "hindex", val: 35, prefix: "", labelEn: "h-index", labelEs: "Índice h" },
      { id: "i10", val: 59, prefix: "", labelEn: "i10-index", labelEs: "Índice i10" },
      { id: "publications", val: 75, prefix: "+", labelEn: "Publications", labelEs: "Publicaciones" },
      { id: "ranking", val: "Top 2%", prefix: "", labelEn: "Stanford · single-year since 2021 · career-long since 2026", labelEs: "Stanford · anual desde 2021 · trayectoria completa desde 2026" }
    ],
    honors: {
      en: [
        "Ramón y Cajal Fellow",
        "IEEE Senior Member",
        "Stanford Top 2% — single-year since 2021",
        "Stanford Top 2% — career-long since 2026",
        "Extraordinary Doctorate Award"
      ],
      es: [
        "Investigador Ramón y Cajal",
        "IEEE Senior Member",
        "Top 2% Stanford — anual desde 2021",
        "Top 2% Stanford — trayectoria completa desde 2026",
        "Premio Extraordinario de Doctorado"
      ]
    },
    keywords: [
      "Pattern recognition",
      "Cognitive security",
      "Data management",
      "Privacy protection",
      "Cybercrime",
      "Digital investigations",
      "Recommender systems",
      "Supply chain",
      "Blockchain"
    ],
    bio: {
      en: "Dr. Fran Casino (Francisco José Casino Cembellín, Tarragona, 1986) is a member of the teaching and research staff in the Department of Computer Engineering and Mathematics at Universitat Rovira i Virgili (URV). He obtained his B.Sc. in Computer Science in 2010 and his M.Sc. in Computer Security and Intelligent Systems in 2013, both from URV. He received a Ph.D. in Computer Science from URV in 2017 with honours (Cum Laude) and the best dissertation award.\n\nHe completed several stays at international research institutions for more than five years, including ISCTE-IUL (Portugal), the University of Piraeus and the Athena Research Center (Greece). He is currently one of the coordinators of project ECEAAS (PID2024-158490OB-C31), funded by the Spanish Government, and has participated in European projects such as SAFEHORIZON, ALUNA, LAZARUS, CTC, HEROES, LOCARD, YAKSHA, OPERANDO, PRACTICIES, MITIGATE and GAME-ABLING, as well as national projects such as CONDOR, IoTrain, SIMPATIC, ARES and CO-PRIVACY.\n\nHis recent work combines intelligent data acquisition, natural language processing, computer vision and cognitive learning to ease digital forensic investigations, and he has contributed to blockchain-based architectures for criminal investigation, supply chain, finance, smart health and recommender systems. He has authored more than 70 publications, including 38 journal articles (34 with impact factor, 20 in Q1), 35 conference papers and 3 book chapters. He is a Senior Member of IEEE, and he has appeared in Stanford University's Top 2% single-year ranking since 2021 and in the career-long ranking since 2026. He contributes to ISO/IEC JTC1/SC27 WG4, co-authored CWA 17865:2022, has supervised one doctoral thesis and currently supervises four more.",
      es: "El Dr. Fran Casino (Francisco José Casino Cembellín, Tarragona, 1986) forma parte del personal docente e investigador del Departamento de Ingeniería Informática y Matemáticas de la Universitat Rovira i Virgili (URV). Es Graduado en Informática (2010) y Máster en Seguridad Informática y Sistemas Inteligentes (2013) por la URV. En 2017 obtuvo el Doctorado en Informática con mención Cum Laude y el premio a la mejor tesis doctoral.\n\nHa realizado estancias en instituciones internacionales durante más de cinco años, entre ellas ISCTE-IUL (Portugal), la Universidad del Pireo y el Athena Research Center (Grecia). Actualmente es uno de los coordinadores del proyecto ECEAAS (PID2024-158490OB-C31), financiado por el Gobierno de España, y ha participado en proyectos europeos como SAFEHORIZON, ALUNA, LAZARUS, CTC, HEROES, LOCARD, YAKSHA, OPERANDO, PRACTICIES, MITIGATE y GAME-ABLING, así como en proyectos nacionales como CONDOR, IoTrain, SIMPATIC, ARES y CO-PRIVACY.\n\nSu trabajo reciente combina adquisición inteligente de datos, procesamiento de lenguaje natural, visión por computador y aprendizaje cognitivo para facilitar las investigaciones forenses digitales, y ha contribuido a arquitecturas basadas en blockchain para investigación criminal, cadena de suministro, finanzas, salud inteligente y sistemas de recomendación. Es autor de más de 70 publicaciones, entre ellas 38 artículos de revista (34 con factor de impacto, 20 en Q1), 35 trabajos en congresos y 3 capítulos de libro. Es Senior Member del IEEE y figura en el Top 2% de Stanford en la modalidad anual desde 2021 y en la de trayectoria completa desde 2026. Contribuye al ISO/IEC JTC1/SC27 WG4, es coautor de CWA 17865:2022, ha dirigido una tesis doctoral y dirige actualmente otras cuatro."
    }
  },

  researchPillars: [
    {
      id: "forensics",
      titleEn: "Cybersecurity & Digital Forensics",
      titleEs: "Ciberseguridad e Informática Forense",
      descEn: "Wire-speed classification of encrypted traffic, malware deobfuscation with large language models, symbolic execution against evasive threats, and verifiable digital chain of custody.",
      descEs: "Clasificación de tráfico cifrado a velocidad de red, desofuscación de malware con grandes modelos de lenguaje, ejecución simbólica frente a amenazas evasivas y cadena de custodia digital verificable.",
      tags: ["Malware deobfuscation", "Encrypted traffic", "Chain of custody", "Symbolic execution", "Cloud forensics"]
    },
    {
      id: "blockchain",
      titleEn: "Blockchain & Decentralized Systems",
      titleEs: "Blockchain y Sistemas Descentralizados",
      descEn: "Systematic reviews and taxonomies of blockchain applications, controlled mutability for GDPR compliance, supply-chain traceability, IoT integration and decentralized forensic auditing.",
      descEs: "Revisiones sistemáticas y taxonomías de aplicaciones blockchain, mutabilidad controlada para el RGPD, trazabilidad de cadenas de suministro, integración IoT y auditoría forense descentralizada.",
      tags: ["Smart contracts", "Supply chain", "Mutability", "Decentralized storage", "Auditability"]
    },
    {
      id: "cognitive",
      titleEn: "Cognitive Security & AI",
      titleEs: "Seguridad Cognitiva e IA",
      descEn: "Taxonomies of cognitive attack vectors and disinformation campaigns, analysis of algorithmic polarization, and empirical evaluation of LLM capabilities in vulnerability discovery.",
      descEs: "Taxonomías de vectores de ataque cognitivos y campañas de desinformación, análisis de polarización algorítmica y evaluación empírica de LLM en la detección de vulnerabilidades.",
      tags: ["Cognitive security", "Disinformation", "LLM evaluation", "AI threats", "Threat intelligence"]
    },
    {
      id: "privacy",
      titleEn: "Privacy & Recommender Systems",
      titleEs: "Privacidad y Sistemas de Recomendación",
      descEn: "Privacy-preserving collaborative filtering, differential privacy, homomorphic and perturbation protocols for e-commerce, crowdsourcing architectures and smart healthcare ecosystems.",
      descEs: "Filtrado colaborativo con preservación de privacidad, privacidad diferencial, protocolos homomórficos y de perturbación para comercio electrónico, crowdsourcing y salud digital.",
      tags: ["Differential privacy", "Collaborative filtering", "e-Health", "Crowdsourcing", "Data governance"]
    }
  ],

  projects: [
    {
      id: "safehorizon",
      code: "SAFEHORIZON",
      grant: "GA 101168562",
      type: "Horizon Europe",
      programme: "eu",
      period: "2024 – 2027",
      titleEn: "Collaborative European Resilience Framework",
      titleEs: "Marco Colaborativo Europeo de Resiliencia",
      descEn: "Multi-layered cyber resilience platform integrating cognitive threat intelligence, secure multi-domain data sharing and automated forensic readiness across European critical infrastructures.",
      descEs: "Plataforma de resiliencia cibernética que integra inteligencia de amenazas cognitivas, intercambio seguro de datos y preparación forense automatizada en infraestructuras críticas europeas.",
      roleEn: "Researcher & Task Lead",
      roleEs: "Investigador y responsable de tareas",
      tags: ["Cyber resilience", "Cognitive threats", "Threat intelligence"],
      url: "https://cordis.europa.eu/project/id/101168562"
    },
    {
      id: "lazarus",
      code: "LAZARUS",
      grant: "GA 101070303",
      type: "Horizon Europe",
      programme: "eu",
      period: "2022 – 2025",
      titleEn: "Platform for Resilient & Secure Software",
      titleEs: "Plataforma para Software Resiliente y Seguro",
      descEn: "Framework to detect software vulnerabilities, mitigate exploitation vectors and protect digital supply chains through hybrid dynamic–static code analysis and automated reasoning.",
      descEs: "Marco para detectar vulnerabilidades, mitigar vectores de explotación y proteger cadenas de suministro mediante análisis híbrido de código y razonamiento automático.",
      roleEn: "Senior Researcher & Work Package Contributor",
      roleEs: "Investigador senior y contribuyente en paquetes de trabajo",
      tags: ["Software security", "Supply chain", "Hybrid analysis"],
      url: "https://lazarus-he.eu/"
    },
    {
      id: "heroes",
      code: "HEROES",
      grant: "GA 101021801",
      type: "Horizon 2020",
      programme: "eu",
      period: "2021 – 2024",
      titleEn: "AI Strategies Against Child Exploitation & Trafficking",
      titleEs: "Estrategias de IA contra la Explotación Infantil y la Trata",
      descEn: "AI, machine learning and forensic tools for law enforcement agencies to support victim identification, evidence discovery and the fight against online trafficking.",
      descEs: "Herramientas de IA, aprendizaje automático y análisis forense para fuerzas policiales, orientadas a la identificación de víctimas y la lucha contra la trata en línea.",
      roleEn: "Key Technical Investigator",
      roleEs: "Investigador técnico clave",
      tags: ["Digital forensics", "Law enforcement AI", "Victim protection"],
      url: "https://heroes-fct.es/"
    },
    {
      id: "ctc",
      code: "CTC",
      grant: "GA 101036276",
      type: "EU Security",
      programme: "eu",
      period: "2021 – 2024",
      titleEn: "Counter-Terrorism Digital Forensic Infrastructure",
      titleEs: "Infraestructura Forense contra el Terrorismo",
      descEn: "Technological and algorithmic frameworks for cross-border evidence collection, forensic cross-referencing and proactive intelligence against organized hostile actors.",
      descEs: "Marcos tecnológicos y algorítmicos para la recogida transfronteriza de evidencias, el cruce forense y la inteligencia proactiva frente a actores hostiles organizados.",
      roleEn: "Research Investigator",
      roleEs: "Investigador",
      tags: ["Counter-terrorism", "Evidence analysis", "Intelligence"],
      url: "https://cordis.europa.eu/project/id/101036276"
    },
    {
      id: "locard",
      code: "LOCARD",
      grant: "GA 832735",
      type: "Horizon 2020",
      programme: "eu",
      period: "2019 – 2022",
      titleEn: "Lawful Evidence Collection & Blockchain Chain of Custody",
      titleEs: "Recogida Legal de Evidencias y Cadena de Custodia Blockchain",
      descEn: "Blockchain-anchored platform for immutable chain of custody, verifiable evidence sharing and standardized peer-to-peer exchange in cross-border cloud and web investigations.",
      descEs: "Plataforma anclada en blockchain para una cadena de custodia inmutable, intercambio verificable de evidencias y estandarización forense transfronteriza en la nube.",
      roleEn: "Senior Research Fellow",
      roleEs: "Investigador senior",
      tags: ["Blockchain forensics", "Chain of custody", "Cloud forensics"],
      url: "https://locard.eu/"
    },
    {
      id: "eceaas",
      code: "ECEAAS",
      grant: "PID2024-158490OB-C31",
      type: "Spanish National R&D Plan",
      programme: "national",
      period: "2025 – 2028",
      titleEn: "Energy, Computing & Cognitive Defense Strategies",
      titleEs: "Estrategias de Energía, Computación y Defensa Cognitiva",
      descEn: "Distributed optimization, privacy mechanisms and cognitive-attack defenses for critical and smart environments, funded by the Spanish Government. Project coordinator.",
      descEs: "Optimización distribuida, mecanismos de privacidad y defensas frente a ciberataques cognitivos en entornos críticos e inteligentes, financiado por el Gobierno de España. Coordinador del proyecto.",
      roleEn: "Co-Principal Investigator & Coordinator",
      roleEs: "Co-investigador principal y coordinador",
      tags: ["National research", "Smart environments", "Cognitive defense"],
      url: "https://smarttechresearch.com/projects/eceaas/"
    },
    {
      id: "condor",
      code: "CONDOR",
      grant: "PID2021-127409OB-C33",
      type: "Spanish National R&D Plan",
      programme: "national",
      period: "2022 – 2025",
      titleEn: "Cognitive Computing Designed for Resilient Cities (CONDOR-SECURE)",
      titleEs: "Computación Cognitiva para Ciudades Resilientes (CONDOR-SECURE)",
      descEn: "Coordinated research project across UPNA, DeustoTech and URV developing cognitive urban environments. URV leads the transversal CONDOR-SECURE subproject addressing cybersecurity, privacy-preserving protocols, access control and AI ethics across smart sensor deployments.",
      descEs: "Proyecto de investigación coordinado entre UPNA, DeustoTech y URV para el desarrollo de entornos urbanos cognitivos. La URV lidera el subproyecto transversal CONDOR-SECURE en ciberseguridad, protocolos de privacidad, control de acceso y ética en IA.",
      roleEn: "Senior Researcher & Subproject Investigator (URV)",
      roleEs: "Investigador senior y miembro del subproyecto (URV)",
      tags: ["Resilient cities", "Cognitive computing", "AI ethics", "Urban cybersecurity"],
      url: "https://www.smarttechresearch.com/projects/condor/en/"
    },
    {
      id: "iotrain",
      code: "IoTrain-SECURE",
      grant: "RTI2018-095499-B-C32",
      type: "Spanish National R&D Plan",
      programme: "national",
      period: "2019 – 2022",
      titleEn: "Interactive, Connected & Secure Contexts for Passenger Rail Transport",
      titleEs: "Entornos Contextuales Interactivos, Conectados y Seguros para el Transporte Ferroviario",
      descEn: "Design and implementation of interactive, connected and secure contextual environments for passenger rail transport, leveraging IoT architectures, soft computing, wireless sensor networks and privacy-preserving protocols.",
      descEs: "Diseño e implementación de entornos contextuales interactivos, conectados y seguros para el transporte ferroviario de viajeros, integrando arquitecturas IoT, computación flexible, redes inalámbricas y privacidad.",
      roleEn: "Senior Researcher & Subproject Investigator (URV)",
      roleEs: "Investigador senior y miembro del subproyecto (URV)",
      tags: ["Rail transport IoT", "Soft computing", "Wireless security", "Context-aware systems"],
      url: "https://www.smarttechresearch.com/projects/iotrain/en/"
    }
  ],

  projectArchive: [
    { code: "ALUNA", grant: "GA 101084929", type: "Horizon Europe", programme: "eu" },
    { code: "YAKSHA", grant: "GA 780498", type: "Horizon 2020", programme: "eu" },
    { code: "OPERANDO", grant: "GA 653704", type: "Horizon 2020", programme: "eu" },
    { code: "PRACTICIES", grant: "GA 740072", type: "Horizon 2020", programme: "eu" },
    { code: "MITIGATE", grant: "GA 653212", type: "Horizon 2020", programme: "eu" },
    { code: "GAME-ABLING", grant: "FP7-SME-2012-1-315032", type: "FP7", programme: "eu" },
    { code: "SIMPATIC", grant: "RECERCAIXA 2013–2015", type: "National / AGAUR", programme: "national" },
    { code: "ARES", grant: "CONSOLIDER INGENIO 2010", type: "National", programme: "national" },
    { code: "CO-PRIVACY", grant: "TIN2011-27076-C03-0", type: "National", programme: "national" },
    { code: "SidNet", grant: "COST CA24169", type: "COST Action", programme: "eu" },
    { code: "CRYPTACUS", grant: "COST IC1403", type: "COST Action", programme: "eu" },
    { code: "GOODBROTHER", grant: "COST CA19121", type: "COST Action", programme: "eu" }
  ],

  publications: [
    {
      id: "pub-01",
      title: "A systematic literature review of blockchain-based applications: Current status, classification and open issues",
      authors: ["Fran Casino", "Thomas K. Dasaklis", "Constantinos Patsakis"],
      journal: "Telematics and Informatics",
      publisher: "Elsevier",
      year: 2019,
      volume: "36",
      pages: "55–81",
      citations: 4567,
      doi: "10.1016/j.tele.2018.11.006",
      url: "https://doi.org/10.1016/j.tele.2018.11.006",
      category: "blockchain",
      highlight: true,
      abstractEn: "A comprehensive systematic literature review of blockchain-based applications across finance, supply chain, healthcare, IoT and governance, evaluating architectural trends, classification and open research challenges.",
      abstractEs: "Revisión sistemática exhaustiva de aplicaciones basadas en blockchain en finanzas, cadena de suministro, salud, IoT y gobernanza, evaluando tendencias arquitectónicas, clasificación y retos abiertos.",
      bibtex: `@article{casino2019systematic,\n  title={A systematic literature review of blockchain-based applications: Current status, classification and open issues},\n  author={Casino, Fran and Dasaklis, Thomas K and Patsakis, Constantinos},\n  journal={Telematics and Informatics},\n  volume={36},\n  pages={55--81},\n  year={2019},\n  publisher={Elsevier},\n  doi={10.1016/j.tele.2018.11.006}\n}`
    },
    {
      id: "pub-02",
      title: "Blockchain-based food supply chain traceability: a case study in the dairy sector",
      authors: ["Fran Casino", "Venetis Kanakaris", "Thomas K. Dasaklis", "Sotiris Moschuris", "Stelios Stachtiaris", "Maria Pagoni", "Nikolaos P. Rachaniotis"],
      journal: "International Journal of Production Research",
      publisher: "Taylor & Francis",
      year: 2021,
      volume: "59",
      number: "19",
      pages: "5758–5770",
      citations: 599,
      doi: "10.1080/00207543.2020.1790683",
      url: "https://doi.org/10.1080/00207543.2020.1790683",
      category: "blockchain",
      highlight: true,
      abstractEn: "Design and validation of a blockchain-based traceability architecture for the dairy supply chain, showing how distributed ledgers improve transparency, auditability and trust among producers, distributors and consumers.",
      abstractEs: "Diseño y validación de una arquitectura de trazabilidad basada en blockchain para la cadena de suministro láctea, demostrando mejoras en transparencia, auditabilidad y confianza entre productores, distribuidores y consumidores.",
      bibtex: `@article{casino2021blockchain,\n  title={Blockchain-based food supply chain traceability: a case study in the dairy sector},\n  author={Casino, Fran and Kanakaris, Venetis and Dasaklis, Thomas K and Moschuris, Sotiris and Stachtiaris, Stelios and Pagoni, Maria and Rachaniotis, Nikolaos P},\n  journal={International Journal of Production Research},\n  volume={59},\n  number={19},\n  pages={5758--5770},\n  year={2021},\n  publisher={Taylor & Francis},\n  doi={10.1080/00207543.2020.1790683}\n}`
    },
    {
      id: "pub-03",
      title: "Blockchain mutability: Challenges and proposed solutions",
      authors: ["Eleni Politou", "Fran Casino", "Efthimios Alepis", "Constantinos Patsakis"],
      journal: "IEEE Transactions on Emerging Topics in Computing",
      publisher: "IEEE",
      year: 2021,
      volume: "9",
      number: "4",
      pages: "1972–1986",
      citations: 501,
      doi: "10.1109/TETC.2019.2949510",
      url: "https://doi.org/10.1109/TETC.2019.2949510",
      category: "blockchain",
      highlight: false,
      abstractEn: "While immutability defines blockchain, GDPR's right to be forgotten and bug rectification demand controlled mutability. The paper analyzes redactable blockchains, chameleon hashing and policy-driven rewriting mechanisms.",
      abstractEs: "Aunque la inmutabilidad define blockchain, el derecho al olvido del RGPD exige mutabilidad controlada. El artículo analiza blockchains redactables, hashes camaleón y mecanismos de reescritura regulada.",
      bibtex: `@article{politou2021blockchain,\n  title={Blockchain mutability: Challenges and proposed solutions},\n  author={Politou, Eleni and Casino, Fran and Alepis, Efthimios and Patsakis, Constantinos},\n  journal={IEEE Transactions on Emerging Topics in Computing},\n  volume={9},\n  number={4},\n  pages={1972--1986},\n  year={2021},\n  publisher={IEEE},\n  doi={10.1109/TETC.2019.2949510}\n}`
    },
    {
      id: "pub-04",
      title: "Research trends, challenges, and emerging topics in digital forensics: A review of reviews",
      authors: ["Fran Casino", "Thomas K. Dasaklis", "Georgios Spathoulas", "Marios Anagnostopoulos", "Aditya Ghosal", "et al."],
      journal: "IEEE Access",
      publisher: "IEEE",
      year: 2022,
      volume: "10",
      pages: "25480–25501",
      citations: 283,
      doi: "10.1109/ACCESS.2022.3155823",
      url: "https://doi.org/10.1109/ACCESS.2022.3155823",
      category: "forensics",
      highlight: true,
      abstractEn: "A meta-review synthesizing over a decade of forensic research and identifying paradigm shifts in cloud forensics, memory analysis, anti-forensics and judicial standardization.",
      abstractEs: "Meta-revisión que sintetiza más de una década de investigación forense e identifica cambios de paradigma en análisis en la nube, memoria, técnicas anti-forenses y estandarización judicial.",
      bibtex: `@article{casino2022research,\n  title={Research trends, challenges, and emerging topics in digital forensics: A review of reviews},\n  author={Casino, Fran and Dasaklis, Thomas K and Spathoulas, Georgios and Anagnostopoulos, Marios and Ghosal, Aditya and others},\n  journal={IEEE Access},\n  volume={10},\n  pages={25480--25501},\n  year={2022},\n  publisher={IEEE},\n  doi={10.1109/ACCESS.2022.3155823}\n}`
    },
    {
      id: "pub-05",
      title: "HEDGE: Efficient traffic classification of encrypted and compressed packets",
      authors: ["Fran Casino", "Kim-Kwang Raymond Choo", "Constantinos Patsakis"],
      journal: "IEEE Transactions on Information Forensics and Security",
      publisher: "IEEE",
      year: 2019,
      volume: "14",
      number: "11",
      pages: "2916–2926",
      citations: 109,
      doi: "10.1109/TIFS.2019.2910070",
      url: "https://doi.org/10.1109/TIFS.2019.2910070",
      category: "forensics",
      highlight: true,
      abstractEn: "With end-to-end encryption and compression, deep packet inspection is often ineffective. HEDGE proposes an efficient entropy and statistical framework to differentiate encrypted from compressed payloads at wire speed.",
      abstractEs: "Con el cifrado de extremo a extremo y la compresión, la inspección profunda resulta ineficaz. HEDGE propone un marco de entropía y análisis estadístico para discriminar paquetes cifrados y comprimidos a velocidad de red.",
      bibtex: `@article{casino2019hedge,\n  title={HEDGE: Efficient traffic classification of encrypted and compressed packets},\n  author={Casino, Fran and Choo, Kim-Kwang Raymond and Patsakis, Constantinos},\n  journal={IEEE Transactions on Information Forensics and Security},\n  volume={14},\n  number={11},\n  pages={2916--2926},\n  year={2019},\n  publisher={IEEE},\n  doi={10.1109/TIFS.2019.2910070}\n}`
    },
    {
      id: "pub-06",
      title: "Unveiling the multifaceted concept of cognitive security: Trends, perspectives, and future challenges",
      authors: ["Fran Casino"],
      journal: "Technology in Society",
      publisher: "Elsevier",
      year: 2025,
      volume: "80",
      pages: "102789",
      citations: 28,
      doi: "10.1016/j.techsoc.2024.102789",
      url: "https://doi.org/10.1016/j.techsoc.2024.102789",
      category: "cognitive",
      highlight: true,
      abstractEn: "Cognitive security addresses attacks on human cognition, belief formation and decision-making through manipulated digital information. The paper constructs a unified taxonomy of cognitive threats, algorithmic polarization, deepfakes and societal defenses.",
      abstractEs: "La seguridad cognitiva aborda ataques a la cognición, la formación de creencias y la toma de decisiones mediante información manipulada. El artículo articula una taxonomía unificada de amenazas cognitivas, polarización algorítmica, deepfakes y defensas sociales.",
      bibtex: `@article{casino2025unveiling,\n  title={Unveiling the multifaceted concept of cognitive security: Trends, perspectives, and future challenges},\n  author={Casino, Fran},\n  journal={Technology in Society},\n  volume={80},\n  pages={102789},\n  year={2025},\n  publisher={Elsevier},\n  doi={10.1016/j.techsoc.2024.102789}\n}`
    },
    {
      id: "pub-07",
      title: "Assessing LLMs in malicious code deobfuscation of real-world malware campaigns",
      authors: ["Constantinos Patsakis", "Fran Casino", "Nikolaos Lykousas"],
      journal: "Expert Systems with Applications",
      publisher: "Elsevier",
      year: 2024,
      volume: "256",
      pages: "124920",
      citations: 130,
      doi: "10.1016/j.eswa.2024.124920",
      url: "https://doi.org/10.1016/j.eswa.2024.124920",
      category: "cognitive",
      highlight: true,
      abstractEn: "An empirical investigation of state-of-the-art LLMs in deobfuscating and reverse-engineering malicious scripts from live threat campaigns, evaluating fidelity, syntactic reconstruction and reasoning.",
      abstractEs: "Estudio empírico de LLM de última generación en la desofuscación e ingeniería inversa de scripts maliciosos de campañas reales, evaluando fidelidad, reconstrucción sintáctica y razonamiento.",
      bibtex: `@article{patsakis2024assessing,\n  title={Assessing LLMs in malicious code deobfuscation of real-world malware campaigns},\n  author={Patsakis, Constantinos and Casino, Fran and Lykousas, Nikolaos},\n  journal={Expert Systems with Applications},\n  volume={256},\n  pages={124920},\n  year={2024},\n  publisher={Elsevier},\n  doi={10.1016/j.eswa.2024.124920}\n}`
    },
    {
      id: "pub-08",
      title: "A k-anonymous approach to privacy preserving collaborative filtering",
      authors: ["Fran Casino", "Josep Domingo-Ferrer", "Constantinos Patsakis", "Domenec Puig", "Agusti Solanas"],
      journal: "Journal of Computer and System Sciences",
      publisher: "Elsevier",
      year: 2015,
      volume: "81",
      number: "6",
      pages: "1000–1011",
      citations: 125,
      doi: "10.1016/j.jcss.2014.12.013",
      url: "https://doi.org/10.1016/j.jcss.2014.12.013",
      category: "privacy",
      highlight: false,
      abstractEn: "Introduces a k-anonymous collaborative filtering scheme that protects user ratings while preserving recommendation quality, a foundational contribution to privacy-preserving recommender systems.",
      abstractEs: "Presenta un esquema de filtrado colaborativo k-anónimo que protege las valoraciones de los usuarios manteniendo la calidad de las recomendaciones, contribución fundamental a los sistemas de recomendación con privacidad.",
      bibtex: `@article{casino2015kanonymous,\n  title={A k-anonymous approach to privacy preserving collaborative filtering},\n  author={Casino, Fran and Domingo-Ferrer, Josep and Patsakis, Constantinos and Puig, Domenec and Solanas, Agusti},\n  journal={Journal of Computer and System Sciences},\n  volume={81},\n  number={6},\n  pages={1000--1011},\n  year={2015},\n  publisher={Elsevier},\n  doi={10.1016/j.jcss.2014.12.013}\n}`
    },
    {
      id: "pub-09",
      title: "SoK: Cross-border criminal investigations and digital evidence",
      authors: ["Fran Casino", "Cristian Pina", "Pablo López-Aguilar", "Edgar Batista", "Agusti Solanas", "Constantinos Patsakis"],
      journal: "Journal of Cybersecurity",
      publisher: "Oxford University Press",
      year: 2022,
      volume: "8",
      number: "1",
      pages: "tyac014",
      citations: 114,
      doi: "10.1093/cybsec/tyac014",
      url: "https://doi.org/10.1093/cybsec/tyac014",
      category: "forensics",
      highlight: false,
      abstractEn: "Systematizes the legal, technical and organizational obstacles of cross-border digital evidence exchange, and maps emerging blockchain-based and standardized chain-of-custody solutions.",
      abstractEs: "Sistematiza los obstáculos legales, técnicos y organizativos del intercambio transfronterizo de evidencias digitales y describe soluciones emergentes basadas en blockchain y cadena de custodia estandarizada.",
      bibtex: `@article{casino2022sok,\n  title={SoK: Cross-border criminal investigations and digital evidence},\n  author={Casino, Fran and Pina, Cristian and L{\\'o}pez-Aguilar, Pablo and Batista, Edgar and Solanas, Agusti and Patsakis, Constantinos},\n  journal={Journal of Cybersecurity},\n  volume={8},\n  number={1},\n  pages={tyac014},\n  year={2022},\n  publisher={Oxford University Press},\n  doi={10.1093/cybsec/tyac014}\n}`
    },
    {
      id: "pub-10",
      title: "Outside the comfort zone: Analysing LLM capabilities in software vulnerability detection",
      authors: ["Yuejun Guo", "Constantinos Patsakis", "Qiang Hu", "Qiang Tang", "Fran Casino"],
      journal: "European Symposium on Research in Computer Security (ESORICS)",
      publisher: "Springer",
      year: 2024,
      pages: "271–289",
      citations: 104,
      doi: "10.1007/978-3-031-70896-1_14",
      url: "https://doi.org/10.1007/978-3-031-70896-1_14",
      category: "cognitive",
      highlight: false,
      abstractEn: "A systematic evaluation of large language models for vulnerability detection in real codebases, exposing strengths, blind spots and the gap between benchmark performance and practical security use.",
      abstractEs: "Evaluación sistemática de grandes modelos de lenguaje para la detección de vulnerabilidades en código real, mostrando fortalezas, puntos ciegos y la brecha entre benchmarks y uso práctico en seguridad.",
      bibtex: `@inproceedings{guo2024outside,\n  title={Outside the comfort zone: Analysing LLM capabilities in software vulnerability detection},\n  author={Guo, Yuejun and Patsakis, Constantinos and Hu, Qiang and Tang, Qiang and Casino, Fran},\n  booktitle={European Symposium on Research in Computer Security},\n  pages={271--289},\n  year={2024},\n  publisher={Springer},\n  doi={10.1007/978-3-031-70896-1_14}\n}`
    },
    {
      id: "pub-11",
      title: "Research trends on big data privacy: A comprehensive survey",
      authors: ["Fran Casino", "Constantinos Patsakis", "Edgar Batista", "Agusti Solanas"],
      journal: "ACM Computing Surveys",
      publisher: "ACM",
      year: 2020,
      volume: "53",
      number: "4",
      pages: "1–38",
      citations: 380,
      doi: "10.1145/3397268",
      url: "https://doi.org/10.1145/3397268",
      category: "privacy",
      highlight: true,
      abstractEn: "An extensive taxonomy of anonymization paradigms, cryptographic solutions, differential privacy and decentralized trust systems for big data, covering user profiling and re-identification risks.",
      abstractEs: "Taxonomía exhaustiva de paradigmas de anonimización, soluciones criptográficas, privacidad diferencial y sistemas de confianza descentralizados para big data, incluyendo perfilado y reidentificación.",
      bibtex: `@article{casino2020research,\n  title={Research trends on big data privacy: A comprehensive survey},\n  author={Casino, Fran and Patsakis, Constantinos and Batista, Edgar and Solanas, Agusti},\n  journal={ACM Computing Surveys},\n  volume={53},\n  number={4},\n  pages={1--38},\n  year={2020},\n  publisher={ACM},\n  doi={10.1145/3397268}\n}`
    },
    {
      id: "pub-12",
      title: "Beyond the sandbox: Leveraging symbolic execution for evasive malware classification",
      authors: ["Vasileios Vouvoutsis", "Fran Casino", "Constantinos Patsakis"],
      journal: "Computers & Security",
      publisher: "Elsevier",
      year: 2024,
      volume: "139",
      pages: "103720",
      citations: 32,
      doi: "10.1016/j.cose.2024.103720",
      url: "https://doi.org/10.1016/j.cose.2024.103720",
      category: "forensics",
      highlight: false,
      abstractEn: "Introduces an automated symbolic-execution framework that uncovers dormant execution paths and classifies sandbox evasion triggers without requiring full dynamic execution.",
      abstractEs: "Introduce un marco automatizado de ejecución simbólica que descubre rutas de ejecución latentes y clasifica desencadenantes de evasión de sandbox sin requerir ejecución dinámica completa.",
      bibtex: `@article{vouvoutsis2024beyond,\n  title={Beyond the sandbox: Leveraging symbolic execution for evasive malware classification},\n  author={Vouvoutsis, Vasileios and Casino, Fran and Patsakis, Constantinos},\n  journal={Computers & Security},\n  volume={139},\n  pages={103720},\n  year={2024},\n  publisher={Elsevier},\n  doi={10.1016/j.cose.2024.103720}\n}`
    },
    {
      id: "pub-13",
      title: "Efficient privacy-preserving collaborative filtering for e-commerce and health recommender systems",
      authors: ["Fran Casino", "Edgar Batista", "Agusti Solanas"],
      journal: "Information Sciences",
      publisher: "Elsevier",
      year: 2017,
      volume: "405",
      pages: "148–163",
      citations: 175,
      doi: "10.1016/j.ins.2017.04.012",
      url: "https://doi.org/10.1016/j.ins.2017.04.012",
      category: "privacy",
      highlight: false,
      abstractEn: "A foundational work from Dr. Casino's doctoral dissertation developing homomorphic and perturbation-based collaborative filtering that protects user ratings and patient privacy without degrading accuracy.",
      abstractEs: "Trabajo fundamental de la tesis doctoral del Dr. Casino que desarrolla filtrado colaborativo homomórfico y basado en perturbación para proteger valoraciones y privacidad médica sin perder precisión.",
      bibtex: `@article{casino2017efficient,\n  title={Efficient privacy-preserving collaborative filtering for e-commerce and health recommender systems},\n  author={Casino, Fran and Batista, Edgar and Solanas, Agusti},\n  journal={Information Sciences},\n  volume={405},\n  pages={148--163},\n  year={2017},\n  publisher={Elsevier},\n  doi={10.1016/j.ins.2017.04.012}\n}`
    },
    {
      id: "pub-14",
      title: "Security and privacy in complex, context-aware systems: a comprehensive framework",
      authors: ["Antoni Martínez-Ballesté","Edgar Batista","Elena Figueroa","Kaouther Nouni","Agustí Solanas","Fran Casino"],
      journal: "International Journal of Information Security",
      publisher: "Springer",
      year: 2026,
      volume: "25",
      number: "2",
      pages: "57",
      citations: 4,
      doi: "10.1007/s10207-026-01228-y",
      url: "https://doi.org/10.1007/s10207-026-01228-y",
      category: "privacy",
      highlight: true,
      abstractEn: "A unified framework that models security and privacy requirements for complex, context-aware systems, combining risk analysis, privacy-by-design and adaptive protection across sensing, edge and cloud layers.",
      abstractEs: "Marco unificado que modela los requisitos de seguridad y privacidad de sistemas complejos sensibles al contexto, combinando análisis de riesgos, privacidad desde el diseño y protección adaptativa en sensores, borde y nube.",
      bibtex: "@article{martinez2026security,\n  title={Security and privacy in complex, context-aware systems: a comprehensive framework},\n  author={Antoni Martínez-Ballesté and Edgar Batista and Elena Figueroa and Kaouther Nouni and Agustí Solanas and Fran Casino},\n  journal={International Journal of Information Security},\n  volume={25},\n  number={2},\n  pages={57},\n  year={2026},\n  publisher={Springer},\n  doi={10.1007/s10207-026-01228-y}\n}"
    },
    {
      id: "pub-15",
      title: "Cloud continuum testbeds and next-generation ICTs: Trends, challenges, and perspectives",
      authors: ["Fran Casino","Peio Lopez-Iturri","Constantinos Patsakis"],
      journal: "Computer Science Review",
      publisher: "Elsevier",
      year: 2025,
      volume: "56",
      pages: "100696",
      citations: 20,
      doi: "10.1016/j.cosrev.2024.100696",
      url: "https://doi.org/10.1016/j.cosrev.2024.100696",
      category: "systems",
      highlight: false,
      abstractEn: "A structured review of cloud-continuum testbeds and next-generation ICT infrastructures, mapping architectures, experimentation environments and open challenges for secure edge-to-cloud services.",
      abstractEs: "Revisión estructurada de bancos de pruebas del continuo cloud y de infraestructuras TIC de nueva generación, con arquitecturas, entornos de experimentación y retos para servicios seguros del borde a la nube.",
      bibtex: "@article{casino2025cloud,\n  title={Cloud continuum testbeds and next-generation ICTs: Trends, challenges, and perspectives},\n  author={Fran Casino and Peio Lopez-Iturri and Constantinos Patsakis},\n  journal={Computer Science Review},\n  volume={56},\n  pages={100696},\n  year={2025},\n  publisher={Elsevier},\n  doi={10.1016/j.cosrev.2024.100696}\n}"
    },
    {
      id: "pub-16",
      title: "Not on my watch: ransomware detection through classification of high-entropy file segments",
      authors: ["Fran Casino","Darren Hurley-Smith","Julio Hernandez-Castro","Constantinos Patsakis"],
      journal: "Journal of Cybersecurity",
      publisher: "Oxford University Press",
      year: 2025,
      volume: "11",
      number: "1",
      pages: "tyaf009",
      citations: 0,
      doi: "10.1093/cybsec/tyaf009",
      url: "https://doi.org/10.1093/cybsec/tyaf009",
      category: "forensics",
      highlight: true,
      abstractEn: "A ransomware detector that classifies high-entropy file segments to separate encrypted content from compressed data, reducing false positives while catching encryption bursts in real time.",
      abstractEs: "Detector de ransomware que clasifica segmentos de archivo de alta entropía para separar contenido cifrado de datos comprimidos, reduciendo falsos positivos y detectando ráfagas de cifrado en tiempo real.",
      bibtex: "@article{casino2025notwatch,\n  title={Not on my watch: ransomware detection through classification of high-entropy file segments},\n  author={Fran Casino and Darren Hurley-Smith and Julio Hernandez-Castro and Constantinos Patsakis},\n  journal={Journal of Cybersecurity},\n  volume={11},\n  number={1},\n  pages={tyaf009},\n  year={2025},\n  publisher={Oxford University Press},\n  doi={10.1093/cybsec/tyaf009}\n}"
    },
    {
      id: "pub-17",
      title: "A comprehensive analysis on software vulnerability detection datasets: trends, challenges, and road ahead",
      authors: ["Yuejun Guo","Seifeddine Bettaieb","Fran Casino"],
      journal: "International Journal of Information Security",
      publisher: "Springer",
      year: 2024,
      volume: "23",
      number: "5",
      pages: "3311–3327",
      citations: 44,
      doi: "10.1007/s10207-024-00888-y",
      url: "https://doi.org/10.1007/s10207-024-00888-y",
      category: "forensics",
      highlight: true,
      abstractEn: "A large-scale analysis of software vulnerability datasets, comparing labelling quality, coverage and bias, and outlining a roadmap for reproducible vulnerability-detection benchmarks.",
      abstractEs: "Análisis a gran escala de conjuntos de datos de vulnerabilidades de software, comparando calidad de etiquetado, cobertura y sesgo, y proponiendo una hoja de ruta para benchmarks reproducibles.",
      bibtex: "@article{guo2024comprehensive,\n  title={A comprehensive analysis on software vulnerability detection datasets: trends, challenges, and road ahead},\n  author={Yuejun Guo and Seifeddine Bettaieb and Fran Casino},\n  journal={International Journal of Information Security},\n  volume={23},\n  number={5},\n  pages={3311–3327},\n  year={2024},\n  publisher={Springer},\n  doi={10.1007/s10207-024-00888-y}\n}"
    },
    {
      id: "pub-18",
      title: "Analysis and correlation of visual evidence in campaigns of malicious Office documents",
      authors: ["Fran Casino","Nikolaos Totosis","Theodoros Apostolopoulos","Nikolaos Lykousas","Constantinos Patsakis"],
      journal: "Digital Threats: Research and Practice",
      publisher: "ACM",
      year: 2023,
      citations: 23,
      doi: "10.1145/3513025",
      url: "https://doi.org/10.1145/3513025",
      category: "forensics",
      highlight: false,
      abstractEn: "A forensic method that extracts and correlates visual artefacts from malicious Office documents to link campaigns, infrastructure and threat actors.",
      abstractEs: "Método forense que extrae y correlaciona artefactos visuales de documentos Office maliciosos para vincular campañas, infraestructura y actores de amenaza.",
      bibtex: "@article{casino2023analysis,\n  title={Analysis and correlation of visual evidence in campaigns of malicious Office documents},\n  author={Fran Casino and Nikolaos Totosis and Theodoros Apostolopoulos and Nikolaos Lykousas and Constantinos Patsakis},\n  journal={Digital Threats: Research and Practice},\n  year={2023},\n  publisher={ACM},\n  doi={10.1145/3513025}\n}"
    },
    {
      id: "pub-19",
      title: "A compression strategy for an efficient TSP-based microaggregation",
      authors: ["Armando Maya-López","Antoni Martínez-Ballesté","Fran Casino"],
      journal: "Expert Systems with Applications",
      publisher: "Elsevier",
      year: 2023,
      volume: "213",
      pages: "118980",
      citations: 4,
      doi: "10.1016/j.eswa.2022.118980",
      url: "https://doi.org/10.1016/j.eswa.2022.118980",
      category: "privacy",
      highlight: false,
      abstractEn: "A compression strategy that speeds up TSP-based multivariate microaggregation while preserving the privacy-utility trade-off in statistical disclosure control.",
      abstractEs: "Estrategia de compresión que acelera la microagregación multivariante basada en TSP manteniendo el equilibrio privacidad-utilidad en el control de revelación estadística.",
      bibtex: "@article{maya2023compression,\n  title={A compression strategy for an efficient TSP-based microaggregation},\n  author={Armando Maya-López and Antoni Martínez-Ballesté and Fran Casino},\n  journal={Expert Systems with Applications},\n  volume={213},\n  pages={118980},\n  year={2023},\n  publisher={Elsevier},\n  doi={10.1016/j.eswa.2022.118980}\n}"
    },
    {
      id: "pub-20",
      title: "Invoice #31415 attached: Automated analysis of malicious Microsoft Office documents",
      authors: ["Vasilios Koutsokostas","Nikolaos Lykousas","Theodoros Apostolopoulos","Gabriele Orazi","Amrita Ghosal","Fran Casino","Mauro Conti","Constantinos Patsakis"],
      journal: "Computers & Security",
      publisher: "Elsevier",
      year: 2022,
      volume: "114",
      pages: "102582",
      citations: 42,
      doi: "10.1016/j.cose.2021.102582",
      url: "https://doi.org/10.1016/j.cose.2021.102582",
      category: "forensics",
      highlight: false,
      abstractEn: "An automated pipeline for large-scale analysis of malicious Microsoft Office documents, combining static inspection, macro analysis and campaign correlation.",
      abstractEs: "Pipeline automatizado para el análisis a gran escala de documentos Microsoft Office maliciosos, combinando inspección estática, análisis de macros y correlación de campañas.",
      bibtex: "@article{koutsokostas2022invoice,\n  title={Invoice #31415 attached: Automated analysis of malicious Microsoft Office documents},\n  author={Vasilios Koutsokostas and Nikolaos Lykousas and Theodoros Apostolopoulos and Gabriele Orazi and Amrita Ghosal and Fran Casino and Mauro Conti and Constantinos Patsakis},\n  journal={Computers & Security},\n  volume={114},\n  pages={102582},\n  year={2022},\n  publisher={Elsevier},\n  doi={10.1016/j.cose.2021.102582}\n}"
    },
    {
      id: "pub-21",
      title: "On the effectiveness of binary emulation in malware classification",
      authors: ["Vasilis Vouvoutsis","Fran Casino","Constantinos Patsakis"],
      journal: "Journal of Information Security and Applications",
      publisher: "Elsevier",
      year: 2022,
      volume: "68",
      pages: "103258",
      citations: 23,
      doi: "10.1016/j.jisa.2022.103258",
      url: "https://doi.org/10.1016/j.jisa.2022.103258",
      category: "forensics",
      highlight: false,
      abstractEn: "An empirical study of binary emulation for malware classification, measuring how emulated execution improves family detection over static features.",
      abstractEs: "Estudio empírico de la emulación binaria para clasificar malware, midiendo cómo la ejecución emulada mejora la detección de familias frente a características estáticas.",
      bibtex: "@article{vouvoutsis2022effectiveness,\n  title={On the effectiveness of binary emulation in malware classification},\n  author={Vasilis Vouvoutsis and Fran Casino and Constantinos Patsakis},\n  journal={Journal of Information Security and Applications},\n  volume={68},\n  pages={103258},\n  year={2022},\n  publisher={Elsevier},\n  doi={10.1016/j.jisa.2022.103258}\n}"
    },
    {
      id: "pub-22",
      title: "An efficient blockchain-based privacy-preserving collaborative filtering architecture",
      authors: ["Fran Casino","Constantinos Patsakis"],
      journal: "IEEE Transactions on Engineering Management",
      publisher: "IEEE",
      year: 2020,
      citations: 53,
      doi: "10.1109/TEM.2019.2944279",
      url: "https://doi.org/10.1109/TEM.2019.2944279",
      category: "blockchain",
      highlight: false,
      abstractEn: "A blockchain-based architecture that preserves privacy in collaborative filtering by distributing ratings and computations while keeping recommendation quality.",
      abstractEs: "Arquitectura basada en blockchain que preserva la privacidad en filtrado colaborativo distribuyendo valoraciones y cálculos sin perder calidad de recomendación.",
      bibtex: "@article{casino2020efficient,\n  title={An efficient blockchain-based privacy-preserving collaborative filtering architecture},\n  author={Fran Casino and Constantinos Patsakis},\n  journal={IEEE Transactions on Engineering Management},\n  year={2020},\n  publisher={IEEE},\n  doi={10.1109/TEM.2019.2944279}\n}"
    },
    {
      id: "pub-23",
      title: "Delegated content erasure in IPFS",
      authors: ["Eugenia Politou","Efthimios Alepis","Constantinos Patsakis","Fran Casino","Mamoun Alazab"],
      journal: "Future Generation Computer Systems",
      publisher: "Elsevier",
      year: 2020,
      volume: "112",
      pages: "956–964",
      citations: 70,
      doi: "10.1016/j.future.2020.06.037",
      url: "https://doi.org/10.1016/j.future.2020.06.037",
      category: "blockchain",
      highlight: false,
      abstractEn: "A protocol for delegated erasure of content stored in IPFS, reconciling decentralized persistence with data-protection obligations.",
      abstractEs: "Protocolo para el borrado delegado de contenido almacenado en IPFS, conciliando la persistencia descentralizada con las obligaciones de protección de datos.",
      bibtex: "@article{politou2020delegated,\n  title={Delegated content erasure in IPFS},\n  author={Eugenia Politou and Efthimios Alepis and Constantinos Patsakis and Fran Casino and Mamoun Alazab},\n  journal={Future Generation Computer Systems},\n  volume={112},\n  pages={956–964},\n  year={2020},\n  publisher={Elsevier},\n  doi={10.1016/j.future.2020.06.037}\n}"
    },
    {
      id: "pub-24",
      title: "Immutability and decentralized storage: An analysis of emerging threats",
      authors: ["Fran Casino","Eugenia Politou","Efthimios Alepis","Constantinos Patsakis"],
      journal: "IEEE Access",
      publisher: "IEEE",
      year: 2020,
      volume: "8",
      citations: 80,
      doi: "10.1109/ACCESS.2019.2962017",
      url: "https://doi.org/10.1109/ACCESS.2019.2962017",
      category: "blockchain",
      highlight: false,
      abstractEn: "An analysis of emerging threats to immutable and decentralized storage, including illegal content, malware hosting and the limits of erasure.",
      abstractEs: "Análisis de amenazas emergentes al almacenamiento inmutable y descentralizado, incluyendo contenido ilegal, alojamiento de malware y los límites del borrado.",
      bibtex: "@article{casino2020immutability,\n  title={Immutability and decentralized storage: An analysis of emerging threats},\n  author={Fran Casino and Eugenia Politou and Efthimios Alepis and Constantinos Patsakis},\n  journal={IEEE Access},\n  volume={8},\n  year={2020},\n  publisher={IEEE},\n  doi={10.1109/ACCESS.2019.2962017}\n}"
    },
    {
      id: "pub-25",
      title: "Exploiting statistical and structural features for the detection of Domain Generation Algorithms",
      authors: ["Constantinos Patsakis","Fran Casino"],
      journal: "Journal of Information Security and Applications",
      publisher: "Elsevier",
      year: 2021,
      volume: "58",
      pages: "102725",
      citations: 33,
      doi: "10.1016/j.jisa.2020.102725",
      url: "https://doi.org/10.1016/j.jisa.2020.102725",
      category: "forensics",
      highlight: false,
      abstractEn: "A detection approach that combines statistical and structural features of domain names to identify algorithmically generated domains used by botnets.",
      abstractEs: "Enfoque de detección que combina características estadísticas y estructurales de nombres de dominio para identificar dominios generados algorítmicamente por botnets.",
      bibtex: "@article{patsakis2021exploiting,\n  title={Exploiting statistical and structural features for the detection of Domain Generation Algorithms},\n  author={Constantinos Patsakis and Fran Casino},\n  journal={Journal of Information Security and Applications},\n  volume={58},\n  pages={102725},\n  year={2021},\n  publisher={Elsevier},\n  doi={10.1016/j.jisa.2020.102725}\n}"
    },
    {
      id: "pub-26",
      title: "Hydras and IPFS: a decentralised playground for malware",
      authors: ["Constantinos Patsakis","Fran Casino"],
      journal: "International Journal of Information Security",
      publisher: "Springer",
      year: 2019,
      volume: "18",
      number: "6",
      pages: "787–799",
      citations: 55,
      doi: "10.1007/s10207-019-00443-0",
      url: "https://doi.org/10.1007/s10207-019-00443-0",
      category: "forensics",
      highlight: false,
      abstractEn: "A study of malware abuse of IPFS and decentralized naming systems, documenting hosting, resilience and takedown challenges.",
      abstractEs: "Estudio del abuso de IPFS y sistemas de nombres descentralizados por malware, documentando alojamiento, resiliencia y dificultades de retirada.",
      bibtex: "@article{patsakis2019hydras,\n  title={Hydras and IPFS: a decentralised playground for malware},\n  author={Constantinos Patsakis and Fran Casino},\n  journal={International Journal of Information Security},\n  volume={18},\n  number={6},\n  pages={787–799},\n  year={2019},\n  publisher={Springer},\n  doi={10.1007/s10207-019-00443-0}\n}"
    },
    {
      id: "pub-27",
      title: "Enhanced wireless channel estimation through parametric optimization of hybrid ray launching-collaborative filtering technique",
      authors: ["Fran Casino","Peio Lopez-Iturri","Erik Aguirre","Leire Azpilicueta","Francisco Falcone","Agustí Solanas"],
      journal: "IEEE Access",
      publisher: "IEEE",
      year: 2020,
      volume: "8",
      pages: "83070–83080",
      citations: 8,
      doi: "10.1109/ACCESS.2020.2992033",
      url: "https://doi.org/10.1109/ACCESS.2020.2992033",
      category: "systems",
      highlight: false,
      abstractEn: "A hybrid ray-launching and collaborative-filtering method for estimating wireless channels in large complex environments with reduced computational cost.",
      abstractEs: "Método híbrido de ray launching y filtrado colaborativo para estimar canales inalámbricos en entornos complejos grandes con menor coste computacional.",
      bibtex: "@article{casino2020enhanced,\n  title={Enhanced wireless channel estimation through parametric optimization of hybrid ray launching-collaborative filtering technique},\n  author={Fran Casino and Peio Lopez-Iturri and Erik Aguirre and Leire Azpilicueta and Francisco Falcone and Agustí Solanas},\n  journal={IEEE Access},\n  volume={8},\n  pages={83070–83080},\n  year={2020},\n  publisher={IEEE},\n  doi={10.1109/ACCESS.2020.2992033}\n}"
    },
    {
      id: "pub-28",
      title: "Healthy routes in the smart city: A context-aware mobile recommender",
      authors: ["Fran Casino","Constantinos Patsakis","Edgar Batista","Frederic Borràs","Antoni Martínez-Ballesté"],
      journal: "IEEE Software",
      publisher: "IEEE",
      year: 2017,
      volume: "34",
      number: "6",
      pages: "42–47",
      citations: 75,
      doi: "10.1109/MS.2017.4121209",
      url: "https://doi.org/10.1109/MS.2017.4121209",
      category: "privacy",
      highlight: false,
      abstractEn: "A context-aware mobile recommender that computes healthy walking routes in the smart city using environmental, user and urban data.",
      abstractEs: "Recomendador móvil sensible al contexto que calcula rutas saludables a pie en la ciudad inteligente usando datos ambientales, del usuario y urbanos.",
      bibtex: "@article{casino2017healthy,\n  title={Healthy routes in the smart city: A context-aware mobile recommender},\n  author={Fran Casino and Constantinos Patsakis and Edgar Batista and Frederic Borràs and Antoni Martínez-Ballesté},\n  journal={IEEE Software},\n  volume={34},\n  number={6},\n  pages={42–47},\n  year={2017},\n  publisher={IEEE},\n  doi={10.1109/MS.2017.4121209}\n}"
    },
    {
      id: "pub-29",
      title: "Improving multivariate microaggregation through Hamiltonian paths and optimal univariate microaggregation",
      authors: ["Armando Maya-López","Fran Casino","Agustí Solanas"],
      journal: "Symmetry",
      publisher: "MDPI",
      year: 2021,
      volume: "13",
      number: "6",
      pages: "916",
      citations: 8,
      doi: "10.3390/sym13060916",
      url: "https://doi.org/10.3390/sym13060916",
      category: "privacy",
      highlight: false,
      abstractEn: "A microaggregation method that builds Hamiltonian paths and applies optimal univariate microaggregation to improve multivariate privacy protection.",
      abstractEs: "Método de microagregación que construye caminos hamiltonianos y aplica microagregación univariante óptima para mejorar la protección de privacidad multivariante.",
      bibtex: "@article{maya2021improving,\n  title={Improving multivariate microaggregation through Hamiltonian paths and optimal univariate microaggregation},\n  author={Armando Maya-López and Fran Casino and Agustí Solanas},\n  journal={Symmetry},\n  volume={13},\n  number={6},\n  pages={916},\n  year={2021},\n  publisher={MDPI},\n  doi={10.3390/sym13060916}\n}"
    },
    {
      id: "pub-30",
      title: "EtherClue: Digital investigation of attacks on Ethereum smart contracts",
      authors: ["Simon Joseph Aquilina","Fran Casino","Mark Vella","Joshua Ellul","Constantinos Patsakis"],
      journal: "Blockchain: Research and Applications",
      publisher: "Elsevier",
      year: 2021,
      volume: "2",
      number: "4",
      pages: "100028",
      citations: 36,
      doi: "10.1016/j.bcra.2021.100028",
      url: "https://doi.org/10.1016/j.bcra.2021.100028",
      category: "blockchain",
      highlight: false,
      abstractEn: "A forensic framework for investigating attacks on Ethereum smart contracts, reconstructing transactions and supporting evidence collection.",
      abstractEs: "Marco forense para investigar ataques a contratos inteligentes de Ethereum, reconstruyendo transacciones y apoyando la recogida de evidencias.",
      bibtex: "@article{aquilina2021etherclue,\n  title={EtherClue: Digital investigation of attacks on Ethereum smart contracts},\n  author={Simon Joseph Aquilina and Fran Casino and Mark Vella and Joshua Ellul and Constantinos Patsakis},\n  journal={Blockchain: Research and Applications},\n  volume={2},\n  number={4},\n  pages={100028},\n  year={2021},\n  publisher={Elsevier},\n  doi={10.1016/j.bcra.2021.100028}\n}"
    },
  ],

  repoTree: {
    handle: "@francasino",
    url: "https://github.com/francasino?tab=repositories",
    count: 20,
    branches: [
      {
        id: "threats",
        titleEn: "Threat detection",
        titleEs: "Detección de amenazas",
        repos: [
          {
            name: "Ransomware_analysis",
            url: "https://github.com/francasino/Ransomware_analysis",
            language: "Jupyter Notebook",
            stars: 1,
            descEn: "Statistical and machine-learning pipeline for classifying high-entropy data streams.",
            descEs: "Pipeline estadístico y de aprendizaje automático para clasificar flujos de datos de alta entropía."
          },
          {
            name: "traffic_analysis",
            url: "https://github.com/francasino/traffic_analysis",
            language: "Shell",
            stars: 17,
            descEn: "Traffic classification using randomness tests, with automated database creation.",
            descEs: "Clasificación de tráfico mediante tests de aleatoriedad, con creación automática de bases de datos."
          },
          {
            name: "DGA_operations",
            url: "https://github.com/francasino/DGA_operations",
            language: "Data",
            stars: 0,
            descEn: "DGA datasets and feature-extraction documentation.",
            descEs: "Conjuntos de datos de DGA y documentación de extracción de características."
          },
          {
            name: "phishing_llms",
            url: "https://github.com/francasino/phishing_llms",
            language: "Jupyter Notebook",
            stars: 0,
            descEn: "LLMs for phishing detection, with feature selection and generation.",
            descEs: "LLM para detección de phishing, con selección y generación de características."
          }
        ]
      },
      {
        id: "chain",
        titleEn: "Blockchain & forensics",
        titleEs: "Blockchain y forense",
        repos: [
          {
            name: "financial_forensics",
            url: "https://github.com/francasino/financial_forensics",
            language: "JavaScript",
            stars: 3,
            descEn: "Smart contracts and interfaces for verifiable digital forensic investigations.",
            descEs: "Contratos inteligentes e interfaces para investigaciones forenses digitales verificables."
          },
          {
            name: "food_supply_case_scenario",
            url: "https://github.com/francasino/food_supply_case_scenario",
            language: "JavaScript",
            stars: 4,
            descEn: "Blockchain smart contracts for the Pagonis Dairy food-supply case.",
            descEs: "Contratos inteligentes blockchain para el caso de cadena de suministro Pagonis Dairy."
          },
          {
            name: "tokens",
            url: "https://github.com/francasino/tokens",
            language: "Solidity",
            stars: 2,
            descEn: "Mutable token-based digitalisation of goods for holistic supply chains.",
            descEs: "Digitalización mutable de bienes basada en tokens para cadenas de suministro holísticas."
          },
          {
            name: "Vehicular_Control_Version",
            url: "https://github.com/francasino/Vehicular_Control_Version",
            language: "Solidity",
            stars: 0,
            descEn: "Smart-contract version management for vehicular control.",
            descEs: "Gestión de versiones mediante contratos inteligentes para control vehicular."
          }
        ]
      },
      {
        id: "privacy",
        titleEn: "Privacy & data",
        titleEs: "Privacidad y datos",
        repos: [
          {
            name: "SDC_datasets",
            url: "https://github.com/francasino/SDC_datasets",
            language: "Data",
            stars: 0,
            descEn: "Datasets for statistical disclosure control experiments.",
            descEs: "Conjuntos de datos para experimentos de control de revelación estadística."
          },
          {
            name: "RS_DBs",
            url: "https://github.com/francasino/RS_DBs",
            language: "Data",
            stars: 0,
            descEn: "Recommender-systems databases for reproducible experiments.",
            descEs: "Bases de datos de sistemas de recomendación para experimentos reproducibles."
          },
          {
            name: "CollaborativeFiltering",
            url: "https://github.com/francasino/CollaborativeFiltering",
            language: "Data",
            stars: 0,
            descEn: "Implementations of several collaborative-filtering methods.",
            descEs: "Implementaciones de varios métodos de filtrado colaborativo."
          }
        ]
      },
      {
        id: "cognitive",
        titleEn: "Cognitive & community",
        titleEs: "Cognición y comunidad",
        repos: [
          {
            name: "dyn_federated_learning",
            url: "https://github.com/francasino/dyn_federated_learning",
            language: "Jupyter Notebook",
            stars: 0,
            descEn: "Feature selection, autoencoders and distributed learning for cognitive scenarios.",
            descEs: "Selección de características, autoencoders y aprendizaje distribuido para escenarios cognitivos."
          },
          {
            name: "llm_elderly",
            url: "https://github.com/francasino/llm_elderly",
            language: "Jupyter Notebook",
            stars: 0,
            descEn: "Agents that enhance conversational tasks with older adults.",
            descEs: "Agentes que mejoran tareas conversacionales con personas mayores."
          },
          {
            name: "kizuna-site",
            url: "https://github.com/francasino/kizuna-site",
            language: "JavaScript",
            stars: 0,
            descEn: "Website of Kizuna Global, a Tarragona non-profit association.",
            descEs: "Sitio web de Kizuna Global, asociación sin ánimo de lucro de Tarragona."
          }
        ]
      }
    ]
  },

  gallery: [
    {
      titleEn: "Premi Joan Pedro i Gallego, URV 2025",
      titleEs: "Premi Joan Pedro i Gallego, URV 2025",
      descEn: "Ceremony of the Premi Joan Pedro i Gallego a l'impacte social de la recerca, Universitat Rovira i Virgili, Tarragona.",
      descEs: "Acto del Premi Joan Pedro i Gallego a l'impacte social de la recerca, Universitat Rovira i Virgili, Tarragona.",
      image: "assets/consell-social-2025.jpg",
      width: 1600,
      height: 565,
      tag: "Award"
    },
    {
      titleEn: "URSI 2025, Tarragona",
      titleEs: "URSI 2025, Tarragona",
      descEn: "CONDOR project team at the URSI National Symposium, Tarragona.",
      descEs: "Equipo del proyecto CONDOR en el Simposio Nacional URSI, Tarragona.",
      image: "assets/ursi.jpg",
      width: 1280,
      height: 806,
      tag: "Conference"
    },
    {
      titleEn: "ALUNA consortium meeting, UCM",
      titleEs: "Reunión del consorcio ALUNA, UCM",
      descEn: "ALUNA project team at Universidad Complutense de Madrid: child-protection-centred strategies against sexual abuse and exploitation.",
      descEs: "Equipo del proyecto ALUNA en la Universidad Complutense de Madrid: estrategias centradas en la protección infantil frente al abuso y la explotación sexual.",
      image: "assets/research-portfolio.jpg",
      width: 1200,
      height: 900,
      tag: "Consortium"
    },
    {
      titleEn: "ApplyApps 2025, Politecnico di Torino",
      titleEs: "ApplyApps 2025, Politecnico di Torino",
      descEn: "First International Conference on Applications in Electronics Pervading Industry, Environment and Society, Turin.",
      descEs: "Primera Conferencia Internacional sobre Aplicaciones de la Electrónica en la Industria, el Medio Ambiente y la Sociedad, Turín.",
      image: "assets/research-systems.jpg",
      width: 1200,
      height: 900,
      tag: "Conference"
    }
  ],

  community: {
    titleEn: "Kizuna Global — Social Resilience & Digital Inclusion",
    titleEs: "Kizuna Global — Resiliencia Social e Inclusión Digital",
    url: "https://kizunaglobal.org",
    location: "Avinguda Lluís Companys 14, Tarragona, Spain",
    descEn: "Alongside his academic research at URV, Dr. Fran Casino collaborates with Kizuna Global, a non-profit association in Tarragona. Kizuna promotes social cohesion, youth leadership, emotional well-being and digital literacy through inclusive workshops and ethical technology aligned with the UN 2030 Agenda.",
    descEs: "Además de su investigación en la URV, el Dr. Fran Casino colabora con Kizuna Global, asociación sin ánimo de lucro de Tarragona. Kizuna promueve la cohesión social, el liderazgo juvenil, el bienestar emocional y la alfabetización digital mediante talleres inclusivos y tecnología ética alineada con la Agenda 2030.",
    pillars: [
      {
        titleEn: "Digital resilience & inclusion",
        titleEs: "Resiliencia e inclusión digital",
        descEn: "Practical programs and workshops that bridge the digital divide and promote cyber-hygiene in Tarragona.",
        descEs: "Programas y talleres prácticos que combaten la brecha digital y fomentan la ciberhigiene en Tarragona."
      },
      {
        titleEn: "Youth & citizen well-being",
        titleEs: "Bienestar ciudadano y juventud",
        descEn: "Collaborative spaces for psychosocial well-being, equality and community empowerment.",
        descEs: "Espacios colaborativos para el bienestar psicosocial, la igualdad y el empoderamiento comunitario."
      },
      {
        titleEn: "Ethical technology & open systems",
        titleEs: "Tecnología ética y sistemas abiertos",
        descEn: "Ethical data practices, open software infrastructures and responsible technological literacy.",
        descEs: "Prácticas éticas de datos, infraestructuras abiertas y capacitación tecnológica responsable."
      }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = siteData;
}
