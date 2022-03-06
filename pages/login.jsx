/* eslint-disable react/jsx-key */
import { Button, Flex } from "@chakra-ui/react";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";
import React from "react";
import { useAuth } from "../Auth";
import { auth, provider } from "../firebase";
import nookies from "nookies"
const Login = () => {
  const router = useRouter();
  const { currentUser } = useAuth();
  console.log("currentUser", currentUser) 
 
  const loginWithGoogle = async () => {
    const user = await signInWithPopup(auth, provider);
    user && router.push("/posts")
  };


  return (
    <Flex h={"100vh"} w={"100vw"}>
      <Button
        variant={"solid"}
        m={"auto"}
        colorScheme={"whatsapp"}
        onClick={loginWithGoogle}
      >
        Login with Google
      </Button>
    </Flex>
  );
};

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);

  const token = await verifyIdToken(cookies.token);

  const { email } = token;
  
  return {
    props: { email: email || null },
  };
}
export default Login;
