import axios from 'axios';

const updateUser = async data => {
    try {
        const result = await axios.post('https://www.google.com/', data.file, {
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
