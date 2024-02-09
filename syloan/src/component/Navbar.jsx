import React from "react";
import {Flex,Box,Heading,Button,Link,Spacer} from '@chakra-ui/react'
export default function Navbar(){
    return(<Flex align={"center"} justify={"space-around"} p="0.5em 0em">
        <Flex align={"center"}>
         <Heading>Logo</Heading>
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
        <Button>Login</Button>
        <Button>Register</Button>
       </Flex>
    </Flex>
)}