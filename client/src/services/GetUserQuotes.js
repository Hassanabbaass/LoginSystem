import axios from "axios";

const apiURL = '/api/user/getQuotes'

export const getUserQuotes = async () => {
    return await axios.get(apiURL)
};