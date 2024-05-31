import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Pencil, UserRoundX, ArrowLeft, RotateCw } from 'lucide-react'
import { AnimatePresence } from 'framer-motion'

import { SubContainer } from '@/components/Container'
import { Message } from '@/components/Message'
import { Button } from '@/components/Button'
import { IUser } from '@/interfaces'

import Api from '@/service/Api'

const Admin = () => {
  const navigate = useNavigate()
  const isLg = useMediaQuery({ query: '(max-width: 1023px)' })
  const [users, setUsers] = useState([])
  const [successMessage, setSuccessMessage] = useState<boolean>(false)
  const [startIndex, setStartIndex] = useState(0)

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const getUsers = await Api.GetUsers()
        setUsers(getUsers.data)
      } catch (error) {
        console.error('Erro ao obter os usuários:', error)
      }
    }
    fetchUsers()
  }, [])

  const handleEdit = (user: IUser) => {
    navigate(`/EditUser/${user.id}`, { state: { user } })
  }

  const handleDelete = async (userToDelete: IUser) => {
    try {
      await Api.DeleteUser({ id: userToDelete.id })
      setUsers(users.filter((user: any) => user.id !== userToDelete.id))
      setSuccessMessage(true)
    } catch (error) {
      console.error('Erro ao deletar usuário: ', error)
    }
  }

  const handleProfilePage = () => {
    navigate('/Profile', { replace: true })
  }

  const handleNext = () => {
    if (startIndex + 5 < users.length) {
      setStartIndex(startIndex + 5)
    }
  }

  const handlePrev = () => {
    if (startIndex - 5 >= 0) {
      setStartIndex(startIndex - 5)
    }
  }

  const handleClose = () => {
    setSuccessMessage(false)
  }

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <SubContainer className="flex-col items-center justify-center bg-dark text-light">
      <AnimatePresence>
        {successMessage && (
          <Message
            title="Tudo certo!"
            description="Usuário deletado com sucesso."
            onClose={handleClose}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-col gap-5 absolute top-10 p-6 w-full max-w-4xl bg-darkSecondary rounded-[12px]">
        <div className="flex flex-row items-center justify-between gap-5">
          <h1 className="text-4xl text-left font-semibold">Admin Dashboard</h1>
          <Button
            label="Recarregar"
            onClick={handleReload}
            className="flex-row-reverse gap-2 absolute top-5 right-[160px] border-none bg-purpleDark/75 p-2 mb-8 px-6 py-3 hover:bg-purpleDark transition ease-in duration-300"
          >
            <RotateCw />
          </Button>
          <Button
            label="Perfil"
            onClick={handleProfilePage}
            className="flex-row-reverse gap-2 absolute top-5 right-5 border-none bg-purpleDark/75 p-2 mb-8 px-6 py-3 hover:bg-purpleDark transition ease-in duration-300"
          >
            <ArrowLeft />
          </Button>
        </div>
        <table className="min-w-full border-none rounded-[12px] bg-purpleDark/50">
          <thead className="min-w-full border-none border rounded-[12px] bg-purpleDark/50">
            <tr className="bg-purpleDark/75 text-xl text-light text-left font-medium">
              <th className="py-3 px-4">Nome</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Opções</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(startIndex, startIndex + 5).map((user: any) => (
              <tr key={user.id} className="whitespace-nowrap">
                <td className="py-3 px-4">{user.name}</td>
                <td className="py-3 px-4">{user.email}</td>
                <td className="flex flex-row items-center text-left gap-2 py-3 px-2">
                  <Button
                    onClick={() => handleEdit({ id: user.id })}
                    className="w-10 h-10 rounded-full bg-yellowDark/75 hover:bg-yellowDark/85"
                  >
                    <Pencil />
                  </Button>
                  <Button
                    onClick={() => handleDelete(user)}
                    className="w-10 h-10 rounded-full bg-red-600/75 hover:bg-red-600/85"
                  >
                    <UserRoundX />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-row items-center justify-center w-full gap-2">
          <Button
            label="Voltar"
            onClick={handlePrev}
            className="w-1/2 rounded-e rounded-l bg-purple/75 text-light border-none p-2 px-6 py-3 hover:bg-purple transition ease-in duration-300"
          />
          <Button
            label="Próximo"
            onClick={handleNext}
            className="w-1/2 rounded-e rounded-l bg-purple/75 text-light border-none p-2  px-6 py-3 hover:bg-purple transition ease-in duration-300"
          />
        </div>
      </div>
    </SubContainer>
  )
}

export default Admin
