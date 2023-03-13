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
  Grid
} from "@chakra-ui/react";
import React from "react";
import Header from "./CardsHome/Header";

export default function Home() {
  return (
   // {.map((, index)=>{
    <Box>
       <Header/>
      <Box className="container">
      <Center py={5} >
        <Heading>يحدث الان </Heading>
      </Center>
      <Grid templateColumns=  {{ base: "none", md: "", lg: 'repeat(3, 1fr)' }} gap={3}>
        
      <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'350px'}
            w={'full'}
            // bg={useColorModeValue('white', 'gray.800')}
            bg='#FEF9E7'
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={0}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={350}
                objectFit={'cover'}
                src={"https://sa.aqar.fm/blog/wp-content/uploads/2021/01/%D8%A7%D9%84%D8%A7%D8%B1%D8%B63.jpg"}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {/* <i>{}</i>*/}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text  color={'gray.600'} w={'200px'}>
              {/* <i>{}</i>*/}
                </Text>
              </Stack>
              <Text fontWeight={400} fontSize={'xl'}>
                  {/* <i>{}</i>*/}
                </Text>
                {localStorage.getItem('name') != null?
                (<Button 
                // onClick={onOpen}
              // onClick={showConfirmAlert}
                variant='solid' 
                bg='#221409'
                color='white'
                py='6'
                px='8'
                _hover={{ bg: '#221409' }}>
                    Buy
                </Button>)
                :
                (<Button 
                // onClick={()=> {
                //   alert("please you need Log In first")
                //   navigate('/logIn')
                // }}
                //onClick={showAlert}
                variant='solid' 
                bg='#5E8978'
                color='white'
                py='6'
                px='8'
                _hover={{ bg: '#4B7967' }}>
                    التفاصيل
                </Button>)
                }
                
            </Stack>
            
          </Box>
        </Center>













        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'350px'}
            w={'full'}
            // bg={useColorModeValue('white', 'gray.800')}
            bg='#FEF9E7'
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={0}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={350}
                objectFit={'cover'}
                src={"https://haraj-plus.sa/storage/products/zzkfsjx6.jpeg"}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {/* <i>{}</i>*/}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text  color={'gray.600'} w={'200px'}>
              {/* <i>{}</i>*/}
                </Text>
              </Stack>
              <Text fontWeight={400} fontSize={'xl'}>
                  {/* <i>{}</i>*/}
                </Text>
                {localStorage.getItem('name') != null?
                (<Button 
                // onClick={onOpen}
              // onClick={showConfirmAlert}
                variant='solid' 
                bg='#221409'
                color='white'
                py='6'
                px='8'
                _hover={{ bg: '#221409' }}>
                    التفاصيل
                </Button>)
                :
                (<Button 
                // onClick={()=> {
                //   alert("please you need Log In first")
                //   navigate('/logIn')
                // }}
                //onClick={showAlert}
                variant='solid' 
                bg='#5E8978'
                color='white'
                py='6'
                px='8'
                _hover={{ bg: '#4B7967' }}>
                    التفاصيل
                </Button>)
                }
                
            </Stack>
            
          </Box>
        </Center>





        <Center py={12}>
          <Box
            role={'group'}
            p={6}
            maxW={'350px'}
            w={'full'}
            // bg={useColorModeValue('white', 'gray.800')}
            bg='#FEF9E7'
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={0}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={350}
                objectFit={'cover'}
                src={"https://auto.ahram.org.eg/Media/News/2021/6/24/2021-637601438478302953-830.jpg"}
              />
            </Box>
            <Stack pt={10} align={'center'}>
              
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
            {/* <i>{}</i>*/}
              </Heading>
              <Stack direction={'row'} align={'center'}>
                <Text  color={'gray.600'} w={'200px'}>
              {/* <i>{}</i>*/}
                </Text>
              </Stack>
              <Text fontWeight={400} fontSize={'xl'}>
                  {/* <i>{}</i>*/}
                </Text>
                {localStorage.getItem('name') != null?
                (<Button 
                // onClick={onOpen}
              // onClick={showConfirmAlert}
                variant='solid' 
                bg='#221409'
                color='white'
                py='6'
                px='8'
                _hover={{ bg: '#221409' }}>
                    التفاصيل
                </Button>)
                :
                (<Button 
                // onClick={()=> {
                //   alert("please you need Log In first")
                //   navigate('/logIn')
                // }}
                //onClick={showAlert}
                variant='solid' 
                bg='#5E8978'
                color='white'
                py='6'
                px='8'
                _hover={{ bg: '#4B7967' }}>
                    التفاصيل
                </Button>)
                }
                
            </Stack>
            
          </Box>
        </Center>
        </Grid>
        
      </Box>
    </Box>
  );
}
