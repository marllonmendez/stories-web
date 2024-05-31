import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

import { getToken } from '@/utils/auth'

import { AuthContext } from './authContext'

const fakeAuthProvider = {
  isAuthenticated: false,
  signin(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true
    setTimeout(callback, 100)
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false
    setTimeout(callback, 100)
  },
}

function useAuth() {
  return React.useContext(AuthContext)
}

function RequireAuth({ children }: { children: React.ReactNode }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user && !getToken()) {
    return <Navigate to="/SignIn" state={{ from: location }} replace />
  }

  return children
}

export { useAuth, RequireAuth, fakeAuthProvider }
