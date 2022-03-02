import React, { FC } from 'react';
import { Box, Image, Grid } from '@chakra-ui/react';
import Logo from './xcash-round-logo.svg';
import xbankLogo from './xcash-icon_teal.svg';
import { Text, Center } from "@chakra-ui/react";

export const Header: FC = () => {


    return (
        <Box py={2} bg='gray.600' textAlign='center'>
            <Grid templateColumns='0.1fr 1fr 0.1fr' alignItems="center">
                <Center>
                    <a href="https://www.xcash.foundation/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={Logo}
                            alt='logo'
                            boxSize={['20px', '30px', "33px"]}
                            objectFit="cover"
                        />
                    </a>
                </Center>

                <Text color="gray.900" fontWeight='bold' fontSize={['lg', 'xl', '2xl', '3xl']}>
                    XCASH BLOCKCHAIN LITE EXPLORER
                </Text>

                <Center>
                    <a href="https://x-bank.io/" target="_blank" rel="noopener noreferrer">
                        <Image
                            src={xbankLogo}
                            alt='logo'
                            boxSize={['15px', '20px', "25px"]}
                            objectFit="cover"
                        />
                    </a>
                </Center>
            </Grid>
        </Box>
    );
};
