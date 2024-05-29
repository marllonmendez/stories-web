import { LucideIcon } from 'lucide-react'

export interface IUser {
  id?: string
  name?: string
  email?: string
  isAdmin?: boolean
  password?: string
}

export interface IPassword {
  passwordShown: boolean
  togglePassword: () => void
}

export interface IAuth {
  user?: IUser
  signin: (user: IUser, callback: VoidFunction) => void
  signup: (user: IUser, callback: VoidFunction) => any
  signout: (callback: VoidFunction) => void
}

export interface IInput {
  placeHolder: string
  name?: string
  id?: string
  type: string
  value?: string
  updateValue?(value: string): void
  icon?: LucideIcon
  errorMessage?: string
  maxLength?: number
  passwordState?: IPassword
}

export interface IEventForm {
  name: { value: string }
  email: { value: string }
  password: { value: string }
}
