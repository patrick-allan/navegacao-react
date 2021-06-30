import axios from 'axios'

const Api = axios.create({
    baseURL: "http://10.1.110.87:8000"
})

export default Api;