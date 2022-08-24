interface IFooterLocaleContent {
  business_contact: string;
}

const footerLocaleContent: {
  [key: string]: IFooterLocaleContent;
} = {
  "en-US": {
    business_contact: "For business inquiries contact:",
  },
  "it-IT": {
    business_contact: "Per richieste commerciali contattare:",
  },
};

export default footerLocaleContent;
