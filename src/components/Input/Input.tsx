import React from 'react'

type InputProps = {
  label: string
  placeHolder: string
}

export function Input({ label, placeHolder }: InputProps) {
  return (
    <div>
      <p className="font-bold text-light text-lg">{label}</p>
      <input
        placeholder={placeHolder}
        className="w-full h-14 bg-gray-600/20 rounded-lg placeholder:text-light text-light p-4 focus:outline-none focus:ring-2 ring-purple"
      />
    </div>
  )
}
