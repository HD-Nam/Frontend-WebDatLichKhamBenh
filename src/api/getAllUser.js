import { getAllUsers } from '../services/userService'

export const getAllUsersFromReact = async () => {
    try {
        const response = await getAllUsers();
        // console.log(response.data.user);
        const users = response.data.user;

        return users;
    } catch (error) {
        console.log(error);
    }


}