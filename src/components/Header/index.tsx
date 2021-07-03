import { Flex, IconButton, Icon, Image, Center } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { FiChevronLeft } from 'react-icons/fi'

type HeaderProps = {
  hasGoBackButton?: boolean
}

export function Header({ hasGoBackButton = false }:HeaderProps) {
  const router = useRouter()

  const handleGoHome = () => {
    router.push('/')
  }
  
  return (
    <Flex
      as="header"
      w="100"
      maxWidth={1200}
      h={["50px", "100px"]}
      mx="auto"
      p={["16px", "24px"]}
      align="center"
      justifyContent="space-between"
    >
      
      <Center>
        {hasGoBackButton && (
          
          <IconButton 
            aria-label="Open navigation"  
            icon={<Icon as={FiChevronLeft} />} 
            fontSize={["16px", "28px"]} 
            variant="unstyled"
            onClick={handleGoHome}
          />
        )}
      </Center>
      
      <Center w={["80px", "180px"]}>
        <Image
          objectFit="contain"
          src="/img/logo.svg"
          alt="Worldtrip"
          justifySelf="center"
        />
      </Center>
      <div></div>
    </Flex>
  )
}