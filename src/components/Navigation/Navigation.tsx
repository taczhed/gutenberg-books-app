import { GridItem, Stack } from "@chakra-ui/react";
import Logo from "./Logo/Logo";
import NavigationButton from "./NavigationButton/NavigationButton";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { ImBooks } from "react-icons/im";

const Navigation = () => {
  return (
    <GridItem rowStart={[0, 1]} bg="gba.yellow.500">
      <Stack direction={["row", "column"]} align="center" h="full">
        <Logo />
        <NavigationButton text="Home" icon={AiFillHome} link="/" />
        <NavigationButton text="Books" icon={ImBooks} link="/books" />
        <NavigationButton text="Search" icon={AiOutlineSearch} link="/search" />
      </Stack>
    </GridItem>
  );
};

export default Navigation;
