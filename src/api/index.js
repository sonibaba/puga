import axios from 'axios'

const api = axios.create({
    // baseURL: 'http://10.110.69.201:5001/'
    baseURL: 'http://127.0.0.1:5001/'
})

export {api}
