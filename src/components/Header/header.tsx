import React, { FC } from 'react';
import { Box, Flex, Image, Container, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../colorModeSwitcher/colorModeSwitcher';
import Logo from './xcash-round-logo.svg';
import { Text } from "@chakra-ui/react";

export const Header: FC = () => {

    const { colorMode } = useColorMode();

    return (
        <Box py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} >
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
