import { IUser } from '@/interface/IUser'
import { service } from '@/service/index'

class Endpoints {
  async Signup({ name, email, password }: IUser) {
    return await service.post('/singup/user', { name, email, password })
  }

  async Signin({ email, password }: IUser) {
    return await service.post('/singin/user', { email, password })
  }
}

export default new Endpoints()
