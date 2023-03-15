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

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();
  const toast = useToast();
  const submitLogin = async () => {
    try {
      const request = await fetch('/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, password ,email,phone,date}),
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
        <Box>
          <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}>
            <Stack
              spacing={5}
              w={'3xl'}
              maxW={'5xl'}
              bg={useColorModeValue('gray.50', 'gray.900')}
              rounded={'2xl'}
              boxShadow={'2xl'}
              p={7}
              my={8}>
              <Heading lineHeight={2.1} fontSize={{ md: '2xl' }} fontFamily={"Amiri"}>
                تسجيل جديد
              </Heading>
              <FormControl id="name" isRequired >
                <FormLabel> الاسم</FormLabel>
                <Input
                  placeholder="your name"
                  _placeholder={{ color: 'gray.500' }}
                  type="text"
                />
              </FormControl>
      
              <FormControl id="email" isRequired>
                <FormLabel>البريد الالكتروني</FormLabel>
                <Input
                  placeholder="your-email@example.com"
                  _placeholder={{ color: 'gray.500' }}
                  type="email"
                />
              </FormControl>
      
              <FormControl id="phone" isRequired >
                <FormLabel>رقم الجوال </FormLabel>
                <Input
                  placeholder="your phone number"
                  _placeholder={{ color: 'gray.500' }}
                  type="text"
                />
                
              </FormControl>
              <FormControl id="date" isRequired>
                <FormLabel>تاريخ الميلاد</FormLabel>
                <Input
                  placeholder="your date"
                  _placeholder={{ color: 'gray.500' }}
                  type="text"
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
                  تسجيل
                </Button>
                
                <FormLabel fontSize={15} as='a' href='login'>لديك حساب بالفعل؟ تسجيل الدخول</FormLabel>
              </Stack>
            </Stack>
          </Flex>
        </Box>
      </Box>
      
      // if(name.length <3 || pass.length <3){
      //   //     //   alert("Please, enter the correct information.")}
    );
  }


 
