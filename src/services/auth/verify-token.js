import fetcher from 'utils/fetcher';

const activationUser = async data => {
 try {
   const result = await fetcher.get('/auth/me', data);
   return result.data;
 }catch (err) {
   console.log(err)
 }
};

export default activationUser;