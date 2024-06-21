import { Box, Flex, Image, Text } from '@chakra-ui/react'
import WelcomeText from "../assets/welcome_white.webp"
import MapImage from "../assets/floor_plan.webp"
import VenueBg from "../assets/hyds_bg.webp"
import { motion } from 'framer-motion'
import Attraction from './Attraction'



//ANIMATION VARIANTS -------------------------------//
const welcomeTextMations = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0,
      duration: 0.7,
    }
  }
}

const mapMations = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    zIndex: 1,

    transition: {
      delay: 0.7,
      duration: 0.5,
    }
  }
}
//END OF ANIMATION VARIANTS ------------------------//




export default function Venue() {
  return (
    <Box
      h="100dvh"
      w="100%"
      bgImg={VenueBg}
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
        h="10%"
        // bg="blue"

        ANIMATIONS
        variants={welcomeTextMations}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={WelcomeText}
          alt='Welcome'
          w="95vw"
        />
      </Box>


      <Box
        as={motion.div}
        h="80%"
        w="90%"
        borderRadius="0.5rem"
        maxW="1200px"
        bgPos="center"
        overflow="hidden"
        overflowX={{ base: "scroll", md: "hidden" }}
        overflowY={{ base: "hidden", md: "scroll", lg:"hidden" }}
        display={{md:"flex"}}
        alignItems="center"
        // bg="red"

        //ANIMATIONS
        variants={mapMations}
        initial="hidden"
        whileInView="visible"
      >
        <Flex
          h={{ base: "100%", md: "max-content" }}
          w={{base:"max-content", md:"100%"}}
          position="relative"
        >
          <Image
            src={MapImage}
            alt='Venue Map'
            h={{ base: "100%", md: "" }}
            w={{base:"", md:"100%"}}
            // objectPosition="bottom"
            // objectFit={{base:"cover", md:"contain"}}
            objectFit="contain"
          />

          <Attraction />

        </Flex>

      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="10%"
        // bg="blue"
      >
        <Text
          color="white"
          fontWeight="bold"
          fontSize={{base:"1rem", md:"1.5rem"}}
        >
          Click a location on the map to Explore
        </Text>
      </Box>

    </Box>
  )
}
