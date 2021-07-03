import { useRouter } from 'next/dist/client/router'
import { Stack, Text, Box } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Navigation,
  Pagination
} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);
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

type ContinentsSliderProps = {
  continents: Continent[]
}

export function ContinentsSlider({ continents }: ContinentsSliderProps) {
  const router = useRouter()

  const handleGoToContinentPage = (id: string) => {
    router.push(`/continent/${id}`)
  }

  const pagination = {
    "clickable": true
  }

  return (
    <Stack
      maxWidth="1240px"
      margin="auto"
      mb="60px"
    >
      <Swiper navigation={true} pagination={pagination} className="mySwiper">
        {continents.map(continent => (
          <SwiperSlide key={continent.id}>
            <Stack
              width="100%"
              height={["250px","450px"]}
              spacing="16px"
              alignItems="center"
              justifyContent="center"
              backgroundImage={continent.image}
              backgroundSize="cover"
              position="relative"
              cursor="pointer"
              onClick={() => handleGoToContinentPage(continent.id)}
            >
              <Box
                width="100%"
                height="450px"
                spacing="16px"
                align="center"
                backgroundColor="gray.800"
                opacity="0.9"
                position= "absolute"
                top="0"
                left="0"
              />
              <Stack position="relative" zIndex="2" align="center">
                <Text fontSize={["24px", "48px"]} fontWeight="semibold" color="gray.200">{continent.name}</Text>
                <Text fontSize={["14px", "24px"]} fontWeight="semibold" color="gray.300">{continent.headline}</Text>
              </Stack>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  )
}