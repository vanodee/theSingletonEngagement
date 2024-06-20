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



export default function CocktailForm({ setShowForm }) {

    const [formWasSubmitted, setFormWasSubmitted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = (e, formID) => {
        e.preventDefault()
        const formData = new FormData(formID)
        setIsLoading(true)

        fetch("https://script.google.com/macros/s/AKfycbwzzt9LNInX9Wu65mfRyztf6v8phoFKNrNvWh4sZu2-hBOG1RUi_qgrBYKvAXChjPKaFg/exec", {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then((data) => {
                console.log("Cocktail Form Submitted")
                setIsLoading(false)
                setFormWasSubmitted(true)
                console.log(data.message); // "Your message was successfully sent to the Google Sheets database!"
                console.log(data.lastRow); // The number of the last edited row
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
          justifyContent="center"
          alignItems="center"
          w="100%"
          p="7%"
      >
          {!formWasSubmitted ? (
              <>
                  <form
                      style={{ width: "100%" }}
                      id='cocktailForm'         // Unique identifier for this Form
                      onSubmit={(e) => handleSubmit(e, document.getElementById('cocktailForm'))}
                  >
                      <VStack spacing="3rem">
                          <Heading
                              color="white"
                              fontSize="xx-large"
                              textAlign="center"
                          >
                              COCKTAIL
                              <br />
                              BOOKING
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
                              fontSize="xx-large"
                          >
                              SUCCESS!
                          </Heading>

                          <Text
                              color="white"
                              fontSize="large"
                              fontWeight="bold"
                              textAlign="center"
                          >
                              Your DIY Cocktail slot has been
                              <br />
                              Reserved Successfully!
                              <br />
                              <br />
                              See you at the cocktail stand
                          </Text>

                          <Button
                              variant="outline"
                              size="lg"
                              color="white"
                              justifySelf="center"
                              w="100%"
                              onClick={() => {
                                  setFormWasSubmitted(false);
                                  setShowForm(false);
                              }}
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

