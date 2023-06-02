import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://lynx-umami.vercel.app/script.js"
          data-website-id="50f6c269-e9b0-4768-a874-67749c679709"
        ></script>
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
