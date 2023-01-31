import axios from "axios";

const apiURL = '/api/auth/current'

export const getCurrentUser = async () => {
    return await axios.get(apiURL)
};