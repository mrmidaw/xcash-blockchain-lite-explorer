import React, { FC } from 'react';
import { Box, Text, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const WXcash: FC = () => {

    // Framer Motion
    const MotionBox = motion(Box);
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };


    return (
        <MotionBox
            initial="hidden" animate="visible" variants={variants}
            transition={{ duration: 0.8, times: [0, 0.5, 1] }}
        >
            <Box bg='gray.600' mx='auto' borderRadius="lg" maxW='96%' textAlign='center'>

                <Text
                    color='orange.500' fontSize={['lg', '2xl', '3xl', '4xl', '5xl']}
                    fontWeight={600}
                >
                    WXCASH on the Polygon (Matic) Network
                </Text>

                <Text color='blue.300' fontSize={['md', 'lg']} fontWeight={500} mx={1}>
                    WXCASH(Polygon) is a 1:1 ERC20 token representing a wrapped version of XCASH on the Polygon (Matic) Network
                </Text>

                <br />

                <Text color='blue.300' fontSize={['md', 'lg']} fontWeight={500} mx='auto'>
                    Contract address:
                </Text>

                <Text color='whatsapp.100' fontSize={['sm', 'lg']} fontWeight={500} mx='auto'>
                    0x03678f2c2c762dc63c2bb738c3a837d366eda560
                </Text>

                <Box>
                    <Link
                        color='orange.400' fontSize={['md', 'lg']} fontWeight={500}
                        href='https://polygonscan.com/token/0x03678f2c2c762dc63c2bb738c3a837d366eda560' isExternal
                    >
                        XCASH (Polygon) Token Tracker <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>

                <Box>
                    <Link
                        color='orange.400' fontSize={['md', 'lg']} fontWeight='500'
                        href='https://polygonscan.com/address/0x03678f2c2c762dc63c2bb738c3a837d366eda560' isExternal
                    >
                        XCASH (Polygon) Contract <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>

                <br />

                <Text color='blue.300' fontSize={['md', 'lg']} fontWeight={500} mx='auto'>
                    X-Cash Links:
                </Text>

                <Box>
                    <Link
                        color='orange.400' fontSize={['md', 'lg']} fontWeight='500'
                        href='https://www.xcash.foundation/' isExternal
                    >
                        X-CASH Foundation <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>

                <Box>
                    <Link
                        color='orange.400' fontSize={['md', 'lg']} fontWeight='500'
                        href='http://delegates.xcash.foundation/' isExternal
                    >
                        Delegates Explorer <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>

                <Box>
                    <Link
                        color='orange.400' fontSize={['md', 'lg']} fontWeight='500'
                        href='https://docs.xcash.foundation/' isExternal
                    >
                        Documentation <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>

                <Box>
                    <Link
                        color='orange.400' fontSize={['md', 'lg']} fontWeight='500'
                        href='https://explorer.xcash.foundation/Explorer' isExternal
                    >
                        Main Explorer <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>


                <Box>
                    <Link
                        color='orange.400' fontSize={['md', 'lg']} fontWeight='500'
                        href='https://www.x-bank.io/' isExternal
                    >
                        X-Bank <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>

                <Box>
                    <Link
                        color='orange.400' fontSize={['md', 'lg']} fontWeight='500'
                        href='https://github.com/X-CASH-official' isExternal
                    >
                        Github <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>

                <Box>
                    <Link
                        color='orange.400' fontSize={['md', 'lg']} fontWeight='500'
                        href='https://discord.com/invite/4CAahnd' isExternal
                    >
                        Discord <ExternalLinkIcon mx='2px' />
                    </Link>
                </Box>
            </Box >
        </MotionBox >
    );
};