import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "600": '#47585B',
      "400": '#999999',
      "300": '#DADADA',
      "200": '#F5F8FA',
    },
    yellow: {
      "400": '#FFBA08',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.200',
        color: 'gray.600'
      }
    }
  }
})