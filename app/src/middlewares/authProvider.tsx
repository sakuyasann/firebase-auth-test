import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { authState } from '../globalState'

const authProvider = () => {
  const navigate = useNavigate()
  const setAuthState = useSetRecoilState(authState)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, user => {
      if (user === null) {
        navigate('/login', { replace: true })
        return
      }
      setAuthState(user)
      setLoading(false)
    })
  }, [])

  return (
    <>
      {!loading && <Outlet />}
    </>
  )
}

export default authProvider
