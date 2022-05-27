import { Flex, Heading } from "@chakra-ui/react";

const NotFound = () => {
  return (
    <Flex h="100vh" direction="column" align="center" justify="center">
      <Heading color="gba.warm">404</Heading>
      <Heading>Oopss...Page Not Found</Heading>
    </Flex>
  );
};

export default NotFound;
