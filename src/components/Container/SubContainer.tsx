import React from 'react'

type SubContainerProps = {
  className?: string
  children: React.ReactNode
}

export function SubContainer({ className, children }: SubContainerProps) {
  return (
    <section
      className={`flex items-center justify-center w-full h-full bg-center min-h-screen lg:px-32 md:px-16 ${className}`}
    >
      {children}
    </section>
  )
}
