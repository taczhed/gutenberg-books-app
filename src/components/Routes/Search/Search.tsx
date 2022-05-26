import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchBooksList } from "../../../queries";
import { roundNumberOfPages } from "../../../utilities";
import BookList from "../../BookList/BookList";
import SearchInput from "../../SearchInput/SearchInput";

const Search = () => {
  const [searchText, setSearchText] = useState<undefined | string>();
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [fullNumberOfPages, setFullNumberOfPages] = useState(
    roundNumberOfPages(1, 10),
  );
  const { data, status } = useQuery(
    ["booksList", currentPageNumber, searchText],
    fetchBooksList,
  );

  const searchForResult = async (searchText: string) => {
    setCurrentPageNumber(1);
    setSearchText(searchText);
  };

  useEffect(() => {
    if (data?.count) setFullNumberOfPages(roundNumberOfPages(data.count, 10));
  }, [data]);

  return (
    <Flex direction="column">
      <Flex p={[4, 6]} justify="space-between" bgColor="gba.yellow.600">
        <Heading color="white" size={["lg", "2xl"]} textAlign="center">
          Search for books
        </Heading>
      </Flex>

      <Flex align="center" p={4}>
        <SearchInput
          placeholder={"Type book..."}
          searchForResult={searchForResult}
        />
      </Flex>

      <Divider />

      <BookList
        data={data}
        status={status}
        currentPageNumber={currentPageNumber}
        fullNumberOfPages={fullNumberOfPages}
        setCurrentPageNumber={setCurrentPageNumber}
      />
    </Flex>
  );
};

export default Search;
