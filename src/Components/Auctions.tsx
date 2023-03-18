import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text, Badge, HStack, VStack, Flex, SimpleGrid,Container } from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink, useNavigate } from 'react-router-dom'

function Auctions() {

    const [data, setData] = React.useState<any[]>([]);

    const navigate = useNavigate();

    const auctions = "http://localhost:8000/auctions";
    //const auctions = "https://acution.onrender.com/auctions";


    async function getAllcards() {
        await fetch(auctions, {
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // if() {
    
            //     navigate("/login");
    
            // } else {
    
            //     setData(Data)
            // }
            setData(data);
            
            // console.log(Data);
          });
      }

      React.useEffect(() => {
        getAllcards();
      }, []);

  return (
    <Box className="container">
        <br></br>
        <Box>
            <Heading fontFamily={"Cairo"} textAlign={"center"}>المزادات</Heading>
            <SimpleGrid templateColumns={{ base: "none", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} w={"100%"} justifyItems={"center"} >
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
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt=''
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='6'>
                    <Heading size='md' fontFamily={"Cairo"}>{item.title}</Heading>
                    <HStack >
                        <VStack fontSize={"sm"}>
                            <Text>الأحد</Text>
                            <Text>1444/08/20 هـ</Text>
                            <Text>{item.started_date}</Text>
                        </VStack>
                        <VStack >
                            <Container  >
                        <Flex gap={4} boxShadow={"md"} p={"1.5vh"} color={"#8B7E74"} fontWeight={"bold"} marginLeft={16}  >
                                <Text>ينتهي بعد</Text>
                                
                                <HStack>
                                
                                <VStack>
                                    
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
                                </VStack>
                                </HStack>
                                
                            </Flex>
                            </Container>
                            <br></br>
                            <Flex gap={3}>
                                <Text>العربون</Text>
                                <Text fontWeight={"bold"}>ريال  450</Text>
                            </Flex>
                            
                            
                        </VStack>
                    </HStack>
                    {/* <Text color='blue.600' fontSize='2xl'>$450</Text> */}
                    </Stack>
                </CardBody>
                <Divider />
               

                <CardFooter justifyContent={"center"}>     
                    <RouteLink to={'/auctionDetails/1'}>
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
  )
}

export default Auctions