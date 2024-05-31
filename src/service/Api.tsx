import { IUser } from '@/interfaces'
import { service } from '@/service/index'

class Api {
  async SignUp({ name, email, password }: IUser) {
    return await service.post('/signup/user', { name, email, password })
  }

  async SignIn({ email, password }: IUser) {
    return await service.post('/signin/user', { email, password })
  }

  async Profile() {
    return await service.get('/profile', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
  }

  async ProfileUpdatedUser({ name, email }: IUser) {
    return await service.put(
      '/profile/user/updated',
      { name, email },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
  }

  async UpdatedUsers({ id, name, email }: IUser) {
    return await service.put(
      `/user/update/${id}`,
      { name, email },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
  }

  async GetUsers() {
    return await service.get('/users')
  }

  async EditUser({ id }: IUser) {
    return await service.get(`/user/${id}`)
  }

  async DeleteUser({ id }: IUser) {
    return await service.delete(`/user/delete/${id}`)
  }
}

export default new Api()
