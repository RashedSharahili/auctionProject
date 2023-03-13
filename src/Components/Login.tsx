import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';

export default function ResetPasswordForm(): JSX.Element {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('white', 'gray.800')}>
      <Stack
        spacing={6}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('gray.50', 'gray.900')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={3.1} fontSize={{ base: '1xl', md: '2xl' }}>
          تسجيل الدخول
        </Heading>
        <FormControl id="email" isRequired>
          <FormLabel>البريد الالكتروني</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>كلمة المرور</FormLabel>
          <Input type="password" />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'#AFCBAE'}
            color={'white'}
            _hover={{
              bg: '#728d71',
            }}>
            دخول
          </Button>
              {/* <Menu>
              <MenuButton>Open menu</MenuButton>
              <MenuList>
              <MenuItem as='a' href='#'>Link 1</MenuItem>
              <MenuItem as='a' href='#'>Link 2</MenuItem>
              </MenuList>
              </Menu> */}
          
          <FormLabel fontSize={14} as='a' href='#'>انشاء حساب جديد ؟</FormLabel>
        </Stack>
      </Stack>
    </Flex>

// const getInfo = ()=>{
//   const nameValue = localStorage.getItem('name');
//   if(name === nameValue){   
//       navigate("/")
//   }
  );
}