import React from 'react'
import { getAuth, signInAnonymously } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const useAnonymousLogin = () => {
  const auth = getAuth();
  const navigate = useNavigate()

  const onAnonymous = () => {
    signInAnonymously(auth)
      .then(() => {
        navigate('/', { replace: true })
      })
  }

  return { onAnonymous }
}