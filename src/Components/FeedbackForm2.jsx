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



export default function FeedbackForm2() {

    function submitForm(e) {
        const formStuff = document.querySelector("form")
        e.preventDefault()
        console.log("submitted")
        const formData = new FormData(formStuff)
        fetch("https://script.google.com/macros/s/AKfycbxndXOuddS0X_U6AwWrqbjXfzn8He9CTnuLsv2wVkVTPHezlycctXsBsOt1P4Uwu0LsnQ/exec", {
            method: 'POST',
            body: formData
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
          <form
              style={{ width: "100%" }}
              onSubmit={(e)=>submitForm(e)}
          >
              <VStack spacing="3rem">
                  <Heading
                      color="white"
                      fontSize="xxx-large"
                  >
                      FEEDBACK
                  </Heading>

                  <Select
                        id="gender"
                        name="gender"
                        //   onChange={formik.handleChange}
                        //   value={formik.values.gender}
                        //   onBlur={formik.handleBlur}
                        placeholder="Tell us your gender"
                          sx={inputFieldStyles}
                      >
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                    </Select>

                  <Textarea
                          id="comment"
                          name="comment"
                          type="text"
                          resize="none"
                        //   onChange={formik.handleChange}
                        //   value={formik.values.comment}
                        //   onBlur={formik.handleBlur}
                          placeholder="Tell us what you think"
                          sx={inputFieldStyles}
                      />

                  <Button
                      variant="outline"
                      size="lg"
                      color="white"
                      justifySelf="center"
                      type="submit"
                      w="100%"
                      _hover={{
                          color: "black",
                          bg: "gray.200"
                      }}
                  >
                      Submit
                  </Button>
              </VStack>

          </form>
      </VStack>
  )
}

