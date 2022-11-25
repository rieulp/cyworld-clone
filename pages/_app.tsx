import type { AppProps } from "next/app";
import { globalStyle } from "../styles/globalStyle";
import Head from "next/head";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../styles/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyle}
      <Head>
        <title>cyworld</title>
        <meta
          name="description"
          content="ㄷr시 만나서 반ㄱr워! 새롭게 쌓이는 추억, 우리 함께 만들어요."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
