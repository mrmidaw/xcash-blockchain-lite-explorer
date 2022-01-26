import React from 'react';
import { useNavigate } from "react-router-dom";
import { FaWpexplorer } from 'react-icons/fa';
import { GiWhirlpoolShuriken } from 'react-icons/gi';
import { MdLocationSearching } from 'react-icons/md';
import { GrTextWrap } from 'react-icons/gr';
import { RiExchangeFundsLine } from 'react-icons/ri';
import { ImStatsBars2 } from 'react-icons/im';
import { Box, useColorMode, SimpleGrid, Button, Text } from '@chakra-ui/react';


export const Navbar = () => {
    const { colorMode } = useColorMode();
    const navigate = useNavigate();


    return (
        <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} p={4} my={4} color="black" borderRadius="lg" >

            <SimpleGrid templateColumns='repeat(6, 1fr)' gap={2} >

                <Button onClick={() => navigate('/')}>
                    <FaWpexplorer size={20} />
                    <Text ml={1} fontSize={['sm', 'md', 'lg', 'xl']} >
                        Blocks
                    </Text>
                </Button>

                <Button onClick={() => navigate('/txpool')}>
                    <GiWhirlpoolShuriken size={20} />
                    <Text ml={1} fontSize={['sm', 'md', 'lg', 'xl']} >
                        TX Pool
                    </Text>
                </Button>

                <Button onClick={() => navigate('/search')}>
                    <MdLocationSearching size={20} />
                    <Text ml={1} fontSize={['sm', 'md', 'lg', 'xl']} >
                        Search
                    </Text>
                </Button>

                <Button onClick={() => navigate('/wxcash')}>
                    <GrTextWrap size={20} />
                    <Text ml={1} fontSize={['sm', 'md', 'lg', 'xl']} >
                        WXcash
                    </Text>
                </Button>

                <Button onClick={() => navigate('/funds')}>
                    <RiExchangeFundsLine size={20} />
                    <Text ml={1} fontSize={['sm', 'md', 'lg', 'xl']} >
                        Funds
                    </Text>
                </Button>

                <Button onClick={() => navigate('/stats')}>
                    <ImStatsBars2 size={20} />
                    <Text ml={1} fontSize={['sm', 'md', 'lg', 'xl']}>
                        Stats
                    </Text>
                </Button>
            </SimpleGrid>
        </Box >
    );
};