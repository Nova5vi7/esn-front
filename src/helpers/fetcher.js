import axios from 'axios'
import { BASE_URL } from "../constant/common"

const fetcher = () => {
	const inst = axios.create({
		baseURL: BASE_URL,
	})

	inst.interceptors.request.use((config) => {
		const token = localStorage.getItem('token');
		config.headers.Authorization = token ? `Bearer ${token}` : '';
		return config;
	});
	return inst
};

export default fetcher()
