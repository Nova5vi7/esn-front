import axios from 'axios'

const fetcher = () => {
	const inst = axios.create({
		baseURL: 'http://localhost:5000/api/',
	})

	inst.interceptors.request.use((config) => {
		const token = localStorage.getItem('token');
		config.headers.Authorization = token ? `Bearer ${token}` : '';
		return config;
	});
	return inst
};

export default fetcher()
