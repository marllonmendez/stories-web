import React from 'react'
import { ChevronsDown } from 'lucide-react'
import { motion } from 'framer-motion'

import { Container, SubContainer } from '@/components/Container'
import { Header } from '@/components/Header/Header'
import { Button } from '@/components/Button/Button'

import Photo from '@/assets/photo.png'

export function HomeSection() {
  return (
    <Container label="home" className="custom-gradient text-light">
      <Header />
      <SubContainer className="flex-col">
        <div className="flex flex-col items-center w-full md:flex-row md:text-left mt-[-80px]">
          <div className="md:pr-8 md:mb-0 w-1/2">
            <h1 className="text-4xl font-bold text-yellowDark mb-4">
              Um mundo de memórias à sua espera
            </h1>
            <p className="text-xl font-extralight mb-8">
              Na vida eu sou a nostalgia que perdura, a essência de momento, a
              memória de uma recordação entre as estrelas.
            </p>
            <Button
              label="Sing Up"
              page="/singUp"
              className="p-2 mb-8 px-6 py-3 w-1/2 text-xl font-bold rounded-full bg-purple/75 text-light shadow-2xl hover:bg-purple transition ease-in duration-300"
            />
          </div>
          <motion.div
            className="flex justify-center w-1/2"
            initial={{ opacity: 1 }}
            animate={{ y: [5, -5] }}
            transition={{
              y: {
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              },
            }}
          >
            <img
              src={Photo}
              alt="Polaroid ServiceSection"
              className="h-full w-full"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-between">
          <p className="mb-2 text-sm">Deslize para navegar</p>
          <ChevronsDown className="animate-bounce" />
        </div>
      </SubContainer>
    </Container>
  )
}
