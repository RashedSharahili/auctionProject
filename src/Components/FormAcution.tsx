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
  import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
  
  export default function JoinOurTeam() {

    const [auction_type, setCategoryAution] = useState('');
    const [title, setAdressAuction] = useState('');
    const [started_date, setStartDateAuction] = useState('');
    const [end_date, setEndDateAuction] = useState('');
    const [auction_price, setPriceAuction] = useState('');
    const [auctionImage, setImg] = useState<any>("");
    const [auction_min_price, setminPrice] = useState('');
    const [auction_max_price, setmaxPrice] = useState('');
    const navigate = useNavigate();
    const toast = useToast();
    
    // const addAuctionUrl = "http://localhost:8000/auctions";
    const addAuctionUrl = "https://auctionproject.onrender.com/auctions";

    const submitAddAuction = async () => {
      try {
        const request = await fetch(addAuctionUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "authorization": localStorage.getItem("token") as string
          },
          body: JSON.stringify({ auction_type, title ,started_date,end_date,auction_price,auctionImage,auction_min_price,auction_max_price}),
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
        navigate('/auctions');
      } catch (error) {
        toast({
          title: 'Server Error !',
          status: 'error',
          duration: 3000,
          position: 'top',
        });
      }
    }

    var fileAsBase64 = useCallback((file:File)=>{
      return new Promise((resolve:any, reject:any)=>{
          const reader = new FileReader();
      
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result)
          reader.onerror = err => reject(err)
          })
     },[])
   
    const uploadFileHandler = async (e : any) => {
      var file = e.target.files[0];
      var auctionImage  = await fileAsBase64(file).then(auctionImage => auctionImage).then(auctionImage => auctionImage)
      setImg(auctionImage);
    }

    console.log(auctionImage);

    
    return (
      <Box className="container" >
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
               بكل أمان وسهولة.
              </Heading>
            
            </Stack>
            <Stack
              bg={'gray.50'}
              rounded={'xl'}
              p={{ base: 4, sm: 6, md: 8 }}
              spacing={{ base: 8 }}
              maxW={{ full:"full" }}>
              <Stack spacing={4}>
                <Heading
                  color={'gray.800'}
                  lineHeight={1.1}
                  fontFamily={'Amiri'}
                  fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}>
                      أضف مزادك ..
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
                  type={"number"}
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
                type={"number"}
                onChange={(e) => setmaxPrice(e.target.value)}

                    placeholder="اعلى سعر للمزايده"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />


                <Input
                type={"number"}
                onChange={(e) => setminPrice(e.target.value)}

                    placeholder="اقل سعر للمزايده"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />

               <Input
                onChange={(e) => setStartDateAuction(e.target.value)}

                    placeholder="تاريخ بداية المزاد"
                    bg={'gray.100'}
                    border={0}
                    color={'gray.500'}
                    _placeholder={{
                      color: 'gray.500',
                    }}
                  />

                <Input
                onChange={(e) => setEndDateAuction(e.target.value)}

                    placeholder="تاريخ انتهاء لمزاد"
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
                  onChange={(e) => {
                    uploadFileHandler(e);
                  }}
                  type='file' placeholder='صور المزاد'></Input>
                  {/* <Button fontFamily={'heading'} bg={'gray.200'} color={'gray.800'}>
                    صور المزاد
                  </Button> */}
                  </Stack>
                  <Button
                    fontFamily={'heading'}
                    mt={8}
                    w={'full'}
                    bg={"#5E8978"}  color="#E3E2D1"
                          _hover={{bg: '#63907D'}}
                    
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
