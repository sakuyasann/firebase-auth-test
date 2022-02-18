import { getAuth } from 'firebase/auth';
import React from 'react'

export const useGetToken = () => {
  const getJWT = async () => {
    const auth = getAuth();
    const token = auth.currentUser?.getIdToken()
      .then(e => e)

    return token
  }

  return { getJWT }
}