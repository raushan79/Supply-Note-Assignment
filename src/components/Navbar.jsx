import React from 'react'
import { Button,Flex,Box,Heading,Spacer,ButtonGroup } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex minWidth='max-content' alignItems='center' gap='2' margin={'20px'}>
    <Heading size='md'>Dashboard</Heading>
  <Box p='2'>
  </Box>
  <Spacer />
  <ButtonGroup gap='20'>
    <Button colorScheme='teal'>Home</Button>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex>
  )
}

export default Navbar
