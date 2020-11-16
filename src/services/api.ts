import axios from 'axios'

const api = axios.create({
  baseURL: 'https://mobcar-deploy.herokuapp.com',
})
api.interceptors.request.use(
  async config => {
    const token = localStorage.getItem('@MobCar:token')

    config.headers = {
      Authorization: `Bearer ${token}`,
    }
    return config
  },
  error => {
    Promise.reject(error)
  },
)

export default api
