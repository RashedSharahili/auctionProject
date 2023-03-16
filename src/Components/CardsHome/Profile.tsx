import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from "@chakra-ui/react";
import React from "react";
  
  export default function profile() {

    const [data, setData] = React.useState<any[]>([]);

    function parseJwt(token: any) {
      if (!token) { return; }
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
  }

  const userInfo = parseJwt(localStorage.getItem("token"))

    const userProfile = "https://acution.onrender.com/profile";

    function getAllcards() {
      fetch(userProfile, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((Data) => {
          // if() {
  
          //     navigate("/login");
  
          // } else {
  
          //     setData(Data)
          // }
          setData(Data);
          console.log(Data);
        });
    }

    React.useEffect(() => {
      // console.log(parseJwt(localStorage.getItem("token")));
    }, []);
    
    return (
      <Box className="container">
        <Box>
          <Center py={6}>
            <Box
              w={{ base: "150", md: "500", lg: "600px" }}
              padding={{ base: "70px", md: "70px", lg: "70px" }}
              paddingBottom={10}
              bg={useColorModeValue("#FFFAF0", "gray.800")}
              boxShadow={"2xl"}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Flex justify={"center"} mt={-12}>
                <Avatar
                  size={"xl"}
                  src={
                    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  }
                  css={{
                    border: "2px solid white",
                  }}
                />
              </Flex>
      
              <Box p={6}>
                <Stack spacing={0} align={"center"} mb={5}>
      
                  <Heading fontSize={"2xl"} fontWeight={500} fontFamily={"body"}>
              الاسم
                  </Heading>
                  <br></br>
                  <br></br>
      
        
      
                  <Text color={"gray.500"}>الايميل</Text>
                  <br></br>
      
                  <br></br>
      
      
      
                  <Text color={"gray.500"}>رقم الجوال</Text>
                </Stack>
      
      
                {/*<Stack direction={"row"} justify={"center"} spacing={6}>
                  <Stack spacing={0} align={"center"}>
                    <Text fontWeight={600}>23k</Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      Followers
                    </Text>
              </Stack>
                  <Stack spacing={0} align={"center"}>
                    <Text fontWeight={600}>23k</Text>
                    <Text fontSize={"sm"} color={"gray.500"}>
                      Followers
                    </Text>
                  </Stack>
              </Stack>*/}
                <Center>
                  <Button
                    w={40}
                    mt={8}
                    bg={useColorModeValue("#151f21", "gray.900")}
                    color={"white"}
                    rounded={"md"}
                    _hover={{
                      transform: "translateY(-2px)",
                      boxShadow: "lg",
                    }}
                  >
                اضف مزاد
                  </Button>
                </Center>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
    );
  }
  