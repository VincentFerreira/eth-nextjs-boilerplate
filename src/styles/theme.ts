// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
export const theme = extendTheme({
  colors: {
    backgroundDark: '#1F1B24',
  },
  styles: {
    global: {
      body: {
        height: 'auto',
        backgroundImage: 'url("/dungeon-bg.jpg")',
        color: 'white'
      }
    }
  }
})
