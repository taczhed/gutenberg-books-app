import { Image } from "@chakra-ui/react";
import LogoImg from "../../../assets/logo.png";

const Logo = () => {
  return <Image src={LogoImg} alt="Logo" w={180} display={["none", "block"]} />;
};

export default Logo;
