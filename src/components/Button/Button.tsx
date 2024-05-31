import React from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = {
  label?: string
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
            className={`flex items-center justify-center text-lg font-bold rounded-3xl shadow-2xl ${className}`}
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
          className={`flex items-center justify-center  text-lg font-bold rounded-3xl shadow-2xl ${className}`}
        >
          {label}
          {children}
        </button>
      )}
    </>
  )
}
