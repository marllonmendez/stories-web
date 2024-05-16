import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { SubContainer } from '@/components/Container'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

import Login from '@/assets/Login.svg'
import SingUp from '@/assets/SingUp.svg'

const Register = () => {
  const [isLogin, setIsLogin] = useState(false)

  const handleLoginButtonClick = () => {
    setIsLogin(true)
  }

  const handleLogoutButtonClick = () => {
    setIsLogin(false)
  }

  return (
    <SubContainer className="flex items-center justify-center custom-gradient">
      <div className="flex flex-grow items-center justify-center">
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
              label={`${isLogin ? 'Sing Up' : 'Login'}`}
              click={isLogin ? handleLogoutButtonClick : handleLoginButtonClick}
              className="w-full"
            />
            <motion.img
              src={`${isLogin ? SingUp : Login}`}
              alt="Login"
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
            >
              <Input type="text" placeHolder="Nome" />
              <Input type="email" placeHolder="E-mail" />
              <Input type="text" placeHolder="Senha" />
              <div className="flex flex-col items-center justify-center text-center">
                <Button
                  label={`${isLogin ? 'Login' : 'Sing Up'}`}
                  className="w-1/2"
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
