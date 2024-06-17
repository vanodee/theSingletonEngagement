import { Box, Heading, Image, Text } from '@chakra-ui/react'
import WelcomeText from "../assets/welcome.webp"
import MapImage from "../assets/venueMap.webp"
import { motion, spring } from 'framer-motion'



//ANIMATION VARIANTS -------------------------------//
const welcomeTextMations = {
  hidden: {
    y: "50dvh",
  },
  visible: {
    y: 0,

    transition: {
      delay: 0,
      duration: 0.5,
      type: spring,
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
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
      type: spring,
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }
  }
}
//END OF ANIMATION VARIANTS ------------------------//




export default function Venue() {
  return (
    <Box
      h="100dvh"
      w="100%"
      bg="white"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      pt={{ base: "4rem", md: "6rem" }}
      scrollSnapAlign="start"
    >
      <Box
        as={motion.div}
        h="10%"
        // bg="blue"

        //ANIMATIONS
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
        maxW="1200px"
        borderRadius="1rem"
        overflow="hidden"
        // bg="red"

        //ANIMATIONS
        variants={mapMations}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={MapImage}
          alt='Venue Map'
          w="100%"
          h="100%"
          objectFit="cover"
        />

        <Box
          h="100%"
          w="100%"
          position="relative"
          transform="translate(0, -100%)"

          bg="rgba(0,0,0,0.1)"
        >
          {/* hello */}
        </Box>

      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="10%"
      >
        <Text
          color="primary.1"
          fontWeight="bold"
          fontSize={{base:"1rem", md:"2rem"}}
        >
          Click a location on the map to Explore
        </Text>
      </Box>

    </Box>
  )
}
