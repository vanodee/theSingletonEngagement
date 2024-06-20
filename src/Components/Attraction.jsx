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
        y: -10,
        scale: 1.05,

        transition: {
            // delay: 0,
            duration: 3,
            type: spring,
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
}

const loadiMations = {
    animate: {
        opacity: 0.1,

        transition: {
            // delay: 0,
            duration: 0.7,
            type: spring,
            stiffness: 100,
            damping: 30,
            restDelta: 0.001,
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
}
//END OF ANIMATION VARIANTS ------------------------//



export default function Attraction() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAttraction, setSelectedAttraction] = useState(AttrList);
    const [showFormButton, setShowFormButton] = useState(false);
    const [showForm, setShowForm] = useState(false);

    const [isLoading, setIsLoading] = useState(false);
    const [slotNumber, setSlotNumber] = useState(null);

    const attractions = AttrList;


    // Empty POST request to the Google Sheet, to generate new Booking Slot
    const createNewSlot = () => {
        setIsLoading(true)

        fetch("https://script.google.com/macros/s/AKfycbyz4Bvz5GxV2Qz05MeFLZNsWqbcWo3uzEJn0eFPMr9vvdjtUefvQjEWA9s9BuRtmlXQ/exec", {
            method: 'POST'
        })
            .then(response => response.json())
            .then((data) => {
                // console.log(data.message); // "Your message was successfully sent to the Google Sheets database!"
                // console.log(data.lastRow); // The number of the last edited row
                setIsLoading(false)
                setSlotNumber(data.lastRow)
            })
    }


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
                    p="0.5rem"

                    position="absolute"
                    left={attraction.posLeft}
                    top={attraction.posTop}

                    _hover={{
                        bg: "rgba(5, 92, 105, 0.6)",
                        spacing: "2rem",
                        boxShadow: "0px 9px rgba(0, 0, 0, 0.1)"
                    }}

                    //ANIMATIONS
                    variants={attractMations}
                    whileInView="animate"
                >
                    <Image
                        hideBelow="lg"
                        src={attraction.image}
                        objectFit="cover"
                        borderRadius="0.3rem"
                        h={{base:"2rem"}}
                        w={{base:"2rem"}}
                    />

                    <Text
                        color="white"
                        fontWeight="bold"
                        fontSize={{ base: "1rem" }}
                        textAlign="center"
                    >
                        {attraction.title}
                    </Text>
                </HStack>

            ))}

            <Modal
                isOpen={isModalOpen}
                closeOnOverlayClick={showForm ? false : true}
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
                    {!showForm && (
                        <IconButton
                            icon={<ArrowBackIcon />}
                            onClick={() => setIsModalOpen(false)}
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
                    )}

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
                                            onClick={() => {
                                                setShowForm(true);
                                                createNewSlot();
                                            }}
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
                                    <VStack
                                        justifyContent="center"
                                        alignItems="center"
                                        w="100%"
                                        p="7%"
                                        spacing="3rem"
                                    >
                                        {isLoading ? (
                                            <Heading
                                                as={motion.div}
                                                color="white"
                                                fontSize="xx-large"

                                                //ANIMATIONS
                                                variants={loadiMations}
                                                animate="animate"
                                            >
                                                Please Wait...
                                            </Heading>

                                        ) : (
                                                <>
                                                    <Heading
                                                        color="white"
                                                        fontSize="xx-large"
                                                    >
                                                        SUCCESS!
                                                    </Heading>

                                                    <Text
                                                        color="white"
                                                        fontSize="medium"
                                                        fontWeight="bold"
                                                        textAlign="center"
                                                    >
                                                        Your DIY Cocktail slot has been
                                                        <br />
                                                        Reserved Successfully!
                                                    </Text>

                                                    <Heading
                                                        color="white"
                                                        fontSize="xxx-large"
                                                    >
                                                        {`#${slotNumber}`}
                                                    </Heading>

                                                    <Text
                                                        color="white"
                                                        fontSize="medium"
                                                        fontWeight="bold"
                                                        textAlign="center"
                                                    >
                                                        Please take a screenshot of this page
                                                        <br />
                                                        to redeem your reservation!
                                                        <br />
                                                        <br />
                                                        See you at the Cocktail Stand!!
                                                    </Text>

                                                    <Button
                                                        variant="outline"
                                                        size="lg"
                                                        color="white"
                                                        justifySelf="center"
                                                        w="100%"
                                                        onClick={() => {
                                                            setShowForm(false);
                                                            setIsModalOpen(false);
                                                        }}
                                                        _hover={{
                                                            color: "black",
                                                            bg: "gray.200"
                                                        }}
                                                    >
                                                        I have taken my screenshot!
                                                    </Button>
                                                </>
                                        )}

                                    </VStack>
                            </>
                        )}

                    </VStack>

                </ModalContent>
            </Modal>

        </>
    )
}
