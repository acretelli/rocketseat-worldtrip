import { GetStaticProps } from 'next'
import { Divider, Text } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { ContinentsSlider } from '../components/ContinentsSlider'
import { Header } from "../components/Header"
import { TravelTypes } from '../components/TravelTypes'
import { api } from '../components/services/api'

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

type HomeProps = {
  continents: Continent[]
}

export default function Home({ continents }: HomeProps) {

  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Divider
        w="90px"
        margin="auto"
        marginBottom="52px"  
        borderBottomWidth="2px"
        borderColor="gray.600"
      />
      <Text 
        fontSize={["20px", "36px"]} 
        fontWeight="semibold" 
        align="center"
      >
        Vamos nessa?
      </Text>
      <Text 
        fontSize={["20px", "36px"]} 
        fontWeight="semibold" 
        align="center"
        marginBottom="52px"  
      >
        Então escolha seu continente
      </Text>
      <ContinentsSlider continents={continents} />
    </>
  )
}


export const getStaticProps:GetStaticProps = async () => {
  const { data } = await api.get('continents')

  return {
    props: {
      continents: data
    },
    revalidate: 60 * 60 * 8,
  }
}

