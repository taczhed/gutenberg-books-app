import { GridItem } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Books from "../Routes/Books/Books";
import Desk from "../Routes/Desk/Desk";
import Favourites from "../Routes/Favourites/Favourites";
import Home from "../Routes/Home/Home";
import NotFound from "../Routes/NotFound/NotFound";

const Content = () => {
  return (
    <GridItem rowStart={{ base: 1, md: 0 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/desk/:bookid" element={<Desk />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GridItem>
  );
};

export default Content;
