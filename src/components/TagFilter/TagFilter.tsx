import { Tag, TagCloseButton, TagLabel, Wrap } from "@chakra-ui/react";

interface TagFilterProps {
  bookshelves: string[];
  setBookshelves: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagFilter = ({ bookshelves, setBookshelves }: TagFilterProps) => {
  return (
    <Wrap w="full" mt={4}>
      {bookshelves.map((bookshelf) => (
        <Tag key={bookshelf} variant="solid" bgColor="gba.yellow.500">
          <TagCloseButton
            ml={-1}
            mr={1}
            onClick={() => {
              setBookshelves((prev) =>
                prev.filter((prevBookshelf) => prevBookshelf !== bookshelf),
              );
            }}
          />
          <TagLabel>{bookshelf}</TagLabel>
        </Tag>
      ))}
    </Wrap>
  );
};

export default TagFilter;
