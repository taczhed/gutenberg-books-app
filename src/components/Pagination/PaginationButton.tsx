import { Button, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface PaginationButtonProps {
  isDisabled: boolean;
  icon: IconType | number;
  setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}

const PaginationButton = ({
  isDisabled,
  icon,
  setCurrentPageNumber,
  value,
}: PaginationButtonProps) => {
  return (
    <Button
      size="xs"
      disabled={isDisabled}
      leftIcon={
        typeof icon !== "number" ? (
          <Icon as={icon} fontSize={[24]} ml={2} color="white" />
        ) : undefined
      }
      bgColor="gba.yellow.500"
      mx={1}
      _hover={{ bgColor: "gba.yellow.400" }}
      _active={{ bgColor: "gba.yellow.600" }}
      _focus={{ border: 0 }}
      onClick={() => {
        if (typeof icon !== "number")
          setCurrentPageNumber((prev) => (prev += value));
      }}
    >
      {typeof icon === "number" ? value : null}
    </Button>
  );
};

export default PaginationButton;
