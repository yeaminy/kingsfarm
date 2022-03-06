import { Heading, Text } from "@chakra-ui/react"


const Posts = ({data}) => {
   
  return (
    <div>
      {
          data && data.map((doc)=>(
              <Text key={doc.id}>{doc.title}</Text>
          ))
      }
    </div>
  )
}

export default Posts
