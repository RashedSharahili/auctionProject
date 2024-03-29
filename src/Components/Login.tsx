import {
  Box,
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
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPasswordForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const toast = useToast();

  // const loginUrl = "http://localhost:8000/users/login";
  const loginUrl = "https://auctionproject.onrender.com/users/login";

  const submitLogin = async () => {
    try {
      const request = await fetch(loginUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await request.json();
      if (request.status !== 200) {

        return toast({
          title: data.message,
          status: 'error',
          duration: 3000,
          position: 'top',
        });
        
      } else {

        toast({
          title: data.message,
          status: 'success',
          duration: 3000,
          position: 'top',
        });
        localStorage.setItem('token', data.token);
        navigate('/');
      }

    } catch (error) {
      toast({
        title: 'Server Error !',
        status: 'error',
        duration: 3000,
        position: 'top',
      });
    }
  }


  
  return (
    <Box className="container">
      <Box>
        <Flex
          minH={'100vh'}
          align={'center'}
          justify={'center'}>
          <Stack
            spacing={10}
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
              onChange={(e) => setEmail(e.target.value.trim())}
                placeholder="your-email@example.com"
                _placeholder={{ color: 'gray.500' }}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>كلمة المرور</FormLabel>
              <Input type="password" onChange={ (e) => setPassword(e.target.value.trim()) } />
            </FormControl>
            <Stack spacing={6}>
              <Button
              type='submit'
                bg={'#5E8978'}
                color={'#FBFAEF'}
                _hover={{
                  bg: '#63907D',
                }}
                onClick={ submitLogin }
                >
                دخول
              </Button>
                  {/* <Menu>
                  <MenuButton>Open menu</MenuButton>
                  <MenuList>
                  <MenuItem as='a' href='#'>Link 1</MenuItem>
                  <MenuItem as='a' href='#'>Link 2</MenuItem>
                  </MenuList>
                  </Menu> */}
              
              <FormLabel fontSize={14} as='a' href='signup'>انشاء حساب جديد ؟</FormLabel>
            </Stack>
          </Stack>
        </Flex>
      </Box>
    </Box>

// const getInfo = ()=>{
//   const nameValue = localStorage.getItem('name');
//   if(name === nameValue){   
//       navigate("/")
//   }
  );
}