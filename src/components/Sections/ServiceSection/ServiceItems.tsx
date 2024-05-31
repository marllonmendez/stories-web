import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'

type ServiceItemsProps = {
  label: string
  description: string
  image: any
}

export function ServiceItems({ label, description, image }: ServiceItemsProps) {
  const isLg = useMediaQuery({ query: '(max-width: 1023px)' })

  return (
    <motion.div
      whileHover={!isLg ? { scale: 1.1 } : undefined}
      whileTap={!isLg ? { scale: 0.9 } : undefined}
      className="rounded-2xl border border-solid border-light p-6 relative max-w-[700px] lg:max-w-[350px] lg:max-h-[350px]"
    >
      <article className="flex flex-col justify-between w-full h-full">
        <div className="flex justify-center items-center lg:hidden">
          <img src={image} alt={label} className="w-[400px] h-[200px]" />
        </div>
        <div className="flex flex-col pl-6 mt-2 gap-2 lg:pl-0 lg:mt-0">
          <h2 className="text-yellowDark text-2xl font-bold lg:text-xl">
            {label}
          </h2>
          <p className="text-light text-[1.125rem] lg:text-[0.625rem]">
            {description}
          </p>
        </div>
      </article>
    </motion.div>
  )
}
