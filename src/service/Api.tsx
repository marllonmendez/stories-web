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

  async updateProfile({ name, email }: IUser) {
    return await service.put(
      '/profile/updated',
      { name, email },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    )
  }
}

export default new Api()
