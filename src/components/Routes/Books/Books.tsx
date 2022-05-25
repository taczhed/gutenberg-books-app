import { Flex, Heading, Stack, Spinner, Divider } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchBooksList } from "../../../queries";
import { useState } from "react";
import { roundNumberOfPages } from "../../../utilities";
import BookItem from "../../BookItem/BookItem";

const Books = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const { data, status } = useQuery(
    ["booksList", currentPageNumber],
    fetchBooksList,
  );

  const [fullNumberOfPages, setFullNumberOfPages] = useState(
    roundNumberOfPages(data?.count, 10),
  );

  console.log(data, fullNumberOfPages);

  return (
    <Flex direction="column">
      <Flex p={[8, 10]} justify="space-between" bgColor="gba.yellow.600">
        <Heading color="white" size={["lg", "2xl"]} textAlign="center">
          Books
        </Heading>
      </Flex>

      <Divider />

      <Stack p={4}>
        {status !== "success" ? (
          <Spinner size="md" />
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
