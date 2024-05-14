import React from 'react'

type InputMessageProps = {
  label: string
  placeHolder: string
}

export function InputMessage({ label, placeHolder }: InputMessageProps) {
  return (
    <div>
      <p className="font-bold text-light text-lg">{label}</p>
      <textarea
        placeholder={placeHolder}
        className="resize-none w-full h-[138px] bg-gray-600/20 rounded-lg placeholder:text-light text-light p-4 focus:outline-none focus:ring-2 ring-purple"
      />
    </div>
  )
}
