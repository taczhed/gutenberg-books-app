import { Button, Icon } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface NavigationButtonProps {
  text: string;
  icon: any;
  link: string;
}

const NavigationButton = ({ text, icon, link }: NavigationButtonProps) => {
  return (
    <Link to={link}>
      <Button
        leftIcon={<Icon as={icon} />}
        size={["sm", "lg"]}
        px={[4, 10]}
        color="white"
        bgColor="RGBA(255, 255, 255, 0.15)"
        borderRadius={0}
        _hover={{ bgColor: "RGBA(255, 255, 255, 0.30)" }}
        _active={{ bgColor: "RGBA(225, 225, 225, 0.30)" }}
        _focus={{ border: 0 }}
      >
        {text}
      </Button>
    </Link>
  );
};

export default NavigationButton;
