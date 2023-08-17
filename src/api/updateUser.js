import axios from 'axios';
import Cookies from 'js-cookie';

const updateUser = async (requestBody, id) => {
    return axios.patch(`https://project1backend-da705e13e21b.herokuapp.com/users/${id}`, requestBody, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    });
};

export default updateUser;