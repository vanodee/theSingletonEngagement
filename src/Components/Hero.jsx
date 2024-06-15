import { Box, HStack, Heading, VStack } from '@chakra-ui/react'
import HeroImage from "../assets/heroImage.webp"


export default function Hero() {
  return (
    <Box
      h="100vh"
      bgImg={HeroImage}
      bgSize="cover"
      display="flex"
      justifyContent="center"
      alignItems="center"
      scrollSnapAlign="start"
    >
      <VStack>
        <Heading
          color="white"
          textShadow='0px 4px rgba(0, 0, 0, 0.8)'
          textAlign="center"
          // fontSize="4xl"
        >
          How Do You
          <br />
          SINGLETON?
        </Heading>

        <VStack
          borderWidth="1px"
          p="2rem"
        >
          <HStack>
            
          </HStack>
        </VStack>
      </VStack>

    </Box>
  )
}
