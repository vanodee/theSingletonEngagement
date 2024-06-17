import { Box, Heading, Image, Text } from '@chakra-ui/react'
import FeedbackBg from "../assets/singleton_set_image.webp"
import GoodbyeTxt from "../assets/seeYouSoon.webp"
import SingletonLogo from "../assets/singleton_logo.webp"
import { motion, spring } from 'framer-motion'



//ANIMATION VARIANTS -------------------------------//
const goodbyeTextMations = {
  hidden: {
    y: "-50vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,

    transition: {
      delay: 0,
      duration: 1,
      type: spring,
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    }
  }
}

const footerMations = {
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



export default function Feedback() {
  return (
    <Box
      h="100vh"
      bgImg={FeedbackBg}
      bgSize="cover"
      display="flex"
      flexDirection="column"
      justifyContent="start"
      alignItems="center"
      pt={{ base: "4rem", md: "6rem" }}
      scrollSnapAlign="start"
    >
      <Box
        as={motion.div}
        alignSelf="start"
        h="10%"
        // bg="red"

        //ANIMATIONS
        variants={goodbyeTextMations}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={GoodbyeTxt}
          alt='See You Soon'
          w="40vw"
        />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="80%"
        px="20vw"
        // bg="blue"
      >
        <Text>Feedback Form</Text>
      </Box>

      <Box
        as={motion.div}
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="10%"
        w="100%"
        bg="White"

        //ANIMATIONS
        variants={footerMations}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={SingletonLogo}
          alt='Singleton Logo'
          h="90%"
        />
      </Box>

    </Box>
  )
}
