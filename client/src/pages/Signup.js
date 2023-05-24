import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

  import styled from 'styled-components';

  const SignupStyles = styled.div`
  Input {
    background-color: var(--ecruPrincess);
  }
  `;
  
  export default function SignupCard() {
    const [showPassword, setShowPassword] = useState(false);
  
return (
    <SignupStyles>
      <Flex
        minH={'80vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('ecruPrincess.900', 'taupeToad.900')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up to Start Reading!
            </Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('ivoryGoddess.900', 'taupeToad.900')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'oliveCoat.900'}
                  color={'ivoryGoddess.900'}
                  _hover={{
                    bg: 'mossyRock.900',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={4}>
                <Text align={'center'}>
                  Already a user? <Link color={'oliveCoat.900'}>Login</Link>
                  {/* Need to link this back to Login */}
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
      </SignupStyles>
    );
  }