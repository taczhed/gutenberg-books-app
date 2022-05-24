import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gba: {
      yellow: "#C0A741",
      peach: "#FEDCD2",
      warm: "#DF744A",
      blue: "#BFD8D2",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#f5f5f5",
      },
    },
  },
});
