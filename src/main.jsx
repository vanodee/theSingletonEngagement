import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// Custom Styles ------------------------ //
const colors = {
  primary: {
    1: '#527555',
    2: ''
  },

}

const fonts = {
  body: `'Chakra Petch', sans-serif`,
  heading: `'Chakra Petch', sans-serif`
}

const breakpoints = {
  base: '0px',
  sm: '345px',
  md: '660px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

const customStyles = extendTheme({
  colors,
  fonts,
  breakpoints,
  styles: {
    global: {
      //Custom Scrollbar ------------------ //
      "::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: "full",
        width: "8px"
      },
      "::-webkit-scrollbar-track": {
        backgroundColor: "rgba(0,0,0,0.3)",
      },
    },
  },
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={customStyles}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)