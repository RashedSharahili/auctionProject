import {
  Avatar,
  Box,
  chakra,
  Container,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';

const testimonials = [
  
  
  
  {
   
    content:
      'نحن فريق عمل على انشاء منصه مزادك لتضم العديد من المزادات التي يسهل على المستخدم البحث عنها والمزايده فيها فهو يشمل مزادات مثل المنازل والسيارات واللوحات الفنيه وغيرها التي يمكن اضافتها .',
    
  },
];



interface TestimonialCardProps {
 
  content: string;
  avatar: string;
  index: number;
}

function TestimonialCard(props: TestimonialCardProps) {

  const { content, avatar, index } = props;
  return (
    
    <Flex
    boxShadow={'md'}
      maxW={'640px'}
      h={'30vh'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
      }}>
      <Flex
        direction={'column'}
        textAlign={'center'}
        justifyContent={'center'}>
        <chakra.p
          fontFamily={'Inter'}
          fontWeight={'medium'}
          fontSize={'17px'}
          pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
        
          <chakra.span
            fontFamily={'Inter'}
            fontWeight={'medium'}
            color={'gray.500'}>
            {' '}
          </chakra.span>
        </chakra.p>
      </Flex>
    
    </Flex>
  );
}

export default function GridBlurredBackdrop() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
      overflow={'hidden'}>
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'purple.400'}>

        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
        من نحن 
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}>
         
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
       
          </chakra.strong>{' '}
      مزادك هي المنصه التي تبحث عنها
        </chakra.h2>
      </Box>
      
      <SimpleGrid
        columns={{ base: 1, xl: 1 }}
        spacing={'20'}
        mt={20}
        mb={20}
        mx={'auto'}
        >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard avatar={''} {...cardInfo} index={index} />
        ))}
      </SimpleGrid>
      <Box>
       
      </Box>
    </Flex>
  );
}
