import axios from 'axios'
import url from './url.js'

export const login = (data) =>
  axios.post(url.login, data)

export const storeItem = ({access_token}) => {
  localStorage.setItem('access_token', access_token)
}

export const clearItem = () => {
  localStorage.removeItem('access_token')
}
