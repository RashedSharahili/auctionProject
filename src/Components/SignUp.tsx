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
    RadioGroup,
    Radio
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
  const submitSignUp= async () => {
    try {
      const request = await fetch('https://acution.onrender.com/users/signup', {
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

    // const myYear = new Date("");
    // const myMonth =myYear.getMonth() 
    // const myDay =myYear.getDate();
    // console.log(my brithday ${myYear}-${myMonth}-${myDay});
    
  
    // const currYear = new Date("2023-1-19");
    // const currMonth =currYear.getMonth() 
    // const currDay =currYear.getDate();
    // console.log(Current Day :  ${currYear}-${currMonth}-${currDay});
    // if( myMonth === currMonth && myDay  === currDay){
    //     console.log("success");
    // }
    // else{
    //     console.log("error");
    // }
    
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

        onChange={(e) => setName(e.target.value)}   
                  placeholder="your name"
                  _placeholder={{ color: 'gray.500' }}
                  type="text"
                />
              </FormControl>
      
              <FormControl id="email" isRequired>
                <FormLabel>البريد الالكتروني</FormLabel>
                <Input
                 onChange={(e) => setEmail(e.target.value)}
                  placeholder="your-email@example.com"
                  _placeholder={{ color: 'gray.500' }}
                  type="email"
                />
              </FormControl>
      
              <FormControl id="phone" isRequired >
                <FormLabel>رقم الجوال </FormLabel>
                <Input
                 onChange={(e) => setPhone(e.target.value.trim())}
                  placeholder="your phone number"
                  _placeholder={{ color: 'gray.500' }}
                  type="text"
                />
                
              </FormControl>
              <FormControl id="date" isRequired>
                <FormLabel>تاريخ الميلاد</FormLabel>
                <Input
                 onChange={(e) => setDate(e.target.value)}
                  placeholder="your date"
                  _placeholder={{ color: 'gray.500' }}
                  type="text"
                />
              </FormControl>
      
              <FormControl id="password" isRequired>
                <FormLabel>كلمة المرور</FormLabel>
                <Input 
                onChange={(e)=>setPassword(e.target.value.trim())}
                
                type="password" />
              </FormControl>

             
              <RadioGroup defaultValue='2'>
                  <Stack spacing={5} direction='row'>
                    <Radio colorScheme='gray' value='Female'>
                      انثى
                    </Radio>
                    <Radio colorScheme='gray' value='Male'>
                      ذكر
                    </Radio>
                  </Stack>
                </RadioGroup>

              <Stack spacing={6}>
                <Button
                  bg={'#5E8978'}
                  color={'#FBFAEF'}
                  _hover={{
                    bg: '#728d71',
                  }}
                  onClick={ submitSignUp }
                  >
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


 
