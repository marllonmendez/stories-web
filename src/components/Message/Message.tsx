import React from 'react'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

import { Button, CloseButton } from '@/components/Button'

type MessageProps = {
  title: string
  description: string
  onClose: () => void
}

export function Message({ title, description, onClose }: MessageProps) {
  return (
    <div className="flex fixed mx-auto bg-darkSecondary/50 w-full h-full justify-center items-center z-[1000]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: 1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col relative items-center justify-center bg-light px-32 py-10 rounded-e rounded-l shadow"
      >
        <CloseButton onClick={onClose} />
        <div className="flex flex-col items-center justify-center my-2">
          <Check size={70} className="text-gray-500" />
          <h1 className="text-purple font-medium text-lg">{title}</h1>
          <p className="text-dark text-sm font-light">{description}</p>
        </div>
        <Button
          label="Fechar"
          className="w-[200px] rounded-e rounded-l mt-4 bg-purple/75 text-light border-none hover:bg-purple transition ease-in duration-300"
          onClick={onClose}
        />
      </motion.div>
    </div>
  )
}
