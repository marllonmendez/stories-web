import axios from 'axios'
import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: 'http://localhost:3333',
})

service.interceptors.request.use(async (config) => {
  const token = getToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export { service }
