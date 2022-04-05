import { Button, ButtonProps } from '@chakra-ui/react'
import { FC } from 'react'

export const NavButton: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <Button
      className="nav-button"
      backgroundColor="hsla(11,80%,31%,1)"
      borderRadius="5px"
      border='2px'
      borderColor='#b35b13'
      _hover={{
        bg: 'red.900'
      }}
      _active={{
        bg: '#121212'
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}
