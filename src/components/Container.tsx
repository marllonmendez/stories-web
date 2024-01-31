import { ReactNode } from 'react'

import '../app/globals.css'

type Props = {
  children: ReactNode
}

export function Container({ children }: Props) {
  return <div>{children}</div>
}
