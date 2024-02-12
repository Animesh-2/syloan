import React from "react";
import {Flex,Box,Heading,Button,Link,Spacer,Image, ButtonGroup} from '@chakra-ui/react'
export default function Navbar(){
    return(<Flex align={"center"} justify={"space-around"} p="0.5em 0em">
        <Flex align={"center"}>
         <Image w="2em "src="logo.png"/>
         <Link>Syloan</Link>
       </Flex>
       
       {/* <Spacer /> */}
       <Flex align={"center"} justify={"space-around"} w="40%">
         <Link>Use Cases</Link>
         <Link>Product</Link>
         <Link>Company</Link>
         <Link>Support</Link>
       </Flex>
       {/* <Spacer /> */}
       <Flex w="15%" align="center" justify="space-between">
       <ButtonGroup>
       <Button variant='ghost' color="white">Login</Button>
        <Button variant='outline' borderColor="#52dffe" borderRadius="1.5em" color="#52dffe">Register</Button>

       </ButtonGroup>
       </Flex>
    </Flex>
)}