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
    Radio

  } from '@chakra-ui/react';

  
  export default function JoinOurTeam() {
    return (
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
                  placeholder="عنوان المزاد"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="تصنيف المزاد "
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />
                <Input
                  placeholder="سعر المزاد"
                  bg={'gray.100'}
                  border={0}
                  color={'gray.500'}
                  _placeholder={{
                    color: 'gray.500',
                  }}
                />

               <Input
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
    <Radio colorScheme='gray' value='1'>
      المزاد حضوري
    </Radio>
    <Radio colorScheme='gray' value='2'>
      المزاد عن بعد
    </Radio>
  </Stack>
</RadioGroup>
              <Input type='file' placeholder='صور المزاد'></Input>
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
                }}>
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
          style={{ filter: 'blur(70px)' }}
        />
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
