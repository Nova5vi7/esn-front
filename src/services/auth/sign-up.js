import fetcher from '../../utils/fetcher';

const signUp = async data => {
  const result = await fetcher.post('/auth/sign-up', data);

  return result.data;
};

export default signUp;
