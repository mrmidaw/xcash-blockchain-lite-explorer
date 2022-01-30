import React, { FC, useState } from "react";
import { Box, IconButton, useColorMode, Center, Text, Input } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsSearch } from 'react-icons/bs';


export const Search: FC = () => {
    // const { colorMode } = useColorMode();
    // const [inputValue, setInputValue] = useState('');
    // const searchLogic = (value: string) => { };

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


        // <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} w="100%" p={4} color="white" borderRadius="lg">

        //     <Input placeholder="Block Height, Black Hash, TX Hash"
        //         size="md" w="91%" mr='5'
        //         onChange={(e) => setInputValue(e.target.value)}
        //     />

        //     <IconButton
        //         aria-label="Search database"
        //         icon={<BsSearch />}
        //         verticalAlign="none"
        //         onClick={() => searchLogic(inputValue)}
        //     />
        // </Box>
    );
};