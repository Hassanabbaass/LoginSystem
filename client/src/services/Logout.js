import axios from "axios";

const apiURL = '/api/auth/logout'

export const LogoutUser = async () => {
    return await axios.get(apiURL)
};