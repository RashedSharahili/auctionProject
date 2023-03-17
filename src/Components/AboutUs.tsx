import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import About from "../assets/Styles/AboutImage.png"
export default function WithBackgroundImage() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={About}
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
       نحن فريق انشىء منصه مزادك ليسهل على المستخدم الوصول لعده مزادات منها مزاد لوحات فنيه وسيارات ومنازل وغيرها من المزاات سيتمكن المستخدم من المزايده في الموقع بنفسه دون القلق من ان يذهب لمكان المزاد حيث يعمل موقعنا على توفر مزادات عبر الموقع ببساطه
          </Text>
          <Stack direction={'row'}>
           

          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
