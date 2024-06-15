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
          bgColor='rgba(0, 0, 0, 0.2)'
          backdropFilter='auto'
          backdropBlur='8px'
          boxShadow="0px 4px rgba(0, 0, 0, 0.25)"
      >
          <Img
              src={SingletonLogo}
              h="5rem"
          />
      </Box>
  )
}
