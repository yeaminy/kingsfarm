/* eslint-disable react/jsx-key */
import { Button, ChakraProvider, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";
import AuthProvider, { useAuth } from "../Auth";
import Layout from "../component/Layout";


function MyApp({ Component, pageProps }) {
  const { currentUser } = useAuth()
  console.log("currentUser", currentUser)
  const router = useRouter();
  const {pathname} = router;
 
  if (!currentUser && pathname == "/" ||  pathname == "/login" || pathname == "/signup") {
    return (
      <ChakraProvider>
        
        <Layout>
        <Component {...pageProps}  />
        </Layout>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <AuthProvider>
        <Layout>
        <Component {...pageProps}  />
        </Layout>
        </AuthProvider>
      </ChakraProvider>
    );
  }
}

export default MyApp;
