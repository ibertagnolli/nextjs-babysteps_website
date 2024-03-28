import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?"></link>
      <body style={{fontFamily: "Barlow", margin: "0px"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}