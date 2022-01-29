import React, { FC } from 'react';
import { Box, Image, Grid, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher/colorModeSwitcher';
import Logo from './xcash-round-logo.svg';
import { Text, Center } from "@chakra-ui/react";

export const Header: FC = () => {

    const { colorMode } = useColorMode();

    return (
        <Box py={2} bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'} textAlign='center'>
            <Grid templateColumns='0.1fr 1fr 0.1fr' alignItems="center">
                <Center>
                    <a href="https://www.xcash.foundation/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={Logo}
                            alt='logo'
                            boxSize={['20px', '30px', "36px"]}
                            objectFit="cover"
                        />
                    </a>
                </Center>

                <Text color="gray.900" fontWeight='semibold' fontSize={['lg', 'xl', '2xl', '3xl']}>
                    XCASH BLOCKCHAIN LITE EXPLORER
                </Text>

                <Center>
                    <ColorModeSwitcher justifySelf="flex-end" />
                </Center>
            </Grid>
        </Box>
    );
};
