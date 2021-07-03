import {
  Box,
  Text,
  Image,
  Stack,
  Grid,
  Flex
} from "@chakra-ui/react";

type City = {
  country: string
  capital: string
  flag: string
  image: string
}

type CitiesProps = {
  cities: City[]
}

export function Cities({ cities }: CitiesProps) {
  return (
    <Flex px="16px" flexDirection="column" mb="40px">
      <Text marginTop="80px" marginBottom="40px" fontSize="36px" fontWeight="semibold">Cidades +100</Text>
      <Grid
        justifyItems="center"
        gridTemplateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
        gridGap={["20px", "40px"]}
      >
        {cities && cities.map(city => (
          <Box
            w={["260px", "auto"]}
            borderWidth="1px"
            borderRadius="lg"
            borderColor="yellow.400"
            backgroundColor= ""
            key={city.country}
          >
            <Image 
              w="100%"
              h="176px"
              borderRadius="8px 8px 0 0"
              src={city.image}
              alt={`Foto do país ${city.country}`}
            />
            <Flex
              alignItems="center"
              justifyContent="space-between"
              p="16px"
            >
              <Stack>
                <Text fontSize="20px" fontWeight="semibold">{city.capital}</Text>
                <Text fontSize="16px">{city.country}</Text>
              </Stack>
              <Image 
                boxSize="30px"
                borderRadius="50%"
                src={city.flag}
                alt={`Bandeira do país ${city.country}`}
              />
            </Flex>
          </Box>
        ))}
      </Grid>
    </Flex>
  )
}