import { Box, Heading, Image, Text } from '@chakra-ui/react'
import FeedbackBg from "../assets/entrance.webp"
import GoodbyeTxt from "../assets/thanks_for_coming.webp"
import SingletonLogo from "../assets/singleton_logo.webp"
import { motion, spring } from 'framer-motion'
import FeedbackForm from './FeedbackForm'
import FeedbackForm2 from './FeedbackForm2'



//ANIMATION VARIANTS -------------------------------//
const goodbyeTextMations = {
  hidden: {
    y: "-60%",
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

const feedbackMations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
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
      h="100dvh"
      bgImg={FeedbackBg}
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
        alignSelf="start"
        h="5%"
        // bg="red"

        //ANIMATIONS
        variants={goodbyeTextMations}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={GoodbyeTxt}
          alt='See You Soon'
          w={{base: "70vw", md:"40vw"}}
        />
      </Box>

      <Box
        as={motion.div}
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="85%"
        w="90%"
        maxW="600px"
        px="1%"
        // bg="blue"

        //ANIMATIONS
        variants={feedbackMations}
        initial="hidden"
        whileInView="visible"
      >
        {/* <FeedbackForm /> */}
        <FeedbackForm2 />
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
