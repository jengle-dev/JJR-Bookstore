import React from 'react';
import { Flex, Box, Heading, Text, Button, Spacer, HStack, Stack, Image, SimpleGrid } from '@chakra-ui/react';
import SingleBookCard from './SingleBookCard.tsx';
// import SingleBookCard from './SingleBookCard';

export default function FeaturedBooks() {
    return (
        <div className='gridBG'>
            <SimpleGrid columns={3} p={20} bg='ecruPrincess.900' spacing={10} minChildWidth={250}>
                {/* row 1 */}
                <Box columns={2} p="30px" bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}>
                    <Image boxSize="100px"
                        src="./images/featuredBooks/1984.jpg"
                        alt='Book cover'
                        borderRadius='lg'
                        bg='ivoryGoddess.900'
                    />
                    <Stack mt='6' spacing='3'>
                        <Text className='h5 title'>1984</Text>
                        <Heading className='author'>George Orwell</Heading>
                        <Text>
                            "Thematically, Nineteen Eighty-Four centres on the consequences of totalitarianism, mass surveillance, and repressive regimentation of persons and behaviours within society."
                        </Text>
                        <Text color='blue.600' fontSize='2xl'>
                            "$9.99"
                        </Text>
                    </Stack>
                </Box>
                <Box p="30px" bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}>2</Box>
                <Box p="30px" bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}>3</Box>
                {/* row 2 */}
                <Box p="30px" bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}>4</Box>
                <Box p="30px" bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}>5</Box>
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                {/* row 3 */}
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                {/* row 4 */}
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                {/* row 5 */}
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>
                {/* row 6 */}
                <Box bg="taupeToad.900" h="300px" border="2px solid" borderRadius={30}></Box>

            </SimpleGrid>
        </div>
    );
}

