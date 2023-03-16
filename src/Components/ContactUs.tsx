import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from 'react-icons/md';
// import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

export default function contact() {
  return (
    <Container bg="rgb(248, 243, 240)" maxW="full" mt={0} centerContent overflow="hidden">
      <Flex>
        <Box
        boxShadow={'2xl'}
          bg="#F5F4F5"
          color="black"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}>
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>تواصل معنا </Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                   
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: '2px solid #E0E1E7' }}
                        leftIcon={<MdPhone color="#5E8978" size="20px" />}>
                        +966 507312699
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: '2px solid #E0E1E7' }}
                        leftIcon={<MdEmail color="#5E8978" size="20px" />}>
                        Mazadk@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="black"
                        _hover={{ border: '2px solid #E0E1E7' }}
                        leftIcon={<MdLocationOn color="#5E8978" size="20px" />}>
                        السعودية - الرياض
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start">

                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="black">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>الاسم</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>البريد الالكتروني</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input type="text" size="md" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>رسالة</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#5E8978"
                          color="#E3E2D1"
                          _hover={{bg: '#63907D'}}>
                          ارسال الرسالة
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}