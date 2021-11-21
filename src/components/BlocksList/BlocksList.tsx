import { Box, useColorMode, GridItem, SimpleGrid } from "@chakra-ui/react";
import React, { FC } from "react";

export const BlocksList: FC = () => {
    const { colorMode } = useColorMode();

    const getBlockHeight = async (url: string) => {
        const res = await fetch(url);
        return await res.json();
    }

    getBlockHeight("https://explorer.getxcash.org/getlastblockstransactiondata")
        .then((res) => console.log(res))
        .then((res) =>  {          
            
        })
        .catch(error => console.log("Error", error));





    return (
        <Box bg={colorMode === 'dark' ? 'gray.600' : 'gray.200'}
            w="100%" p={5} mt={5} borderRadius="lg"
        >
            <SimpleGrid
                templateRows="repeat(3, 1fr)"
                templateColumns="repeat(5, 1fr)"
                gap={4}
                textAlign='center'
                fontSize='2xl'
                color="gray.900"
                fontWeight='semibold'
            >
                <GridItem rowSpan={2} colSpan={1} bg="gray.500">

                </GridItem>

                <GridItem colSpan={2} bg="gray.400">

                </GridItem >

                <GridItem colSpan={2} bg="gray.400">

                </GridItem >

                <GridItem colSpan={4} bg="gray.400">

                </GridItem>

                <GridItem colSpan={5} bg="gray.400">

                </GridItem>

            </SimpleGrid>

        </Box>
    );
};