import {LOGIN_URL} from '../constant/common';
import fetcher from '../helpers/fetcher';

const signIn = async data => {
    const result = await fetcher.post(LOGIN_URL, data);
    return result.data;
};

export default signIn;
