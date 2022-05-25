import * as React from "react";
import { ChakraProvider, Grid } from "@chakra-ui/react";
import { theme } from "./theme";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/Content";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export const App = () => (
  <ChakraProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  </ChakraProvider>
);
