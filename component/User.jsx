/* eslint-disable react/jsx-key */
import { Heading } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { FirstName, LastName } from '../pages'


const User = () => {


    const fname = useContext(FirstName)
    const lname = useContext(LastName)
  return (
    <>
    <div>
      <Heading 
      as={"span"}
      >
          { `${fname} ${lname}` }
      </Heading>
    </div>
    </>
  )
}

export default User
