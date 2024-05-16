import React from 'react'

type InputMessageProps = {
  placeHolder: string
  maxLength: number
  value?: string
  updateValue?(value: string): void
}

export function InputMessage({
  placeHolder,
  maxLength,
  value,
  updateValue,
}: InputMessageProps) {
  const handleKeyDown = (event: any): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  return (
    <textarea
      placeholder={placeHolder}
      value={value}
      maxLength={maxLength}
      onChange={(e) => updateValue && updateValue(e.target.value)}
      onKeyDown={handleKeyDown}
      className="resize-none w-[500px] h-[138px] bg-gray-600/20 rounded-lg placeholder:text-light text-light p-4 focus:outline-none focus:ring-2 ring-purple"
    />
  )
}
