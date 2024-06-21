import SingletonLogo from "../assets/singleton_logo.webp"
import { Box, Img } from "@chakra-ui/react"

export default function Header() {
  return (
      <Box
          as='header'
          position="fixed"
          top="0"
          width="100%"
          zIndex="999"
          display="flex"
          justifyContent="center"
          alignItems="center"
      >
          <Img
              src={SingletonLogo}
              alt='Singleton Logo'
              h="7dvh"
          />
      </Box>
  )
}
