import React from 'react'
import { LucideIcon } from 'lucide-react'

type AboutItemsProps = {
  label: string
  icon: LucideIcon
}

export function AboutItems({ label, icon: Icon }: AboutItemsProps) {
  return (
    <div className="flex items-center justify-center mr-8 text-light font-medium lg:flex-row lg:mr-0 xs:text-left sm:text-left lg:w-full lg:h-full lg:justify-start lg:gap-1">
      <Icon size={30} className="text-light" />
      <p className="ml-2 uppercase lg:ml-0 lg:text-xl md:text-xl xs:text-sm">
        {label}
      </p>
    </div>
  )
}
