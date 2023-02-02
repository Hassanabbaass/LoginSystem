import axios from "axios";

const apiURL = '/api/admin/addQuote'

export const addQuote = async (quoteInfo) => {
    return await axios.post(apiURL, quoteInfo)
};