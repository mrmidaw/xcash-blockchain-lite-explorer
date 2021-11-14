import { Box, IconButton, useColorMode } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsSearch } from 'react-icons/bs';

const searchLogic = (value: string) => {


};


export const Search = () => {
    const { colorMode } = useColorMode();
    const [value, setValue] = useState('');

    return (
        <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} w="100%" p={4} color="white" borderRadius="lg">

            <Input placeholder="Block Height, Black Hash, TX Hash"
                size="md" w="95%" mr='5'
                onChange={(e) => setValue(e.target.value)}
            />

            <IconButton
                aria-label="Search database"
                icon={<BsSearch />}
                verticalAlign="none"
                onClick={searchLogic(value)}
            />
        </Box>
    );
};