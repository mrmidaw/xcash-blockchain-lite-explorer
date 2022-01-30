import React, { FC, useState } from "react";
import { Box, IconButton, useColorMode, Center, Text, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsSearch } from 'react-icons/bs';


export const TXPool: FC = () => {
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
            transition={{ duration: 0.8, times: [0, 0.5, 1] }
            }
            textAlign='center'
        >
            <Center>
                <Text color='orange.500' fontSize={['xl', '2xl', '3xl', '4xl', '5xl']} fontWeight={600}>
                    Under Construction
                </Text>
            </Center>
        </MotionBox >
    );
};