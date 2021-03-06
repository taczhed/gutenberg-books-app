import { GridItem, Stack } from "@chakra-ui/react";
import Logo from "./Logo/Logo";
import NavigationButton from "./NavigationButton/NavigationButton";
import { AiFillHome } from "react-icons/ai";
import { ImBooks } from "react-icons/im";
import { MdFavorite } from "react-icons/md";

const Navigation = () => {
  return (
    <GridItem rowStart={[0, 1]} bg="gba.yellow.500">
      <Stack direction={["row", "column"]} align="center" h="full">
        <Logo />
        <NavigationButton text="Home" icon={AiFillHome} link="/" />
        <NavigationButton text="Books" icon={ImBooks} link="/books" />
        <NavigationButton
          text="Favourites"
          icon={MdFavorite}
          link="/favourites"
        />
      </Stack>
    </GridItem>
  );
};

export default Navigation;
