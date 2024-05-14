import React from 'react'
import { LucideIcon } from 'lucide-react'

type AboutItemsProps = {
  label: string
  icon: LucideIcon
}

export function AboutItems({ label, icon: Icon }: AboutItemsProps) {
  return (
    <div className="flex items-center justify-center mr-8 text-light font-medium">
      <Icon size={30} className="text-light" />
      <p className="ml-2 uppercase">{label}</p>
    </div>
  )
}
