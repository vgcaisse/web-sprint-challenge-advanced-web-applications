// ✨ implement axiosWithAuth

import axios from "axios";
export default function AxiosWithAuth() {

    const token = window.localStorage.getItem('token')
    return axios.create({
        headers: {
            Authorization: token
        }
    })
}