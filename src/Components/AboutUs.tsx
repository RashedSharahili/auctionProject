import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://m.economictimes.com/thumb/msid-75043034,width-1200,height-900,resizemode-4,imgsize-439255/online-auction-sales_istock.jpg)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
        نحن فريق أنشأنا  `منصة مزادك  `
          </Text>
          <Stack direction={'row'}>
           
            <Button
            as='a' href='#'
              bg={'whiteAlpha.700'}
              rounded={'full'}
              color={'black'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              ابدأ    الان  
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}