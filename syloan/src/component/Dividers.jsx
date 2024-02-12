import React ,{useEffect,useState}from "react"
import {
    Box,
    Divider,
    Flex,
    Heading,
    Image,Text,Spacer
  } from '@chakra-ui/react'
  export default function Steps(){
    const[index,setIndex]=useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % 4); // Increment the index cyclically from 0 to 2
      }, 1530); // Change every 2 seconds
  
      return () => clearInterval(interval); // Cleanup the interval on component unmount
  // Example();
    }, []);
const steps = [
    { title: 'Pay For You', description: 'You submit one application it takes only a few minutes. We then obtain offers from the banks for you' },
    { title: 'Take Control ', description: 'You submit one application it takes only a few minutes. We then obtain offers from the banks for you' },
    { title: 'Spend On Growth', description: 'You submit one application it takes only a few minutes. We then obtain offers from the banks for you' },
    { title: 'Easy Loan', description: 'You submit one application it takes only a few minutes. We then obtain offers from the banks for you' },
 
]
  
  // function Example() {
  //   const { activeStep } = useSteps({
  //     index: 1,
  //     count: steps.length,
  //   })}
  
    
    return (
      <Box mt="8" p="2em"index={index} colorScheme="purple" orientation='vertical' height='400px' gap='0'>
        {steps.map((step, i) => (
         <Box p="2em 1em" color={(index===i?"Black":"Grey")}><Divider/>
         <Flex justify={"space-between"} align="center">
          <Image src="bullet.png" w="5em"></Image>
          <Spacer/>
          <Box w="50%" textAlign="left"><Heading>{step.title}</Heading></Box>
          <Text w="40%">{step.description}</Text>
         </Flex>

         <Divider color="black"/>
         </Box>
        ))}
      </Box>
    )
  
        }
