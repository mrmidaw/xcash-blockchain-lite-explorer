import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
} from "@chakra-ui/react";
import React from "react";

export const ModalWarning = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
        <Button onClick={onOpen}>Trigger modal</Button>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>X-CASH Blockhain Lite Explorer</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Error: Invalid parameters. 
                        Valid parameters are: Block Height, Black Hash, TX Hash.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}