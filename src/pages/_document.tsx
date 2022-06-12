import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* General */}
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
