import axios from "axios";

const apiURL = '/api/auth/login'

export const loginUser = async (userInfo) => {
    return await axios.post(apiURL, userInfo)
};