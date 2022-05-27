import { Divider, Flex, Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BookList from "../../BookList/BookList";

const Favourites = () => {
  const [status, setStatus] = useState("empty");
  const [currentPageNumber, setCurrentPageNumber] = useState(1);
  const [data, setData] = useState<{ results: any[]; count: number }>({
    results: [],
    count: 1,
  });

  useEffect(() => {
    const items = localStorage.getItem("gba-user-favourites");
    if (items) {
      setData({ results: JSON.parse(items), count: JSON.parse(items).length });
      setStatus("ready");
    }
  }, []);

  return (
    <Flex direction="column">
      <Flex p={[4, 6]} justify="space-between" bgColor="gba.yellow.600">
        <Heading color="white" size={["lg", "2xl"]} textAlign="center">
          Favourites
        </Heading>
      </Flex>

      <Divider />

      <BookList
        data={data}
        status={status}
        currentPageNumber={currentPageNumber}
        fullNumberOfPages={1}
        setCurrentPageNumber={setCurrentPageNumber}
        disablePagination={true}
        h={["calc(100vh - 64px  - 66px)", "calc(100vh - 98px)"]}
      />
    </Flex>
  );
};

export default Favourites;
