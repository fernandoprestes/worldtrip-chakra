import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { theme } from "../styles/theme";
import "./../styles/slider.css";

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
