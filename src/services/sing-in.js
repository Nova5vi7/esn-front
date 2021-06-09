import fetcher from '../helpers/fetcher'
import { LOGIN_URL } from "../constant/common"


const signIn = async (data) => {
	try {

		const result = await fetcher.post(LOGIN_URL, data)
		console.log(result.data)
		// window.localStorage.setItem('token', result.data);
		return result.data

	} catch (e) {
		console.error(e)
	}

}

export default signIn;