// Page copy for every language. English is the source (the "Pinboard" design);
// French and Flemish are drafts awaiting review by a native speaker.
// French uses a no-break space ( ) before : ; ? ! as Belgian/French typography requires.

export const locales = ['en', 'fr', 'nl'] as const;
export type Locale = (typeof locales)[number];

export const localeLabels: Record<Locale, { short: string; name: string }> = {
  en: { short: 'EN', name: 'English' },
  fr: { short: 'FR', name: 'Français' },
  nl: { short: 'NL', name: 'Nederlands' },
};

export const localePaths: Record<Locale, string> = { en: '/', fr: '/fr/', nl: '/nl/' };

export interface Strings {
  title: string;
  description: string;
  languageNav: string;
  tag: string;
  heroLead: string;
  heroTogether: string;
  intro: string;
  sizes: {
    label: string;
    intro: string;
    cards: { letter: 'S' | 'M' | 'L'; name: string; text: string }[];
    after: string;
  };
  bring: { label: string; big: string; body: string };
  rules: { label: string; items: string[] };
  ways: {
    label: string;
    items: { verb: string; text: string }[];
    note: string;
  };
  bench: { label: string; text: string; status: string };
  footer: { status: string; signOff: string };
  theme: { label: string; auto: string; light: string; dark: string };
}

export const strings: Record<Locale, Strings> = {
  en: {
    title: 'Greenlabs — Come make something that works. Together.',
    description:
      'Greenlabs runs evenings, afternoons and weekends where neighbours, makers and curious people build working answers to ecological questions, in fablabs and tiers-lieux that already exist. Brussels first.',
    languageNav: 'Language',
    tag: 'free · open · together',
    heroLead: 'Come make something that works.',
    heroTogether: 'Together.',
    intro:
      'Evenings, afternoons and weekends where neighbours, makers, cooks and curious people build real answers to ecological questions — together, in workshops that already exist. Brussels first.',
    sizes: {
      label: 'Three sizes, pick yours',
      intro: 'Greenlabs comes in three sizes. Pick the one that fits your week.',
      cards: [
        { letter: 'S', name: 'Night', text: 'An evening, once a month, free. Someone shows a thing that works, you try one with your own hands, and we share a drink.' },
        { letter: 'M', name: 'Workshop', text: 'An afternoon. Build one object together and take it home. Materials at cost, nothing more.' },
        { letter: 'L', name: 'Weekend', text: 'Once a year. The big questions that need more hands and more time.' },
      ],
      after: 'Everything we build is shown at the next Night and published so anyone, anywhere, can build it too.',
    },
    bring: {
      label: "Bring what you've got",
      big: "You don't need to be an engineer or an activist. You need an evening and a bit of curiosity.",
      body: "We're looking for makers, coders, designers, gardeners, people who know how a town hall works, people who know their street — and cooks. Every weekend needs cooks.",
    },
    rules: {
      label: 'House rules',
      items: [
        'It works before we go home.',
        'Everything is shared: the plans, the code, the mistakes.',
        'The simplest version can be built at a kitchen table.',
        "If it makes life worse, it doesn't count. Living lighter should feel like a gain, not a sacrifice.",
        "We meet in places that already exist — fablabs, tiers-lieux, workshops. We don't build a place, we fill them.",
      ],
    },
    ways: {
      label: 'Three ways in',
      items: [
        { verb: 'Come.', text: "Come to a Night. It's free, and you'll leave with a working thing and a few new faces." },
        { verb: 'Host.', text: 'Host one, if you run a fablab, a tiers-lieu or a workshop with room for twenty people and a kettle.' },
        { verb: 'Build.', text: 'Help shape the first edition with us.' },
      ],
      note: "No sign-up yet. When there's a date, it will be right here.",
    },
    bench: {
      label: 'On the bench this season',
      text: 'An open-source app for communities with local, regional and national layers, so members find each other, information and events at every level — without handing their data to a platform. The code goes public at the first Night.',
      status: 'First Night: Brussels, winter 2026–27.',
    },
    footer: {
      status:
        "Greenlabs is a program, not a place, and not yet an association. It lives in other people's workshops and handles no money.",
      signOff: 'Not dreamers, not preachers: doers.',
    },
    theme: { label: 'Theme', auto: 'Auto', light: 'Light', dark: 'Dark' },
  },

  fr: {
    title: 'Greenlabs — Venez fabriquer quelque chose qui marche. Ensemble.',
    description:
      'Greenlabs organise des soirées, des après-midis et des week-ends où voisins, makers et curieux construisent des réponses concrètes aux questions écologiques, dans des fablabs et des tiers-lieux qui existent déjà. Bruxelles d’abord.',
    languageNav: 'Langue',
    tag: 'gratuit · ouvert · ensemble',
    heroLead: 'Venez fabriquer quelque chose qui marche.',
    heroTogether: 'Ensemble.',
    intro:
      'Des soirées, des après-midis et des week-ends où voisins, makers, cuisiniers et curieux construisent de vraies réponses aux questions écologiques — ensemble, dans des ateliers qui existent déjà. Bruxelles d’abord.',
    sizes: {
      label: 'Trois tailles, à vous de choisir',
      intro: 'Greenlabs existe en trois tailles. Choisissez celle qui colle à votre semaine.',
      cards: [
        { letter: 'S', name: 'Soirée', text: 'Une soirée par mois, gratuite. Quelqu’un montre un truc qui marche, vous en essayez un de vos propres mains, et on partage un verre.' },
        { letter: 'M', name: 'Atelier', text: 'Un après-midi. On fabrique un objet ensemble et vous le ramenez chez vous. Matériaux à prix coûtant, rien de plus.' },
        { letter: 'L', name: 'Week-end', text: 'Une fois par an. Les grandes questions qui demandent plus de mains et plus de temps.' },
      ],
      after: 'Tout ce qu’on construit est montré à la Soirée suivante et publié pour que n’importe qui, n’importe où, puisse le construire aussi.',
    },
    bring: {
      label: 'Apportez ce que vous avez',
      big: 'Pas besoin d’être ingénieur ou militant. Il vous faut une soirée et un peu de curiosité.',
      body: 'On cherche des makers, des codeurs, des designers, des jardiniers, des gens qui savent comment marche une maison communale, des gens qui connaissent leur rue — et des cuisiniers. Chaque week-end a besoin de cuisiniers.',
    },
    rules: {
      label: 'Règles de la maison',
      items: [
        'Ça marche avant qu’on rentre à la maison.',
        'Tout est partagé : les plans, le code, les erreurs.',
        'La version la plus simple se construit sur une table de cuisine.',
        'Si ça rend la vie pire, ça ne compte pas. Vivre plus léger devrait être un gain, pas un sacrifice.',
        'On se retrouve dans des lieux qui existent déjà — fablabs, tiers-lieux, ateliers. On ne construit pas de lieu, on les remplit.',
      ],
    },
    ways: {
      label: 'Trois façons d’en être',
      items: [
        { verb: 'Venez.', text: 'Venez à une Soirée. C’est gratuit, et vous repartirez avec un truc qui marche et quelques nouvelles têtes.' },
        { verb: 'Accueillez.', text: 'Accueillez-en une, si vous animez un fablab, un tiers-lieu ou un atelier avec de la place pour vingt personnes et une bouilloire.' },
        { verb: 'Construisez.', text: 'Aidez-nous à façonner la première édition.' },
      ],
      note: 'Pas encore d’inscription. Quand il y aura une date, elle sera ici.',
    },
    bench: {
      label: 'Sur l’établi cette saison',
      text: 'Une application open source pour les communautés organisées en niveaux local, régional et national, pour que les membres se trouvent et trouvent infos et événements à chaque niveau — sans confier leurs données à une plateforme. Le code devient public à la première Soirée.',
      status: 'Première Soirée : Bruxelles, hiver 2026–27.',
    },
    footer: {
      status:
        'Greenlabs est un programme, pas un lieu, et pas encore une association. Il vit dans les ateliers des autres et ne manipule pas d’argent.',
      signOff: 'Ni rêveurs, ni prêcheurs\u00A0: des faiseurs.',
    },
    theme: { label: 'Thème', auto: 'Auto', light: 'Clair', dark: 'Sombre' },
  },

  nl: {
    title: 'Greenlabs — Kom iets maken dat werkt. Samen.',
    description:
      'Greenlabs organiseert avonden, namiddagen en weekends waar buren, makers en nieuwsgierige mensen werkende antwoorden bouwen op ecologische vragen, in fablabs en werkplaatsen die al bestaan. Eerst in Brussel.',
    languageNav: 'Taal',
    tag: 'gratis · open · samen',
    heroLead: 'Kom iets maken dat werkt.',
    heroTogether: 'Samen.',
    intro:
      'Avonden, namiddagen en weekends waar buren, makers, koks en nieuwsgierige mensen echte antwoorden bouwen op ecologische vragen — samen, in werkplaatsen die al bestaan. Eerst in Brussel.',
    sizes: {
      label: 'Drie maten, kies de jouwe',
      intro: 'Greenlabs bestaat in drie maten. Kies wat in jouw week past.',
      cards: [
        { letter: 'S', name: 'Avond', text: 'Een avond per maand, gratis. Iemand toont iets dat werkt, jij probeert er zelf een met je eigen handen, en we drinken samen iets.' },
        { letter: 'M', name: 'Workshop', text: 'Een namiddag. Samen één voorwerp bouwen en het mee naar huis nemen. Materiaal aan kostprijs, meer niet.' },
        { letter: 'L', name: 'Weekend', text: 'Eén keer per jaar. De grote vragen die meer handen en meer tijd vragen.' },
      ],
      after: 'Alles wat we bouwen, tonen we op de volgende Avond en publiceren we, zodat iedereen, overal, het ook kan bouwen.',
    },
    bring: {
      label: 'Breng mee wat je hebt',
      big: 'Je hoeft geen ingenieur of activist te zijn. Je hebt een avond nodig en een beetje nieuwsgierigheid.',
      body: 'We zoeken makers, programmeurs, ontwerpers, tuiniers, mensen die weten hoe een gemeentehuis werkt, mensen die hun straat kennen — en koks. Elk weekend heeft koks nodig.',
    },
    rules: {
      label: 'Huisregels',
      items: [
        'Het werkt voor we naar huis gaan.',
        'Alles wordt gedeeld: de plannen, de code, de fouten.',
        'De eenvoudigste versie bouw je aan de keukentafel.',
        'Als het het leven slechter maakt, telt het niet. Lichter leven moet aanvoelen als winst, niet als opoffering.',
        'We komen samen op plekken die al bestaan — fablabs, buurtplekken, werkplaatsen. We bouwen geen plek, we vullen ze.',
      ],
    },
    ways: {
      label: 'Drie manieren om mee te doen',
      items: [
        { verb: 'Kom.', text: 'Kom naar een Avond. Het is gratis, en je gaat naar huis met iets dat werkt en een paar nieuwe gezichten.' },
        { verb: 'Ontvang.', text: 'Ontvang er een, als je een fablab, een buurtplek of een werkplaats runt met plaats voor twintig mensen en een waterkoker.' },
        { verb: 'Bouw.', text: 'Help ons de eerste editie mee vorm te geven.' },
      ],
      note: 'Nog geen inschrijving. Zodra er een datum is, staat die hier.',
    },
    bench: {
      label: 'Dit seizoen op de werkbank',
      text: 'Een open-source app voor gemeenschappen met lokale, regionale en nationale lagen, zodat leden elkaar, informatie en evenementen vinden op elk niveau — zonder hun gegevens aan een platform af te geven. De code wordt publiek op de eerste Avond.',
      status: 'Eerste Avond: Brussel, winter 2026–27.',
    },
    footer: {
      status:
        'Greenlabs is een programma, geen plek, en nog geen vereniging. Het leeft in de werkplaatsen van anderen en beheert geen geld.',
      signOff: 'Geen dromers, geen predikers: doeners.',
    },
    theme: { label: 'Thema', auto: 'Auto', light: 'Licht', dark: 'Donker' },
  },
};
