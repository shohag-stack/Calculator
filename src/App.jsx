import React, { useState } from "react";
import { Box, Button, Input, SimpleGrid, VStack } from "@chakra-ui/react";

const Calculator = () => {

  const [input,setInput] = useState("")

  const numbers = ["(",")","CE","%","7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"]

  const handleInput =  (value)=> {
    if (value === "CE") {
      setInput(input.slice(0, -1)); // Remove the last character
    } else {
      setInput((prev) => prev + value);
    }
  }

  const calculateResult = ()=> {

    try {
      setInput(eval(input).toString())
    }
    catch {
      setInput("input valid number");
    }

  }
  

  return (
    <Box height='100vh' display='flex' justifyContent='center' alignItems='center'>
      <VStack p={5} spacing={4} boxShadow="lg" borderRadius="md" maxW="sm" mx="auto">
      <Input readOnly value={input} textAlign="right" fontSize="2xl" p={4} />
      <SimpleGrid columns={4} spacing={2} w="full">
      {
        numbers.map((char,index)=>(

          <Button key={index} m={1} bg="bg.muted" color="bg.inverted" onClick={()=> (char === "=" ? calculateResult() : handleInput(char))}>
            {char}
          </Button>

        ))
      }
        
      </SimpleGrid>
    </VStack>
    </Box>
  );
};

export default Calculator;
