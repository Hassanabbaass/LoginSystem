import axios from "axios";

export function deleteQuote(_id){ 
    const apiURL=`/api/admin/deleteQuote/${_id}`;
    axios.delete(apiURL).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    })
}