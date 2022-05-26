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
  id: number;
  title: string;
  agents: Array<{ id: number; person: string; type: string }>;
  description: string;
  downloads: number;
  languages: string[];
  resources: Array<{ id: number; uri: string; type: string }>;
  bookshelves: string[];
  setFavourites: React.Dispatch<React.SetStateAction<number[]>>;
}

const BookItem = ({
  isFavourite,
  id,
  title,
  agents,
  description,
  downloads,
  languages,
  resources,
  bookshelves,
  setFavourites,
}: BookItemProps) => {
  const image = resources.filter(
    (element) =>
      element.type === "image/jpeg" && element.uri?.includes("small"),
  );

  return (
    <Flex p={4} borderWidth={2} align="center" justify="space-between">
      <Flex>
        <Box minWidth={70} mr={6}>
          {image[0] && <Image alt={`${id}`} src={image[0]?.uri} />}
        </Box>

        <Box>
          <Box>{parseAgents(agents)}</Box>
          <Heading size="md" my="2">
            <Link href="#" mr={2}>
              {title}
            </Link>

            {languages.map((text) => (
              <Tag key={text} variant="solid" bgColor="black">
                <TagLabel>{text.toUpperCase()}</TagLabel>
              </Tag>
            ))}
          </Heading>

          <Box fontSize={12}>{`${downloads} downloads`}</Box>

          <Wrap mt={4} spacing={2}>
            {bookshelves.map((text) => (
              <Tag key={text} variant="solid" bgColor="gba.yellow.500">
                <TagLabel>{text}</TagLabel>
              </Tag>
            ))}
          </Wrap>
        </Box>
      </Flex>

      <Flex direction="column" align="center">
        <Icon
          as={isFavourite ? MdFavorite : MdFavoriteBorder}
          color={isFavourite ? "gba.warm" : "black"}
          fontSize={28}
          onClick={() => {
            if (!isFavourite) setFavourites((prev) => [...prev, id]);
            else setFavourites((prev) => prev.filter((value) => value !== id));
          }}
          _hover={{ cursor: "pointer" }}
        />
      </Flex>
    </Flex>
  );
};

export default BookItem;
