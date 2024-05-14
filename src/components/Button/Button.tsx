import React from 'react'

type ButtonProps = {
  label: string
  value?: string
  className?: string
  page?: string
  children?: React.ReactNode
}

export function Button({
  label,
  value,
  className,
  page,
  children,
}: ButtonProps) {
  return (
    <>
      {page ? (
        <a href={page}>
          <button
            type="submit"
            value={value}
            className={`p-2 mb-8 px-6 py-3 text-xl font-bold rounded-full bg-purple/75 text-light shadow-2xl hover:bg-purple transition ease-in duration-300
            ${className}`}
          >
            {label}
            {children}
          </button>
        </a>
      ) : (
        <button
          type="submit"
          value={value}
          className={`p-2 mb-8 px-6 py-3 text-xl font-bold rounded-full bg-purple/75 text-light shadow-2xl hover:bg-purple transition ease-in duration-300
            ${className}`}
        >
          {label}
          {children}
        </button>
      )}
    </>
  )
}
