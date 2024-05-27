import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, UserRound } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

import { SubContainer } from '@/components/Container'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Message } from '@/components/Message'
import { useAuth } from '@/auth/useAuth'

import Api from '@/service/Api'

const Profile = () => {
  const navigate = useNavigate()
  const { signout } = useAuth()
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await Api.Profile()
        const user = response.data
        setName(user.name)
        setEmail(user.email)
      } catch (error) {
        console.error('Falha ao obter o perfil:', error)
      }
    }

    fetchUserProfile()
  }, [])

  const handleSignOut = () => {
    signout(() => {
      navigate('/SignIn', { replace: true })
    })
  }

  const handleCancel = () => {
    window.location.reload()
  }

  const handleClose = () => {
    setSuccessMessage(false)
  }

  const handleSave = async () => {
    try {
      await Api.updateProfile({ name, email })
      setSuccessMessage(true)
    } catch (error) {
      console.error('Falha ao atualizar o perfil:', error)
    }
  }

  return (
    <SubContainer className="flex flex-col items-center justify-center bg-dark text-light">
      <AnimatePresence>
        {successMessage && (
          <Message
            title="Tudo certo!"
            description="Dados do usuário salvos com suceso."
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col justify-between gap-5 absolute top-20">
        <h1 className="font-medium text-5xl">Perfil do Usuário</h1>
        <div className="flex flex-row items-center justify-center text-center gap-5">
          <Input
            type="text"
            id="name"
            name="name"
            value={name}
            updateValue={(value) => setName(value)}
            placeHolder="Nome do usuário"
            icon={UserRound}
          />
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            updateValue={(value) => setEmail(value)}
            placeHolder="E-mail do usuário"
            icon={Mail}
          />
        </div>
        <div className="flex flex-row justify-center items-center gap-5">
          <Button
            label="Cancelar"
            className="w-1/2 rounded-e rounded-l border-2 border-purple/75 bg-transparent text-light hover:bg-purple border-purple transition ease-in duration-300"
            onClick={handleCancel}
          />
          <Button
            label="Salvar"
            className="w-1/2 rounded-e rounded-l border-none bg-purple/75 text-light hover:bg-purple transition ease-in duration-300"
            onClick={handleSave}
          />
          <Button
            label="Sign out"
            className="w-1/2 rounded-e rounded-l border-none bg-yellowDark/75 hover:bg-yellowDark transition ease-in duration-300"
            onClick={handleSignOut}
          />
        </div>
      </div>
    </SubContainer>
  )
}

export default Profile
