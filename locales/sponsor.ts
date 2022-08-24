interface Card {
  title: string;
  description?: string;
}

interface ISponsorLocaleContent {
  title: string;
  contact_button: string;
  audience: string;
  total_followers: Card;
  main_platform: Card;
  average_ccv: Card;
}

const sponsorsLocaleContent: {
  [key: string]: ISponsorLocaleContent;
} = {
  "en-US": {
    title: "Content creator and community manager addicted to productivity",
    contact_button: "Contact Me",
    audience: "Audience",
    total_followers: {
      title: "Total Followers",
    },
    main_platform: {
      title: "Main Platform",
      description: "Official Partner",
    },
    average_ccv: {
      title: "Average CCV*",
      description: "*last 30 days",
    },
  },
  "it-IT": {
    title: "Content creator e community manager amante della produttività",
    contact_button: "Contattami",
    audience: "Pubblico",
    total_followers: {
      title: "Total Followers",
    },
    main_platform: {
      title: "Piattaforma principale",
      description: "Partner ufficiale",
    },
    average_ccv: {
      title: "Spettatori medi*",
      description: "*ultimi 30 giorni",
    },
  },
};

export default sponsorsLocaleContent;
