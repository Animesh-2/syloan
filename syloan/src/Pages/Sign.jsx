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
import { createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { IconName } from 'react-icons/fc';
import { auth } from './firebase';

export default function Sign(){
   

    const[password,setPassword]=useState("");
    const[email,setEmail]=useState("");
    const[name ,setName]=useState("");
    const[pass ,setPass]=useState(false);
    
    const initialLogRef = React.useRef(null)
    const finalLogRef = React.useRef(null)
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [isWaiting,setisWaiting]=useState("");

    const isError=(email==="")
    const isPass=(password==="")

    const loginfun = async()=>{
        try {
            const userCredential =await createUserWithEmailAndPassword(auth , email , password);
            const user = userCredential.user;
            console.log(userCredential);
            localStorage.setItem('token',user.accessToken);
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('name', JSON.stringify(name));
            console.log(name , email , password);
            alert("Sign In");
        } catch (error) {
            if(password.length<6){
                alert("password Must be atleast 6 letters");
            }else if(email.typeOf!=email){
              alert('Need Correct Mail Id')
            }
            else{
              alert("Email Is Alredy Exist");
            }
            console.log(error)
        }
    }

    const handleOut = async()=>{
        try {
            await signOut(auth);
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('name');
            alert("Signed Out");
        } catch (error) {
            console.log(error)
          }
        }

    const googleLogin=()=>{
        
          //  window.open(`${baseUrl}user/auth/google`,"_self");
         
    }
    return(
       <><Button onClick={onOpen} colorScheme='red'>Sign Up</Button>
        <Modal
        initialFocusRef={initialLogRef}
        finalFocusRef={finalLogRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >

        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl mt={4} isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder='Name' type='text' value={name} id='name-id' onChange={(e) => setName(e.target.value)} />
              <FormHelperText marginBottom={'10px'}>
         Enter your Name
        </FormHelperText>
              <FormLabel>Email</FormLabel>
        <Input placeholder='Email' type='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

              {/* <Input placeholder='Email' type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/> */}
              {isError?
                <FormHelperText>
                Enter your Email
      </FormHelperText>:
      <FormHelperText>
      Email Id Required.
</FormHelperText>}

            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                {isPass?
                <FormHelperText>
                Enter your Password
      </FormHelperText>:
      <FormHelperText>
      {password.length}
</FormHelperText>}
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent={'center'}>
            <Button isDisabled={password.length<6}  colorScheme='blue' mr={2} onClick={loginfun} >
              Sign up
            </Button>
            <Button onClick={onClose}>Cancel</Button>
            
            
          </ModalFooter>
          <Text align="center">OR</Text>
           
          <Text align="center" marginBottom={"20px"} cursor={'pointer'}>Already a User? <Button>Login</Button></Text>
          {/* <button onClick={()=>handleOut()} type='submit' marginBottom='10px'>Sign Out</button> */}
            {/* <Button w="80%" m="1em auto" onClick={googleLogin} ><FcGoogle/> Sign Up with Google</Button> */}
        </ModalContent>
      </Modal>
       </> 
    )
}