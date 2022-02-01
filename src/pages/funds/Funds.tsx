import React, { FC } from 'react';
import { ResponsiveRadialBar } from '@nivo/radial-bar';
import { Box, Text, Grid, GridItem } from '@chakra-ui/react';
import { motion } from 'framer-motion';


export const Funds: FC = () => {
    // Framer Motion
    const MotionBox = motion(Box)
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    };

    const data = [
        {
            "id": "Available",
            "data": [
                {
                    "x": "X-Network Inventory Fund",
                    "y": 10
                },
                {
                    "x": "Private Investors Funds",
                    "y": 0.84
                }
            ]
        },
        {
            "id": "Spend",
            "data": [
                {
                    "x": "Community Funds",
                    "y": 20
                },
                {
                    "x": "Team Funds",
                    "y": 5
                },
                {
                    "x": "Private Investors Funds",
                    "y": 4.16
                }
            ]
        },
        {
            "id": "Total Amount",
            "data": [
                {
                    "x": "Community Funds",
                    "y": 20
                },
                {
                    "x": "X-Network Inventory Fund",
                    "y": 10
                },
                {
                    "x": "Team Funds",
                    "y": 5
                },
                {
                    "x": "Private Investors Funds",
                    "y": 5
                }
            ]
        }
    ];


    return (
        <MotionBox
            initial="hidden" animate="visible"
            variants={variants} transition={{ duration: 0.8, times: [0, 0.5, 1] }}
            maxW='96%' bg='gray.600' mx='auto' mb={2}
            borderRadius="lg" textAlign='center'
        >
            <Grid templateColumns={'repeat(3, 1fr)'} m={1}>
                <GridItem>
                    <Text color='orange.500' fontSize={['md', 'lg', 'xl']} fontWeight={600}>
                        Total:
                        <Text color='blue.300'>
                            40 Billion
                        </Text>
                    </Text>
                </GridItem>

                <GridItem>
                    <Text color='orange.500' fontSize={['md', 'lg', 'xl']} fontWeight={600}>
                        Spend:
                        <Text color='blue.300'>
                            29.16 Billion
                        </Text>

                    </Text>
                </GridItem>

                <GridItem>
                    <Text color='orange.500' fontSize={['md', 'lg', 'xl']} fontWeight={600}>
                        Available:
                        <Text color='blue.300'>
                            10.84 Billion
                        </Text>
                    </Text>
                </GridItem>
            </Grid>

            <Box h='xl'>
                <ResponsiveRadialBar
                    data={data}
                    isInteractive={false}
                    valueFormat=">-.2f"
                    padding={0.4}
                    cornerRadius={2}
                    margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
                    endAngle='270'
                    innerRadius='0'
                    enableLabels='true'
                    colors={{ scheme: 'category10' }}
                    radialAxisStart={{ tickSize: 5, tickPadding: 5, tickRotation: 0 }}
                    circularAxisOuter={{ tickSize: 5, tickPadding: 12, tickRotation: 0 }}
                    legends={[
                        {
                            anchor: 'top-left',
                            direction: 'column',
                            justify: false,
                            translateX: 0,
                            translateY: -30,
                            itemsSpacing: 12,
                            itemDirection: 'left-to-right',
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            symbolSize: 24,
                            symbolShape: 'square',
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemTextColor: '#000'
                                    }
                                }
                            ]
                        }
                    ]}
                />
            </Box>
        </MotionBox>
    );
};