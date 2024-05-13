import React from 'react'

import { Container, SubContainer } from '@/components/Container'
import { Input } from '@/components/Input'

type ContactProps = {
  onSubmit: () => void
}
export function Contact({ onSubmit }: ContactProps) {
  return (
    <Container label="Contact" className="custom-gradient">
      <SubContainer>
        <div className=" space-y-4 max-w-md w-full mx-auto p-10 bg-purpleMedium rounded-md focus:border-light shadow-md">
          <form className="flex flex-col gap-5" onSubmit={onSubmit}>
            <h2 className="text-font-title-hero text-purpleDark font-bold text-center mb-4">
              Entre em contato conosco
            </h2>
            <Input label="Nome" placeHolder="Seu nome" />
            <Input label="E-mail" placeHolder="Seu e-mail" />
            <Input label="Mensagem" placeHolder="Sua mensagem" />
            <button
              type="submit"
              className="bg-purpleDark mb-9 text-light font-title w-full px-4 py-2 rounded-md hover:bg-purple transition duration-500 ease-in-out">Enviar</button>
          </form>
        </div>
      </SubContainer>
    </Container>
  )
}
export default Contact
