
import {  signOut } from 'firebase/auth';
import { auth } from './firebase';
import {useNavigate} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Button,ButtonGroup,Heading,Box,Flex, Spacer } from '@chakra-ui/react'
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,useDisclosure
  ,FormControl,Input,FormLabel,FormHelperText,FormErrorMessage,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { IconName } from 'react-icons/fc';

export default function Login(){

  
const handleLogin = async()=>{
  try {
    const userCredential =await signInWithEmailAndPassword(auth , email , password);
    const user = userCredential.user;
    console.log(userCredential);
    localStorage.setItem('token',user.accessToken);
    localStorage.setItem('user', JSON.stringify(user));
    alert("Signed In");
  } catch (error) {
    if(email)
      alert('Invalid User Credential')
          console.log(error)
      }
    }
    
    
    // const [name , setName] = useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    const initialLogRef = React.useRef(null)
    const finalLogRef = React.useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [isWaiting,setisWaiting]=useState("");

    const isError=false;

    const googleLogin=()=>{
        
          //  window.open(`${baseUrl}user/auth/google`,"_self");
         
    }
    return(
       <><Button onClick={onOpen} colorScheme='teal'>Log in</Button>
        <Modal
        initialFocusRef={initialLogRef}
        finalFocusRef={finalLogRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >

        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login to your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4} isRequired isInvalid={isError}>
              <FormLabel>Email</FormLabel>
              <Input placeholder='Email' type='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
              {isError ? 
      (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      ) :(
        <FormHelperText>
         Enter your email address
        </FormHelperText>
      )}
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password' type='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
             
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent={'center'}>
            <Button colorScheme='blue' mr={3} onClick={handleLogin} >
              Log in
            </Button>
            <Button onClick={onClose}>Cancel</Button>
            
            
          </ModalFooter>
          <Text align="center">OR</Text>
           
          <Text align="center" marginBottom={"20px"} cursor={'pointer'}>Don't Have Account?<Button border={'none'} textColor={'red'}>Register</Button></Text>
            {/* <Button w="80%" m="1em auto" onClick={googleLogin} ><FcGoogle/> Sign Up with Google</Button> */}
        </ModalContent>
      </Modal>
       </> 
    )
}