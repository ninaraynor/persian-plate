import axios from 'axios'

export const BASE_URL='https://persian-plate-backend-d5d0b8a28468.herokuapp.com/'

const Client = axios.create({baseURL: BASE_URL})

export default Client