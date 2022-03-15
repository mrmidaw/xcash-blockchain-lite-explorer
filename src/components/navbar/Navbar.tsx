import React, { FC } from 'react';
import { useNavigate } from "react-router-dom";
import { FaWpexplorer } from 'react-icons/fa';
import { GiWhirlpoolShuriken } from 'react-icons/gi';
import { MdLocationSearching } from 'react-icons/md';
import { MdWrapText } from 'react-icons/md';
import { RiExchangeFundsLine } from 'react-icons/ri';
import { ImStatsBars2 } from 'react-icons/im';
import { Box, SimpleGrid, Button, Text } from '@chakra-ui/react';


export const Navbar: FC = () => {
    const navigate = useNavigate();


    return (
        <Box bg='gray.500' m={2} my={4} p={4} color='orange.400' borderRadius="lg" textAlign='center' >

            <SimpleGrid templateColumns={['repeat(3, 1fr)', 'repeat(3, 1fr)', 'repeat(6, 1fr)']} gap={2}  >
                <Button onClick={() => navigate('/')} bg='gray.600'>
                    <Box mr={2} ><FaWpexplorer size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black' fontWeight='bold' >
                        Explorer
                    </Text>
                </Button>

                <Button onClick={() => navigate('/TXPool')} bg='gray.600'>
                    <Box mr={2} ><GiWhirlpoolShuriken size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black' fontWeight='bold'>
                        TX Pool
                    </Text>
                </Button>

                <Button onClick={() => navigate('/Search')} bg='gray.600'>
                    <Box mr={2} ><MdLocationSearching size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black' fontWeight='bold'>
                        Search
                    </Text>
                </Button>

                <Button onClick={() => navigate('/WXcash')} bg='gray.600'>
                    <Box mr={2} ><MdWrapText size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black' fontWeight='bold'>
                        WXcash
                    </Text>
                </Button>

                <Button onClick={() => navigate('/Funds')} bg='gray.600'>
                    <Box mr={2} ><RiExchangeFundsLine size={24} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black' fontWeight='bold'>
                        Funds
                    </Text>
                </Button>

                <Button onClick={() => navigate('/Stats')} bg='gray.600'>
                    <Box mr={2}><ImStatsBars2 size={22} /></Box>
                    <Text fontSize={['sm', 'md', 'lg', 'xl']} color='black' fontWeight='bold'>
                        Stats
                    </Text>
                </Button>
            </ SimpleGrid>
        </Box >
    );
};