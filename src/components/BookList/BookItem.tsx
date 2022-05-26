import {
  Box,
  Heading,
  Link,
  Flex,
  Image,
  Wrap,
  Tag,
  TagLabel,
  Icon,
} from "@chakra-ui/react";
import { parseAgents } from "../../utilities";
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";

interface BookItemProps {
  isFavourite: boolean;
  setFavourites: React.Dispatch<React.SetStateAction<any[]>>;
  book: any;
}

const BookItem = ({ isFavourite, setFavourites, book }: BookItemProps) => {
  const image = book.resources.filter(
    (element) =>
      element.type === "image/jpeg" && element.uri?.includes("small"),
  );

  return (
    <Flex p={4} borderWidth={2} align="center" justify="space-between">
      <Flex>
        <Box minWidth={70} mr={6}>
          {image[0] && <Image alt={`${book.id}`} src={image[0]?.uri} />}
        </Box>

        <Box>
          <Box>{parseAgents(book.agents)}</Box>

          <Heading size="md" my="2">
            <Link href="#" mr={2}>
              {book.title}
            </Link>

            {book.languages.map((text) => (
              <Tag key={text} variant="solid" bgColor="black">
                <TagLabel>{text.toUpperCase()}</TagLabel>
              </Tag>
            ))}
          </Heading>

          <Box fontSize={12}>{`${book.downloads} downloads`}</Box>

          <Wrap mt={4} spacing={2}>
            {book.bookshelves.map((text) => (
              <Tag key={text} variant="solid" bgColor="gba.yellow.500">
                <TagLabel>{text}</TagLabel>
              </Tag>
            ))}
          </Wrap>
        </Box>
      </Flex>

      <Flex direction="column" align="center">
        <Icon
          _hover={{ cursor: "pointer" }}
          as={isFavourite ? MdFavorite : MdFavoriteBorder}
          color={isFavourite ? "gba.warm" : "black"}
          fontSize={28}
          onClick={() => {
            if (!isFavourite) setFavourites((prev) => [...prev, book]);
            else
              setFavourites((prev) =>
                prev.filter((value) => value.id !== book.id),
              );
          }}
        />
      </Flex>
    </Flex>
  );
};

export default BookItem;
