import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { FC, useState, useEffect } from "react";
import axios from 'axios';
import { CirculationSkeleton } from './CirculationSkeleton';
import { toast } from 'react-toastify';

export const CirculationBox: FC = () => {

    const [circulation, setCirculation] = useState({
        maximum_supply: '',
        generated_supply: '',
        circulating_supply: ''
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCirculation = async () => {
            try {
                const response = await axios.get("https://explorer.getxcash.org/getblockchaindata");

                setCirculation(response.data);
                setLoading(false);
            } catch (error) {
                toast.error('Something going wrong')
            }
        };

        fetchCirculation();
    }, [])


    if (loading) {
        return <CirculationSkeleton />
    };

    return (
        <SimpleGrid columns={[1, 1, 1, 3, 3]} gap={6} margin="5" textAlign='center' fontSize="2xl" fontWeight='semibold'>

            <Box w="100%" bg="#1189a5" color="gray.900">
                {`Maximum supply: ${circulation.maximum_supply}`}
            </Box>

            <Box w="100%" bg="#1189a5" color="gray.900" >
                {`Generated supply: ${circulation.generated_supply}`}
            </Box>

            <Box w="100%" bg="#1189a5" color="gray.900" >
                {`Circulation supply: ${circulation.circulating_supply}`}
            </Box>

        </SimpleGrid >
    );
};