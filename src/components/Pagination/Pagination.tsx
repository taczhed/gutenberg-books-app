import {
  Flex,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from "@chakra-ui/react";
import PaginationButton from "./PaginationButton";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useEffect, useState } from "react";

interface PaginationProps {
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
  currentPageNumber: number;
  fullNumberOfPages: number;
}

const Pagination = ({
  setCurrentPageNumber,
  currentPageNumber,
  fullNumberOfPages,
}: PaginationProps) => {
  const [numberInputValue, setNumberInputValue] = useState(currentPageNumber);

  useEffect(() => {
    setNumberInputValue(currentPageNumber);
  }, [currentPageNumber]);

  return (
    <Flex justify="center" align="center" direction="row" p={2} boxShadow="md">
      <PaginationButton
        isDisabled={currentPageNumber === 1}
        icon={MdChevronLeft}
        setCurrentPageNumber={setCurrentPageNumber}
        value={-1}
      />
      <HStack mx={2} spacing={1}>
        <Text>Page</Text>
        <NumberInput
          size="xs"
          maxW={20}
          value={numberInputValue}
          min={1}
          max={fullNumberOfPages}
          onChange={(e) => setNumberInputValue(+e)}
          onBlur={(e) => setCurrentPageNumber(+e.target.value)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Text>of</Text>
        <Text>{fullNumberOfPages}</Text>
      </HStack>

      <PaginationButton
        isDisabled={currentPageNumber === fullNumberOfPages}
        icon={MdChevronRight}
        setCurrentPageNumber={setCurrentPageNumber}
        value={+1}
      />
    </Flex>
  );
};

export default Pagination;
