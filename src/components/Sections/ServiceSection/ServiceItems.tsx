import React from 'react'
import { motion } from 'framer-motion'

type ServiceItemsProps = {
  label: string
  description: string
  image: any
}

export function ServiceItems({ label, description, image }: ServiceItemsProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-2xl border border-solid border-light p-6 relative max-w-[700px]">
      <article className="flex flex-col justify-between sw-full h-full">
        <div className="flex justify-center items-center">
          <img src={image} alt={label} className="w-[400px] h-[200px]" />
        </div>
        <div className="flex flex-col pl-6 mt-2 gap-2">
          <h2 className="text-yellowDark text-2xl font-bold">{label}</h2>
          <p className="text-light text-[1.125rem]">{description}</p>
        </div>
      </article>
    </motion.div>
  )
}
