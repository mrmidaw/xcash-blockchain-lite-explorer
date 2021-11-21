import { Box, SimpleGrid} from "@chakra-ui/react";
import React, { FC, useState } from "react";

export const CirculationBox: FC = () => {

    const [state, setState] = useState({
        maximum_supply: '',
        generated_supply: '',
        circulating_supply: ''
    });

    const getBlockHeight = async (url: string) => {
        const res = await fetch(url);
        return await res.json();
    }

    getBlockHeight("https://explorer.getxcash.org/getblockchaindata")
        .then((res) => setState(res))
        .catch(error => console.log("Error", error));

    return (

        <SimpleGrid columns={[1,1,2,3,3]} gap={6} margin="5" textAlign='center' fontSize="2xl" fontWeight='semibold'>

            <Box w="100%" bg="#1189a5" color="gray.900">
                {`Maximum supply: ${state.maximum_supply}`}
            </Box>

            <Box w="100%" bg="#1189a5" color="gray.900" >
                {`Generated supply: ${state.generated_supply}`}
            </Box>

            <Box w="100%" bg="#1189a5" color="gray.900" >
                {`Circulation supply: ${state.circulating_supply}`}
            </Box>

        </SimpleGrid >

    );
};