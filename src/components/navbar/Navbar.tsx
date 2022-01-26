import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaWpexplorer } from 'react-icons/fa';
import { GiWhirlpoolShuriken } from 'react-icons/gi';
import { MdLocationSearching } from 'react-icons/md';
import { GrTextWrap } from 'react-icons/gr';
import { RiExchangeFundsLine } from 'react-icons/ri';
import { ImStatsBars2 } from 'react-icons/im';
import { Box, useColorMode } from '@chakra-ui/react'
import { SimpleGrid, Button } from '@chakra-ui/react';


export const Navbar = () => {
    const { colorMode } = useColorMode();
    const navigate = useNavigate();


    return (
        <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} w="100%" p={4} my={4} color="black" borderRadius="lg" >

            <SimpleGrid templateColumns='repeat(6, 1fr)' gap={2}>

                <Button onClick={() => navigate('/')}>
                    <FaWpexplorer />
                    Explorer
                </Button>

                <Button onClick={() => navigate('/txpool')}>
                    <GiWhirlpoolShuriken />
                    TX Pool
                </Button>

                <Button onClick={() => navigate('/search')}>
                    <MdLocationSearching />
                    Search
                </Button>

                <Button onClick={() => navigate('/wxcash')}>
                    <GrTextWrap />
                    WXcash
                </Button>

                <Button onClick={() => navigate('/funds')}>
                    <RiExchangeFundsLine />
                    Funds
                </Button>

                <Button onClick={() => navigate('/stats')}>
                    <ImStatsBars2 />
                    Stats
                </Button>
            </SimpleGrid>
        </Box>
    );
};