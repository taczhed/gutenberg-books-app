import { Flex, Heading, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HomeImage from "./HomeImage.svg";

const Home = () => {
  return (
    <Flex
      direction="row"
      // justify="space-between"
      align="center"
      bgColor="gba.blue"
      p={[10, 12]}
      h={["calc(100vh - 64px)", "100vh"]}
    >
      <Flex direction="column" align="center" w="70%">
        <Heading color="white" size={["lg", "2xl"]}>
          Welcome to Gutenberg books app!
        </Heading>
        <Heading color="white" size={["sm", "md"]} my={8}>
          This web app let users search and read books from Project Gutenberg
        </Heading>
        <Link to="/gutenberg-books-app/books">
          <Button
            py={8}
            px={16}
            fontSize={[16, 20]}
            color="gray.400"
            _focus={{ border: 0 }}
          >
            Show me books!
          </Button>
        </Link>
      </Flex>

      <Image src={HomeImage} w={[128, 164, 296]} />
    </Flex>
  );
};

export default Home;
