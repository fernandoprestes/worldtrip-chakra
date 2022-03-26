import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import { theme } from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>World Trip</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
