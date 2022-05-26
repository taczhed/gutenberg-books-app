import { Flex, Heading, Divider } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { fetchBooksList } from "../../../queries";
import { useEffect, useState } from "react";
import { roundNumberOfPages } from "../../../utilities";
import BookList from "../../BookList/BookList";

const Books = () => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [fullNumberOfPages, setFullNumberOfPages] = useState(
    roundNumberOfPages(1, 10),
  );

  const { data, status } = useQuery(
    ["booksList", currentPageNumber],
    fetchBooksList,
  );

  useEffect(() => {
    if (data?.count) setFullNumberOfPages(roundNumberOfPages(data.count, 10));
  }, [data]);

  return (
    <Flex direction="column">
      <Flex p={[4, 6]} justify="space-between" bgColor="gba.yellow.600">
        <Heading color="white" size={["lg", "2xl"]} textAlign="center">
          Books
        </Heading>
      </Flex>

      <Divider />

      <BookList
        data={data}
        status={status}
        currentPageNumber={currentPageNumber}
        fullNumberOfPages={fullNumberOfPages}
        setCurrentPageNumber={setCurrentPageNumber}
        h={["calc(100vh - 40px - 74px - 64px)", "calc(100vh - 42px - 96px)"]}
      />
    </Flex>
  );
};

export default Books;
