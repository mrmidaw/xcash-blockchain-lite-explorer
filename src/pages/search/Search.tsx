import React, { FC } from "react";
import { Box, Input, FormErrorMessage, FormLabel, FormControl, Button, Center, Text } from "@chakra-ui/react";
import { useForm, SubmitHandler } from 'react-hook-form';

type SearchForm = {
    search: string;
};

export const Search: FC = () => {

    const { handleSubmit, register, reset, formState: { errors, isSubmitting } } = useForm<SearchForm>({
        mode: 'onBlur'
    });

    const onSubmit: SubmitHandler<SearchForm> = (data) => {
        console.log(JSON.stringify(data));
        reset();
    };

    return (

        <Box
            bg='gray.500' maxW={['95%', '80%',]} mb={4} p={4} mx='auto'
            borderRadius="lg" fontSize={['md', '2xl']} fontWeight='500' textAlign='center'
        >

            <Center>
                <Text color='orange.500' fontSize={['xl', '2xl', '3xl', '4xl', '5xl']} fontWeight={600}>
                    Under Construction
                </Text>
            </Center>

            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.search}>
                    <FormLabel htmlFor='name'></FormLabel>
                    <Input
                        id='search'
                        placeholder='Block Height, Black Hash, TX Hash, Block Reward TX Hash'
                        {...register('search', {
                            required: 'Please enter a search term',
                            minLength: { value: 5, message: 'Minimum length should be 5' },
                        })}
                    />

                    <FormErrorMessage>
                        {errors.search && errors.search.message}
                    </FormErrorMessage>

                    <Button
                        mt={4} colorScheme='linkedin' isLoading={isSubmitting} type='submit'
                        width={['80%', '50%',]}
                    >
                        Search
                    </Button>
                </FormControl>
            </form>
        </Box>

    );
};