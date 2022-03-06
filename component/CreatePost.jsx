/* eslint-disable react/jsx-key */
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { useAuth } from "../Auth";
import { db } from "../firebase";

const CreatePost = () => {
    const {currentUser} = useAuth()
  const [post, setPost] = useState({ title: "", body: "" });
  const submitPost = async (e) => {
      e.stopPropagation();
    const collctionRef = collection(db, "posts");
    const postRef = await addDoc(collctionRef, {
      ...post,
      email:currentUser.email,
      timestamp: serverTimestamp(),
    });
    setPost({ title: "", body: "" })

   
  };
  return (
    <Flex
      m={"auto"}
      w={"50%"}
      p={5}
      rounded={5}
      border={"1px"}
      borderColor={"blue.300"}
      shadow={"lg"}
    >
      <FormControl>
        <FormLabel htmlFor="title">Post Title</FormLabel>
        <Input
          id="title"
          type="text"
          name="title"
          value={post.title}
          variant="flushed"
          placeholder="Post Title"
          onChange={(e) =>
            setPost({ ...post, [e.target.name]: e.target.value })
          }
        />

        <FormLabel htmlFor="Body">Post Body</FormLabel>
        <Input
          id="Body"
          type="text"
          name="body"
          value={post.body}
          variant="flushed"
          placeholder="Post Body"
          onChange={(e) =>
            setPost({ ...post, [e.target.name]: e.target.value })
          }
        />
        <Button mt={2} colorScheme={"blue"} onClick={(e)=>submitPost(e)}>
          Save
        </Button>
      </FormControl>
    </Flex>
  );
};

export default CreatePost;
