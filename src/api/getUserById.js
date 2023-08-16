import axios from "axios";

export const getDetaildoctor = async (id) => {
    return axios.get(`https://project1backend-da705e13e21b.herokuapp.com/users/${id}`) // Thay 'URL_API' bằng đường dẫn tới API của bạn
        .then(response => {
            // const data = Object.values(response.data.data);
            const data = response.data.data;
            return data;
        })
        .catch(error => {
            console.log(error);
        });
}

