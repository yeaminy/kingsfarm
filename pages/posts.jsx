/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { Avatar, Heading } from "@chakra-ui/react";
import {
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAuth } from "../Auth";
import CreatePost from "../component/CreatePost";
import PostList from "../component/PostList";


const Posts = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <Heading>Try Post</Heading>
      <Avatar name={currentUser.displayName} src={currentUser.photoURL} />

      <Heading>{currentUser.displayName}</Heading>
      <CreatePost />
      <PostList />
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const cookies = nookies.get(context);

//   const token = await verifyIdToken(cookies.token);

//   const { email } = token;
//   const collectionRef = collection(db, "posts");
//   const q = query(
//     collectionRef,
//     where("email", "==", email),
//     orderBy("timestamp", "desc")
//   );
//   const querySnapshot = await getDocs(q);
//   let posts = [];
//   querySnapshot.forEach((doc) => {
//     posts.push({
//       ...doc.data(),
//       id: doc.id,
//       timestamp: doc.data().timestamp?.toDate().getTime(),
//     });
//   });
//   return {
//     props: { postProps: JSON.stringify(posts) || [] },
//   };
// }

export default Posts;
