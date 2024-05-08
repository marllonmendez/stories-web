import React from 'react'
import { ChevronsDown } from 'lucide-react'
import { motion } from 'framer-motion'

import { Container } from '@/components/Container/Container'
import { Header } from '@/components/Header/Header'
import { Button } from '@/components/Button/Button'

import Photo from '@/assets/photo.png'
import { SubContainer } from '@/components/Container/SubContainer'

const Home = () => {
  return (
    <>
      <Container label="home" className="custom-gradient text-light">
        <Header />
        <SubContainer>
          <div className="flex flex-col items-center w-full md:flex-row md:text-left mt-[-80px]">
            <div className="md:pr-8 md:mb-0 w-1/2">
              <h1 className="text-font-title-hero font-bold text-purple mb-4">
                Um mundo de memórias à sua espera.
              </h1>
              <p className="text-font-description-hero font-extralight mb-8">
                Na vida eu sou a nostalgia que perdura, a essência de umchatgpt.com
                momento, a memória de uma recordação entre as estrelas.
              </p>
              <Button
                name="Sing up"
                style="p-2 mb-8 px-6 py-3 w-[50%] text-xl font-bold rounded-full
              border-2 border-purple bg-purple text-white shadow-2xl
              text-black hover:bg-purple hover:border-purple
              transition ease-in delay-150 duration-300"
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
                alt="Polaroid Service"
                className="h-full w-full"
              />
            </motion.div>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-2 text-sm">Deslize para navegar</p>
            <ChevronsDown className="animate-bounce" />
          </div>
        </SubContainer>
      </Container>
    </>
  )
}

export default Home
