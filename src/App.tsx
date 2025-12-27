import "./App.css";
import { Button, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/ui/NavBar";

function App() {
  return <Grid templateAreas={{ base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
   }}>
    <GridItem area="nav" height="50px">
      <NavBar/>
    </GridItem>
      <GridItem
        area="aside"
        bg="blue.500"
        height="50px"
        display={{ base: "none", lg: "block" }}
      >
        Aside
      </GridItem>
    <GridItem area="main" bg="blue.500" height="50px">Main</GridItem>
  </Grid>;
}

export default App;
