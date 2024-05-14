import React from 'react'

type SubContainerProps = {
  className?: string
  children: React.ReactNode
}

export function SubContainer({ className, children }: SubContainerProps) {
  return (
    <section
      className={`flex w-full h-full min-h-screen lg:px-32 md:px-16 ${className}`}
    >
      {children}
    </section>
  )
}
