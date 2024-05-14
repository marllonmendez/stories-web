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
      className="bg-dark text-light flex items-center justify-center h-full w-full"
    >
      <SubContainer className="flex flex-col items-center justify-center text-center max-w-[700px] gap-5">
        <motion.form
          className="w-full flex flex-col gap-5 lg:p-2 md:p-2"
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
        >
          <motion.h3
            className="text-3xl md:text-3xl xs:text-xl font-medium"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Gostaria de atendimento? <br />
            Entre em contato
          </motion.h3>
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
          <Button label="Enviar" className="w-full"/>
        </motion.form>
      </SubContainer>
    </Container>
  )
}
