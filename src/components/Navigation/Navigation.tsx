import { GridItem, Stack } from "@chakra-ui/react";
import Logo from "./Logo/Logo";
import NavigationButton from "./NavigationButton/NavigationButton";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";

const Navigation = () => {
  return (
    <GridItem rowStart={[0, 1]} bg="rgb(192, 167, 65)">
      <Stack direction={["row", "column"]} align="center">
        <Logo />
        <NavigationButton text="Home" icon={AiFillHome} link="/" />
        <NavigationButton text="Search" icon={AiOutlineSearch} link="/search" />
      </Stack>
    </GridItem>
  );
};

export default Navigation;
