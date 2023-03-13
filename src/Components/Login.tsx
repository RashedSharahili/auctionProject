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
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




export default function ResetPasswordForm(): JSX.Element {

    // const [email, setEmail]= useState("")
    // const [pass, setPass ] = useState<any>()
    // const navigate = useNavigate()

    // const getInfo = ()=>{
    //   const emailValue = localStorage.getItem('email');
    //   if(email === emailValue){   
    //       navigate("/")
    //   }else if(email.length <3 || pass.length <3){
    //       alert("Please, enter the correct information.")

    //   }
    // }


  
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const navigate = useNavigate();
      const toast = useToast();
      const submitLogin = async () => {
        try {
          const request = await fetch('/api/v1/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
          });
          const data = await request.json();
          if (request.status !== 200) {


            alert('error');

            // toast({
            //   title: data.message,
            //   status: 'error',
            //   duration: 3000, 
            //   position: 'top',
            // });
            return;
          }
          alert('success');
          // toast({
          //   title: data.message,
          //   status: 'success',
          //   duration: 3000,
          //   position: 'top',
          // });
          localStorage.setItem('token', data.token);
          navigate('/');
        } catch (error) {

          alert('server error');
          // toast({
          //   title: 'Server Error !',
          //   status: 'error',
          //   duration: 3000,
          //   position: 'top',
          // });
        }
     

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
          
          <FormLabel fontSize={14} as='a' href='signup'>انشاء حساب جديد ؟</FormLabel>
        </Stack>
      </Stack>
    </Flex>

  );
}
}