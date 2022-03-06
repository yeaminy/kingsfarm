/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import {
  Avatar,
  Flex,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { GiCheckMark } from "react-icons/gi";
import { GrFormClock } from "react-icons/gr";
import { MdCheckCircle } from "react-icons/md";
import { useAuth } from "../Auth";
import { db } from "../firebase";
const PostList = () => {
    const { currentUser } = useAuth();
  const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     setPosts(JSON.parse(postProps));
//   }, []);
  useEffect(() => {
    const collectionRef = collection(db, "posts");
    const q = query(
      collectionRef,
      where("email", "==", currentUser?.email),
      orderBy("timestamp", "desc")
    );
    const unsubscribe = onSnapshot(q, (querySnap) => {
      setPosts(
        querySnap.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          timestamp: doc.data().timestamp?.toDate().getTime(),
        }))
      );
    });
    return unsubscribe;
  }, []);
  return (
    <Flex
      w={"50%"}
      m={"auto"}
      shadow={"lg"}
      mt={5}
      border={"1px"}
      borderColor={"blue.300"}
      p={3}
    >
      <List spacing={3} w={"100%"}>
        {posts.map((doc) => {
          return (
            <ListItem
              key={doc.id}
              mt={1}
              borderBottom={"1px"}
              borderColor={"black"}
              shadow={"md"}
            >
              <ListIcon as={MdCheckCircle} color="green.500" />
              {doc.title} <br />
              {doc.body} <br />
              {doc.email}
              <Text>
                <ListIcon as={GrFormClock} color="green.500" />
                {new Date(doc.timestamp).toLocaleDateString()}
              </Text>
            </ListItem>
          );
        })}
      </List>
    </Flex>
  );
};

export default PostList;
