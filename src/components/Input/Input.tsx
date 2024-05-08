import React from 'react'

type InputProps = {
  label: string
  placeHolder: string
}

export function Input({ label, placeHolder }: InputProps) {
  return (
    <div>
      <p className="text-dark font-bold">{label}</p>
      <input
        placeholder={placeHolder}
        className="rounded-md text-dark font-light h-9"
      />
    </div>
  )
}
