import {
    HStack,
    Image,
    Text,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    VStack,
    Heading,
    ModalFooter,
    IconButton,
} from "@chakra-ui/react";

import { useState } from "react";
import { motion, spring } from "framer-motion";
import { ArrowBackIcon } from "@chakra-ui/icons";
import CocktailForm from "./CocktailForm";
import { AttrList } from "./AttrList";



//ANIMATION VARIANTS -------------------------------//
const attractMations = {
    initial: {
        scale: 1,
    },
    animate: {
        scale: 1.1,

        transition: {
            // delay: 0,
            duration: 0.5,
            type: spring,
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
            yoyo: Infinity
        }
    }
}
//END OF ANIMATION VARIANTS ------------------------//



export default function Attraction() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAttraction, setSelectedAttraction] = useState(AttrList);
    const [showForm, setShowForm] = useState(false);
    const [showFormButton, setShowFormButton] = useState(false);

    const attractions = AttrList;

    return (
        <>
            {attractions.map((attraction) => (
                <HStack
                    as={motion.div}
                    key={attraction.id}
                    onClick={() => {
                        setIsModalOpen(true);
                        setShowFormButton(attraction.showForm);
                        setSelectedAttraction(attraction);
                    }}
                    bg="rgba(51, 92, 105, 0.6)"
                    backdropFilter='auto'
                    backdropBlur='20px'
                    borderRadius="0.5rem"
                    cursor='pointer'
                    w="fit-content"
                    p="0.7rem"

                    position="absolute"
                    left={attraction.posLeft}
                    top={attraction.posTop}

                    _hover={{
                        bg: "rgba(5, 92, 105, 0.6)",
                        spacing: "2rem",
                        boxShadow: "0px 9px rgba(0, 0, 0, 0.1)"
                    }}

                    //ANIMATIONS
                    // variants={attractMations}
                    // // initial="initial"
                    // // animate="animate"
                    // whileHover="animate"
                >
                    <Image
                        hideBelow="md"
                        src={attraction.image}
                        objectFit="cover"
                        borderRadius="0.5rem"
                        h="3rem"
                        w="3rem"
                    />

                    <Text
                        color="white"
                        fontWeight="bold"
                        fontSize={{ md: "1.5rem" }}
                        textAlign="center"
                    >
                        {attraction.title}
                    </Text>
                </HStack>

            ))}

            <Modal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setShowForm(false);
                }}
                size="xl"
                scrollBehavior="inside"
                isCentered
            >
                <ModalOverlay
                    bg="rgba(0, 0, 0, 0.5)"
                    backdropFilter='blur(7px)'
                />

                <ModalContent
                    bg="rgba(0, 0, 0, 0.0)"
                >
                    <IconButton
                        icon={<ArrowBackIcon />}
                        onClick={() => (!showForm ? setIsModalOpen(false) : setShowForm(false))}
                        bg="rgba(51, 92, 105, 0.6)"
                        backdropFilter='auto'
                        backdropBlur='30px'
                        borderRadius="1rem"
                        color="white"
                        size="lg"
                        w="2rem"
                        position="absolute"
                        zIndex={1}
                        left="7%"
                        top="2%"
                    />

                    <VStack
                        spacing="1rem"
                        bg="rgba(51, 92, 105, 0.6)"
                        backdropFilter='auto'
                        backdropBlur='20px'
                        borderRadius="1rem"
                        overflow="hidden"
                        color="white"
                        boxShadow="0px 9px rgba(0, 0, 0, 0.2)"
                        alignItems="start"
                        mx="5%"
                    >

                        {!showForm ? (
                            <>
                                <Image
                                    src={selectedAttraction.image}
                                    objectFit="cover"
                                    h="30dvh"
                                    w="100%"
                                />

                                <Heading
                                    px="1.5rem"
                                    fontWeight="bold"
                                >
                                    {selectedAttraction.title}
                                </Heading>

                                <ModalBody>
                                    <Text
                                        // p="1rem"
                                        fontWeight="bold"
                                        pb="2rem"
                                    >
                                        {selectedAttraction.description}
                                    </Text>
                                </ModalBody>

                                {showFormButton && (
                                    <ModalFooter w="100%">
                                        <Button
                                            variant="outline"
                                            size="lg"
                                            color="white"
                                            justifySelf="center"
                                            w="100%"
                                            onClick={() => setShowForm(true)}
                                            _hover={{
                                                color: "black",
                                                bg: "gray.200"
                                            }}
                                        >
                                            Book a Slot
                                        </Button>
                                    </ModalFooter>
                                )}
                            </>
                        ) : (
                            <>
                                <CocktailForm setShowForm={setShowForm} />
                            </>
                        )}

                    </VStack>

                </ModalContent>
            </Modal>

        </>
    )
}
