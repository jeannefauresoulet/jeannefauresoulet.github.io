/*
 * ===============================================================
 *  CONTENU DU PORTFOLIO — C'EST LE SEUL FICHIER À REMPLIR
 * ===============================================================
 *  - Chaque texte existe en français (fr) et en anglais (en).
 *  - Tu peux mettre du HTML dans les textes : <strong>, <ul><li>, <a>...
 *  - Les chemins de fichiers sont relatifs à la racine du site
 *    (ex. "assets/cv/CV_FR.pdf").
 *  - Une valeur vide ("") pour une image / vidéo masque l'élément.
 */
const PORTFOLIO = {
  /* ---------- Identité ---------- */
  name: "Jeanne Faure-Soulet",
  footer: {
    fr: "Jeanne Faure-Soulet — JUNIA-HEI · Chimie innovante et transition écologique",
    en: "Jeanne Faure-Soulet — JUNIA-HEI · Innovative Chemistry & Ecological Transition",
  },
  linkedin: "https://www.linkedin.com/in/jeanne-faure-soulet-b374193aa",

  // Ta photo (carrée de préférence) — "" = initiales
  photo: "assets/img/photo.jpg",

  // Dépose tes PDF dans assets/cv/
  cv: {
    fr: { label: "CV (FR)", href: "assets/cv/CV_Jeanne_Faure-Soulet_FR.pdf" },
    en: { label: "CV (EN)", href: "assets/cv/CV_Jeanne_Faure-Soulet_EN.pdf" },
  },

  /* ---------- Accueil ---------- */
  home: {
    fr: {
      chip: "JUNIA-HEI · Lille",
      intro: `
        Élève-ingénieure en <strong>4<sup>e</sup> année</strong> à <strong>JUNIA-HEI</strong>,
        spécialité <strong>Chimie innovante et transition écologique</strong>.
        La chimie me passionne parce qu'elle permet de comprendre le monde et
        d'aider concrètement les autres : je m'intéresse à la
        <strong>chimie médicale et pharmaceutique</strong>, à la
        <strong>recherche médicale</strong> et à la <strong>formulation</strong>.
        <br /><br />
        🔎 Je recherche un <strong>stage de 3 mois en chimie à l'international</strong>,
        entre avril et juillet 2027.
      `,
      pitchTitle: "Elevator pitch",
      pitchIntro: "Ma présentation en 2-3 minutes (en anglais) :",
    },
    en: {
      chip: "JUNIA-HEI · Lille, France",
      intro: `
        I'm a <strong>4th-year engineering student</strong> at <strong>JUNIA-HEI</strong>,
        specialising in <strong>Innovative Chemistry & Ecological Transition</strong>.
        I love chemistry because it helps us understand the world and really help
        people: I'm especially interested in <strong>medicinal and pharmaceutical
        chemistry</strong>, <strong>medical research</strong> and
        <strong>formulation</strong>.
        <br /><br />
        🔎 I'm looking for a <strong>3-month chemistry internship abroad</strong>,
        between April and July 2027.
      `,
      pitchTitle: "Elevator pitch",
      pitchIntro: "My 2–3 minute career story:",
    },
  },

  // Soit un lien YouTube (ex. "https://youtu.be/xxxx"), soit un fichier .mp4 dans src.
  // Tant que les deux sont vides, le bloc vidéo n'est pas affiché.
  pitchVideo: {
    youtube: "",
    src: "",
    poster: "",
  },

  /* ---------- Parcours (du plus récent au plus ancien) ---------- */
  timeline: {
    fr: {
      title: "Parcours académique",
      items: [
        {
          title: "JUNIA-HEI, Lille — Cycle ingénieur",
          subtitle: "2025–2028 · Chimie innovante et transition écologique (4<sup>e</sup> année, actuel)",
        },
        { title: "CPGE PCSI – PC · Lycée Dumont d'Urville, Toulon", subtitle: "2023–2025" },
        {
          title: "Lycée Georges Duby · Aix-en-Provence",
          subtitle: "2023 · Bac général Maths et Physique-Chimie, avec mention",
        },
      ],
    },
    en: {
      title: "Academic pathway",
      items: [
        {
          title: "JUNIA-HEI, Lille — Engineering degree",
          subtitle: "2025–2028 · Innovative Chemistry & Ecological Transition (4th year, current)",
        },
        {
          title: "Classes préparatoires PCSI – PC · Lycée Dumont d'Urville, Toulon",
          subtitle: "2023–2025 · Undergraduate courses preparing for competitive entrance exams to engineering schools",
        },
        {
          title: "Lycée Georges Duby · Aix-en-Provence",
          subtitle: "2023 · French Baccalauréat (Maths & Physics-Chemistry), obtained with distinction",
        },
      ],
    },
  },

  /* ---------- Onglet "Parcours ingénieur" (page projets) ---------- */
  projectsIntro: {
    fr: {
      nav: "Formation",
      title: "Parcours ingénieur",
      lead: "Mon parcours, ma formation à JUNIA-HEI et ce que j'y apprends.",
      link: "Voir mon parcours",
      pageLead: "Formation et compétences.",
      projectsTitle: "Projets",
    },
    en: {
      nav: "Engineering",
      title: "Engineering course",
      lead: "My academic path, my studies at JUNIA-HEI and what I'm learning.",
      link: "See my path",
      pageLead: "Education and skills.",
      projectsTitle: "Projects",
    },
  },

  // Ce que j'apprends (affiché sur la page "Parcours ingénieur")
  courses: {
    fr: {
      title: "JUNIA-HEI — Chimie innovante et transition écologique",
      body: `
        <ul>
          <li><strong>Synthèse :</strong> synthèse organique, montage à reflux, extraction, recristallisation, distillation</li>
          <li><strong>Analyse :</strong> CCM, RMN, spectroscopie IR (FTIR), spectrophotométrie UV-visible, titrage</li>
          <li><strong>Outils :</strong> Word, Excel, PowerPoint</li>
        </ul>
      `,
    },
    en: {
      title: "JUNIA-HEI — Innovative Chemistry & Ecological Transition",
      body: `
        <ul>
          <li><strong>Synthesis:</strong> organic synthesis, reflux, extraction, recrystallisation, distillation</li>
          <li><strong>Analysis:</strong> TLC, NMR, IR spectroscopy (FTIR), UV-visible spectrophotometry, titration</li>
          <li><strong>Tools:</strong> Word, Excel, PowerPoint</li>
        </ul>
      `,
    },
  },

  /* ---------- Projets ----------
   * Vide pour l'instant : la section "Projets" n'est pas affichée.
   * Pour en ajouter un, voir le modèle dans le README.
   */
  projects: [],

  /* ---------- Sections de l'accueil (ajoutées au menu automatiquement) ---------- */
  sections: [
    {
      id: "mobility",
      fr: {
        nav: "Mobilité",
        title: "Mobilité internationale",
        body: `<p>J'ai déjà travaillé à l'étranger, et je veux continuer : voici mes expériences et trois projets, chacun lié à une de mes <a href="#career">femmes modèles</a>.</p>`,
        subcards: [
          {
            title: "✅ 🇮🇹 Italie — Gênes (2026)",
            body: `<p>Stage de recherche en chimie à l'Université de Gênes (mai–juin 2026) : traitement des eaux usées, électrochimie.</p>`,
          },
          {
            title: "✅ 🇷🇴 Roumanie — Bucarest (2026)",
            body: `<p>Programme Erasmus+ BIP « Polymères pour la santé » à l'Université POLITEHNICA (novembre 2026), entièrement en anglais.</p>`,
          },
          {
            title: "🇩🇪 Allemagne — formulation pharmaceutique",
            body: `<p>Stage en industrie pharmaceutique ou biotech, sur la formulation de médicaments.</p><p class="small">Lié au modèle n°1 : Katalin Karikó.</p>`,
          },
          {
            title: "🇸🇪 Suède — recherche médicale",
            body: `<p>Stage dans un laboratoire de recherche universitaire en chimie pour la santé.</p><p class="small">Lié au modèle n°2 : Emmanuelle Charpentier.</p>`,
          },
          {
            title: "🇺🇸 États-Unis — chimie médicinale",
            body: `<p>Stage dans un laboratoire ou une start-up de biotech, pour découvrir comment la chimie devient un médicament, et progresser en anglais.</p><p class="small">Lié au modèle n°3 : Carolyn Bertozzi.</p>`,
          },
        ],
      },
      en: {
        nav: "Mobility",
        title: "International mobility",
        body: `<p>I have already worked abroad and I want to keep going: here are my experiences and three projects, each linked to one of my <a href="#career">role models</a>.</p>`,
        subcards: [
          {
            title: "✅ 🇮🇹 Italy — Genoa (2026)",
            body: `<p>Chemistry research internship at the University of Genoa (May–June 2026): wastewater treatment, electrochemistry.</p>`,
          },
          {
            title: "✅ 🇷🇴 Romania — Bucharest (2026)",
            body: `<p>Erasmus+ Blended Intensive Programme "Polymers for health" at POLITEHNICA University (November 2026), fully in English.</p>`,
          },
          {
            title: "🇩🇪 Germany — pharmaceutical formulation",
            body: `<p>An internship in the pharmaceutical or biotech industry, working on drug formulation.</p><p class="small">Linked to role model #1: Katalin Karikó.</p>`,
          },
          {
            title: "🇸🇪 Sweden — medical research",
            body: `<p>An internship in a university research lab working on chemistry for health.</p><p class="small">Linked to role model #2: Emmanuelle Charpentier.</p>`,
          },
          {
            title: "🇺🇸 United States — medicinal chemistry",
            body: `<p>An internship in a lab or biotech start-up, to see how chemistry becomes a medicine, and to improve my English.</p><p class="small">Linked to role model #3: Carolyn Bertozzi.</p>`,
          },
        ],
      },
    },
    {
      id: "civic",
      fr: {
        nav: "Engagement",
        title: "Développement durable & engagement",
        body: `<p>Mes actions pour l'environnement et pour les autres.</p>`,
        subcards: [
          {
            title: "Fresque du Climat",
            body: `<p>Atelier collaboratif pour comprendre les causes et les conséquences du changement climatique.</p>`,
          },
          {
            title: "Traitement des eaux · ODD 6",
            body: `<p>Pendant mon stage à Gênes, j'ai travaillé sur la dégradation de polluants persistants (résidus de médicaments, colorants) dans les eaux usées.</p>`,
          },
          {
            title: "Empreinte carbone de JUNIA · ODD 13",
            body: `<p>Projet de groupe : analyse des émissions de l'école et propositions pour les réduire.</p>`,
          },
          {
            title: "BAFA & PSC1",
            body: `<p>Animatrice diplômée (BAFA) et formée aux premiers secours (PSC1).</p>`,
          },
          {
            title: "Vie étudiante",
            body: `<p>En 2025-2026, j'ai fait campagne avec une liste pour le bureau des sports (BDS) de l'école.</p>`,
          },
        ],
      },
      en: {
        nav: "Sustainability",
        title: "Sustainability & civic engagement",
        body: `<p>What I do for the environment and for others.</p>`,
        subcards: [
          {
            title: "Climate Fresk",
            body: `<p>A collaborative workshop to understand the causes and consequences of climate change.</p>`,
          },
          {
            title: "Water treatment · SDG 6",
            body: `<p>During my internship in Genoa, I worked on breaking down persistent pollutants (drug residues, dyes) in wastewater.</p>`,
          },
          {
            title: "JUNIA's carbon footprint · SDG 13",
            body: `<p>Group project: analysing the school's emissions and suggesting ways to reduce them.</p>`,
          },
          {
            title: "BAFA & first aid",
            body: `<p>Certified youth leader (BAFA, the French certificate for youth leaders) and trained in first aid (PSC1).</p>`,
          },
          {
            title: "Student life",
            body: `<p>In 2025-2026, I campaigned with a team running for the school's sports council (BDS).</p>`,
          },
        ],
      },
    },
    {
      id: "sports",
      fr: {
        nav: "Sport",
        title: "Sport & autres activités",
        body: `
          <ul>
            <li><strong>Gymnastique artistique</strong> pendant 10 ans : volonté et persévérance</li>
            <li><strong>Athlétisme</strong> : motivation et dépassement de soi</li>
            <li><strong>Piano</strong> : sensibilité et concentration</li>
            <li><strong>Voyages</strong> : découvrir d'autres cultures et m'adapter</li>
          </ul>
          <p>Langues : français (langue maternelle), anglais (B2), espagnol (B1).</p>
        `,
      },
      en: {
        nav: "Sports",
        title: "Sport & other activities",
        body: `
          <ul>
            <li><strong>Artistic gymnastics</strong> for 10 years: willpower and perseverance</li>
            <li><strong>Athletics</strong>: motivation and pushing my limits</li>
            <li><strong>Piano</strong>: sensitivity and focus</li>
            <li><strong>Travelling</strong>: discovering other cultures and adapting</li>
          </ul>
          <p>Languages: French (mother tongue), English (B2), Spanish (B1).</p>
        `,
      },
    },
    {
      id: "career",
      fr: {
        nav: "Projet pro",
        title: "Projet professionnel",
        body: `
          <p>
            Je veux travailler dans la <strong>chimie médicale et pharmaceutique</strong> :
            recherche médicale, conception et <strong>formulation de médicaments</strong>.
            Motivée, curieuse et fiable, j'aime m'investir et prendre des initiatives en équipe.
          </p>
          <div class="btn-row">
            <a class="btn primary" href="assets/cv/CV_Jeanne_Faure-Soulet_FR.pdf" download>📄 CV (FR)</a>
            <a class="btn" href="assets/cv/CV_Jeanne_Faure-Soulet_EN.pdf" download>📄 CV (EN)</a>
            <a class="btn linkedin linkedin-link" href="https://www.linkedin.com/in/jeanne-faure-soulet-b374193aa" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        `,
        subcards: [
          {
            title: "Modèle n°1 — Katalin Karikó",
            body: `<p><strong>Biochimiste</strong>, prix Nobel de médecine 2023 pour ses travaux sur l'ARN messager, à la base des vaccins contre le Covid-19.</p><p>Pendant des années, ses recherches n'ont pas été soutenues, mais elle a continué. Elle a ensuite rejoint BioNTech en Allemagne.</p><p><strong>Ce que j'en retiens :</strong> la persévérance. Croire en ses idées même quand personne n'y croit encore.</p><p class="small">→ Mobilité : Allemagne.</p>`,
          },
          {
            title: "Modèle n°2 — Emmanuelle Charpentier",
            body: `<p><strong>Chercheuse française</strong>, prix Nobel de chimie 2020 pour les « ciseaux génétiques » CRISPR-Cas9.</p><p>Elle a travaillé dans plusieurs pays. Le projet CRISPR-Cas9 a démarré dans son laboratoire à l'Université d'Umeå, en Suède.</p><p><strong>Ce que j'en retiens :</strong> oser partir à l'étranger ouvre des portes, et une femme française peut aller tout en haut de la recherche.</p><p class="small">→ Mobilité : Suède.</p>`,
          },
          {
            title: "Modèle n°3 — Carolyn Bertozzi",
            body: `<p><strong>Chimiste américaine</strong>, professeure à Stanford, prix Nobel de chimie 2022 pour la chimie bioorthogonale : des réactions qui fonctionnent dans le corps sans le perturber.</p><p>Ses travaux ouvrent des pistes contre le cancer, et elle a cofondé plusieurs entreprises de biotech.</p><p><strong>Ce que j'en retiens :</strong> la chimie peut vraiment soigner, et on peut être à la fois chercheuse et entrepreneuse.</p><p class="small">→ Mobilité : États-Unis.</p>`,
          },
          {
            title: "Expérience",
            body: `
              <ul>
                <li><strong>Erasmus+ BIP « Polymères pour la santé »</strong>, Univ. POLITEHNICA de Bucarest — nov. 2026</li>
                <li><strong>Stage de recherche en chimie</strong>, Univ. de Gênes — mai–juin 2026</li>
                <li><strong>Baby-sitter</strong>, Aix-en-Provence — 2020–2025</li>
                <li><strong>Stage en laboratoire de géosciences</strong>, CEREGE — déc. 2021</li>
              </ul>
            `,
          },
        ],
      },
      en: {
        nav: "Career",
        title: "Career development",
        body: `
          <p>
            I want to work in <strong>medicinal and pharmaceutical chemistry</strong>:
            medical research, drug design and <strong>formulation</strong>.
            Motivated, curious and reliable, I like getting involved and taking
            initiative in a team.
          </p>
          <div class="btn-row">
            <a class="btn primary" href="assets/cv/CV_Jeanne_Faure-Soulet_EN.pdf" download>📄 CV (EN)</a>
            <a class="btn" href="assets/cv/CV_Jeanne_Faure-Soulet_FR.pdf" download>📄 CV (FR)</a>
            <a class="btn linkedin linkedin-link" href="https://www.linkedin.com/in/jeanne-faure-soulet-b374193aa" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        `,
        subcards: [
          {
            title: "Role model #1 — Katalin Karikó",
            body: `<p><strong>Biochemist</strong>, 2023 Nobel Prize in Medicine for her work on messenger RNA, the basis of the Covid-19 vaccines.</p><p>For years her research got little support, but she kept going. She later joined BioNTech in Germany.</p><p><strong>What I take from her:</strong> perseverance. Believing in your ideas even when nobody else does yet.</p><p class="small">→ Mobility: Germany.</p>`,
          },
          {
            title: "Role model #2 — Emmanuelle Charpentier",
            body: `<p><strong>French researcher</strong>, 2020 Nobel Prize in Chemistry for the CRISPR-Cas9 "genetic scissors".</p><p>She worked in several countries. The CRISPR-Cas9 project started in her lab at Umeå University, in Sweden.</p><p><strong>What I take from her:</strong> daring to go abroad opens doors, and a French woman can reach the very top of research.</p><p class="small">→ Mobility: Sweden.</p>`,
          },
          {
            title: "Role model #3 — Carolyn Bertozzi",
            body: `<p><strong>American chemist</strong>, Stanford professor, 2022 Nobel Prize in Chemistry for bioorthogonal chemistry: reactions that work inside the body without disturbing it.</p><p>Her work opens new paths against cancer, and she has co-founded several biotech companies.</p><p><strong>What I take from her:</strong> chemistry can really heal people, and you can be both a researcher and an entrepreneur.</p><p class="small">→ Mobility: United States.</p>`,
          },
          {
            title: "Experience",
            body: `
              <ul>
                <li><strong>Erasmus+ BIP "Polymers for health"</strong>, POLITEHNICA University of Bucharest — Nov. 2026</li>
                <li><strong>Chemistry research internship</strong>, University of Genoa — May–June 2026</li>
                <li><strong>Babysitter</strong>, Aix-en-Provence — 2020–2025</li>
                <li><strong>Geoscience lab placement</strong>, CEREGE — Dec. 2021</li>
              </ul>
            `,
          },
        ],
      },
    },
  ],
};
