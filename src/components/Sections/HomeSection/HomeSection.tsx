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
        <div className="flex flex-row items-center justify-center mt-[-10%] lg:mt-[-20%] lg:flex-col-reverse">
          <div className="w-1/2 lg:w-full">
            <h1 className="flex w-full h-full text-4xl font-bold text-yellowDark lg:text-2xl ">
              Um mundo de memórias{' '}
              <br className="hidden xl:hidden lg:flex xs:flex sm:flex" />à sua
              espera!
            </h1>
            <p className="text-xl text-light font-extralight my-4 lg:text-sm">
              Na vida eu sou a nostalgia que perdura, a essência de momento, a
              memória de uma recordação entre as estrelas.
            </p>
            <Button
              label="Sign up"
              page="/SignUp"
              className="w-1/2 bg-purple/75 text-light border-none p-2 mb-8 px-6 py-3 hover:bg-purple transition ease-in duration-300 lg:w-full"
            />
          </div>
          <motion.div
            className="flex flex-col items-center justify-center w-1/2 lg:w-full"
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
              alt="Polaroid"
              className="h-full w-full lg:w-72 lg:h-72"
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
