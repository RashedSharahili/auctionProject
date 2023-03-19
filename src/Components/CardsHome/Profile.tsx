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
import { useNavigate, Link as RouteLink } from "react-router-dom";
  
  export default function profile() {

    const [data, setData] = React.useState<any>();

    const navigate = useNavigate();

    function parseJwt(token: any) {
      if (!token) { return; }
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace('-', '+').replace('_', '/');
      return JSON.parse(window.atob(base64));
  }

  const userInfo = parseJwt(localStorage.getItem("token"))

  console.log(userInfo.email);
  

    // const userProfile = `https://acution.onrender.com/profile/${userInfo.profileId}`;
    const userProfile = `http://localhost:8000/profile/${userInfo.profileId}`;
    // const userProfile = `http://localhost:8000/profile/`;

    function getUserProfile() {
      fetch(userProfile, {
        headers: {
          "Content-Type": "application/json",
          "authorization": localStorage.getItem("token") as string
        },
      })
        .then((res) => res.json())
        .then((uData) => {
          // if(uData.status == 403) {
  
          //     navigate("/login");
  
          // } else {
  
          //     setData(uData)
          // }
          setData(uData);
          console.log(uData);
        });
    }

    // console.log(data);
    

    React.useEffect(() => {

      getUserProfile()

    }, []);

    // console.log(Object.keys(data));

    // let userData = Object.values(data);

    // console.log(userData);
    
    
    
    return (
      <Box className="container">
        <Box>
          <Center py={6}>
            <Box
              w={{ base: "150", md: "500", lg: "600px" }}
              padding={{ base: "70px", md: "70px", lg: "70px" }}
              paddingBottom={10}
              bg={useColorModeValue("#FFFFFF", "#FFFFFD")}
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
              {data.name}
                  </Heading>
                  <br></br>
                  <br></br>
      
        
      
                  <Text color={"gray.800"} fontFamily={'Amiri'} >{userInfo.email}</Text>
                  <br></br>
      
                  <br></br>
      
      
      
                  <Text color={"gray.800"} fontFamily={'Amiri'}>{data.phone_number}</Text>
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
                  <RouteLink to={"/FormAuction"}>
                  <Button
                    w={40}
                    mt={8}
                    bg={"#5E8978"}  color="#E3E2D1"
                    _hover={{bg: '#63907D'}}
                  >
                اضف مزاد
                  </Button>
                  </RouteLink>
                </Center>
              </Box>
            </Box>
          </Center>
        </Box>
      </Box>
    );
  }
  