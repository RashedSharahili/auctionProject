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
  } from '@chakra-ui/react';
  
  export default function ResetPasswordForm() {
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
      
              <FormControl id="ID" isRequired>
                <FormLabel>رقم الهويه</FormLabel>
                <Input
                  placeholder="your ID number"
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


 
const dateOfBirth = new Date(1998, 12, 5);
console.log(`${dateOfBirth}`);

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthOfBirth = months[dateOfBirth.getMonth()];
console.log(`${monthOfBirth}`);


const dayOfBirth = dateOfBirth.getDate();
console.log(`${dayOfBirth}`);

const currentDate = new Date();
console.log(`${currentDate}`);

const currentMonth = months[currentDate.getMonth()];
console.log(` ${currentMonth}`);

const currentDay = currentDate.getDate();
console.log(` ${currentDay}`);

if(dayOfBirth == currentDay && monthOfBirth == currentMonth) {
  console.log('yes');
  
}
else{
  'يجب ان يكون عمرك اكبر من 18 سنه'
}