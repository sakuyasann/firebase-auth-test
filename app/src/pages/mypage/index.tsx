import { Box, Heading, Textarea } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useGetToken } from '../../handlers'

const index = () => {
  const { getJWT } = useGetToken()
  const [jwt, setJwt] = useState<string>()

  useEffect(() => {
    getJWT()
      .then(e => setJwt(e))
  }, [])

  return (
    <Box
      w={'980px'}
      mx={'auto'}
    >
      <Heading>JWT</Heading>
      <Textarea
        value={jwt ? jwt : ''}
        h={'480px'}
      />
    </Box>
  )
}

export default index