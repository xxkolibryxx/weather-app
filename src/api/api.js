import axios from 'axios'

const api = axios.create({
  withCredentials: false, // for cookie
})

export default api
