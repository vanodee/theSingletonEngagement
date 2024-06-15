import { Box, Heading } from '@chakra-ui/react'

export default function Feedback() {
  return (
    <Box
      h="100vh"
      bg="Green"
      display="flex"
      justifyContent="center"
      alignItems="center"
      scrollSnapAlign="start"
    >
      <Heading>Feedback</Heading>
    </Box>
  )
}
