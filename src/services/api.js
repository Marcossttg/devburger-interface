import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://devburger-api-production.up.railway.app/',
})

