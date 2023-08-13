import axios from 'axios';

const register = async (requestBody) => {
    return axios.post('https://project1backend-da705e13e21b.herokuapp.com/users/register', requestBody);
};

export default register;