import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Mail, UserRound, UserRoundCog } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

import { SubContainer } from '@/components/Container'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Message } from '@/components/Message'
import { useAuth } from '@/auth/useAuth'

import Api from '@/service/Api'

const Profile = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const { signout } = useAuth()
  const isLg = useMediaQuery({ query: '(max-width: 1023px)' })
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isAdmin, setIsAdmin] = useState<boolean>()

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        if (location.pathname === `/EditUser/${id}`) {
          const res = await Api.EditUser({ id })
          const userData = res.data
          setName(userData.name)
          setEmail(userData.email)
          setIsAdmin(userData.isAdmin)
        }
        if (location.pathname === '/Profile') {
          const res = await Api.Profile()
          const userData = res.data
          setName(userData.name)
          setEmail(userData.email)
          setIsAdmin(userData.isAdmin)
        }
      } catch (error) {
        console.error('Falha ao obter o perfil:', error)
      }
    }
    fetchUserProfile()
  }, [id])

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
      if (location.pathname === `/EditUser/${id}`) {
        await Api.UpdatedUsers({ id, name, email })
        setSuccessMessage(true)
      }
      if (location.pathname === '/Profile') {
        await Api.ProfileUpdatedUser({ name, email })
        setSuccessMessage(true)
      }
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
            description="Dados do usuário salvos com sucesso."
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col justify-between gap-5 absolute top-20 lg:relative lg:top-0">
        {isAdmin || id ? (
          isLg ? (
            <Button
              page="/Admin"
              className="flex-row-reverse gap-2 absolute top-5 right-2 border-none bg-purpleDark/75 w-10 h-10 hover:bg-purpleDark transition ease-in duration-300"
            >
              <UserRoundCog />
            </Button>
          ) : (
            <Button
              label="Admin"
              page="/Admin"
              className="flex-row-reverse gap-2 absolute top-5 right-5 border-none bg-purpleDark/75 p-2 mb-8 px-6 py-3 hover:bg-purpleDark transition ease-in duration-300"
            >
              <UserRoundCog />
            </Button>
          )
        ) : null}
        <h1 className="font-medium text-5xl lg:text-3xl xs:left-2 sm:left-2">
          {id ? 'Editar Usuário' : 'Perfil do Usuário'}
        </h1>
        <div className="flex flex-row items-center justify-center text-center gap-5 lg:flex-col">
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
        <div className="flex flex-row justify-center items-center gap-5 xs:flex-col sm:flex-col lg:gap-2">
          <Button
            label="Cancelar"
            className="w-1/2 rounded-e rounded-l border-2 border-purple/75 bg-transparent text-light p-2 mb-8 px-6 py-3 hover:bg-purple border-purple transition ease-in duration-300 sm:w-[300px] xs:w-[300px] sm:mb-2 xs:mb-2"
            onClick={handleCancel}
          />
          <Button
            label="Salvar"
            className="w-1/2 rounded-e rounded-l border-none bg-purple/75 text-light p-2 mb-8 px-6 py-3 hover:bg-purple transition ease-in duration-300 sm:w-[300px] xs:w-[300px] sm:mb-2 xs:mb-2"
            onClick={handleSave}
          />
          {!id ? (
            <Button
              label="Sign out"
              className="w-1/2 rounded-e rounded-l border-none bg-yellowDark/75 p-2 mb-8 px-6 py-3 hover:bg-yellowDark transition ease-in duration-300 sm:w-[300px] xs:w-[300px] sm:mb-2 xs:mb-2"
              onClick={handleSignOut}
            />
          ) : null}
        </div>
      </div>
    </SubContainer>
  )
}

export default Profile
