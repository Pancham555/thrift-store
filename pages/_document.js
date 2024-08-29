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
        <link rel="shortcut icon" href="/new-logo.svg" type="image/x-icon" />
        <meta
          name="description"
          content="Unlock the flavors of the world at Zenith, your ultimate online food haven. Explore our carefully curated selection of gourmet goodies, from classic treats to international delicacies. Embark on a journey of culinary discovery and find your new favorite flavors. With Zenith, every meal is a treasure, and every bite is a delight. Start shopping today and taste the difference!"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
