interface Card {
  title: string;
  description: string;
}

interface IResourcesLocalContent {
  title: string;
  subtitle: string;
  view_text: string;
  finance_tracker: Card;
}

const resourcesLocaleContent: {
  [key: string]: IResourcesLocalContent;
} = {
  "en-US": {
    title: "Free Resources",
    subtitle: "These are materials that the community and G worked on together",
    view_text: "View",
    finance_tracker: {
      title: "Finance Tracker",
      description:
        "3 files that you can use to keep track of your expenses and incomes so you\
      will always know your status. You know what they say: knowledge is power.",
    },
  },
  "it-IT": {
    title: "Risorse Gratuite",
    subtitle: "Questi sono materiali su cui la community e G hanno lavorato insieme",
    view_text: "Visualizza",
    finance_tracker: {
      title: "Finance Tracker",
      description:
        "3 files che ti possono servire per tenere traccia delle tue spese e delle tue entrate,\
         in modo da sapere sempre il tuo stato. Sai come si dice: la conoscenza è la forza.",
    },
  },
};

export default resourcesLocaleContent;
