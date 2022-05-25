import { GridItem } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Books from "../Routes/Books/Books";
import Home from "../Routes/Home/Home";
import Search from "../Routes/Search/Search";

const Content = () => {
  return (
    <GridItem rowStart={{ base: 1, md: 0 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </GridItem>
  );
};

export default Content;
