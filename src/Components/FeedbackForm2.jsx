import {
    Flex,
    VStack,
    FormControl,
    FormLabel,
    Input,
    Select,
    Button,
    FormErrorMessage,
    Heading,
    Text,
    Textarea
} from '@chakra-ui/react'
import { useState } from 'react'



export default function FeedbackForm2() {

    const [formWasSubmitted, setFormWasSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = (e, formID) => {
        e.preventDefault()
        const formData = new FormData(formID)
        setIsLoading(true)

        fetch("https://script.google.com/macros/s/AKfycbwEu1S1MmvGAc3btLPeyYh62XJUK3ji7s756Woyx5iOOxK4OU6KXF8Pdq-OSjOiw8ayIQ/exec", {
            method: 'POST',
            body: formData
        }).then(() => {
            // console.log("Feedback Form Submitted")
            setIsLoading(false)
            setFormWasSubmitted(true)
        })
    }


    //Custom Form Styling
    const inputFieldStyles = {
        bg: 'white',
        focusBorderColor: 'primary.1',
        color: 'primary.1',
    }


    return (
      <VStack
          bg="rgba(51, 92, 105, 0.6)"
          backdropFilter='auto'
          backdropBlur='30px'
          borderRadius="1rem"
          justifyContent="center"
          alignItems="center"
          w="100%"
          p="7%"
      >
          {!formWasSubmitted ? (
              <>
                  <form
                      style={{ width: "100%" }}
                      id='feedbackForm'         // Unique identifier for this Form
                      onSubmit={(e) => handleSubmit( e, document.getElementById('feedbackForm') )}
                  >
                      <VStack spacing="3rem">
                          <Heading
                              color="white"
                              fontSize="xxx-large"
                          >
                              FEEDBACK
                          </Heading>

                          <FormControl isRequired isDisabled={isLoading}>
                              <Select
                                  id="gender"
                                  name="gender"
                                  placeholder="Tell us your gender"
                                  sx={inputFieldStyles}
                              >
                                  <option value='Male'>Male</option>
                                  <option value='Female'>Female</option>
                              </Select>
                          </FormControl>

                          <FormControl isRequired isDisabled={isLoading}>
                              <Textarea
                                  id="comment"
                                  name="comment"
                                  type="text"
                                  resize="none"
                                  placeholder="Tell us what you think"
                                  sx={inputFieldStyles}
                              />
                          </FormControl>


                          <Button
                              variant="outline"
                              size="lg"
                              color="white"
                              justifySelf="center"
                              type="submit"
                              w="100%"
                              isDisabled={isLoading}
                              _hover={{
                                  color: "black",
                                  bg: "gray.200"
                              }}
                          >
                              {!isLoading ? "Submit" : "Please Wait..."}
                          </Button>
                      </VStack>

                  </form>
              </>
          ) : (
                    <>
                        <VStack spacing="3rem">
                          <Heading
                              color="white"
                              fontSize="xxx-large"
                          >
                              THANK YOU!
                          </Heading>

                          <Text
                              color="white"
                              fontSize="large"
                              fontWeight="bold"
                              textAlign="center"
                          >
                              Your Feedback was
                              <br/>
                              Submitted Successfully
                          </Text>

                          <Button
                              variant="outline"
                              size="lg"
                              color="white"
                              justifySelf="center"
                              w="100%"
                              onClick={()=>setFormWasSubmitted(false)}
                              _hover={{
                                  color: "black",
                                  bg: "gray.200"
                              }}
                          >
                              Done
                          </Button>
                        </VStack>
                    </>
        )}

      </VStack>
    )
}

