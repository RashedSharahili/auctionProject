import { Box, chakra, Flex, Link, Image, Heading, Stack, Text, HStack, Container, IconButton, Table, TableContainer, Tbody, Td, Th, Thead, Tr, Button, Badge, VStack, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Checkbox } from '@chakra-ui/react'
import React from 'react'
import { BsPencilSquare, BsFillTrashFill } from 'react-icons/bs';
import ImageGallery from 'react-image-gallery';
import { useNavigate, useParams } from 'react-router-dom';

import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

function AuctionsDetails() {

  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)

  const [data, setData] = React.useState<any[]>([]);

  const navigate = useNavigate();

  const parmams= useParams()
    const id=parmams.id

  const auctionUrl = `http://localhost:8000/auctions/auction/${id}`;

  function getAuction() {
    fetch(auctionUrl, {
      headers: {
        "Content-Type": "application/json"
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

  // console.log(data.title);
  

  React.useEffect(() => {

    getAuction()

  }, []);

  return (
    <Box className="container">
        <Box>
          {/* <ImageGallery items={images} /> */}
        <Flex
  p={50}
  w="full"
  alignItems="center"
  justifyContent="center"
>
  <Box
    mx="auto"
    rounded="lg"
    shadow="md"
    bg="white"
    w={"100vh"}
    maxW={"100%"}>

    <Box p={6}>
      <Box pos={"relative"}>
        <Heading
          display="block"
          color="gray.800"
          textAlign={"center"}
          fontWeight="bold"
          fontSize="2xl"
          fontFamily={'Amiri'}
          mt={2}>
          {data.title}
        </Heading>
        <Stack mt='6' spacing='3'>
          <Box pos={"absolute"} top={"4vh"}>
            <Badge  bg={"#94B49F"} pr={"3vh"} pl={"3vh"} pt={"0.5vh"} pb={"0.5vh"} borderRadius={"1.5vh"} fontWeight={"bold"} color={"white"} >{ data.is_online? "عن بعد": "حضوري" }</Badge>
            {/* <HStack bg={"#94B49F"} color={"white"} mt={"2"} p={"2"} borderRadius={"8"}>
                                <VStack >
                                    <Text >ثانية</Text>
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
                                </HStack> */}
          </Box>
          {/* <HStack>
            <Text fontWeight={"bold"}>مساحة الأرض</Text>
            <Text>٥٠٠ متر مربع</Text>
          </HStack>
          <HStack>
            <Text fontWeight={"bold"}>موقع الأرض</Text>
            <Text>العليا</Text>
          </HStack> */}
        </Stack>
        <HStack justifyContent={"end"}>
          <Stack mt='6' spacing='3'>
            <HStack>
              <Text fontWeight={"bold"}>يبدأ المزاد بسعر</Text>
              <Text>{data.auction_price}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={"bold"}>سعر المزاد الحالي</Text>
              <Text>١٥٠ ألف</Text>
            </HStack>
            <HStack>
              <Text fontWeight={"bold"}>أقل سعر للمزايدة</Text>
              <Text>{data.auction_min_price}</Text>
            </HStack>
            <HStack>
              <Text fontWeight={"bold"}>أعلى سعر للمزايدة</Text>
              <Text>{data.auction_max_price}</Text>
            </HStack>
          </Stack>
        </HStack>
      </Box>
      <Box mt={4}>
        <Flex alignItems="center">
          {/* <ImageGallery items={images} /> */}
        </Flex>
      </Box>
      <Box mt={8}>
        <Heading textAlign={"center"} fontSize={"30"} fontFamily={'Amiri'}>أعلى مزايدة</Heading>
        <Flex alignItems="center" mt={2}>
          <Container maxWidth={"container.xl"} >
                <TableContainer fontFamily={'Amiri'}>
                    <Table size='sm'>
                        <Thead>
                          <Tr fontFamily={'Amiri'}>
                              <Th>المزايد</Th>
                              <Th>القيمة</Th>
                              <Th>الوقت</Th>
                          </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                            <Td>سماح عبدالله</Td>
                            <Td>٥٠ ألف</Td>
                            <Td>٨:٣٠ ٢٠/٠٨/٢٠٢٣</Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </Flex>
        <br></br>
        <Flex w={"100%"} justifyContent={"center"}>
          <Button  bg={"#5E8978"}  color="#E3E2D1"
                          _hover={{bg: '#63907D'}} onClick={onOpen}>سجل في المزاد</Button>
          <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader fontFamily={'Amiri'}>سجل في المزاد</ModalHeader>
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>الشروط</FormLabel>
              {/* <Input ref={initialRef} placeholder='First name' /> */}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>العربون</FormLabel>
              {/* <Input placeholder='Last name' /> */}
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>أقر بالموافقة على الشروط أعلاه</FormLabel>
              <Checkbox></Checkbox>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button  bg={"#5E8978"}  color="#E3E2D1"
                          _hover={{bg: '#63907D'}} mr={3}>
              سجل
            </Button>
            <Button onClick={onClose}>إلغاء</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Flex>
        {/* <Flex w={"100%"} justifyContent={"center"}>
          <Button colorScheme={"green"} bg={"#56C596"}>مزايدة</Button>
        </Flex> */}
      </Box>
    </Box>
  </Box>
</Flex>;
        </Box>
    </Box>
  )
}

export default AuctionsDetails