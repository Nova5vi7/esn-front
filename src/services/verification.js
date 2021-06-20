import axios from 'axios';

// import { SIGNUP_URL } from '../constant/common';

const signUp = async file => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const result = await axios.post('https://www.google.com/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    return result.file;
  } catch (error) {
    console.error(error);
  }
};

export default signUp;
