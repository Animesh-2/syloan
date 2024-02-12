import React ,{useEffect,useState}from "react"
import {
    Step,
    StepDescription,
    StepIcon,
    StepIndicator,
    StepNumber,
    StepSeparator,
    StepStatus,
    StepTitle,
    Stepper,
    useSteps,
    Box
  } from '@chakra-ui/react'
  export default function Steps(){
    const[index,setIndex]=useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % 3); // Increment the index cyclically from 0 to 2
      }, 1530); // Change every 2 seconds
  
      return () => clearInterval(interval); // Cleanup the interval on component unmount
  // Example();
    }, []);
const steps = [
    { title: 'Apply free of charge and without obligation', description: 'You submit one application it takes only a few minutes. We then obtain offers from the banks for you' },
    { title: 'Compare the offer you choose some platform', description: 'You submit one application it takes only a few minutes. We then obtain offers from the banks for you' },
    { title: 'Choose  the best offer you need', description: 'You submit one application it takes only a few minutes. We then obtain offers from the banks for you' },
  ]
  
  // function Example() {
  //   const { activeStep } = useSteps({
  //     index: 1,
  //     count: steps.length,
  //   })}
  
    
    return (
      <Stepper mt="8" p="2em"index={index} colorScheme="purple" orientation='vertical' height='400px' gap='0'>
        {steps.map((step, i) => (
          <Step key={i}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
  
            <Box flexShrink='0'>
              <StepTitle color={(index===i?"black":"grey")} fontSize={(index===i?"2em":"1em")}>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
  
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
    )
  
        }
