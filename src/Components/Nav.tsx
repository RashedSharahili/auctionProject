import React, { useReducer } from 'react'
import {
    Box,
    Button,
    CloseButton,
    Flex,
    HStack,
    Icon,
    IconButton,
    Link,
    Popover,
    PopoverContent,
    PopoverTrigger,
    SimpleGrid,
    Stack,
    VStack,
    chakra,
    useColorMode,
    useColorModeValue,
    useDisclosure,
    Image,
    Avatar,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Text,
    useToast
} from "@chakra-ui/react";
import { useScroll } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";
import { AiFillHome, AiOutlineInbox, AiOutlineMenu } from "react-icons/ai";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link as RouteLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo4.png';

const reduser =(state:any,action:any)=>{
    
    if(action.type === 'user logIn') return {user: state.user =  true} 
    if(action.type === 'user LogOut')return {user: state.user   = false}
}

function parseJwt(token: any) {
    if (!token) { return; }
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
}

const userInfo = parseJwt(localStorage.getItem("token"))

function Nav() {

    const [userName, setName] = React.useState<string>();

    const navigate = useNavigate();

    const toast = useToast();

    const userToken=localStorage.getItem("token")

    const logoutUrl = "http://localhost:8000/users/logout";

    const submitLogout = async () => {
        try {
          const request = await fetch(logoutUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              "authorization": localStorage.getItem("token") as string
            }
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
            localStorage.removeItem("token")
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

    const removeUser =()=>{

        localStorage.removeItem("token")
        navigate('/login')

    }

    const initialState ={user:true};
    const [state,dispatch]:any= useReducer<any>(reduser,initialState)

    const { toggleColorMode: toggleMode } = useColorMode();
    const text = useColorModeValue("dark", "light");
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);
    const bg = useColorModeValue("white", "gray.800");
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [y, setY] = React.useState(0);
    const height = ref.current ? ref.current.getBoundingClientRect() : 0;

    const { scrollY } = useScroll();
    React.useEffect(() => {
        // return scrollY.onChange(() => setY(scrollY.get()));

        // if(userToken !== null || userToken !== undefined) {
        //     setName(userInfo.name)
        // }
        
        // setName(userInfo.name)
        return scrollY.on("change", () => { setY(scrollY.get()) })
    }, [scrollY]);
    const cl = useColorModeValue("gray.800", "white");
    const mobileNav = useDisclosure();

    const MobileNavContent = (
        <VStack
        pos="fixed"
        zIndex={1}
        top={0}
        left={0}
        right={0}
        display={mobileNav.isOpen ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        bg={bg}
        spacing={3}
        rounded="sm"
        shadow="sm"
        >
        <CloseButton
            aria-label="Close menu"
            justifySelf="self-start"
            color={cl}
            onClick={mobileNav.onClose}
        />
        <Button w="full" variant="ghost">
            <RouteLink to={'/'}>
            الصفحة الرئيسية
            </RouteLink>
        </Button>
        <Button
            w="full"
            variant="ghost"
          >
            <RouteLink to={'/about'}>
            من نحن
            </RouteLink>
        </Button>
        <Button w="full" variant="ghost" >
            <RouteLink to={'/auctions'}>
            المزادات
            </RouteLink>
        </Button>
        <Button w="full" variant="ghost" >
            <RouteLink to={'/contact'}>
            تواصل معنا
            </RouteLink>
        </Button>
        </VStack>
    );

    return (
        <chakra.header
        ref={ref}
        shadow={y > height ? "sm" : undefined}
        transition="box-shadow 0.2s"
        bg={"#769589"}
        w="full"
        overflowY="hidden"
        
        id="header"
        >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
            <Flex
            w="full"
            h="full"
            px="6"
            alignItems="center"
            justifyContent="space-between"
            >
            <Flex align="flex-start">
                <RouteLink to="/">
                <HStack>
                    {/* <Logo /> */}
                    <Avatar src={Logo} w= {{ base: '27vw', md: '15vw',lg:  "11vw" }}
                    mr={"-25px"}
                    ></Avatar>
                </HStack>
                </RouteLink>
                <Flex>
                <HStack spacing="5" display={{ base: "none", md: "flex" }}>
                    <RouteLink to={'/'}>
                <Button
                    bg={"transparent"}
                    color={"#E3E2D1"}
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: "#F5F5E7", bg: "#00000000" }}
                    _focus={{ boxShadow: "none" }}>
                    الصفحة الرئيسية
                </Button>
                </RouteLink>
                <RouteLink to={'/about'}>
                    <Button
                    bg={"transparent"}
                    color={"#E3E2D1"}
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: "#F5F5E7", bg: "#00000000" }}
                    _focus={{ boxShadow: "none" }}>
                        من نحن
                    </Button>
                    </RouteLink>
                    <RouteLink to={'/auctions'}>
                <Button
                    bg={"transparent"}
                    color={"#E3E2D1"}
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: "#F5F5E7", bg: "#00000000" }}
                    _focus={{ boxShadow: "none" }}>
                        المزادات
                </Button>
                </RouteLink>
                <RouteLink to={'/contact'}>
                <Button
                    bg={"transparent"}
                    color={"#E3E2D1"}
                    display="inline-flex"
                    alignItems="center"
                    fontSize="md"
                    _hover={{ color: "#F5F5E7", bg: "#00000000" }}
                    _focus={{ boxShadow: "none" }}>
                    تواصل معنا
                </Button>
                </RouteLink>
                </HStack>
            </Flex>
            </Flex>
            <Flex justify="flex-end" align="center" color="gray.400" gap={2}>

            {
            userToken === null || userToken === undefined?
                <RouteLink to={"/login"}> 
                    <Button onClick={()=>dispatch({type:"user logIn"})} mr={"2"} bg={"#A2B6A9"} color={"#EFEFDF"} _hover={{bg: '#A9BDB1 '}}>
                    تسجيل دخول
                    </Button>
                </RouteLink>  
                :    
                <Menu>
                    <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                            <Text color={"white"}>
                                مرحباً {userName}
                            </Text>
                    </MenuButton>
                    <MenuList color={"black"}>
                        <MenuItem>
                        <RouteLink to={"/profile"}>
                        الملف الشخصي
                        </RouteLink>
                        </MenuItem>
                        <MenuDivider />
                        <MenuItem onClick={ submitLogout }>تسجيل خروج</MenuItem>
                    </MenuList>
                </Menu>
            }
                <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
                />
            </Flex>
            </Flex>
            {MobileNavContent}
        </chakra.div>
        </chakra.header>
    )
}

export default Nav