import React,{useState,useEffect} from 'react';
import { Box, Heading ,Image,Flex,Text,Button} from '@chakra-ui/react'
import Navbar from "../component/Navbar";
import styles from "./Home.module.css"; 
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
    return(<Box bg="blue" overflowx={"hidden"}><div className={styles.parallaxContainer} style={{ height: '100vh'
}}>



<div
  className={styles.parallaxLayer}
  style={{ transform: `translateY(${scrollY * 0.55}px)` }}
>
  <Box bg="#0e0a20" color={"#F8FCFB"}>
    <Navbar/>
    <Flex h="90vh" w={"100%"} justify={"space-between"} align={"center"} overflow={"hidden"}>
        <Box p={"2EM"}>
        <Heading >Business Loan with Unlimited <Text color="#2FA4FF" >Rewards</Text> in Lifetime</Heading>
        <Text>Thousands of entreprenuers bank on 
            winden to start or grow their business. Open an 
            account in under 3 minutes. </Text>
            <Button>Get Started</Button>
        </Box>
        <Image src="BORROW_MONEY.png" w="30%" h="70%" transform={"rotate(20deg)"} />
    </Flex>

</Box>
</div>

<div
  className={styles.parallaxLayer}
  style={{ transform: `translateY(${scrollY * 0.65}px)`, backgroundColor:"BLACK" }}

>
<img src="phone.png" alt="background" />

</div>
<Box position={"absolute"} color={"black"}>
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

</Box>
</div>
</Box>
)}