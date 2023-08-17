import axios from 'axios';
import Cookies from 'js-cookie';

const booking = async (requestBody, id) => {

    return axios.post(`https://project1backend-da705e13e21b.herokuapp.com/booking/booking-appointment/${id}`, requestBody, {
        headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
        }
    });
};

export default booking;