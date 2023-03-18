import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text, Badge, HStack, VStack, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { Link as RouteLink, useNavigate } from 'react-router-dom'

function Auctions() {

    const [data, setData] = React.useState<any[]>([]);

    const navigate = useNavigate();

    const auctions = "https://acution.onrender.com/auctions";

    async function getAllcards() {
        await fetch(auctions, {
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
            <SimpleGrid templateColumns={{ base: "none", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} w={"100%"} justifyItems={"center"}>
            {data.map((item: any) => (
            <Card maxW='sm' boxShadow={'2xl'} key={item.id} mb={8} mt={8}>
                <CardBody>
                    <Badge colorScheme='green' bg={"#56C596"} pos={"absolute"} right={"-2vh"} top={"4vh"} pr={"3vh"} pl={"3vh"} pt={"0.5vh"} pb={"0.5vh"} borderRadius={"1.5vh"} fontWeight={"bold"} color={"white"}>جاري</Badge>
                    <Image
                    src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                    alt=''
                    borderRadius='lg'
                    />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md' fontFamily={"Cairo"}>{item.title}</Heading>
                    <HStack>
                        <VStack>
                            <Text>الأحد</Text>
                            <Text>1444/08/20 هـ</Text>
                            <Text>{item.started_date}</Text>
                        </VStack>
                        <VStack>
                            <Flex gap={3} alignItems={"center"} boxShadow={"md"} p={"0.5vh"} color={"#56C596"} fontWeight={"bold"}>
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
                            <Flex gap={2}>
                                <Text>العربون</Text>
                                <Text fontWeight={"bold"}>$450</Text>
                            </Flex>
                            <Badge p={"1vh"} bg={"blue.500"} fontSize='0.8em' borderRadius={"1vh"} fontWeight={"bold"} color={"white"}>{
                            item.is_online? "عن بعد": "حضوري"
                            }</Badge>
                        </VStack>
                    </HStack>
                    {/* <Text color='blue.600' fontSize='2xl'>$450</Text> */}
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter justifyContent={"center"}>
                    <RouteLink to={'/auctionDetails/1'}>
                    <Button variant='solid' colorScheme='green' bg={"#56C596"}>التفاصيل</Button>
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