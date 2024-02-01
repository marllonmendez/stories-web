import { Element } from 'react-scroll'
import { Building, Flag, Rocket, UsersRound } from 'lucide-react'

import TeamWork from '@/assets/team-work.svg'

function About() {
  return (
    <Element name="about">
      <section className="flex flex-col items-center justify-center w-full h-screen bg-white text-primary-gray lg:px-36 gap-10">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={TeamWork}
            alt="Equipe"
            className="md:w-[500px] mb-8 md:mb-0 md:mr-8"
          />
          <div className="md:text-left">
            <h1 className="font-bold text-font-title text-2xl mb-4">Sobre nós</h1>
            <p className="text-font-description text-primary-gray mb-4">
              A Stories é uma startup inovadora com sede em Fortaleza, a capital do Ceará. Nossa missão vai além de
              criar
              lembranças; nós transformamos momentos simples em experiências memoráveis para nossos clientes.
            </p>
            <p className="text-font-description text-primary-gray mb-4">
              Em nossa busca constante pela originalidade e excelência, cada projeto é uma oportunidade única para
              elevar
              memórias já existentes a patamares inesquecíveis. Imagine uma foto digital simples tornando-se uma
              Polaroid
              cheia de autenticidade e significado.
            </p>
            <p className="text-font-description text-primary-gray">
              Estamos comprometidos em construir relacionamentos sólidos com nossos clientes e parceiros, sempre
              superando
              expectativas. Junte-se a nós nessa jornada de transformar suas histórias cotidianas em narrativas
              verdadeiramente inesquecíveis.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center text-primary-gray text-font-topics mt-20">
          <div className="flex items-center mr-8">
            <UsersRound />
            <p className="ml-2">+100.000 Usuários</p>
          </div>
          <div className="flex items-center mr-8">
            <Building />
            <p className="ml-2">Localizada no Nordeste</p>
          </div>
          <div className="flex items-center mr-8">
            <Flag />
            <p className="ml-2">Atuamos Brasil</p>
          </div>
          <div className="flex items-center">
            <Rocket />
            <p className="ml-2">Inovação constante</p>
          </div>
        </div>
      </section>
    </Element>
  )
}

export default About
