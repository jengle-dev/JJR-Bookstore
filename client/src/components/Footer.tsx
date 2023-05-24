import * as React from 'react';
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Social
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
      bg={useColorModeValue('taupeToad.900', 'taupeToad.900')}
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
      bg={('licorice.900', 'licorice.900')}
      color={('taupeToad.900', 'taupeToad.900')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2023 JJR Bookstore. All rights reserved</Text>
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

// // export default Footer;
// export default function Footer() {
//   // const [showFooter, setFooter] = useState(false);
//   return (
//     <Flex as="footer" className='footer' >
//       <HStack spacing="24px" align="center" />
//       <Flex gap="10px" wrap="wrap" justify="center">
//         <Box as="div">
//           <IconButton aria-label='contact-us' icon={<Circle />}/><Text textColor="#E3D5CA" bg={'oliveCoat.900'}>Contact Us</Text>
//         </Box>
//         <Box as="div">
//           <IconButton aria-label='about-us' bg={'oliveCoat.900'} icon={<Circle />}/><Text as ="h3" >About Us</Text>
//         </Box>
//         <Box as="div">
//           <IconButton aria-label='about-us' icon={<Circle />}/><Text textColor="muddyRiver.900">Address</Text>
//         </Box>
//       </Flex>
//    </Flex>
//   )
// }