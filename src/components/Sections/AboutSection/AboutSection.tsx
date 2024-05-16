import React, { useEffect, useState } from 'react'
import { Building, Flag, Rocket, UsersRound } from 'lucide-react'
import { motion } from 'framer-motion'

import { Container, SubContainer } from '@/components/Container'
import { AboutItems } from '@/components/Sections/AboutSection/AboutItems'

import TeamWork from '@/assets/teamWork.svg'

export function AboutSection() {
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
    <Container label="about">
      <SubContainer className="flex-col items-center justify-center bg-dark">
        <div className="flex flex-col gap-10 py-10">
          <div className="flex flex-row items-center w-full h-full">
            <div className="flex justify-center w-1/2">
              <img src={TeamWork} alt="Equipe" className="h-full w-[80%]" />
            </div>
            <div className="flex flex-col justify-between text-light w-1/2">
              <h1 className="font-bold text-8xl mb-6">Sobre nós</h1>
              <p className="text-lg mb-2">
                A Stories é uma startup inovadora com sede em Fortaleza, a
                capital do Ceará. Nossa missão vai além de criar lembranças. Nós
                transformamos momentos simples em experiências memoráveis para
                nossos clientes.
              </p>
              <p className="text-lg mb-2">
                Em nossa busca constante pela originalidade e excelência, cada
                projeto é uma oportunidade única para elevar memórias já
                existentes a patamares inesquecíveis. Imagine uma foto digital
                simples tornando-se uma Polaroid cheia de autenticidade e
                significado.
              </p>
              <p className="text-lg">
                Estamos comprometidos em construir relacionamentos sólidos com
                nossos clientes e parceiros, sempre superando expectativas.
                Junte-se a nós nessa jornada de transformar suas histórias
                cotidianas em narrativas verdadeiramente inesquecíveis.
              </p>
            </div>
          </div>
          <motion.div
            className="flex flex-row w-full items-center justify-center bg-center h-[100px] bg-purpleDark/75 rounded-full text-light text-font-topics"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={
              isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
            }
            transition={{
              duration: 1,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <AboutItems icon={UsersRound} label="+100.000 Clientes" />
            <AboutItems icon={Building} label="Localizada no Nordeste" />
            <AboutItems icon={Flag} label="Operamos em todo o Brasil" />
            <AboutItems icon={Rocket} label="Inovação constante" />
          </motion.div>
        </div>
      </SubContainer>
    </Container>
  )
}
