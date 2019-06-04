import axios from 'axios';

//creates instance of axios client with preconfiged options
export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers:{
        Authorization: 'Client-ID 791300c9567b5e1dc569b2aeff67ca295c569c35768f80aeed1f4b7a2b8f3a28'
    } 
});