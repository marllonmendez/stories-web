import React from 'react'
import { ChevronsDown } from 'lucide-react'
import { motion } from 'framer-motion'

import { Container, SubContainer } from '@/components/Container'
import { Header } from '@/components/Header/Header'

import Photo from '@/assets/Photo.svg'
import { Button } from '@/components/Button'

export function HomeSection() {
  return (
    <Container label="home" className="custom-gradient text-light">
      <Header />
      <SubContainer className="flex-col items-center justify-center">
        <div className="flex flex-col items-center w-full md:flex-row md:text-left mt-[-80px]">
          <div className="md:pr-8 md:mb-0 w-1/2">
            <h1 className="text-4xl font-bold text-yellowDark">
              Um mundo de memórias à sua espera
            </h1>
            <p className="text-xl text-light font-extralight my-4">
              Na vida eu sou a nostalgia que perdura, a essência de momento, a
              memória de uma recordação entre as estrelas.
            </p>
            <Button
              label="Sign up"
              page="/SignUp"
              className="w-1/2 bg-purple/75 text-light border-none hover:bg-purple transition ease-in duration-300"
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
