/* eslint-disable react/jsx-key */
import { Button, Flex } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";

const LoginComponent = () => {
const loginWithGoogle =()=>{
    signInWithPopup(auth, provider)
}

  return (
    <Flex 
     h={"100vh"}
     w={"100vw"}

    >
      <Button variant={"solid"} m={"auto"} colorScheme={"whatsapp"}
      onClick={loginWithGoogle}
      >Login with Google</Button>
    </Flex>
  );
};

export default LoginComponent;
