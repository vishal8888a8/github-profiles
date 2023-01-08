import React from "react";
import Main from "./components/Main";
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
      <ChakraProvider>
        <Main  />
      </ChakraProvider>
  );
}

export default App;
