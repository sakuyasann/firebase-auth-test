import { Button, Stack } from '@chakra-ui/react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAnonymousLogin } from '../../handlers'

const index = () => {
  const { onAnonymous } = useAnonymousLogin()
  const navigate = useNavigate()

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user !== null) {
        navigate('/', { replace: true })
        return
      }
    })
  }, [])
  
  return (
    <Stack>
      <Button onClick={onAnonymous}>匿名認証</Button>
    </Stack>
  )
}

export default index