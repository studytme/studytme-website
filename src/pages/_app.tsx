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
        <title>StudyTme</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
