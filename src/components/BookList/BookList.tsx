import { Center, Spinner, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BookItem from "./BookItem";
import Pagination from "../Pagination/Pagination";

interface BooksListProps {
  data: any;
  status: string;
  currentPageNumber: number;
  fullNumberOfPages: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
  disablePagination?: boolean;
  h?: string | string[];
}

const BooksList = ({
  data,
  status,
  currentPageNumber,
  fullNumberOfPages,
  setCurrentPageNumber,
  disablePagination,
  h,
}: BooksListProps) => {
  const [favourites, setFavourites] = useState<Array<any>>([]);
  const [areFavouritesMutable, setAreFavouritesMutable] = useState(false);

  useEffect(() => {
    if (areFavouritesMutable)
      localStorage.setItem("gba-user-favourites", JSON.stringify(favourites));
    if (!areFavouritesMutable) setAreFavouritesMutable(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favourites]);

  useEffect(() => {
    const items = localStorage.getItem("gba-user-favourites");
    if (items) setFavourites(JSON.parse(items));
  }, []);

  return (
    <>
      {!disablePagination && (
        <Pagination
          setCurrentPageNumber={setCurrentPageNumber}
          currentPageNumber={currentPageNumber}
          fullNumberOfPages={fullNumberOfPages}
        />
      )}

      <Stack p={4} overflowY="scroll" w="100%" h={h}>
        {status === "loading" ? (
          <Center>
            We are looking for books...
            <Spinner ml={4} size="md" />
          </Center>
        ) : data.results.length === 0 ? (
          <Text>We cannot find such books :(</Text>
        ) : (
          data?.results?.map((book) => (
            <BookItem
              key={book.id}
              isFavourite={favourites.some((favBook) => favBook.id === book.id)}
              setFavourites={setFavourites}
              book={book}
            />
          ))
        )}
      </Stack>
    </>
  );
};

export default BooksList;
