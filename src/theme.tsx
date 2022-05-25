import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gba: {
      yellow: {
        500: "#C0A741",
        400: "#CCB145",
        600: "#A69038",
        700: "#806F2B",
        800: "#403716",
      },
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
