import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { Container, SubContainer } from '@/components/Container'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { PublicKey, ServiceID, TemplateID } from '@/utils/EmailJS'

import emailjs from '@emailjs/browser'

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
        alert('Mensagem enviado com sucesso!')
      },
      (err) => {
        console.log('ERRO: ', err)
      },
    )
  }

  return (
    <Container
      label="contact"
      className="flex items-center justify-center bg-dark text-light"
    >
      <SubContainer className="flex flex-col items-center justify-center text-center gap-5">
        <motion.h1
          className="text-light text-3xl xs:text-2xl font-medium"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Gostaria de atendimento? <br />
          Entre em contato
        </motion.h1>
        <motion.form
          className="flex flex-col gap-5"
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
          <Input
            type="text"
            placeHolder="Mensagem"
            maxLength={500}
            value={message}
            updateValue={(value) => setMessage(value)}
          />
          <div className="flex flex-col items-center justify-center text-center">
            <Button
              label="Enviar"
              className="w-1/2 bg-purple/75 text-light border-none p-2 mb-8 px-6 py-3 hover:bg-purple transition ease-in duration-300 lg:w-full"
            />
          </div>
        </motion.form>
      </SubContainer>
    </Container>
  )
}
