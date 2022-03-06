import { Heading } from "@chakra-ui/react"
import {getIdToken }   from "firebase/auth"

import React, { createContext, useContext, useEffect, useState } from 'react'
import LoginComponent from "./component/LoginComponent"
import { auth } from "./firebase"
import nookies from "nookies"

const AuthContext = createContext({})

const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        
        return auth.onIdTokenChanged( async (user) =>{
            if (!user){
               
                setCurrentUser(null)
                setLoading(false)
                
                return;
            }
            const token = await user.getIdToken();
           console.log("token : ", token)
            setCurrentUser(user)
            setLoading(false)
            nookies.set(undefined, "token",token, {})

        })
    },[])

    if (loading){
        return <Heading>Loading</Heading>
    }
    if (!currentUser){
        return <LoginComponent />
    }else{
        return (
            <AuthContext.Provider value={ {currentUser}}>
                {children}
            </AuthContext.Provider>
          )
    }
  
}

export default AuthProvider;
export const useAuth =()=> useContext(AuthContext)
