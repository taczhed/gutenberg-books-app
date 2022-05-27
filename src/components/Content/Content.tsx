import { GridItem } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Books from "../Routes/Books/Books";
import Desk from "../Routes/Desk/Desk";
import Favourites from "../Routes/Favourites/Favourites";
import Home from "../Routes/Home/Home";

const Content = () => {
  return (
    <GridItem rowStart={{ base: 1, md: 0 }}>
      <Routes>
        <Route path="/gutenberg-books-app" element={<Home />} />
        <Route path="/gutenberg-books-app/books" element={<Books />} />
        <Route
          path="/gutenberg-books-app/favourites"
          element={<Favourites />}
        />
        <Route path="/gutenberg-books-app/desk/:bookid" element={<Desk />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </GridItem>
  );
};

export default Content;
