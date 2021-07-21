import fetcher from 'utils/fetcher';

const activationUser = async token =>
  await fetcher.get(`/user/activate/${token}`);

export default activationUser;
