import { Box, HStack, Heading, VStack, Image, Text } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import { motion, spring } from 'framer-motion'
import BottleImage from "../assets/singleton_with_pack.webp"
import HeroImage from "../assets/heroImage.webp"


//ANIMATION VARIANTS -------------------------------//
const heroTextMations = {
  hidden: {
    y: "100%",
    scale: 2
  },
  visible: {
    y: 0,
    scale: 1,

    transition:{
      delay: 0,
      duration: 0.5,
      type: spring,
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }
  }
}

const eventInfoMations = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.5,
      duration: 0.5,
      type: spring,
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }
  }
}

const bottleMations = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0.5,
      duration: 0.5,
      type: spring,
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }
  }
}
//END OF ANIMATION VARIANTS ------------------------//


export default function Hero() {
  return (
    <Box
      h="100vh"
      bgImg={HeroImage}
      bgSize="cover"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      pt={{base:"4rem", md:"6rem"}}
      scrollSnapAlign="start"
    >
      <Box
        as={motion.div}
        h="30%"
        display="flex"
        alignItems="center"
        // bg="red"

        //ANIMATIONS
        variants={heroTextMations}
        initial="hidden"
        whileInView="visible"
      >
        <Heading
          color="white"
          textShadow='0px 4px rgba(0, 0, 0, 0.8)'
          textAlign="center"
          fontSize={{base:"3rem", md:"5rem"}}
        >
          How Do You
          <br />
          SINGLETON?
        </Heading>
      </Box>

      <Box
        as={motion.div}
        h="30%"
        display="flex"
        alignItems="center"
        // bg="blue"

        //ANIMATIONS
        variants={eventInfoMations}
        initial="hidden"
        whileInView="visible"
      >
        <VStack
          bg="rgba(51, 92, 105, 0.6)"
          backdropFilter='auto'
          backdropBlur='30px'
          borderRadius="1rem"
          p="2rem"
          alignItems="left"
          color="white"
          justifyContent="space-between"
          w="80vw"
          h={{base:"60%", md:"80%"}}
          maxW="350px"
        >
          <HStack spacing="1rem">
            <CalendarIcon boxSize={{base:"2rem", md:"3rem"}} color="white" />
            <Text
              fontWeight="bold"
              fontSize={{base:"sm", md:"lg"}}
            >
              22nd June, 2024
            </Text>
          </HStack>

          <HStack spacing="1rem">
            <CalendarIcon boxSize={{ base: "2rem", md: "3rem" }} color="white" />
            <Text
              fontWeight="bold"
              fontSize={{ base: "sm", md: "lg" }}
            >
              No. 12, Event Location, Ideahouse Street.
            </Text>
          </HStack>
        </VStack>
      </Box>

      <Box
        as={motion.div}
        h="40%"
        display="flex"
        alignItems="start"
        // bg="red"

        //ANIMATIONS
        variants={bottleMations}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={BottleImage}
          h="120%"
        />
      </Box>

    </Box>
  )
}
