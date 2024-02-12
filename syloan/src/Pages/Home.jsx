import React,{useState,useEffect} from 'react';
import { Box, Heading ,Image,Flex,Text,Button} from '@chakra-ui/react'
import Navbar from "../component/Navbar";
import styles from "./Home.module.css"; 
import Steps from "../component/Stepper";
export default function Home(){

        const [scrollY, setScrollY] = useState(0);
      
        useEffect(() => {
            const handleScroll = () => {
              throttleScroll();
            };
            function throttle(func, delay) {
                let timeout;
                return function(...args) {
                  if (!timeout) {
                    timeout = setTimeout(() => {
                      func(...args);
                      timeout = null;
                    }, delay);
                  }
                };
              }
            const throttleScroll = throttle(() => {
              setScrollY(window.scrollY);
            }, 2); // Adjust throttle time as needed
        
            window.addEventListener('scroll', handleScroll);
        
            return () => {
              window.removeEventListener('scroll', handleScroll);
            };
          }, []);
    return(
    <Box  overflowx={"hidden"} h="100vh">
   {/* main */}
 <Box bg="#0e0a20" color={"#F8FCFB"}>
    <Navbar/>
    <Flex h="95vh" w={"100%"} justify={"space-between"} align={"center"} overflow={"hidden"}>
        <Box p={"2EM"}>
        <Heading color="#fdfdfe" fontSize={"6.5em"}
  >Business Loan with Unlimited <span className={styles.gradienttext}>Rewards</span> in Lifetime</Heading>
        <Text w="49%" color="grey">Thousands of entreprenuers bank on 
            winden to start or grow their business. Open an 
            account in under 3 minutes. </Text>
            <Button mt="1em " borderRadius="1.5em" color="black" variant={"solid"} bg="#52dffe">Get Started</Button>
        </Box>
        <Image src="BORROW_MONEY.png" w="30%" h="70%" transform={"rotate(20deg)"} />
    </Flex>

</Box>
{/* <Box backgroundColor="#A31ACB" my={"1em"} width="100%" height="" color={"black"} p="6em">
<Heading textAlign={"center"}>we’ve got
your back.</Heading>
<Text textAlign={"center"}>gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.</Text>
</Box> */}
{/* parallax */}
{/* <div className={styles.parallaxContainer} style={{ height: '100vh',  
}}>
   <div
  className={styles.parallaxLayer}
  style={{ transform: `translateY(${scrollY * 0.4}px)`,backgroundColor: "#0e0a20"}}
>
     <Box  color={"#F8FCFB"}>
    <Flex h="100vh" w={"100%"} justify={"space-between"} align={"center"} overflow={"hidden"}>
        <Box >
        <Image w="50%" src="pig.png"></Image>
        </Box>
    </Flex>

</Box>
 
{/* <Box w="100%" h="100vh" bg="green" >
<Heading >Hello  </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello Under </Heading>
<Heading >Hello  </Heading>
</Box> */}
{/* </div> */}

{/* <div
  className={styles.parallaxLayer}
  style={{ transform: `translateY(${scrollY * 0.55}px)`, backgroundColor:"BLACK" }}

>
<img src="phone.png" alt="background" />

</div>

</div> */} 
{/* <Box position={"absolute"} color={"black"} left="10%">

<Heading fontSize="5em"textAlign={"center"} > More Cash In Your Packet</Heading>


</Box> */}
<Box w="100%" bg="#fbfbfb" height="100vh" position="relative" p="4em 2em">
  <Text textAlign={"center"} fontWeight="bold" color="#FFC436 ">How it works</Text>
  <Heading textAlign={"center"}>We Help You To Find The <span className={styles.gradienttext}>Cheapest</span>  Loan</Heading>
 <Flex justify={"space-between"} w="100%">
 <Steps w="65%"/>
 <Box w="40%" p= "2em">
  <Image w="90%" m="auto" src="steps.png"></Image>
  </Box>
 </Flex>
</Box>
</Box>
)}