export enum RouteName {
  home = "home",
  resources = "resources",
  sponsors = "sponsors",
  faq = "faq",
  schedule = "schedule",
}

export interface IHeaderLocaleContent {
  home: string;
  resources: string;
  sponsors: string;
  faq: string;
  merch: string;
  routes: {
    [key in RouteName]: string;
  };
}

const headerLocaleContent: {
  [key: string]: IHeaderLocaleContent;
} = {
  "en-US": {
    home: "Home",
    resources: "Free Resources",
    sponsors: "Sponsors",
    faq: "FAQ",
    merch: "Merch",
    routes: {
      home: "Home",
      resources: "Resources",
      sponsors: "Sponsors",
      faq: "FAQ",
      schedule: "Schedule",
    },
  },
  "it-IT": {
    home: "Home",
    resources: "Risorse gratuite",
    sponsors: "Sponsor",
    faq: "FAQ",
    merch: "Merch",
    routes: {
      home: "Home",
      resources: "Risorse",
      sponsors: "Sponsor",
      faq: "FAQ",
      schedule: "Programmazione",
    },
  },
};

export default headerLocaleContent;
