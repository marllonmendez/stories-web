import React, { useEffect, useState } from 'react'
import { Building, Flag, Rocket, UsersRound } from 'lucide-react'

import { motion } from 'framer-motion'
import { Items } from '@/components/Information/Items'

export function Information() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('about')
      if (element) {
        const rect = element.getBoundingClientRect()
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight
        const visible = rect.top <= windowHeight && rect.bottom >= 0
        setIsVisible(visible)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
  }, [])

  return (
    <motion.div
      className="flex flex-row w-full items-center justify-center bg-center h-[100px] bg-purpleDark/75 rounded-full text-light text-font-topics"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{
        delay: 0.2,
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Items icon={UsersRound} label="+100.000 Clientes" />
      <Items icon={Building} label="Localizada no Nordeste" />
      <Items icon={Flag} label="Operamos em todo o Brasil" />
      <Items icon={Rocket} label="Inovação constante" />
    </motion.div>
  )
}
