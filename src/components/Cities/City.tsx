import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const City = function CityComponent() {
  return (
    <Box borderRadius='4px' overflow='hidden'>
      <Image src='/londres-city.png' h='170px' w='100%' />
      <Flex
        padding='6'
        align='center'
        justify='space-between'
        bg='white'
        border='1px'
        borderColor='yellow.300'
        borderTop='0'
      >
        <Flex direction='column'>
          <Heading fontSize='xl' fontWeight='500'>
            Londres
          </Heading>
          <Text mt='3' fontSize='md' color='gray.500' fontWeight='500'>
            Reino Unido
          </Text>
        </Flex>
        <Image src='/frag-uk.png' />
      </Flex>
    </Box>
  );
};

export { City };
