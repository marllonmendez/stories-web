import { LucideIcon } from 'lucide-react'
import { IPassword } from '@/interface/IPassword'

export interface IInput {
  placeHolder: string
  type: string
  value?: string
  updateValue?(value: string): void
  icon?: LucideIcon
  errorMessage?: string
  passwordState?: IPassword
}
