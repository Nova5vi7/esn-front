import {SIGNUP_URL} from '../constant/common';
import fetcher from '../helpers/fetcher';

const signUp = async data => {
    try {
        const result = await fetcher.post(SIGNUP_URL, data);
        window.localStorage.setItem('token', result.data);
        console.error(result.data);
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

export default signUp;
