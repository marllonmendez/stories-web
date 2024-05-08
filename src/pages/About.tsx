import React from 'react'

import { Container, SubContainer } from '@/components/Container'
import { Information } from '@/components/Information'

import TeamWork from '@/assets/teamWork.png'

const About = () => {
  return (
    <Container
      label="about"
      className="flex flex-col items-center gap-20 justify-between"
    >
      <SubContainer className="bg-dark/20 gap-32">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={TeamWork}
            alt="Equipe"
            className="md:w-[500px] mb-8 md:mb-0 md:mr-8"
          />
          <div className="text-dark md:text-left">
            <h1 className="font-bold text-font-title text-2xl mb-4">
              Sobre nós
            </h1>
            <p className="text-font-description mb-4">
              A Stories é uma startup inovadora com sede em Fortaleza, a capital
              do Ceará. Nossa missão vai além de criar lembranças; nós
              transformamos momentos simples em experiências memoráveis para
              nossos clientes.
            </p>
            <p className="text-font-description mb-4">
              Em nossa busca constante pela originalidade e excelência, cada
              projeto é uma oportunidade única para elevar memórias já
              existentes a patamares inesquecíveis. Imagine uma foto digital
              simples tornando-se uma Polaroid cheia de autenticidade e
              significado.
            </p>
            <p className="text-font-description">
              Estamos comprometidos em construir relacionamentos sólidos com
              nossos clientes e parceiros, sempre superando expectativas.
              Junte-se a nós nessa jornada de transformar suas histórias
              cotidianas em narrativas verdadeiramente inesquecíveis.
            </p>
          </div>
        </div>
        <Information />
      </SubContainer>
    </Container>
  )
}

export default About
