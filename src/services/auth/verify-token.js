import fetcher from 'utils/fetcher';

const activationUser = async data => {
  try {
    const result = await fetcher.get('/auth/me', data);
    return result.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};

export default activationUser;
