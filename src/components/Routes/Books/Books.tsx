import {
  Flex,
  Heading,
  Stack,
  Spinner,
  Divider,
  Center,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchBooksList } from "../../../queries";
import { useEffect, useState } from "react";
import { roundNumberOfPages } from "../../../utilities";
import BookItem from "../../BookItem/BookItem";
import Pagination from "../../Pagination/Pagination";

const Books = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const { data, status } = useQuery(
    ["booksList", currentPageNumber],
    fetchBooksList,
  );

  const [fullNumberOfPages, setFullNumberOfPages] = useState(
    roundNumberOfPages(1, 10),
  );

  useEffect(() => {
    if (data?.count) setFullNumberOfPages(roundNumberOfPages(data.count, 10));
  }, [data]);

  console.log(data, fullNumberOfPages);

  return (
    <Flex direction="column">
      <Flex p={[8, 10]} justify="space-between" bgColor="gba.yellow.600">
        <Heading color="white" size={["lg", "2xl"]} textAlign="center">
          Books
        </Heading>
      </Flex>

      <Divider />

      <Pagination
        setCurrentPageNumber={setCurrentPageNumber}
        currentPageNumber={currentPageNumber}
        fullNumberOfPages={fullNumberOfPages}
      />

      <Stack p={4} overflowY="scroll" w="100%" h={"calc(100vh - 74px - 128px)"}>
        {status !== "success" ? (
          <Center>
            Loading
            <Spinner ml={4} size="md" />
          </Center>
        ) : (
          data?.results?.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.title}
              agents={book.agents}
              description={book.description}
              downloads={book.downloads}
              languages={book.languages}
              resources={book.resources}
              bookshelves={book.bookshelves}
            />
          ))
        )}
      </Stack>
    </Flex>
  );
};

export default Books;
