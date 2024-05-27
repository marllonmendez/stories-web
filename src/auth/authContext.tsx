import React from 'react'
import axios from 'axios'

import { IAuth, IUser } from '@/interfaces'

import { fakeAuthProvider } from '@/auth/useAuth'
import { clearToken, setToken } from '@/utils/auth'

import Api from '@/service/Api'

const AuthContext = React.createContext<IAuth>(null!)

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<IUser | undefined>(undefined!)

  const signin = async (newUser: IUser, callback: VoidFunction) => {
    try {
      const res = await Api.SignIn(newUser)
      const { possibleUser: user, token } = res.data
      setUser(user)
      setToken(token)
      return callback()
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response?.data
      }
      return error
    }
  }

  const signup = async (newUser: IUser, callback: VoidFunction) => {
    try {
      await Api.SignUp(newUser)
      return callback()
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response?.data
      }
      return error
    }
  }

  const signout = (callback: VoidFunction) => {
    return fakeAuthProvider.signout(() => {
      setUser(undefined!)
      clearToken()
      callback()
    })
  }

  const value = { user, signin, signout, signup }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
