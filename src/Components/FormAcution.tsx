import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    useBreakpointValue,
    IconProps,
    Icon,
    RadioGroup,
    Radio,
    useToast

  } from '@chakra-ui/react';
  import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
  export default function JoinOurTeam() {

    const [CategoryAution, setCategoryAution] = useState('');
    const [AdressAuction, setAdressAuction] = useState('');
    const [DateAuction, setDateAuction] = useState('');
    const [PriceAuction, setPriceAuction] = useState('');
    const [ImageAuction, setImageAuction] = useState('');
    const navigate = useNavigate();
    const toast = useToast();
    const submitAddAuction = async () => {
      try {
        const request = await fetch('https://acution.onrender.com/users/FormAuction', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ CategoryAution, AdressAuction ,DateAuction,PriceAuction,ImageAuction}),
        });
        const data = await request.json();
        if (request.status !== 200) {
          toast({
            title: data.message,
            status: 'error',
            duration: 3000,
            position: 'top',
          });
          return;
        }
        toast({
          title: data.message,
          status: 'success',
          duration: 3000,
          position: 'top',
        });
        localStorage.setItem('token', data.token);
        navigate('/');
      } catch (error) {
        toast({
          title: 'Server Error !',
          status: 'error',
          duration: 3000,
          position: 'top',
        });
      }}





    return (
      <Box className="container">
        <Box position={'relative'}>
          <Container
            as={SimpleGrid}
            maxW={'7xl'}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}>
            <Stack spacing={{ base: 10, md: 20 }}>
              <Heading
                lineHeight={1.1}
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl', lg: '6xl' }}>
                أضف مزادك معنا {' '}
                <Text
                  as={'span'}
                  bgGradient="linear(to-r, #466652,#466652)"
                  bgClip="text">
                  و
                </Text>{' '}
              بكل أمان وسهولة
              </Heading>
              <Stack direction={'row'} spacing={4} align={'center'}>
                {/* <Text fontFamily={'heading'} fontSize={{ base: '4xl', md: '6xl' }}>
                </Text> */}
              </Stack>
            </Stack>
            <Stack
              bg={'gray.50'}
              rounded={'xl'}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ lg: 'lg' }}>
              <Stack spacing={4}>
                <Heading
                  color={'gray.800'}
                  lineHeight={1.1}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                    ! أضف مزادك
                  <Text
                    as={'span'}
                    bgGradient="linear(to-r, red.400,pink.400)"
                    bgClip="text">
                  </Text>
                </Heading>
                {/* <Text color={'gray.500'} fontSize={{ base: 'sm', sm: 'md' }}>
                  We’re looking for amazing engineers just like you! Become a part
                  of our rockstar engineering team and skyrocket your career!
                </Text> */}
              </Stack>
              <Box as={'form'} mt={10}>
                <Stack spacing={10}>
                  <Input

                  onChange={(e) => setAdressAuction(e.target.value)}

                    placeholder="عنوان المزاد"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <Input
                  onChange={(e) => setCategoryAution(e.target.value)}
                    placeholder="تصنيف المزاد "
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />
                  <Input
                  onChange={(e) => setPriceAuction(e.target.value)}
                    placeholder="سعر المزاد"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />

                <Input
                onChange={(e) => setDateAuction(e.target.value)}

                    placeholder="تاريخ المزاد"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />

                <RadioGroup defaultValue='2'>
                  <Stack spacing={5} direction='row'>
                    <Radio colorScheme='gray' value='false'>
                      المزاد حضوري
                    </Radio>
                    <Radio colorScheme='gray' value='true'>
                      المزاد عن بعد
                    </Radio>
                  </Stack>
                </RadioGroup>
                  <Input 
                  onChange={(e) => setImageAuction(e.target.value)}
                  type='file' placeholder='صور المزاد'></Input>
                  {/* <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
                    صور المزاد
                  </Button> */}
                  </Stack>
                  <Button
                    fontFamily={'heading'}
                    mt={8}
                    w={'full'}
                    bgGradient="linear(to-r,#466652,#466652)"
                    color={'white'}
                    _hover={{
                      bgGradient: 'linear(green.90,white)',
                      boxShadow: 'xl',
                    }}
                    
                    onClick={submitAddAuction}
                    >
                    أضف المزاد
                  </Button>
                </Box>
                form
              </Stack>
            </Container>
            <Blur
              position={'absolute'}
              top={-10}
              left={-10}
              style={{ filter: 'blur(70px)' }}/>
          </Box>
        </Box>
      );
    }
    
    export const Blur = (props: IconProps) => {
      return (
        <Icon
          
      
      
          width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
          zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
          height="560px"
          viewBox="0 0 528 560"
          fill="none"
          {...props}>
        
        </Icon>
    );
  };
