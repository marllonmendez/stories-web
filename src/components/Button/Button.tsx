import React from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  label: string
  value?: string
  className?: string
  page?: string
  onClick?: any
  children?: React.ReactNode
}

export function Button({
  label,
  value,
  className,
  page,
  onClick,
  children,
}: ButtonProps) {
  return (
    <>
      {page ? (
        <Link to={page}>
          <button
            type="submit"
            value={value}
            onClick={onClick}
            className={`p-2 mb-8 px-6 py-3 text-xl font-bold border-none rounded-3xl bg-purple/75 text-light shadow-2xl hover:bg-purple transition ease-in duration-300
            ${className}`}
          >
            {label}
            {children}
          </button>
        </Link>
      ) : (
        <button
          type="submit"
          value={value}
          onClick={onClick}
          className={`p-2 mb-8 px-6 py-3 text-xl font-bold rounded-3xl shadow-2xl ${className}`}
        >
          {label}
          {children}
        </button>
      )}
    </>
  )
}
