import { Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Categories } from "../components/Categories";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <Flex direction='column'>
      <Header />
      <Banner />
      <Categories />
      <Divider />
      <Heading
        textAlign='center'
        fontWeight='500'
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
        color='gray.700'
      >
        Vamos nessa? Então escolha seu continente
      </Heading>
      <Slider />
    </Flex>
  );
}
