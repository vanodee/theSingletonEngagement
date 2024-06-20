import Hero from "../Components/Hero";
import Venue from "../Components/Venue";
import Feedback from "../Components/Feedback"
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
      <Box
        h="100dvh"
        overflowY="scroll"
        overflowX="hidden"
        scrollSnapType="y mandatory"
        // display="flex"
        // flexDirection="column"
        // justifyContent="center"
        // alignItems="center"
      >
        <Hero />
        <Venue />
        <Feedback />
    </Box>
  )
}
