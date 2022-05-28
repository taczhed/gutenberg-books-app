import { Divider, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchBooksList } from "../../../queries";
import { parseBookshelves, roundNumberOfPages } from "../../../utilities";
import BookList from "../../BookList/BookList";
import SearchInput from "../../SearchInput/SearchInput";
import TagFilter from "../../TagFilter/TagFilter";

const Books = () => {
  const [searchText, setSearchText] = useState<undefined | string>();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [bookshelves, setBookshelves] = useState<string[]>([]);
  const [fullNumberOfPages, setFullNumberOfPages] = useState(
    roundNumberOfPages(1, 10),
  );
  const { data, status } = useQuery(
    ["booksList", currentPageNumber, searchText, parseBookshelves(bookshelves)],
    fetchBooksList,
  );

  const searchForResult = async (searchText: string) => {
    setCurrentPageNumber(1);
    setFullNumberOfPages(1);
    setSearchText(searchText);
  };

  const extendBookshelves = (text: string) => {
    if (!bookshelves?.includes(text)) setBookshelves((prev) => [...prev, text]);
    setCurrentPageNumber(1);
  };

  useEffect(() => {
    if (data?.count) {
      setFullNumberOfPages(roundNumberOfPages(data.count, 10));
      // setCurrentPageNumber(1);
    }
  }, [data]);

  return (
    <Flex direction="column">
      <Flex p={[4, 6]} justify="space-between" bgColor="gba.yellow.600">
        <Heading color="white" size={["lg", "2xl"]} textAlign="center">
          Search for books
        </Heading>
      </Flex>

      <Flex align="center" direction="column" p={4}>
        <SearchInput
          placeholder={"Search..."}
          searchForResult={searchForResult}
        />

        <TagFilter bookshelves={bookshelves} setBookshelves={setBookshelves} />
      </Flex>

      <Divider />

      <BookList
        data={data}
        status={status}
        currentPageNumber={currentPageNumber}
        fullNumberOfPages={fullNumberOfPages}
        setCurrentPageNumber={setCurrentPageNumber}
        extendBookshelves={extendBookshelves}
        bookshelves={bookshelves}
        h={[
          "calc(100vh - 64px - 80px - 74px - 64px)",
          "calc(100vh - 96px - 140px - 44px)",
        ]}
      />
    </Flex>
  );
};

export default Books;
