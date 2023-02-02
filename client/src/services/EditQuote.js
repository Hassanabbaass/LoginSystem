import axios from "axios";

export function editQuote(_id, newEdit){ 
    const apiURL=`/api/admin/editQuote/${_id}`;

    axios.put(apiURL, newEdit).then((res) => {
        console.log(res)
    }).catch((err) => {
        console.log(err)
    })
}