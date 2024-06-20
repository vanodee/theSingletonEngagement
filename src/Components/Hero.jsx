import { Box, HStack, Heading, VStack, Image, Text } from '@chakra-ui/react'
import { CalendarIcon } from '@chakra-ui/icons'
import { motion, spring } from 'framer-motion'
import BottleImage from "../assets/singleton_12.webp"
import HeroImage from "../assets/hyds_bg.webp"
import hyds from "../assets/hyds.webp"
import drinkResponsibly from "../assets/drink_responsibly.webp"
import drink1 from "../assets/drink_1.webp"
import drink2 from "../assets/drink_2.webp"
import mint from "../assets/mint.webp"
import appleSlice from "../assets/apple_slice.webp"


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
      position="relative"
    >
      <Box
        as={motion.div}
        h="40%"
        maxW="1200px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // bg="red"

        //ANIMATIONS
        variants={heroTextMations}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={hyds}
          alt='How Do You Singleton'
          objectFit="contain"
          px="1%"
          h={{base:"55%", md:"80%"}}
        />

      </Box>

      <Box
        as={motion.div}
        h="20%"
        display="flex"
        alignItems="center"
        // bg="blue"

        //ANIMATIONS
        variants={eventInfoMations}
        initial="hidden"
        whileInView="visible"
      >
        <VStack
          color="white"
          fontWeight="bold"
          fontSize={{ base: "1rem", lg: "1.3rem" }}
          textAlign="center"
          spacing="15%"
          justifyContent="center"
          w="80dvw"
          h="80%"
          maxW="1200px"
        >
          <Text>
            22nd June, 2024
          </Text>

          <Text>
            No. 12, Event Location,
            <br/>
            Ideahouse Street.
          </Text>

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

      <Image
        src={drinkResponsibly}
        w={{base:"1rem", md:"1.5rem"}}
        position="absolute"
        left="1%"
        top="35%"
      />

      <Image
        src={drink1}
        w={{ base: "20dvh", md: "30dvh" }}
        position="absolute"
        left={{base:"-7%", md:"80%"}}
        top={{ base: "88%", md: "80%" }}
      />

      <Image
        src={drink2}
        w={{base:"20dvh", md:"30dvh"}}
        position="absolute"
        left={{base:"65%", md:"-5%", lg:"10%"}}
        top={{ base: "1%", md: "-5%", lg: "10%" }}
      />

      <Image
        src={mint}
        w={{base:"10dvh", md:"20dvh"}}
        position="absolute"
        left={{ base: "80%", md: "5%" }}
        top={{ base: "80%", md: "75%" }}
      />

      <Image
        src={appleSlice}
        w={{ base: "10dvh", md: "20dvh" }}
        position="absolute"
        left={{ base: "78%", md: "70%" }}
        top={{ base: "40%", md: "10%" }}
      />

    </Box>
  )
}
