import * as React from "react";
import { ChakraProvider, Grid } from "@chakra-ui/react";
import { theme } from "./theme";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import { BrowserRouter } from "react-router-dom";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Grid
        h="100vh"
        templateColumns={["auto", "180px auto"]}
        templateRows={["auto 64px", "auto"]}
      >
        <Navigation />
        <Content />
      </Grid>
    </BrowserRouter>
  </ChakraProvider>
);
