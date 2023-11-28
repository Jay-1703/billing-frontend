import axios from "axios";
import { baseUrl } from '../Url';

export async function signIn(data) {
    return await axios({
        method: 'POST',
        url: baseUrl + 'signin',
        data: data,
    }).then(response => { 
        localStorage.setItem('session',JSON.stringify(response.data)); 
    })
        .catch(error => {
            if (error.response) {
                console.error('HTTP Error:', error.response.status);
            } else if (error.request) {
                console.error('Network Error:', error.request);
            } else {
                console.error('Error:', error.message);
            }
        });
}
