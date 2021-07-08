import fetcher from 'utils/fetcher';

const updateUser = async data => {
  try {
    const result = await fetcher.put('/user/', data, {
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
