import axios from 'axios'

// TODO

const fetcher = () => {
	const inst = axios.create({
		baseURL: 'http://localhost:5000/api/',
	})

	inst.interceptors.request.use(function (config) { //перехватываю запрос/ответ до того как они будут обработаны
		// console.log(config);
		const token = localStorage.getItem('token');
		// console.log(token);
		config.headers.Authorization = token ? `Bearer ${token}` : '';
		return config;
	});
	return inst
};

export default fetcher()