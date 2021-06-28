import {LOGIN_URL} from '../constant/common';
import fetcher from '../helpers/fetcher';

const signIn = async data => {
    try {
        const result = await fetcher.post(LOGIN_URL, data);
        return result.data;
    } catch (error) {
        console.error(error);
    }
};

export default signIn;
