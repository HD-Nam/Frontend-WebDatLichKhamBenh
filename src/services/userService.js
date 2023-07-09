import axios from '../axios'
const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('https://project1backend-da705e13e21b.herokuapp.com/users/login', { email: userEmail, password: userPassword });
}

const getAllUsers = () => {
    return axios.get(`https://project1backend-da705e13e21b.herokuapp.com/management/get-all-user`)
}

const createNewUserService = (data) => {
    console.log('check data from service : ', data)
    return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}

export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService }
