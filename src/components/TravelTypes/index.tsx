import { Grid, Text, Stack, Image, Box, HStack } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Grid
      w="100%"
      maxW="1200px"
      marginY={["36px", "80px"]}
      marginX="auto"
      gridTemplateColumns={["1fr 1fr", "repeat(3, 1fr)", "repeat(5, 1fr)"]}
      gridGap="24px"
    >
      <Stack
        spacing="24px"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          display={["none", "block"]}
          boxSize="84px"
          src="/img/cocktail.svg"
          alt="Imagem de drinque"
        />
        <HStack>
          <Box
            display={["inline-block", "none"]}
            w="8px"
            h="8px"
            backgroundColor="yellow.400"
            borderRadius="50%"
            mr="4px"
          />
          <Text
            fontSize={["21px","24px"]}
            fontWeight="semibold"
          >
            vida noturna
          </Text>
        </HStack>
      </Stack>
      <Stack
        spacing="24px"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          display={["none", "block"]}
          boxSize="84px"
          src="/img/surf.svg"
          alt="Imagem de prancha de surfe"
        />
        <HStack>
          <Box
            display={["inline-block", "none"]}
            w="8px"
            h="8px"
            backgroundColor="yellow.400"
            borderRadius="50%"
            mr="4px"
          />
          <Text
            fontSize={["21px","24px"]}
            fontWeight="semibold"
          >
            praia
          </Text>
        </HStack>
      </Stack>
      <Stack
        spacing="24px"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          display={["none", "block"]}
          boxSize="84px"
          src="/img/building.svg"
          alt="Imagem de um prédio"
        />
        
        <HStack>
          <Box
            display={["inline-block", "none"]}
            w="8px"
            h="8px"
            backgroundColor="yellow.400"
            borderRadius="50%"
            mr="4px"
          />
          <Text
            fontSize={["21px","24px"]}
            fontWeight="semibold"
          >
            moderno
          </Text>
        </HStack>
      </Stack>
      <Stack
        spacing="24px"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          display={["none", "block"]}
          boxSize="84px"
          src="/img/museum.svg"
          alt="Imagem de um museu"
        />
        
        <HStack>
          <Box
            display={["inline-block", "none"]}
            w="8px"
            h="8px"
            backgroundColor="yellow.400"
            borderRadius="50%"
            mr="4px"
          />
          <Text
            fontSize={["21px","24px"]}
            fontWeight="semibold"
          >
            clássico
          </Text>
        </HStack>
      </Stack>
      <Stack
        spacing="24px"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          display={["none", "block"]}
          boxSize="84px"
          src="/img/earth.svg"
          alt="Imagem do globo"
        />
        
        <HStack>
          <Box
            display={["inline-block", "none"]}
            w="8px"
            h="8px"
            backgroundColor="yellow.400"
            borderRadius="50%"
            mr="4px"
          />
          <Text
            fontSize={["21px","24px"]}
            fontWeight="semibold"
          >
            e mais...
          </Text>
        </HStack>
      </Stack>
    </Grid>
  )
}