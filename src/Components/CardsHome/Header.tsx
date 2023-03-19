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
import header from "../../assets/imageHeader.png"

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

    //     <HStack>
    //     {/* <Logo /> */}
    //     <Avatar src={Logo} w= {{ base: '27vw', md: '15vw',lg:  "11vw" }}></Avatar>
    // </HStack>

        backgroundImage={header}
        bgPos="center"
        bgSize="cover"
      >
        {/* <Flex
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
              color={"#E3E2D1"} _hover={{bg: '#63907D '}}
            >
                  ابدا مزادك الان      
                        </Button>
          </Stack>
        </Flex> */}
      </Box>
    </chakra.header>
  );
};

