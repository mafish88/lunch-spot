import { useContext} from "react"
import { Box, Text, Heading, Image } from "@gluestack-ui/themed"
import { RestaurantContext } from "./_layout"

export default function Details () {
   
   const { thisRest } = useContext(RestaurantContext)
   
    return (
       <Box px={8} py={60} bgColor="skyblue" flex={1} alignItems="center">
       <Image
       w="$full"
       h={250}
       alt={thisRest.name}
       source={{ uri: thisRest.photo_url}} />
        <Heading>{thisRest.name}</Heading>
        <Text size="2xl">{thisRest?.rating && '⭐️'.repeat(thisRest.rating)}</Text>
        </Box>
    )


    }