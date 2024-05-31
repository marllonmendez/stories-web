import React from 'react'

type SubContainerProps = {
  className?: string
  children: React.ReactNode
}

export function SubContainer({ className, children }: SubContainerProps) {
  return (
    <section
      className={`flex w-full h-full min-h-screen px-28 lg:py-8 xl:py-8 md:py-8 sm:py-8 xs:py-8 lg:px-8 xl:px-8 md:px-8 sm:px-8 xs:px-8 ${className}`}
    >
      {children}
    </section>
  )
}
