import React from 'react'

import { Container, SubContainer } from '@/components/Container'
import { ServiceItems } from '@/components/Sections/ServiceSection/ServiceItems'

import Personalization from '@/assets/Personalization.svg'
import Excellence from '@/assets/Excellence.svg'
import Moments from '@/assets/Moments.svg'

export function ServiceSection() {
  return (
    <Container label="service" className="bg-dark">
      <SubContainer className="flex-col justify-center gap-5">
        <div className="items-center">
          <h1 className="flex items-start text-4xl font-bold text-yellowDark lg:text-3xl">
            Simples e fácil de usar
          </h1>
          <p className="text-light text-lg my-2 lg:text-sm">
            Centenas de operações são realzidas para tudo que você precisa de
            forma intuitiva,{' '}
            <b className="text-purple">tanto desktop quanto no mobile.</b>
          </p>
        </div>
        <div className="flex flex-row items-center w-full h-full gap-10 lg:flex-col xl:flex-col">
          <ServiceItems
            label="Personalização"
            description="Histórias diárias transformadas em memórias autênticas e inesquecíveis."
            image={Personalization}
          />
          <ServiceItems
            label="Excelência"
            description="Inovação constante, resultados excepcionais, laços sólidos e confiança."
            image={Excellence}
          />
          <ServiceItems
            label="Memorabilidade"
            description="Histórias diárias transformadas em memórias autênticas e inesquecíveis."
            image={Moments}
          />
        </div>
      </SubContainer>
    </Container>
  )
}
