import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Text, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';


export const NotFound: FC = () => {
    const navigate = useNavigate();

    // Framer Motion
    const MotionBox = motion(Box)
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    return (
        <MotionBox
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.8, times: [0, 0.5, 1] }}
        >
            <Box textAlign='center' color='gray.100'>
                <Box>
                    <Text fontSize='8xl' fontWeight='bold' mb='6'>Oops!</Text>
                    <Text fontSize='5xl' mb='8'>404 - Page Not Found!</Text>
                    <Button onClick={() => navigate('/')} fontSize='2xl' size='lg' colorScheme='gray'>
                        Back To Home
                    </Button>
                </Box>
            </Box>
        </MotionBox >
    );
};