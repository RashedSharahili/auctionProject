import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Image,
  Center,
  Link,
  Badge,
  Flex,
  useColorModeValue,
  SimpleGrid,
  Grid,
  HStack,
  Divider,
  VStack,
  Container
} from "@chakra-ui/react";
import React from "react";
import { useNavigate, Link as RouteLink } from "react-router-dom";
import Header from "./CardsHome/Header";

export default function Home() {

  const [data, setData] = React.useState<any[]>([]);

  const navigate = useNavigate();

  // const cardsinHome = "https://acution.onrender.com/auctions";
  // const cardsinHome = "https://acution.onrender.com/auctions/news";
  const cardsinHome = "http://localhost:8000/auctions/news";
  async function getAllcards() {
    await fetch(cardsinHome, {
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
    getAllcards();
  }, []);





  return (
   // {.map((, index)=>{
    <Box>
       <Header/>
      <Box className="container">
          <Center py={5}>
            <Heading>يحدث الان </Heading>
          </Center>
          <SimpleGrid templateColumns={{ base: "none", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} w={"100%"} justifyItems={"center"}>
          {data.map((item: any) => (
            <Card maxW='sm' boxShadow={'2xl'} key={item.id} mb={8} mt={8}>
                <CardBody>
                {/* <Text p={"3vh"} fontSize='0.8em'  fontWeight={"bold"} color={"black"} right={"-2vh"}  >
                    { item.is_online? "عن بعد": "حضوري" }
                </Text> */}
                    <Text bg={"#ECE8DD"} pos={"absolute"} right={"-2vh"} top={"0vh"} pr={"1vh"} pl={"2vh"} pt={"0.5vh"} pb={"0.5vh"} borderRadius={"1vh"} fontWeight={"bold"} color={"black"}fontSize='0.8em' >
                    { item.is_online? "عن بعد": "حضوري" }
                    </Text>
                    
                    <Badge colorScheme='green' bg={"#94AF9F"} pos={"absolute"} right={"-2vh"} top={"4vh"} pr={"3vh"} pl={"3vh"} pt={"0.5vh"} pb={"0.5vh"} borderRadius={"1.5vh"} fontWeight={"bold"} color={"black"}>جاري</Badge>
                    <Image
                    src={item.auctionImage}
                    alt=''
                    borderRadius='lg'
                    />
                    <Stack mt='16' spacing='6'>
                    <Heading size='md' fontFamily={"Cairo"}>{item.title}</Heading>
                    <HStack >
                        <VStack fontSize={"sm"}>
                            <Text>يبدأ بتاريخ</Text>
                            <Text>{item.started_date}</Text>
                        </VStack>
                        <VStack >
                            <Container  >
                        <Flex gap={4} boxShadow={"md"} p={"1.5vh"} color={"#8B7E74"} fontWeight={"bold"} >
                                <Text>ينتهي بتاريخ</Text>
                                
                                <HStack>
                                <Text>{item.end_date}</Text>
                                {/* <VStack>
                                    
                                    <Text>ثانية</Text>
                                    <Text>02</Text>
                                </VStack>
                                <VStack>
                                    <Text>دقيقة</Text>
                                    <Text>02</Text>
                                </VStack>
                                <VStack>
                                    <Text>ساعة</Text>
                                    <Text>02</Text>
                                </VStack>
                                <VStack>
                                    <Text>يوم</Text>
                                    <Text>02</Text>
                                </VStack> */}
                                </HStack>
                                
                            </Flex>
                            </Container>
                            <br></br>
                            <Flex gap={3}>
                                <Text>العربون</Text>
                                <Text fontWeight={"bold"}>{(item.auction_price / 50)} ريال</Text>
                            </Flex>
                            
                            
                        </VStack>
                    </HStack>
                    {/* <Text color='blue.600' fontSize='2xl'>$450</Text> */}
                    </Stack>
                </CardBody>
                <Divider />
               

                <CardFooter justifyContent={"center"}>     
                    <RouteLink to={`/auctionDetails/${item.id}`}>
                    <Button variant='solid' colorScheme='green'
                     bg={"#5E8978"}  color="#E3E2D1"
                          _hover={{bg: '#63907D'}}>التفاصيل</Button>
                    </RouteLink>
                </CardFooter>
            </Card>
            ))}    
            </SimpleGrid>
      </Box>
    </Box>
  );
}
