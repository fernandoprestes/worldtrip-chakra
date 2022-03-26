import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface CategoryProps {
  icon: string;
  text: string;
}

const Category = function CategoryComponent({ icon, text }: CategoryProps) {
  const isMobile = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex direction={["row", "row", "column"]} align='center' justify='center'>
      {isMobile ? (
        <Image src={`/icons/${icon}.svg`} w='85px' h='85px' mb='6' />
      ) : (
        <Text color='yellow.400' fontSize='4xl' mr='2'>
          •
        </Text>
      )}
      <Text fontWeight='600' color='gray.700' fontSize={["md", "xl", "2xl"]}>
        {text}
      </Text>
    </Flex>
  );
};

export { Category };
