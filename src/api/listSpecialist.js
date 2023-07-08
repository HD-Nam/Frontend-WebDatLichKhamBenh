import axios from "axios";

export const listSpecialist = async () => {
    return axios.get('https://project1backend-da705e13e21b.herokuapp.com/list/specialists') // Thay 'URL_API' bằng đường dẫn tới API của bạn
        .then(response => {
            const data = Object.values(response.data.data);
            return data;
        })
        .catch(error => {
            console.log(error);
        });
}

