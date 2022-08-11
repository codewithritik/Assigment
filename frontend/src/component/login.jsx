import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import axios from "axios"






export default function SimpleCard() {

    const [state, setstate] = useState([])
    
    const handlechange = (e) => {
        setstate({...state,[e.target.name]:e.target.value})
    }

    const handleclick = () => {
        
        axios.post("http://localhost:5000/",state)
            .then((res) => {
            alert("sucess")
            })
            .catch((err) => {
                console.log(err)
                const error = err.response.data
                alert(error.errors[0].msg)
        })
    }


    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Sign in to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
                    </Text>
                </Stack>
                <Box
                    rounded={'lg'}
                    bg={useColorModeValue('white', 'gray.700')}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <FormControl id="email">
                            <FormLabel>Email address</FormLabel>
                            <Input type="email"    required    onChange={handlechange} name="email"/>
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <Input type="password" required   onChange={handlechange} name="password" />
                        </FormControl>
                        <FormControl id="usernmae">
                            <FormLabel>username</FormLabel>
                            <Input type="text" required onChange={handlechange} name="username" />
                        </FormControl>
                        <FormControl id="address">
                            <FormLabel>address</FormLabel>
                            <Input type="text" required onChange={handlechange} name="address" />
                        </FormControl>
                        <Stack spacing={10}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Checkbox>Remember me</Checkbox>
                                <Link color={'blue.400'}>Forgot password?</Link>
                            </Stack>
                            <Button
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}
                                onClick={handleclick}   

                            >
                                Sign in
                            </Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}