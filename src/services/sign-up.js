import fetcher from '../helpers/fetcher';
import { SIGNUP_URL } from '../constant/common';

const signUp = async data => {
  try {
    const result = await fetcher.post(SIGNUP_URL, data);
    console.log(result.data);
    window.localStorage.setItem('token', result.data);
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export default signUp;
