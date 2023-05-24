import React, { useState } from 'react';
import About from './pages/About';

import JJRLogo from '../assets/logos/Circle-Taupe-Mossy-Full-Logo-Green-Border.png';
import { NavLink, Redirect, useHistory } from 'react-router-dom';
import {
    Box,
    Center,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    Image,
    HStack
} from '@chakra-ui/react';

import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';

export default function Navbar() {
    const [ isOpen, setIsOpen ] = useState(false);

    return (
        <Box>
            {/* Header Background */}
            <Flex
                bg='licorice.900'
                color='ivoryGoddess.900'
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={('mossyRock.900')}
                align={'center'}
                justify={'center'}>

                {/* Hamburger Menu */}
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>

                    {/* Actual Hamburger Button/Icon */}
                    <IconButton bg='mossyRock.900'
                        onClick={()=> setIsOpen(!isOpen)}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} color='ivoryGoddess.900' />
                        }
                        // variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>

                {/* Gives a Base of 1 and starts as centered and then moves and displays hamburger to left as screen is medium */}
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start', align: 'center' }}>
                    <Text
                        textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                        fontFamily={'heading'}
                        color={('ecruPrincess.900')}>
                        {/* Bookstore Logo */}
                        <Image src={JJRLogo} alt="logo" boxSize='150px' />
                    </Text>
                    <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
                        <DesktopNav />
                    </Flex>
                </Flex>

                <HStack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'md'}
                        fontWeight={600}
                        color={'ivoryGoddess.900'}
                        bg={'oliveCoat.900'}
                        href={'/#'}
                        _hover={{
                            bg: 'mossyRock.900',
                        }}>
                        Log In
                    </Button>
                    <Button
                        as={'a'}
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'md'}
                        fontWeight={600}
                        color={'ivoryGoddess.900'}
                        bg={'muddyRiver.900'}
                        href={'/#'}
                        _hover={{
                            bg: 'mossyRock.900',
                        }}>
                        Sign Up
                    </Button>
                </HStack>
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <MobileNav />
            </Collapse>
        </Box>
    );
}

const DesktopNav = () => {
    const linkColor = ('taupeToad.900');
    const linkHoverColor = ('ecruPrincess.900');
    const popoverContentBgColor = ('ecruPrincess.900');

    return (
        <Stack direction={'row'} spacing={4}>
                                        <Center >

            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'}>
                        <PopoverTrigger>
                            <Link
                                p={2}
                                href={navItem.href ?? ''}
                                fontSize={'xl'}
                                fontWeight={500}
                                color={linkColor}
                                _hover={{
                                    textDecoration: 'none',
                                    color: linkHoverColor,
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack>
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
                                        </Center>

        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: ('taupeToad.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'oliveCoat.900' }}
                        fontWeight={800}>
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}>
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const [ isOpen, setIsOpen ] = useState(false);
const history = useHistory();
    return (
        <Stack spacing={4} onClick={ ()=> history.replace(label) }>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={600}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: 'Search',
        href: '/search',
    },
    {
        label: 'About Us',
        href: '/about',
    },
    {
        label: 'Profile',
        children: [
            {
                label: 'Login',
                href: '/login',
            },
            {
                label: 'Sign-Up',
                href: '/signup',
            },
        ],
    },
];