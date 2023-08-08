interface CardContent {
  description: string;
  midtitle: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface IHomeLocaleContent {
  subtitle: string;
  description: string;
  more: string;
  here: string;
  twitch: CardContent;
  discord: CardContent;
  youtube: CardContent;
  merch: {
    title: string;
    subtitle: string;
    button_text: string;
  };
}

const homeLocaleContent: {
  [key: string]: IHomeLocaleContent;
} = {
  "en-US": {
    subtitle:
      "Giulia (or G for short) is the founder of the CEO Gang, a Twitch and Discord community \
      focused on productivity and mental wellbeing.",
    description:
      "Giulia created StudyTme when she was studying Data Science and Digital Marketing at university, \
      but since graduating she's expanded the channel to all aspects of working and productivity, \
      while developing the community itself.",
    more: "and more...",
    here: "here",
    twitch: {
      description:
        "This is where you will find me live 5 days a week! You can check out my stream schedule ",
      midtitle: "Why Join?",
      first: "Rhythm",
      second: "To-do lists",
      third: "Less alone",
      fourth: "Motivation",
    },
    discord: {
      description:
        "Discord is the easiest way to keep in touch with the community. Join study rooms, hang out and \
      find out all the latest news.",
      midtitle: "What will you find?",
      first: "Study rooms",
      second: "Community",
      third: "Bookclub",
      fourth: "Masterminds",
    },
    youtube: {
      description:
        "G is far from perfect. Her videos follow her journey to become a better person.",
      midtitle: "What will you find?",
      first: "Vlogs",
      second: "Book reviews",
      third: "Interviews",
      fourth: "VODs",
    },
    merch: {
      title: "Get the latest drip",
      subtitle: "Designed by Giulia",
      button_text: "Check the merch",
    },
  },
  "it-IT": {
    subtitle:
      "Giulia (per gli amici G) è la fondatrice della CEO Gang, una community di Twitch e Discord dedicata \
      alla produttività e al benessere mentale.",
    description:
      "Giulia ha creato StudyTme nel periodo in cui studiava Data Science e Digital Marketing, ma dopo \
      la laurea ha espanso il canale a tutti gli aspetti della lavorazione e produttività, \
      sviluppando una vera e propria community.",
    more: "e molto altro...",
    here: "qui",
    twitch: {
      description:
        "Qui è dove mi troverai live 5 giorni a settimana! Puoi vedere il mio calendario ",
      midtitle: "Perché unirsi?",
      first: "Ritmo",
      second: "To-do list",
      third: "Meno solo",
      fourth: "Motivazione",
    },
    discord: {
      description:
        "Discord è il modo più semplice per mantenere il contatto con la community. \
      Unisciti alle study room, parla con gli altri e scopri tutte le novità.",
      midtitle: "Cosa troverai?",
      first: "Study rooms",
      second: "Community",
      third: "Bookclub",
      fourth: "Masterminds",
    },
    youtube: {
      description:
        "G è molto lontana dalla perfezione. I suoi video la seguono nel suo viaggio \
      per diventare una persona migliore.",
      midtitle: "Cosa troverai?",
      first: "Vlogs",
      second: "Recensioni di libri",
      third: "Interviste",
      fourth: "Repliche",
    },
    merch: {
      title: "Scopri la nuova collezione",
      subtitle: "Designata da Giulia",
      button_text: "Vedi la collezione",
    },
  },
};

export default homeLocaleContent;
