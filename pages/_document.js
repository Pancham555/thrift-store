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
      <title>
        Drip Vault: Unveiling the Ultimate Thrift Treasure Trove - Shop Vintage
        Gems Online
      </title>
      <meta
        name="description"
        content="Discover a world of vintage wonders at Drip Vault, the premier online thrift store. Unearth hidden gems and elevate your style with our curated collection of secondhand treasures. From classic apparel to unique accessories, explore our virtual vault and embark on a sustainable fashion journey. Shop with purpose and embrace the thrill of finding timeless fashion pieces that reflect your individuality. Start your treasure hunt today at Drip Vault and unlock the magic of vintage fashion."
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
