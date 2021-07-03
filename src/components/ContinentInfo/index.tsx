import {
  Grid,
  Box,
  Text,
  Stack,
  IconButton,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { FiInfo } from "react-icons/fi";

type Cities = {
  country: string
  capital: string
  flag: string
}

type Continent = {
  id: string      
  name: string
  image: string
  description: string
  headline: string
  countries: number
  languages: number
  cities100: number
  cities: Cities[]
}

type ContinentInfoProps ={
  continent: Continent
}

export function ContinentInfo({ continent }: ContinentInfoProps) {
  return (
    <Grid
      w="100%"
      maxW="1200px"
      marginY={["24px", "80px"]}
      marginX="auto"
      px="16px"
      gridGap="40px"
      templateColumns={["1fr", "1fr", "7fr 6fr"]}
      alignItems="center"

    >
      <Text fontSize="24px">{continent.description}</Text>
      <Grid
        spacing="24px" 
        templateColumns="repeat(3, 1fr)"
      >
        <Stack align="center">
          <Text
            fontSize="48px"
            fontWeight="semibold"
            color="yellow.400"
            lineHeight="1"
          >
            {continent.countries}
          </Text>
          <Text fontSize="24px" fontWeight="semibold">países</Text>
        </Stack>
        <Stack align="center">
          <Text
            fontSize="48px"
            fontWeight="semibold"
            color="yellow.400"
            lineHeight="1"
          >
            {continent.languages}
          </Text>
          <Text fontSize="24px" fontWeight="semibold">línguas</Text>
        </Stack>
        <Stack align="center" position="relative">
          <Text
            fontSize="48px"
            fontWeight="semibold"
            color="yellow.400"
            lineHeight="1"
          >
            {continent.cities100}
          </Text>
          <Box fontSize="24px" fontWeight="semibold" align="center">
            cidades +100
            <Popover placement="left">
              <PopoverTrigger>
                <IconButton 
                  aria-label="Open navigation"  
                  icon={<Icon as={FiInfo} />} 
                  fontSize="20px" 
                  variant="unstyled"
                  padding="0px"
                />
              </PopoverTrigger>
              <PopoverContent maxW="200px" p="8px">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody fontSize="16px" fontWeight="regular">As +100 são cidades que estão entre as 100 cidades mais visitadas do mundo.</PopoverBody>
              </PopoverContent>
            </Popover>
          </Box>
        </Stack>
      </Grid>
    </Grid>
  )
}