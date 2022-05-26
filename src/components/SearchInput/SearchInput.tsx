import {
  Button,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { HiSearch } from "react-icons/hi";

interface SearchInputProps {
  placeholder?: string;
  searchForResult: (searchText: string) => Promise<void>;
}

const SearchInput = ({ placeholder, searchForResult }: SearchInputProps) => {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <InputGroup size="sm" borderWidth={2}>
      <Input
        placeholder={placeholder}
        value={searchInputValue}
        onChange={(e) => setSearchInputValue(e.target.value)}
      />
      <InputRightElement>
        <Button
          size="sm"
          leftIcon={<Icon ml={2} as={HiSearch} />}
          onClick={() => searchForResult(searchInputValue)}
        ></Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchInput;
