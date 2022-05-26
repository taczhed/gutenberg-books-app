import { Center, Spinner, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import BookItem from "./BookItem";
import Pagination from "../Pagination/Pagination";

interface BooksListProps {
  data: any;
  status: string;
  currentPageNumber: number;
  fullNumberOfPages: number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
  h?: string | string[];
}

const BooksList = ({
  data,
  status,
  currentPageNumber,
  fullNumberOfPages,
  setCurrentPageNumber,
  h,
}: BooksListProps) => {
  const [favourites, setFavourites] = useState<Array<number>>([]);
  const [areFavouritesMutable, setAreFavouritesMutable] = useState(false);

  useEffect(() => {
    if (areFavouritesMutable)
      localStorage.setItem("gba-user-favourites", JSON.stringify(favourites));
    if (!areFavouritesMutable) setAreFavouritesMutable(true);
  }, [favourites]);

  useEffect(() => {
    const items = localStorage.getItem("gba-user-favourites");
    if (items) setFavourites(JSON.parse(items));
  }, []);

  return (
    <>
      <Pagination
        setCurrentPageNumber={setCurrentPageNumber}
        currentPageNumber={currentPageNumber}
        fullNumberOfPages={fullNumberOfPages}
      />

      <Stack p={4} overflowY="scroll" w="100%" h={h}>
        {status === "loading" ? (
          <Center>
            We are looking for books...
            <Spinner ml={4} size="md" />
          </Center>
        ) : (
          data?.results?.map((book) => (
            <BookItem
              key={book.id}
              isFavourite={favourites.includes(book.id)}
              id={book.id}
              title={book.title}
              agents={book.agents}
              description={book.description}
              downloads={book.downloads}
              languages={book.languages}
              resources={book.resources}
              bookshelves={book.bookshelves}
              setFavourites={setFavourites}
            />
          ))
        )}
      </Stack>
    </>
  );
};

export default BooksList;
