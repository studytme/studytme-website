import "../styles/globals.css";
import { Layout } from "../components/Layout";
import { getAnalytics, logEvent } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";

const firebaseConfig = {
  apiKey: "AIzaSyD55Fg0qchnFSlGpzPmPvYDQ1BqX0o9LAo",
  authDomain: "studytme-website.firebaseapp.com",
  projectId: "studytme-website",
  storageBucket: "studytme-website.appspot.com",
  messagingSenderId: "1087247423649",
  appId: "1:1087247423649:web:de0878022cd671f2f7f8e0",
  measurementId: "G-F17Z1FJN9B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const analytics = getAnalytics(app);
    logEvent(analytics, "page-loaded");
  }, []);

  return (
    <Layout>
      <Head>
        {/* General */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Home of the StudyTme community. Follow Giulia on Twitch, Youtube and TikTok. Also join us on Discord."
        />
        <link rel="canonical" href="https://studytme.com/" />
        <meta name="robots" content="index, follow" />

        {/* OpenGraph */}
        <meta property="og:title" content="StudyTme community website" />
        <meta
          property="og:description"
          content="Home of the StudyTme community. Follow Giulia on Twitch, Youtube and TikTok. Also join us on Discord."
        />
        <meta property="og:image" content="https://studytme.com/images/transparentG.png" />
        <meta property="og:url" content="https://studytme.com" />
        <meta property="og:site_name" content="StudyTme" />

        {/* Twitter */}
        <meta name="twitter:title" content="StudyTme community website" />
        <meta
          name="twitter:description"
          content="Home of the StudyTme community. Follow Giulia on Twitch, Youtube and TikTok. Also join us on Discord."
        />
        <meta name="twitter:url" content="https://studytme.com/images/transparentG.png" />
        <meta name="twitter:site" content="@StudyTme" />
        <meta name="twitter:creator" content="@StudyTme" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:image" content="https://studytme.com/images/transparentG.png" />
        <meta name="twitter:image:alt" content="Photo of StudyTme G" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
