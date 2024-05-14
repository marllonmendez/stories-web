import React from 'react'

type ButtonProps = {
  label: string
  className: string
  page?: string
}

export function Button({ label, className, page }: ButtonProps) {
  return (
    <a href={page}>
      <button className={className}>{label}</button>
    </a>
  )
}
