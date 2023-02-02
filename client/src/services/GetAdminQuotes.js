import axios from "axios";

const apiURL = '/api/admin/getQuotes'

export const getAdminQuotes = async () => {
    return await axios.get(apiURL)
};