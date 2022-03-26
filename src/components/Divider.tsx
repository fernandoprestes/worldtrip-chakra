import { Box } from "@chakra-ui/react";

const Divider = function DividerComponent() {
  return (
    <Box
      w={["60px", "90px"]}
      mx='auto'
      h='2px'
      bg='gray.600'
      my={["9", "20"]}
    />
  );
};

export { Divider };
