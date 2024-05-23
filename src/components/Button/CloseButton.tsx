import React from 'react'
import { Popover, PopoverButton } from '@headlessui/react'
import { XIcon } from 'lucide-react'

interface CloseButtonProps {
  onClick: () => void
}

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <Popover>
      <PopoverButton
        className="top-5 right-5 absolute text-darkSecondary/75 border-none hover:text-purple"
        title="Fechar"
        onClick={onClick}
      >
        <XIcon className="w-4 h-4" />
      </PopoverButton>
    </Popover>
  )
}
