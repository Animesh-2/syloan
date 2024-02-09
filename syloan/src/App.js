import React from 'react';
import Home from './Pages/Home';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
    <div className="App" >
    <Home/>
    </div>
    </ChakraProvider>
  );
}

export default App;
