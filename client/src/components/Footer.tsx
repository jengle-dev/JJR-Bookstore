import * as React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  } from '@chakra-ui/react';
import { FaGithubSquare, FaInstagram } from 'react-icons/fa';
import { ReactNode } from 'react';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={('taupeToad.900')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('mossyRock.900', 'mossyRock.900'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function SmallWithSocial() {
  return (
    <Box
      className='footer'
      bg={('licorice.900')}
      color={('taupeToad.900')}
      >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text color='taupeToad.900' flexWrap='wrap'>© 2023 JJR Bookstore. All rights reserved. Developed & Designed by Jennifer Engle, Rebecca Lehew & Julianne Waters</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Github'} href={'https://github.com/jengle-dev/JJR-Bookstore'}>
            <FaGithubSquare />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/teamjjrbooks/'}>
            <FaInstagram color='ecruPrincess.900' />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
