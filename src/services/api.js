import axios from 'axios'

export const api = axios.create({
	baseURL: 'http://localhost:3001',
	// baseURL: 'https://devburger-api-production.up.railway.app/',
})

api.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');
	if (token) {
		config.headers.authorization = `Bearer ${token}`;
	}
	return config;
});

