import axios from "axios";

const apiURL = '/api/auth/register'

export const registerUser = async (userInfo) => {
    return await axios.post(apiURL, userInfo)
};