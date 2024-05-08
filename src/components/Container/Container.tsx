import React from 'react'
import { Element } from 'react-scroll'

type ContainerProps = {
  label: string
  className?: string
  children: React.ReactNode
}

export function Container({ label, className, children }: ContainerProps) {
  return (
    <Element id={label} name={label} className={`min-h-screen ${className}`}>
      {children}
    </Element>
  )
}
