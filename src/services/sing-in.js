import fetcher from '../helpers/fetcher';
import { LOGIN_URL } from '../constant/common';

const signIn = async data => {
  try {
    const result = await fetcher.post(LOGIN_URL, data);
    console.log(result.data);
    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export default signIn;
