import React, { useCallback, useRef, useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import { IInput } from '@/interfaces'

export const Input: React.FC<IInput> = ({
  placeHolder,
  id,
  name,
  type,
  value,
  updateValue,
  icon: Icon,
  errorMessage = undefined,
  passwordState = undefined,
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    if (event.key === 'Enter') {
      event.preventDefault()
    }
  }

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }, [])

  const handleToggle = () => {
    if (isFilled && !!passwordState?.togglePassword()) {
      passwordState.togglePassword()
    }
  }

  const getErrorMessage = (): string | undefined => {
    if (isFocused && !value) return 'O campo é obrigatório'
    if (isFocused && type === 'password' && value && value.length < 5)
      return 'Mínimo de 5 caracteres'
    return undefined
  }

  const setErrorMessage = getErrorMessage() || errorMessage

  return (
    <div className="flex flex-col">
      <div className="flex items-center h-full w-full relative">
        <span className="absolute inset-y-0 left-0 flex py-4 px-2 items-center focus:outline-none">
          {Icon && (
            <Icon
              size={20}
              className={`${isFocused ? 'text-purple' : 'text-light'}`}
            />
          )}
        </span>
        {inputRef ? (
          <input
            id={id}
            name={name}
            placeholder={placeHolder}
            type={type}
            value={value}
            onChange={(e) => updateValue && updateValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            autoComplete="off"
            ref={inputRef}
            className="w-[500px] h-14 bg-gray-600/20 placeholder:text-light text-light p-4 focus:outline-none focus:ring-2 ring-purple px-4 py-2 rounded-lg pl-10"
          />
        ) : (
          <input
            placeholder={placeHolder}
            type={type}
            value={value}
            onChange={(e) => updateValue && updateValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-[500px] h-14 bg-gray-600/20 placeholder:text-light text-light p-4 focus:outline-none focus:ring-2 ring-purple px-4 py-2 rounded-lg pl-10"
          />
        )}

        {passwordState?.togglePassword ? (
          <button
            type="button"
            onClick={handleToggle}
            className="absolute inset-y-0 right-0 p-1.5 flex items-center focus:outline-none"
          >
            {passwordState.passwordShown && isFilled ? (
              <EyeOff size={20} className="text-zinc-400" />
            ) : (
              <Eye size={20} className="text-zinc-400" />
            )}
          </button>
        ) : null}
      </div>
      {setErrorMessage && (
        <span className="flex w-full text-sm flex-wrap text-red-600 p-1">
          {setErrorMessage}
        </span>
      )}
    </div>
  )
}
