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
      h="100dvh"
      bgImg={HeroImage}
      bgSize="cover"
      bgPos="center"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      pt="8dvh"
      scrollSnapAlign="start"
    >
      <Box
        as={motion.div}
        h="30%"
        w="90%"
        maxW="400px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // bg="red"

        //ANIMATIONS
        variants={heroTextMations}
        initial="hidden"
        whileInView="visible"
      >
        <Heading
          // bg="green"
          color="white"
          textShadow='0px 4px rgba(0, 0, 0, 0.8)'
          textAlign="center"
          fontSize={{base:"300%", lg:"500%"}}
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
          // spacing="10%"
          justifyContent="space-between"
          color="white"
          w="80dvw"
          h="80%"
          py="5%"
          maxW="350px"
          maxH="100px"
        >
          <HStack
            spacing="5%"
            w="80%"
          >
            <CalendarIcon
              w={{md:"10%"}}
              color="white"
            />

            <Text
              fontWeight="bold"
              fontSize={{base:"0.7rem", md: "0.7rem" }}
              // bg="red"
            >
              22nd June, 2024
            </Text>

          </HStack>

          <HStack
            spacing="5%"
            w="80%"
          >
            <CalendarIcon
              w={{ md: "10%" }}
              color="white"
            />

            <Text
              fontWeight="bold"
              fontSize={{ base: "0.7rem", md: "0.7rem" }}
              // bg="red"
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
          h="110%"
        />
      </Box>

    </Box>
  )
}
