import { Image } from "@chakra-ui/react";
import LogoImg from "./logo.png";

const Logo = () => {
  return <Image src={LogoImg} alt="Logo" w={["64px", 180]} />;
};

export default Logo;
