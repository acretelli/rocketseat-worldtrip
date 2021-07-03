import { Text, Box, Flex } from "@chakra-ui/react";

type ContinentBannerProps = {
  title: string
  image: string
}

export function ContinentBanner({ title, image }: ContinentBannerProps) {
  return (
    <Flex
      w="100%"
      h={["150px", "500px"]}
      p="60px 24px"
      backgroundImage={image}
      backgroundSize="cover"
      backgroundPosition="center center"
      position="relative"
    >
      <Box 
        w="100%"
        h="100%"
        position="absolute"
        top="0"
        left="0"
        backgroundColor="gray.900"
        opacity="0.6"
      />
      <Text
        mx={["auto", "0"]}
        fontSize={["28px", "48px"]}
        fontWeight="semibold"
        color="gray.200"
        align={["center", "left"]}
        alignSelf={["center", "flex-end"]}
        justifySelf={["center", "flex-start"]}
        position= "relative"
        zIndex="2"
      >
        {title}
      </Text>
    </Flex>
  )
}