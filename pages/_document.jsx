import React from "react";
import { CacheProvider } from "@emotion/react";
import createEmotionServer from "@emotion/server/create-instance";
import { Head, Html, Main, NextScript } from "next/document";
import createEmotionCache from "../src/createEmotionCache";
import i18nextConfig from "../next-i18next.config";
export default function Document() {
  return <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>;
}