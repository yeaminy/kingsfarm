import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import { auth } from '../firebase'

const Layout = ({children}) => {
    console.log("Layout")
  return (
    <>
    <Flex
    h={"50px"}
    bg={"blue.300"}
    justify={"flex-end"}
    align={"center"}
    p={2}
    >
          <Button
          onClick={()=>auth.signOut()}
          colorScheme={"red"}


          >Logout</Button>
        </Flex>
    {children}
    </>
  )
}

export default Layout
