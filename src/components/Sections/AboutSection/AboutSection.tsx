import React from 'react'

import { Container, SubContainer } from '@/components/Container'
import { Information } from '@/components/Information'

import TeamWork from '@/assets/teamWork.svg'

export function AboutSection() {
  return (
    <Container label="about">
      <SubContainer className="flex-col bg-dark gap-32">
        <div className="flex flex-row items-center w-full h-full">
          <div className="flex justify-center w-1/2">
            <img src={TeamWork} alt="Equipe" className="h-full w-[80%]" />
          </div>
          <div className="flex flex-col justify-between text-light w-1/2">
            <h1 className="font-bold text-8xl mb-6">Sobre nós</h1>
            <p className="text-lg mb-2">
              A Stories é uma startup inovadora com sede em Fortaleza, a capital
              do Ceará. Nossa missão vai além de criar lembranças. Nós

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
        <Information />
      </SubContainer>
    </Container>
  )
}
