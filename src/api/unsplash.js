import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization:
         'Client-ID 0feabe7e7f43553979079deacc740d2f642d8873b25d6996619487e07e92830d'
    }
})