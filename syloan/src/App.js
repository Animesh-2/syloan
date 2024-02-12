import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login';
import { ChakraProvider } from '@chakra-ui/react';
// import LoginPage from './Pages/LoginPage';
// import SignUp from './Pages/SignUp';
import Sign from './Pages/Sign';

function App() {
  return (
    // <div className="App">
    // </div>
    
    
<ChakraProvider>
<Login/>
<Sign />
   {/* <LoginPage /> */}
{/* <SignUp /> */}
</ChakraProvider>
  );
}

export default App;
