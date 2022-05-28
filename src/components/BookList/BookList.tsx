import { Center, Spinner, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BookItem from "./BookItem";
import Pagination from "../Pagination/Pagination";
import { gbaScrollBar } from "../../scrollbar";

interface BooksListProps {
  data: any;
  status: string;
  currentPageNumber: number;
  fullNumberOfPages: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
  bookshelves?: string[];
  extendBookshelves?: (text: string) => void;
  disablePagination?: boolean;
  h?: string | string[];
}

const BooksList = ({
  data,
  status,
  currentPageNumber,
  fullNumberOfPages,
  bookshelves,
  setCurrentPageNumber,
  extendBookshelves,
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

      <Stack p={4} overflowY="scroll" w="100%" h={h} css={gbaScrollBar}>
        {status === "loading" ? (
          <Center>
            We are looking for books...
            <Spinner ml={4} size="md" />
          </Center>
        ) : data?.results?.length === 0 ? (
          <Text>We cannot find such books :(</Text>
        ) : (
          data?.results?.map((book) => (
            <BookItem
              key={book.id}
              isFavourite={favourites.some((favBook) => favBook.id === book.id)}
              bookshelves={bookshelves}
              setFavourites={setFavourites}
              extendBookshelves={extendBookshelves}
              book={book}
            />
          ))
        )}
      </Stack>
    </>
  );
};

export default BooksList;
