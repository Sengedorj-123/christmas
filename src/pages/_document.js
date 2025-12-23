import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="mn">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0a1525" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700;800;900&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Cormorant+Upright:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&family=Great+Vibes&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
