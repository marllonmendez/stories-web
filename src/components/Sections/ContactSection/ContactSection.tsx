import React, { useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { Container, SubContainer } from '@/components/Container'
import { Input, InputMessage } from '@/components/Input'
import { Button } from '@/components/Button'

import { PublicKey, ServiceID, TemplateID } from '@/utils/EmailJS'

export function ContactSection() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendEmail(e: any) {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert('Preencha todos os campos')
      return
    }

    const templateParams = {
      from_name: name,
      message,
      email,
    }

    emailjs.send(ServiceID, TemplateID, templateParams, PublicKey).then(
      (response) => {
        console.log('EMAIL ENVIADO', response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      },
      (err) => {
        console.log('ERRO: ', err)
      },
    )
  }

  return (
    <Container
      label="contact"
      className="flex items-center justify-center h-full w-full bg-dark text-light"
    >
      <SubContainer className="flex flex-col items-center justify-center text-center gap-5">
        <motion.h1
          className="text-light text-3xl md:text-3xl xs:text-xl font-medium"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Gostaria de atendimento? <br />
          Entre em contato
        </motion.h1>
        <motion.form
          className="flex flex-col w-full h-full gap-5 lg:p-2 md:p-2"
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Input
            type="text"
            placeHolder="Nome"
            value={name}
            updateValue={(value) => setName(value)}
          />
          <Input
            type="email"
            placeHolder="E-mail"
            value={email}
            updateValue={(value) => setEmail(value)}
          />
          <InputMessage
            placeHolder="Mensagem"
            maxLength={500}
            value={message}
            updateValue={(value) => setMessage(value)}
          />
          <div className="flex flex-col items-center justify-center text-center">
            <Button
              label="Enviar"
              className="w-1/2 bg-purple/75 text-light border-none hover:bg-purple transition ease-in duration-300"
            />
          </div>
        </motion.form>
      </SubContainer>
    </Container>
  )
}
