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
        <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} p={4} my={4} color='orange.400' borderRadius="lg" >

            <SimpleGrid templateColumns='repeat(6, 1fr)' gap={2} >

                <Button onClick={() => navigate('/')}>
                    <FaWpexplorer size={24} />
                    <Text ml={2} fontSize={['sm', 'md', 'lg', 'xl']} color='black' >
                        Blocks
                    </Text>
                </Button>

                <Button onClick={() => navigate('/txpool')}>
                    <GiWhirlpoolShuriken size={24} />
                    <Text ml={2} fontSize={['sm', 'md', 'lg', 'xl']} color='black' >
                        TX Pool
                    </Text>
                </Button>

                <Button onClick={() => navigate('/search')}>
                    <MdLocationSearching size={24} />
                    <Text ml={2} fontSize={['sm', 'md', 'lg', 'xl']} color='black'>
                        Search
                    </Text>
                </Button>

                <Button onClick={() => navigate('/wxcash')}>
                    <MdWrapText size={24} />
                    <Text ml={2} fontSize={['sm', 'md', 'lg', 'xl']} color='black'>
                        WXcash
                    </Text>
                </Button>

                <Button onClick={() => navigate('/funds')}>
                    <RiExchangeFundsLine size={24} />
                    <Text ml={2} fontSize={['sm', 'md', 'lg', 'xl']} color='black' >
                        Funds
                    </Text>
                </Button>

                <Button onClick={() => navigate('/stats')}>
                    <ImStatsBars2 size={24} />
                    <Text ml={2} fontSize={['sm', 'md', 'lg', 'xl']} color='black'>
                        Stats
                    </Text>
                </Button>
            </SimpleGrid>
        </Box >
    );
};