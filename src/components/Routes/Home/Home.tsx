import { Flex, Heading, Image, Stack, Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeImage from "./HomeImage.svg";
import { MdFavoriteBorder } from "react-icons/md";

const Home = () => {
  return (
    <Flex direction="column">
      <Flex p={[10, 12]} justify="space-between" bgColor="gba.blue">
        <Stack spacing={6} w={["50%"]}>
          <Heading color="white" size={["lg", "2xl"]}>
            Welcome to Gutenberg books app!
          </Heading>
          <Heading color="white" size={["sm", "md"]}>
            This web app let users search and read books from Project Gutenberg
          </Heading>
          <Link to="/books">
            <Button
              py={8}
              px={16}
              fontSize={[16, 20]}
              color="gray.400"
              _focus={{ border: 0 }}
            >
              Show he books!
            </Button>
          </Link>
        </Stack>
        <Image src={HomeImage} w={[128, 164, 256]} />
      </Flex>

      <Flex p={[10, 12]} bgColor="gba.peach" h="auto">
        <Heading size={["md", "lg"]} color="white">
          <Icon as={MdFavoriteBorder} mr={4} mb={-1} />
          Your marked books
          <Icon as={MdFavoriteBorder} ml={4} mb={-1} />
        </Heading>
      </Flex>
    </Flex>
  );
};

export default Home;
