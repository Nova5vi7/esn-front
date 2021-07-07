import fetcher from '../../utils/fetcher';

const signIn = async data => {
  const result = await fetcher.post('/auth/sign-in', data);
  return result.data;
};

export default signIn;
