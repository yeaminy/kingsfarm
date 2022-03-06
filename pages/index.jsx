/* eslint-disable react/jsx-key */
import { Flex, Text } from "@chakra-ui/react";
import { createContext } from "react";
import Posts from "../component/Posts";
import User from "../component/User";
const FirstName = createContext();
const LastName = createContext();

const Index = ({data}) => {
  return (
    <FirstName.Provider value={"Yeamin"}>
    <LastName.Provider value={"Yeala"}>
      <Flex direction={"column"} >
        
        <Text > Yeamin Yeala Form Index page</Text>
        <User />
        <Posts
        data={data}
        />
      </Flex>
    </LastName.Provider>
    </FirstName.Provider>
  );
};


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()

  // Pass data to the page via props

  return { props: { data } }
}
export default Index;
export {FirstName, LastName}
