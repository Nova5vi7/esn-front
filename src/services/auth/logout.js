import fetcher from 'utils/fetcher';

const logout = async () => {
  const result = await fetcher.get('/auth/logout');
  return result.data;
};

export default logout;
