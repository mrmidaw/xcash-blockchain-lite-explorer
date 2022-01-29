import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaWpexplorer } from 'react-icons/fa';
import { GiWhirlpoolShuriken } from 'react-icons/gi';
import { MdLocationSearching } from 'react-icons/md';
import { MdWrapText } from 'react-icons/md';
import { RiExchangeFundsLine } from 'react-icons/ri';
import { ImStatsBars2 } from 'react-icons/im';
import { Box, useColorMode, SimpleGrid, Button, Text } from '@chakra-ui/react';


export const Navbar = () => {
    const { colorMode } = useColorMode();
    const navigate = useNavigate();


    return (
        <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} m={2} my={4} p={2} color='orange.400' borderRadius="lg" textAlign='center'>

            <SimpleGrid templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(6, 1fr)']} gap={2} >

                <Button onClick={() => navigate('/')}>
                    <Box mr={2} ><FaWpexplorer size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black' >
                        Blocks
                    </Text>
                </Button>

                <Button onClick={() => navigate('/txpool')}>
                    <Box mr={2} ><GiWhirlpoolShuriken size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black' >
                        TX Pool
                    </Text>
                </Button>

                <Button onClick={() => navigate('/search')}>
                    <Box mr={2} ><MdLocationSearching size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black'>
                        Search
                    </Text>
                </Button>

                <Button onClick={() => navigate('/wxcash')}>
                    <Box mr={2} ><MdWrapText size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black'>
                        WXcash
                    </Text>
                </Button>

                <Button onClick={() => navigate('/funds')}>
                    <Box mr={2} ><RiExchangeFundsLine size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black' >
                        Funds
                    </Text>
                </Button>

                <Button onClick={() => navigate('/stats')}>
                    <Box mr={2}><ImStatsBars2 size={22} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black'>
                        Stats
                    </Text>
                </Button>
            </SimpleGrid>
        </Box >
    );
};