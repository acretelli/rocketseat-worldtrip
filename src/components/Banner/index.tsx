import { Image, Flex, Text, Stack } from '@chakra-ui/react'

export function Banner() {
  return (
    <Flex
      width="100%"
      height={["160px", "336px"]}
      paddingX="20px"
      paddingY="64px"
      alignItems="center"
      justifyContent="center"
      backgroundImage="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=305&q=80"
      backgroundSize="cover"
      position= "relative"
    >
      <Flex 
        width="100%"
        maxW="1200px"
        marginX="auto"
        alignItems="center"
        justifyContent="flex-start"
      >        
        <Stack maxWidth="600px" spacing="20px">
          <Text fontSize={["20", "36"]} fontWeight="medium" color="gray.200" >5 Continentes, <br /> infinitas possibilidades.</Text>
          <Text fontSize={["14", "20"]} color="gray.300">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
        </Stack>
        <Image
          display={["none", "none", "block"]}
          maxWidth="416px"
          objectFit="contain"
          src="/img/airplane.svg"
          alt="Imagem de um avião voando"
          position="absolute"
          bottom="-24px"
          right="0px"
        />
      </Flex>
    </Flex>
  )
}