import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next'
import { Header } from "../../components/Header"
import { Cities } from "../../components/Cities"
import { ContinentBanner } from "../../components/ContinentBanner"
import { ContinentInfo } from "../../components/ContinentInfo"
import { api } from '../../components/services/api'


type Cities = {
  country: string
  capital: string
  flag: string
  image: string
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

type ContinentProps = {
  continent: Continent
}

export default function Continent({ continent }: ContinentProps) {

  return (
    <>
      <Head>
        <title>worldtrip | {continent.name}</title>
      </Head>
      <Header hasGoBackButton />
      <ContinentBanner title={continent.name} image={continent.image} />
      <ContinentInfo continent={continent} />
      <Cities cities={continent.cities} />
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await api.get('continents')

  const paths = data.map((continent: Continent) => {
      return {
          params: {
              id: continent.id
          }
      }
  })

  return {
      paths,
      fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params!;

  const { data } = await api.get(`/continents/${id}`)

  return {
      props: {
          continent: data
      },
      revalidate: 60 * 60 * 24, // 24 hours
  }
}