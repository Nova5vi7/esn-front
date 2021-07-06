import { VERIFICATION_URL } from '../constant/common';
import fetcher from '../helpers/fetcher';

const updateUser = async data => {
  try {
    const result = await fetcher.put(VERIFICATION_URL, data, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return result.data;
  } catch (error) {
    console.error(error);
  }
};

export default updateUser;
