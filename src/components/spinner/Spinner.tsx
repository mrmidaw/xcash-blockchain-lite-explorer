import React, { FC } from "react";
import { Spinner, Center } from '@chakra-ui/react';

export const GlobalSpinner: FC = () => {
    return (
        <Center mt='24'>
            <Spinner
                thickness='12px'
                speed='0.7s'
                emptyColor='blue.200'
                color='orange.400'
                size='xl'
            />
        </Center>
    );
};