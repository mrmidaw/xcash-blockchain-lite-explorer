import React from 'react';
import { Box, Flex, Image, Container, useColorMode, Link } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher/colorModeSwitcher';
import Logo from './xcash-round-logo.svg';

export const Header = () => {

    const { colorMode } = useColorMode();

    return (
        <Box as='header' py={2} h='65px' bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}>
            <Container maxW='container.lg'>
                <Flex justifyContent="space-between" alignItems="center">

                    <Image
                        src={Logo}
                        alt='logo'
                        boxSize="38px"
                        objectFit="cover"
                    />

                    <Link
                        color="gray.900"
                        fontWeight='semibold'
                        href="https://www.xcash.foundation/"
                        fontSize="32px"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        XCASH BLOCKCHAIN LITE EXPLORER
                    </Link>

                    <ColorModeSwitcher justifySelf="flex-end" />
                </Flex>
            </Container>
        </Box>
    );
};
