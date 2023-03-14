import React from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  IconButton,
  Heading,
  Button,
  Stack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";

export default function App(){
  const bg = useColorModeValue("white", "gray.800");

  return (
    <chakra.header>
      <chakra.nav bg={bg} shadow="base">
        <Box mx="auto" px={2} maxW="full">
          <Box
            display={{ md: "flex" }}
            alignItems={{ md: "center" }}
            justifyContent={{ md: "space-between" }}
          >
            <Flex alignItems="center" justifyContent="space-between">
              <Box fontSize="xl" fontWeight="semibold" color="gray.700">
               
              </Box>

         
            </Flex>

            <Box display={["none",  "flex"]} alignItems={{ md: "center" }}>
          
            
             
            
            </Box>
          </Box>
        </Box>
      </chakra.nav>

      <Box
        w={{base:"none",lg:"full"}}
        h={{base:"50vh",lg:"80vh"}}
        backgroundImage="url(https://www.econlib.org/wp-content/uploads/2018/02/auction.jpg)"
        bgPos="center"
        bgSize="cover"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          bg="blackAlpha.300"
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["2xl",  "3xl"]}
              fontWeight="semibold"
              color="white"
              textTransform="uppercase"
            >
              المزاد اصبح اسهل{" "}
       
            </Heading>
            <Button
              colorScheme="brand"
              textTransform="uppercase"
              w="fit-content"
              bg={"#5E8978"}
              color={"#D4CCA7"} _hover={{bg: '#4B7967'}}
            >
ابدا مزادك الان            </Button>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};

