import { SIGNUP_URL } from '../constant/common';
import fetcher from '../helpers/fetcher';

const signUp = async data => {
  const result = await fetcher.post(SIGNUP_URL, data);
  window.localStorage.setItem('token', result.data.token);
  return result.data;
};

export default signUp;
