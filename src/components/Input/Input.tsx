import React from 'react'

type InputProps = {
  placeHolder: string
  type: string
  value?: string
  updateValue?(value: string): void
}

export function Input({ placeHolder, type, value, updateValue }: InputProps) {
  const handleKeyDown = (event: any): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <>
      <input
        placeholder={placeHolder}
        type={type}
        value={value}
        onChange={(e) => updateValue && updateValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-[500px] h-14 bg-gray-600/20 placeholder:text-light text-light p-4 focus:outline-none focus:ring-2 ring-purple px-4 py-2 rounded-lg"
      />
    </>
  )
}
