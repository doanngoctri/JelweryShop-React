import axios from 'axios';
import * as url from '../Const/URL';
export default function Api(endpoint , method ,body){
    return axios({
        method : method,
        url : `${url.URL}/${endpoint}`,
        data : body
    }).catch(err => console.log(err))
}