import { useFormik } from 'formik';
import * as Yup from 'yup';
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


export default function FeedbackForm() {

    const formik = useFormik({
        initialValues: {
            gender: '',
            comment: '',
        },

        validationSchema: Yup.object({
            gender: Yup.string().required('Gender is required'),
            name: Yup.string().required('Name is required'),
        }),

        onSubmit: (values, actions) => { // Handle form submission
            console.log('Form submitted with values:', values);
            // actions.resetForm();

            // Send Form Values to DB
            fetch("https://script.google.com/macros/s/AKfycbxndXOuddS0X_U6AwWrqbjXfzn8He9CTnuLsv2wVkVTPHezlycctXsBsOt1P4Uwu0LsnQ/exec", {
                method: 'POST',
                // headers: { 'Content-Type': 'application/json' },
                // body: JSON.stringify(values)
                body: values
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Form submission Status: ' + response.statusText);
                    }
                    // return response.json();
                    return response;

                })
                .then(data => {
                    console.log(data.text())
                    // const { data } = response; // Store the response in "data"
                    // console.log("Form Submission Status: ", data);

                    // if (data) {
                    //     localStorage.setItem('paymentReference', data.reference);
                    //     window.location.href = data.authorization_url;
                    // } else {
                    //     console.error('Required data not found in the response');
                    // }
                })
                .catch(error => {
                    console.error('Form submission error:', error);
                })
        },
    });



    //Custom Form Styling
    const inputFieldStyles = {
        bg: 'white',
        focusBorderColor: 'primary.1',
        color: 'primary.1',
    }
    const errorStyles = {
        bg: 'crimson',
        justifyContent: 'center',
        borderRadius: '0.3rem',
        color: 'white',
    }

  return (
      <VStack
          bg="rgba(51, 92, 105, 0.6)"
          backdropFilter='auto'
          backdropBlur='30px'
          borderRadius="1rem"
          justifyContent="center"
          alignItems="center"
          spacing="10"
          w="100%"
          p="7%"
      >

          <Heading
              color="white"
              fontSize="xxx-large"
          >
              FEEDBACK
          </Heading>

          <form
              style={{ width: "100%" }}
              onSubmit={formik.handleSubmit}
          >
              <VStack spacing="3rem">
                  <FormControl
                      isInvalid={formik.errors.gender && formik.touched.gender}
                      isRequired
                  >
                      <FormLabel htmlFor="gender" color={'white'} fontSize="1.2rem">Gender:</FormLabel>
                      <Select
                          id="gender"
                          name="gender"
                          onChange={formik.handleChange}
                          value={formik.values.gender}
                          onBlur={formik.handleBlur}
                          placeholder="Tell us your gender"
                          sx={inputFieldStyles}
                      >
                          <option value='Male'>Male</option>
                          <option value='Female'>Female</option>
                      </Select>
                      <FormErrorMessage sx={errorStyles}>
                          {formik.errors.gender}
                      </FormErrorMessage>
                  </FormControl>

                  <FormControl
                      isInvalid={formik.errors.comment && formik.touched.comment}
                      isRequired
                  >
                      <FormLabel htmlFor="comment" color={'white'} fontSize="1.2rem">Comment:</FormLabel>
                      <Textarea
                          id="comment"
                          name="comment"
                          type="text"
                          resize="none"
                          onChange={formik.handleChange}
                          value={formik.values.comment}
                          onBlur={formik.handleBlur}
                          placeholder="Tell us what you think"
                          sx={inputFieldStyles}
                      />
                      <FormErrorMessage sx={errorStyles}>
                          {formik.errors.name}
                      </FormErrorMessage>
                  </FormControl>

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
