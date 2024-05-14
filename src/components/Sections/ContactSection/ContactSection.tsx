import React from 'react'

import { Container, SubContainer } from '@/components/Container'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { InputMessage } from '@/components/Input/InputMessage'

export function ContactSection() {
  return (
    <Container label="contact" className="bg-dark">
      <SubContainer>
        <div className="max-w-md w-full mx-auto p-10 bg-purpleMedium rounded-md focus:border-light shadow-md">
          <form className="flex flex-col gap-2">
            <h2 className="text-3xl text-yellowDark font-bold text-center mb-4">
              Entre em contato conosco
            </h2>
            <Input label="Nome" placeHolder="usuário" />
            <Input label="E-mail" placeHolder="usuario@email.com" />
            <InputMessage label="Mensagem" placeHolder="Mensagem do usuário" />
            <Button
              label="Enviar"
              className="bg-purple/75 mb-9 text-light font-medium w-full px-4 py-2 rounded-md hover:bg-purple transition ease-in duration-300"
            />
          </form>
        </div>
      </SubContainer>
    </Container>
  )
}
