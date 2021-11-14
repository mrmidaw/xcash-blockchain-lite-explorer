import React from 'react';
import { Box, Flex, Image, Container, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher/colorModeSwitcher';
import Logo from './xcash-round-logo.svg';
import { Text } from "@chakra-ui/react";

export const Header = () => {

    const { colorMode } = useColorMode();

    return (
        <Box as='header' py={2} h='65px' bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} >
            <Container maxW='container.lg'>
                <Flex justifyContent="space-between" alignItems="center">

                    <a href="https://www.xcash.foundation/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={Logo}
                            alt='logo'
                            boxSize="38px"
                            objectFit="cover"
                        />
                    </a>

                    <Text
                        color="gray.900"
                        fontWeight='semibold'
                        fontSize="32px"
                    >
                        XCASH BLOCKCHAIN LITE EXPLORER
                    </Text>

                    <ColorModeSwitcher justifySelf="flex-end" />
                </Flex>
            </Container>
        </Box>
    );
};
