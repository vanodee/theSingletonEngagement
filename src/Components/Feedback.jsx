import { Box, Heading, Image, Text } from '@chakra-ui/react'
import FeedbackBg from "../assets/singleton_sky.webp"
import GoodbyeTxt from "../assets/savour_moment.webp"
import SingletonWhite from "../assets/singleton_white.webp"
import Cheers from "../assets/cheers.webp"
import { motion } from 'framer-motion'
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
      position="relative"
    >
      <Box
        as={motion.div}
        position="absolute"
        left="1%"
        top="10%"
        // bg="red"

        //ANIMATIONS
        variants={goodbyeTextMations}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={GoodbyeTxt}
          alt='See You Soon'
          w={{ base: "70vw", md: "50vw" }}
          loading='lazy'
        />
      </Box>

      <Box
        as={motion.div}
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="90%"
        w="100%"
        maxW="800px"
        px="5%"
        // bg="blue"

        //ANIMATIONS
        variants={feedbackMations}
        initial="hidden"
        whileInView="visible"
      >

        <FeedbackForm2 />
      </Box>

      <Box
        as={motion.div}
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        h={{base:"7dvh", md:"15dvh"}}
        w="100%"
        position="absolute"
        bottom="0%"
        // bg="red"

        //ANIMATIONS
        variants={footerMations}
        initial="hidden"
        whileInView="visible"
      >
        <Image
          src={SingletonWhite}
          alt='Singleton Logo'
          h="50%"
          loading='lazy'
        />

        <Image
          src={Cheers}
          alt='Singleton Logo'
          h="100%"
          loading='lazy'
        />
      </Box>

    </Box>
  )
}
