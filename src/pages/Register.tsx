import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LockKeyhole, Mail, UserRound } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

import { SubContainer } from '@/components/Container'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'
import { Message } from '@/components/Message'

import { useAuth } from '@/auth/useAuth'
import { IUser, IEventForm } from '@/interfaces'

import SingIn from '@/assets/SingIn.svg'
import SingUp from '@/assets/SingUp.svg'

const Register = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const auth = useAuth()
  const [isLogin, setIsLogin] = useState(location.pathname === '/SignIn')
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const [error, setError] = useState<IUser>()
  const [passwordShown, setPasswordShown] = useState(false)
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    if (isLogin) {
      navigate('/SignIn', { replace: true })
    } else {
      navigate('/SignUp', { replace: true })
    }
  }, [isLogin, navigate])

  const handleLoginButtonClick = () => {
    setIsLogin(true)
  }

  const handleLogoutButtonClick = () => {
    setIsLogin(false)
  }

  const handleClose = () => {
    setSuccessMessage(false)
    handleLoginButtonClick()
  }

  const handleSignupCallback = useCallback(() => {
    onClear()
    setSuccessMessage(true)
  }, [setSuccessMessage])

  const handleSignInCallback = useCallback(() => {
    onClear()
    navigate('/Profile', { replace: true })
  }, [navigate])

  const onClear = useCallback(() => {
    setName('')
    setEmail('')
    setPassword('')
    setError({
      name: '',
      email: '',
      password: '',
    })
  }, [])

  const togglePassword = useCallback(() => {
    setPasswordShown((oldState) => !oldState)
  }, [setPasswordShown])

  useEffect(() => {
    if (name && error?.name) {
      setError((prevError) => ({ ...prevError, name: '' }))
    }
    if (email && error?.email) {
      setError((prevError) => ({ ...prevError, email: '' }))
    }
    if (password && error?.password) {
      setError((prevError) => ({ ...prevError, password: '' }))
    }
  }, [name, email, password])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const {
      name: InputName,
      email: InputEmail,
      password: InputPassword,
    } = e.target as typeof e.target & IEventForm

    if (!InputName.value) {
      setError({ name: 'O campo é obrigatório' })
      return
    } else if (!InputEmail.value) {
      setError({ email: 'O campo é obrigatório' })
      return
    } else if (!InputPassword.value) {
      setError({ password: 'O campo é obrigatório' })
      return
    }

    if (isLogin) {
      console.log('Fazendo login...')
      auth.signin(
        {
          email: InputEmail.value,
          password: InputPassword.value,
        },
        handleSignInCallback,
      )
      console.log('Usuário logado')
    } else {
      console.log('Registrando usuário...')
      await auth.signup(
        {
          name: InputName.value,
          email: InputEmail.value,
          password: InputPassword.value,
        },
        handleSignupCallback,
      )
      console.log('Usuário registrado')
    }
  }

  return (
    <SubContainer className="flex items-center justify-center custom-gradient">
      <div className="flex flex-grow items-center justify-center">
        <AnimatePresence>
          {successMessage && (
            <Message
              title="Tudo certo!"
              description="Usuário cadastrado com suceso."
              onClose={handleClose}
            />
          )}
        </AnimatePresence>
        <motion.div
          className={`flex flex-grow items-center justify-center text-center bg-dark/75 text-light w-1/2 min-h-[80svh] ${isLogin ? 'rounded-e-3xl' : 'rounded-s-3xl'}`}
          animate={{ opacity: 1, x: isLogin ? '100%' : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-5"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-yellowDark text-3xl md:text-3xl xs:text-xl font-medium">
              Boas vindas
            </h1>
            <p
              className="text-light/75 md:text-lg"
              dangerouslySetInnerHTML={{
                __html: isLogin
                  ? `É novo por aqui? <br /> Cadastre-se no nosso site clicando aqui!`
                  : `Já se registrou antes? <br /> Acesse nosso site clicando aqui!`,
              }}
            />
            <Button
              label={`${isLogin ? 'Sign up' : 'Sign in'}`}
              onClick={
                isLogin ? handleLogoutButtonClick : handleLoginButtonClick
              }
              className="w-full bg-purple/75 text-light border-none p-2 mb-8 px-6 py-3 hover:bg-purple transition ease-in duration-300"
            />
            <motion.img
              src={`${isLogin ? SingUp : SingIn}`}
              alt={`${isLogin ? 'Sign up' : 'Sign in'}`}
              className="w-[13rem] h-[14rem]"
              initial={{ opacity: 1 }}
              animate={{ y: [5, -5] }}
              transition={{
                y: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className={`flex flex-grow items-center justify-center text-center bg-darkSecondary/50 text-light w-1/2 min-h-[80svh] ${isLogin ? 'rounded-s-3xl' : 'rounded-e-3xl'}`}
          animate={{ opacity: 1, x: isLogin ? '-100%' : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col gap-5">
            <motion.h1
              className="text-light text-3xl md:text-3xl xs:text-xl font-medium"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {isLogin ? 'Fazer login' : 'Registre-se'}
            </motion.h1>
            <motion.form
              className="flex flex-col w-full h-full gap-5 lg:p-2 md:p-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onSubmit={handleSubmit}
            >
              {isLogin ? (
                <>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    updateValue={(value) => setEmail(value)}
                    placeHolder="E-mail do usuário"
                    icon={Mail}
                    errorMessage={error?.email}
                  />
                  <Input
                    type={passwordShown ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    updateValue={(value) => setPassword(value)}
                    placeHolder="Senha do usuário"
                    icon={LockKeyhole}
                    passwordState={{ passwordShown, togglePassword }}
                    errorMessage={error?.password}
                  />
                </>
              ) : (
                <>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    updateValue={(value) => setName(value)}
                    placeHolder="Nome do usuário"
                    icon={UserRound}
                    errorMessage={error?.name}
                  />
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    updateValue={(value) => setEmail(value)}
                    placeHolder="E-mail do usuário"
                    icon={Mail}
                    errorMessage={error?.email}
                  />
                  <Input
                    type={passwordShown ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={password}
                    updateValue={(value) => setPassword(value)}
                    placeHolder="Senha do usuário"
                    icon={LockKeyhole}
                    passwordState={{ passwordShown, togglePassword }}
                    errorMessage={error?.password}
                  />
                </>
              )}
              <div className="flex flex-col items-center justify-center text-center">
                <Button
                  label={`${isLogin ? 'Sing in' : 'Sing up'}`}
                  className="w-1/2 bg-purple/75 text-light border-none p-2 mb-8 px-6 py-3 hover:bg-purple transition ease-in duration-300"
                />
              </div>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </SubContainer>
  )
}

export default Register
