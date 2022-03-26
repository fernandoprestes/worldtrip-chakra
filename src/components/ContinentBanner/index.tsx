import { Flex, Heading } from "@chakra-ui/react";

const ContinentBanner = function ContinentBannerComponent() {
  return (
    <Flex
      w='100%'
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage='url(/londres.png)'
      bgPosition={["center", "center", "bottom"]}
      bgRepeat='no-repeat'
      bgSize='cover'
      align='center'
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        color='gray.100'
        fontWeight='500'
      >
        Europa
      </Heading>
    </Flex>
  );
};

export { ContinentBanner };
